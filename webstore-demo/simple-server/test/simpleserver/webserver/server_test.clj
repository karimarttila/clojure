(ns simpleserver.webserver.server-test
  (:require [clojure.test :refer :all]
            [clojure.tools.logging :as log]
            [clj-http.client :as http-client]
            [simpleserver.util.config :as ss-config]
            [simpleserver.webserver.server :as ss-ws]
            [simpleserver.user.user-interface :as ss-user-i]
            [simpleserver.user.user-config :as ss-user-config]
            )
  (:import (clojure.lang ExceptionInfo)))


(defn webserver-test-fixture
  [f]
  (do
    (log/debug "ENTER webserver-test-fixture")
    (ss-user-i/-reset-users! ss-user-config/user)
    (ss-ws/start-web-server (get-in ss-config/config [:server :port]))
    (f)
    (ss-ws/stop-web-server)
    (log/debug "EXIT webserver-test-fixture")))

; Register test fixtures.
(use-fixtures :each webserver-test-fixture)

(defn call-api [path verb body]
  (let [my-port (get-in ss-config/config [:server :port])
        my-fn (cond
                (= verb "get") http-client/get
                (= verb "post") http-client/post)]
    (try
      (select-keys
        (my-fn (str "http://localhost:" my-port "/" path) {:as :json :form-params body :content-type :json :throw-exceptions  false :coerce :always}) [:status :body])
      )))

(deftest info-test
  (log/debug "ENTER info-test")
  (testing "/info"
    (let [ret (call-api "info" "get" nil)]
      (is (= (ret :status) 200))
      (is (= (ret :body) {:info "index.html => Info in HTML format"})))))


(deftest signin-test
  (log/debug "ENTER signin-test")
  (testing "/signin"
    ; First time should create the user since the email does not yet exist.
    (let [test-body {:first-name "mikko" :last-name "mikkonen" :password "salainen" :email "mikko.mikkonen@foo.com"}]
      (let [ret (call-api "signin" "post" test-body)]
        (is (= (ret :status) 200))
        (is (= (ret :body) {:email "mikko.mikkonen@foo.com" :ret "ok"})))
      ; Second time should fail since the email already exists.
      (let [ret (call-api "signin" "post" test-body)]
        (is (= (ret :status) 400))
        (is (= (ret :body) {:email "mikko.mikkonen@foo.com" :ret "failed" :msg "Email already exists"}))))))

