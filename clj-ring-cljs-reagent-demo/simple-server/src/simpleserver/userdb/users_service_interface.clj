(ns simpleserver.userdb.users-service-interface)


(defprotocol UsersServiceInterface
  (email-already-exists? [env email]
    "True if email already exists in the user db, false otherwise")
  (add-new-user [env email first-name last-name password]
    "Adds a new user to the user db")
  (credentials-ok? [env email password]
    "True if credentials are ok, false otherwise")
  (get-users [env]
    "Returns all users from the user db - used in testing")
  )

