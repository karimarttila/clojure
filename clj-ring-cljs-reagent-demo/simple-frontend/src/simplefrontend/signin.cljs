(ns simplefrontend.signin
  (:require
    [reagent.core :as r]
    [ajax.core :as a-core]
    [simplefrontend.reagent-wrapper :as sf-rw]
    [simplefrontend.components :as sf-components]
    [simplefrontend.config :as sf-config]))


;; ***** Namespace vars. *****
(def my-error-msg-atom (r/atom nil))
(def my-success-msg-atom (r/atom nil))
;; For debugging
(def my-response-atom (r/atom nil))


(defn reset-page
  "Reset page atoms when coming here from home page."
  []
  (reset! my-response-atom nil)
  (reset! my-error-msg-atom nil)
  (reset! my-success-msg-atom nil))


(defn -handler
  "The success (http status 200) handler."
  [response]
  (.log js/console (str "ENTER -handler, response: " response))
  (do
    (reset! my-response-atom response)
    (reset! my-success-msg-atom "Cool, sign-in successful! You can now proceed to Web store home page to login using your new credentials!")
    (reset! my-error-msg-atom nil)))


(defn -error-handler
  "The error (http status not 200) handler."
  [response]
  (.log js/console (str "ENTER -error-handler, response: " response))
  (let [error-msg ((:response response) "msg")]
    (do
      (reset! my-response-atom response)
      (reset! my-error-msg-atom error-msg)
      (reset! my-success-msg-atom nil))))


(defn -submit-form
  "Send form data to server using POST."
  [first-name last-name email password]
  (.log js/console (str "ENTER submit-form, email: " email))
  (let [url (str (sf-config/get-base-url) "/signin")
        data {:first-name first-name
              :last-name  last-name
              :email      email
              :password   password}]
    (let [response (a-core/POST url
                                {:format          :json
                                 :params          data
                                 :response-format :json
                                 :headers         {"Accept"       "application/json"
                                                   "Content-Type" "application/json"}

                                 :handler         -handler
                                 :error-handler   -error-handler})]


      (.log js/console (str "Response: " response)))))


(defn signin-page
  "The actual page function called by simplefrontend.core."
  []
  (.log js/console (str "ENTER signin-page"))
  (let [first-name-atom (r/atom nil)
        last-name-atom (r/atom nil)
        email-address-atom (r/atom nil)
        password-atom (r/atom nil)]

    (fn []
      [:div
       [:h1 "Sign-in"]
       [:form
        [sf-rw/grid
         [:div [(sf-components/input "First name: "
                                     "first-name"
                                     "text"
                                     first-name-atom)]]
         [:div [(sf-components/input "Last name: "
                                     "last-name"
                                     "text"
                                     last-name-atom)]]
         [:div [(sf-components/input "Email address: "
                                     "email-address"
                                     "text"
                                     email-address-atom)]]
         [:div [(sf-components/input "Password: "
                                     "password"
                                     "text"
                                     password-atom)]]]]
       [:div [:input {:type     "button" :value "Submit"
                      :on-click #(-submit-form @first-name-atom
                                               @last-name-atom
                                               @email-address-atom
                                               @password-atom)}]]
       [sf-rw/grid
        (if (not (nil? @my-error-msg-atom))
          [(sf-components/msg-field "Error: " "error" "text" "red" @my-error-msg-atom)])
        (if (not (nil? @my-success-msg-atom))
          [(sf-components/msg-field "Success: " "success" "text" "greenyellow" @my-success-msg-atom)])]

       [:div [:a {:href "#/"} "Back to Web Store Home Page"]]])))


