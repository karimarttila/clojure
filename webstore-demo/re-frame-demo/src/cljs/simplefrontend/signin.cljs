(ns simplefrontend.signin
  (:require
    [re-frame.core :as re-frame]
    [reagent.core :as r]
    [day8.re-frame.http-fx]
    [ajax.core :as ajax]
    [simplefrontend.http :as sf-http]
    [simplefrontend.util :as sf-util]))

(defn empty-user []
  {:first-name "" :last-name "" :email "" :password ""})

(re-frame/reg-event-db
  ::signin-ret-ok
  (fn [db [_ res-body]]
    #_(sf-util/clog "reg-event-db ok: " res-body)
    (assoc-in db [:signin :response] {:ret :ok
                                      :msg (str "Email address registered: " (:email res-body))})))

(re-frame/reg-event-db
  ::signin-ret-failed
  (fn [db [_ res-body]]
    #_(sf-util/clog "reg-event-db failed" db)
    (assoc-in db [:signin :response] {:ret :failed
                                      :msg (get-in res-body [:response :msg])})))

(re-frame/reg-event-db
  ::close-notification
  (fn [db [_ e]]
    (sf-util/clog "reg-event-db close-notification, db: " db)
    (sf-util/clog "reg-event-db close-notification, e: " e)
    (assoc-in db [:signin :response] nil)))

(re-frame/reg-sub
  ::signin-response
  (fn [db]
    #_(sf-util/clog "reg-sub" db)
    (:response (:signin db))))

(re-frame/reg-event-fx
  ::signin-user
  (fn [{:keys [db]} [_ user-data]]
    (sf-util/clog "user-data" user-data)
    (sf-http/post db "/api/signin" user-data ::signin-ret-ok ::signin-ret-failed)))

(defn signin-page
  "Sign-in view."
  []
  ; NOTE: The user data atom needs to be here and not inside the rendering function
  ; or you create a new atom every time the component re-renders.
  (let [user-data (r/atom (empty-user))]
    (fn []
      ; NOTE: The re-frame subscription needs to be inside the rendering function or the watch
      ; is not registered to the rendering function.
      (let [{:keys [ret msg] :as r-body} @(re-frame/subscribe [::signin-response])
            notify-div (case ret
                         :ok :div.sf-ok-notify
                         :failed :div.sf-error-notify
                         nil)]
        [:div
         [:h3 "Sign-in"]
         [:div.sf-sign-container
          [:div.sf-sign-form
           [:form
            (sf-util/input "First name: " :first-name "text" user-data)
            (sf-util/input "Last name: " :last-name "text" user-data)
            (sf-util/input "Email: " :email "text" user-data)
            (sf-util/input "Password: " :password "password" user-data)
            (if (and (not ret) (every? sf-util/valid? @user-data))
              [:div
               [:button.sf-submit-button
                {;:type :primary
                 :on-click (fn [e]
                             (.preventDefault e)
                             (re-frame/dispatch [::signin-user @user-data]))
                 }
                "Submit"]])]
           [:div
            [:button.sf-go-to-home-button
             {:on-click #(re-frame/dispatch [:simplefrontend.main/navigate :simplefrontend.main/home])}
             "Go to home"]
            ]
           ]
          (if ret
            [:div.sf-sign-inner-notification
             [notify-div
              [:span.sf-closebtn {:on-click (fn [e]
                                              (.preventDefault e)
                                              (re-frame/dispatch [::close-notification]))}
               "×"]
              msg
              ]])
          ]

         (sf-util/debug-panel {:user-data user-data
                               :ret ret
                               :msg msg
                               :r-body r-body})]))))

(comment

  (def foo (re-frame/subscribe [::signin-response]))
  foo

  @re-frame.db/app-db

  (swap! re-frame.db/app-db assoc-in [:signin :response] {:ret :jee :msg "oh, fuck"})
  @re-frame.db/app-db
  (swap! re-frame.db/app-db assoc :debug (not (:debug @re-frame.db/app-db)))
  )
