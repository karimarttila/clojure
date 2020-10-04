(ns simplefrontend.signin
  (:require
    [re-frame.core :as re-frame]
    [reagent.core :as r]
    [simplefrontend.state :as sf-state]
    [simplefrontend.util :as sf-util]
    ))

(defn save! [a k]
  (let [_ (js/console.log (str "save!, k: " k))]
    #(swap! a assoc k (-> % .-target .-value))))

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

; TODO: Work-in-progress
(def controller
  {:parameters {:path [:signin-post-TODO]}
   :start (fn [{{:keys [user-data]} :path}]
            (re-frame/dispatch [:http {:method :post
                                       :uri (str "/api/signin" user-data)
                                       :on-success [::sf-state/signin-ok user-data]}]))})


(defn valid? [[_ v]]
  (and (string? v) (not (empty? v))))

(defn signin-page
  "Sign-in view."
  []
  (let [user-data (r/atom {:first-name "" :last-name "" :email "" :password ""})]
    (fn []
      [:div
       [:h3 "Sign-in"]
       [:div
        [:form
         (input "First name: " :first-name "text" user-data)
         (input "Last name: " :last-name "text" user-data)
         (input "Email: " :email "text" user-data)
         (input "Password: " :password "password" user-data)
         (if (every? valid? @user-data)
           [:div
            [:button.sf-submit-button
             {:on-click #(re-frame/dispatch [:simplefrontend.main/navigate ::sf-state/signin-post])}
             "Submit"]])]
        [:div
         [:button.sf-go-to-home-button
          {:on-click #(re-frame/dispatch [:simplefrontend.main/navigate :simplefrontend.main/home])}
          "Go to home"]]
        (sf-util/debug-panel {:user-data user-data})]])))

(comment
  @re-frame.db/app-db
  (swap! re-frame.db/app-db assoc :debug (not (:debug @re-frame.db/app-db)))

  )
