(ns tasks
  (:require
   [babashka.process :as process]))


(defn run-command [key user-file]
  (if-let [cmd (key (read-string (slurp user-file)))]
    (let [_  (println "cmd: " cmd)]
      (apply process/shell cmd))
    (do (println "Missing key: " key " in file: " user-file)
        (System/exit 1))))


(comment
  (run-command :not-found ".user.edn")
 ; (add-lib 'babashka/process)
  )
