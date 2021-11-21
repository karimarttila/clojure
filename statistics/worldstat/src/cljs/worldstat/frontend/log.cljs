(ns worldstat.frontend.log)

;(def debug? ^boolean goog.DEBUG)
(def debug? true)

(defn clog
  "Javascript console logger helper."
  ([msg] (clog msg nil))
  ([msg data]
   (let [buf (if data
               (str msg ": " data)
               msg)]
     (when debug?
       (js/console.log buf)))))

