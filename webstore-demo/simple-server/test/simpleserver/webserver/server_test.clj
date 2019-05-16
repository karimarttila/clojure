(ns simpleserver.webserver.server-test
  (:require [clojure.test :refer :all]
            [clojure.tools.logging :as log]
            ))


; TODO: Remove later
(deftest dummy-test
  (log/debug "ENTER dummy-test")
  (testing "Dummy"
    (let [ret 1]
      (is (= ret 1))
      )))
