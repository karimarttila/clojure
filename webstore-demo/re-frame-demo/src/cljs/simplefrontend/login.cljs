(ns simplefrontend.login
  (:require
    [re-frame.core :as re-frame]
    [reagent.core :as r]
    [day8.re-frame.http-fx]
    [simplefrontend.http :as sf-http]
    [simplefrontend.state :as sf-state]
    [simplefrontend.util :as sf-util]))

(defn empty-creds []
  {:email "" :password ""})

;; WORK IN PROGRESS *******************************************

(re-frame/reg-event-db
  ::login-ret-ok
  (fn [db [_ res-body]]
    (sf-util/clog "reg-event-db ok: " res-body)
    (-> db
        (assoc-in [:login :response] {:ret :ok :msg (:msg res-body)})
        (assoc-in [:jwt] (:json-web-token res-body)))))

(re-frame/reg-event-db
  ::login-ret-failed
  (fn [db [_ res-body]]
    (sf-util/clog "reg-event-db failed" db)
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
    (sf-util/clog "reg-sub" db)
    (:response (:login db))))

(re-frame/reg-event-fx
  ::login-user
  (fn [{:keys [db]} [_ user-data]]
    (sf-util/clog "login-user, user-data" user-data)
    (sf-http/http-post db "/api/login" user-data ::login-ret-ok ::login-ret-failed)))

(defn login-page
  "Login view."
  []
  ; NOTE: The login data atom needs to be here and not inside the rendering function
  ; or you create a new atom every time the component re-renders.
  (let [login-data (r/atom (empty-creds))]
    (fn []
      ; NOTE: The re-frame subscription needs to be inside the rendering function or the watch
      ; is not registered to the rendering function.
      (let [_ (sf-util/clog "ENTER login-page")
            {:keys [ret msg] :as r-body} @(re-frame/subscribe [::login-response])
            notify-div (case ret
                         :ok :div.sf-ok-notify
                         :failed :div.sf-error-notify
                         nil)]
        [:div
         [:h3 "Login-in"]
         [:div.sf-page-container
          [:div.sf-page-form
           [:form
            (sf-util/input "Email: " :email "text" login-data)
            (sf-util/input "Password: " :password "password" login-data)
            (if (and (not ret) (every? sf-util/valid? @login-data))
              [:div
               [:button.sf-basic-button
                {;:type :primary
                 :on-click (fn [e]
                             (.preventDefault e)
                             (re-frame/dispatch [::login-user @login-data]))}
                "Submit"]])]
           (if-not ret
             [:div
              [:button.sf-basic-button
               {:on-click (fn [e]
                            (.preventDefault e)
                            (re-frame/dispatch [::sf-state/navigate ::sf-state/home]))}
               "Go to home"]])]
          (if ret
            [:div.sf-page-inner-notification
             [notify-div
              [:span.sf-closebtn {:on-click (fn [e]
                                              (.preventDefault e)
                                              (re-frame/dispatch [::close-notification]))}
               "×"]
              msg]])]

         (sf-util/debug-panel {:login-data login-data
                               :ret ret
                               :msg msg
                               :r-body r-body})]))))

