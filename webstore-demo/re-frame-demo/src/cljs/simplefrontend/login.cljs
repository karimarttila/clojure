(ns simplefrontend.login
  (:require
    [re-frame.core :as re-frame]
    [reagent.core :as r]
    [day8.re-frame.http-fx]
    [ajax.core :as ajax]
    [simplefrontend.util :as sf-util]))

(defn empty-creds []
  {:email "" :password ""})

;; WORK IN PROGRESS *******************************************

(defn login-page
  "Login view."
  []
  ; NOTE: The user data atom needs to be here and not inside the rendering function
  ; or you create a new atom every time the component re-renders.
  (let [login-data (r/atom (empty-creds))]
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
            (sf-util/input "Email: " :email "text" login-data)
            (sf-util/input "Password: " :password "password" login-data)
            (if (and (not ret) (every? sf-util/valid? @login-data))
              [:div
               [:button.sf-submit-button
                {;:type :primary
                 :on-click (fn [e]
                             (.preventDefault e)
                             (re-frame/dispatch [::signin-user @login-data]))
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

         (sf-util/debug-panel {:user-data login-data
                               :ret ret
                               :msg msg
                               :r-body r-body})]))))

