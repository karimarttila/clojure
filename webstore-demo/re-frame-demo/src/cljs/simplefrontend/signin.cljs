(ns simplefrontend.signin
  (:require
    [re-frame.core :as re-frame]
    [reagent.core :as r]
    [simplefrontend.util :as sf-util]
    [day8.re-frame.http-fx]
    [ajax.core :as ajax]
    ))

(defn save! [a k]
  #(swap! a assoc k (-> % .-target .-value)))

(defn input
  "Input field component for e.g. First name, Last name, Email address and Password."
  [label k type state]
  [:div
   [:label.sf-label label]
   [:input.sf-input {
                     :id (name k)
                     :name (name k)
                     :type type
                     :value (k @state)
                     :on-change (save! state k)}]])

(defn valid? [[_ v]]
  (and (string? v) (not (empty? v))))

#_(re-frame/reg-sub
    ::submit-result
    (fn [db]
      (get-in db [:signin :result])))

(re-frame/reg-event-db
  ::signin-ok
  (fn [db [_ res-body]]
    (let [data (get res-body :data)]
      (assoc-in db [:signin :result] {:ret :OK :data data}))))

(re-frame/reg-event-db
  ::signin-failed
  (fn [db [_ res-body]]
    (let [msg (get-in res-body [:response :msg])]
      (assoc-in db [:signin :res-body] {:ret :failed :msg msg :res-body res-body}))))

(re-frame/reg-event-fx
  ::signin-user
  (fn [{:keys [db]} [_ user-data]]
    (js/console.log (sf-util/pprint "user-data" user-data))
    #_(js/alert (str "::signin-user, user-data: " user-data))
    {:http-xhrio {:method :post
                  :uri (str "/api/signin")
                  :params user-data
                  :format (ajax/json-request-format)
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success [::signin-ok]
                  :on-failure [::signin-failed]}
     :db db}))

(defn signin-page
  "Sign-in view."
  []
  (let [user-data (r/atom {:first-name "" :last-name "" :email "" :password ""})
        submit-result nil ; TODO @(re-frame/subscribe [::submit-result])
        ]
    (fn []
      [:div
       [:h3 "Sign-in"]
       [:div
        [:form
         (input "First name: " :first-name "text" user-data)
         (input "Last name: " :last-name "text" user-data)
         (input "Email: " :email "text" user-data)
         (input "Password: " :password "password" user-data)
         (if (and (not submit-result) (every? valid? @user-data))
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
          "Go to home"]]
        (sf-util/debug-panel {:user-data user-data
                              :submit-result submit-result})]])))

(comment
  @re-frame.db/app-db
  (swap! re-frame.db/app-db assoc :debug (not (:debug @re-frame.db/app-db)))
  )
