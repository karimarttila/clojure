(ns simpleserver.userdb.users
  (:require
    [clojure.tools.logging :as log]))

; A simple fixed user database for demonstration purposes.
(def users (atom
             {1 {:userid          "1",
                 :email           "kari.marttila@tieto.com",
                 :first-name      "Kari",
                 :last-name       "Marttila"
                 :hashed-password "1340477763"}
              2 {:userid          "2",
                 :email           "timo.tapanainen@tieto.com",
                 :first-name      "Timo",
                 :last-name       "Tapanainen"
                 :hashed-password "-36072128"}
              3 {:userid          "3",
                 :email           "erkka.tuomela@tieto.com",
                 :first-name      "Erkka",
                 :last-name       "Tuomela"
                 :hashed-password "1655387230"}}))

(defn -email-already-exists
  [email]
  (some
    (fn [item]
      (= (:email item) email))
    (vals @users)))

(defn add-new-user
  [email first-name last-name password]
  (log/trace (str "ENTER add-new-user, email: " email))
  (let [already-exists (-email-already-exists email)]
    (if already-exists
      (do
        (log/trace (str "Failure: email already exists: " email))
        {:email email, :ret :failed :msg "Email already exists"})
      (do
        (let [new-id (inc (apply max (keys @users)))]
          (swap! users assoc
                 new-id
                 {:userid          (str new-id),
                  :email           email,
                  :first-name      first-name,
                  :last-name       last-name,
                  :hashed-password (str (hash password))}))
        {:email email, :ret :ok})
      )
    )
  )