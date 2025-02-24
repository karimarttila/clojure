(ns tasks
  (:require
   [babashka.process :as process])
  )


(defn read-nrepl-port [file]
    (try
        (Integer/parseInt (slurp file))
        (catch Exception e
            (println "Error reading nREPL port from file:" (.getMessage e))
            (System/exit 1))))

(defn run-frontend-command [key user-file]
  (if-let [cmd (key (read-string (slurp user-file)))]
    (let [_  (println "original cmd: " cmd)
          port ( read-nrepl-port ".nrepl-port")
          _ (println "port: " port)
          [cmd-str] cmd
          new-cmd [(str cmd-str " " port)]
          _ (println "new-cmd with port: " new-cmd)
          ]
      (apply process/shell new-cmd))
    (do (println "Missing key: " key " in file: " user-file)
        (System/exit 1))))

(defn run-command [key user-file]
  (if-let [cmd (key (read-string (slurp user-file)))]
    (let [_  (println "cmd: " cmd)]
      (apply process/shell cmd))
    (do (println "Missing key: " key " in file: " user-file)
        (System/exit 1))))

(comment 

  (let [[cmd-str] old-cmd
        new-cmd (str cmd-str " " 9)]
    [new-cmd])
  
    
  (run-command :shadow-run-dev-command ".user.edn")

 ; (add-lib 'babashka/process)
  
  
  )

