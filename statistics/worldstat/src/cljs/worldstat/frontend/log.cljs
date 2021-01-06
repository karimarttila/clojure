(ns worldstat.frontend.log)

(defn clog
  "Javascript console logger helper."
  ([msg] (clog msg nil))
  ([msg data]
   (let [buf (if data
               (str msg ": " data)
               msg)]
     (js/console.log buf))))
