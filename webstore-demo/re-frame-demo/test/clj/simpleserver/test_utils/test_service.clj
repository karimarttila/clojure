(ns simpleserver.test-utils.test-service
  "Test data manipulations. Just using conds here instead of protocols."
  )

(defmulti init-domain :active-db)

(defmethod init-domain :default [env]
  (throw (UnsupportedOperationException. (str "Unknown data store: " (:active-db env)))))

(defmulti get-sessions :active-db)

(defmethod get-sessions :default [env]
  (throw (UnsupportedOperationException. (str "Unknown data store: " (:active-db env)))))

(defmulti reset-sessions! :active-db)

(defmethod reset-sessions! :default [env]
  (throw (UnsupportedOperationException. (str "Unknown data store: " (:active-db env)))))

(defmulti get-users :active-db)

(defmethod get-users :default [env]
  (throw (UnsupportedOperationException. (str "Unknown data store: " (:active-db env)))))

(defmulti reset-users! :active-db)

(defmethod reset-users! :default [env]
  (throw (UnsupportedOperationException. (str "Unknown data store: " (:active-db env)))))

(comment
  (simpleserver.test-config/go)
  (simpleserver.test-config/test-env)
  (simpleserver.test-config/halt)
  )
