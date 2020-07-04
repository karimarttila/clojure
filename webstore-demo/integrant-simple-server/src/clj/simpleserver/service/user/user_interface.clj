(ns simpleserver.service.user.user-interface
  "User interface. Use only through user service.")

(defprotocol UserInterface
  (email-already-exists? [this env email]
    "True if email already exists in the user db, false otherwise")
  (add-new-user [this env email first-name last-name password]
    "Adds a new user to the user db")
  (credentials-ok? [this env email password]
    "True if credentials are ok, false otherwise")
  (-get-users [this env]
    "Returns all users from the user db - used in testing")
  (-reset-users! [this env]
    "Resets all users to initial state - used in testing.")
  )
