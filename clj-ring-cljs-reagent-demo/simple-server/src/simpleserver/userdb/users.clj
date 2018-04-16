(ns simpleserver.userdb.users
  (:require
    [clojure.tools.logging :as log]))

; A simple dynamic user database for demonstration purposes.
(def users (atom
             {1 {:userid          "1",
                 :email           "kari.karttinen@foo.com",
                 :first-name      "Kari",
                 :last-name       "Karttinen"
                 :hashed-password "1340477763"}
              2 {:userid          "2",
                 :email           "timo.tillinen@foo.com",
                 :first-name      "Timo",
                 :last-name       "Tillinen"
                 :hashed-password "-36072128"}
              3 {:userid          "3",
                 :email           "erkka.erkkila@foo.com",
                 :first-name      "Erkka",
                 :last-name       "Erkkilä"
                 :hashed-password "1655387230"}}))

(defn -email-already-exists?
  "Checks if the email address already exists in the database."
  [email]
  (some
    (fn [user]
      (= (:email user) email))
    (vals @users)))

(defn add-new-user
  "Adds new user to database."
  [email first-name last-name password]
  (log/trace (str "ENTER add-new-user, email: " email))
  (let [already-exists (-email-already-exists? email)]
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
        {:email email, :ret :ok}))))





(defn credentials-ok?
  "Checks given credentials"
  [email password]
  (some
   (fn [user]
     (and
       (= (:email user) email)
       (= (:hashed-password user) (str (hash password)))))

   (vals @users)))

