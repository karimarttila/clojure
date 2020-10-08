(ns simplefrontend.login
  (:require
    [re-frame.core :as re-frame]
    [reagent.core :as r]
    [day8.re-frame.http-fx]
    [ajax.core :as ajax]
    [simplefrontend.http :as sf-http]
    [simplefrontend.util :as sf-util]))

(defn empty-creds []
  {:email "" :password ""})

;; WORK IN PROGRESS *******************************************

(re-frame/reg-event-db
  ::login-ret-ok
  (fn [db [_ res-body]]
    #_(sf-util/clog "reg-event-db ok: " res-body)
    (assoc-in db [:login :response] {:ret :ok
                                      :msg (str "Email logged in: " (:email res-body))})))

(re-frame/reg-event-db
  ::login-ret-failed
  (fn [db [_ res-body]]
    #_(sf-util/clog "reg-event-db failed" db)
    (assoc-in db [:login :response] {:ret :failed
                                      :msg (get-in res-body [:response :msg])})))

(re-frame/reg-event-db
  ::close-notification
  (fn [db [_ e]]
    (sf-util/clog "reg-event-db close-notification, db: " db)
    (sf-util/clog "reg-event-db close-notification, e: " e)
    (assoc-in db [:login :response] nil)))

(re-frame/reg-sub
  ::login-response
  (fn [db]
    #_(sf-util/clog "reg-sub" db)
    (:response (:login db))))

(re-frame/reg-event-fx
  ::login-user
  (fn [{:keys [db]} [_ user-data]]
    (sf-util/clog "user-data" user-data)
    (sf-http/post db "/api/login" user-data ::login-ret-ok ::login-ret-failed)))

(defn login-page
  "Login view."
  []
  ; NOTE: The user data atom needs to be here and not inside the rendering function
  ; or you create a new atom every time the component re-renders.
  (let [login-data (r/atom (empty-creds))]
    (fn []
      ; NOTE: The re-frame subscription needs to be inside the rendering function or the watch
      ; is not registered to the rendering function.
      (let [{:keys [ret msg] :as r-body} @(re-frame/subscribe [::login-response])
            notify-div (case ret
                         :ok :div.sf-ok-notify
                         :failed :div.sf-error-notify
                         nil)]
        [:div
         [:h3 "Login-in"]
         [:div.sf-sign-container
          [:div.sf-sign-form
           [:form
            (sf-util/input "Email: " :email "text" login-data)
            (sf-util/input "Password: " :password "password" login-data)
            (if (and (not ret) (every? sf-util/valid? @login-data))
              [:div
               [:button.sf-submit-button
                {;:type :primary
                 :on-click (fn [e]
                             (.preventDefault e)
                             (re-frame/dispatch [::login-user @login-data]))
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

         (sf-util/debug-panel {:login-data login-data
                               :ret ret
                               :msg msg
                               :r-body r-body})]))))

