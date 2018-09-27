(ns simpleserver.testutils.users-util
  (:require [clojure.test :refer :all]
            [simpleserver.userdb.users :as my-user-db]))


(defn initialize-userdb
  []
  (let [test-users (atom
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
                 :hashed-password "1655387230"}})
        ]
    (reset! my-user-db/users @test-users)))
