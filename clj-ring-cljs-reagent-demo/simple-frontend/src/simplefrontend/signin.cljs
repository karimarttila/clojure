(ns simplefrontend.signin
  (:require
    [reagent.core :as r]
    [ajax.core :as a-core]
    ))


(defn -input
  [label name type my-atom]
  (fn []
    [:div
     [:label label]
     [:input {:id        name
              :name      name
              :type      type
              :value     @my-atom
              :on-change #(reset! my-atom (-> % .-target .-value))
              }]]))


(defn -handler
  []
  (.log js/console (str "In -handler"))
  )


(defn -submit-form
  [first-name last-name, email-address password]
  (.log js/console (str "In submit-form, first-name: " first-name))
  (let [host (:host simplefrontend.core/backend-host-config)
        port (:port simplefrontend.core/backend-host-config)
        url (str "http://" host ":" port "/signin")
        data {:first-name first-name
              :last-name  last-name
              :email      email-address
              :password   password}]
    (let [response (a-core/POST url
                                {:format          :json
                                 :params          data
                                 :response-format :json
                                 :headers         {"Accept"       "application/json"
                                                   "Content-Type" "application/json"
                                                   }
                                 :handler         -handler
                                 ;:error-handler (fn [r] (prn r))
                                 }
                                )]
      (.log js/console (str "Response: " response)))
    ))

(defn signin-page []
  (let [first-name-atom (r/atom nil)
        last-name-atom (r/atom nil)
        email-address-atom (r/atom nil)
        password-atom (r/atom nil)]
    (fn []
      [:div
       [:h1 "Sign-in"]
       [:form
        [:div [(-input "First name: "
                       "first-name"
                       "text"
                       first-name-atom)]]
        [:div [(-input "Last name: "
                       "last-name"
                       "text"
                       last-name-atom)]]
        [:div [(-input "Email address: "
                       "email-address"
                       "text"
                       email-address-atom)]]
        [:div [(-input "Password: "
                       "password"
                       "text"
                       password-atom)]]]

       [:div [:input {:type     "button" :value "Submit"
                      :on-click #(-submit-form @first-name-atom
                                               @last-name-atom
                                               @email-address-atom
                                               @password-atom)
                      }]]

       [:div [:a {:href "#/"} "Back to Web Store Home Page"]]])))


