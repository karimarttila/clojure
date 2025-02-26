(ns frontend.util)


(def debug? ^boolean goog.DEBUG)


(defn clog
  "Javascript console logger helper."
  ([msg] (clog msg nil))
  ([msg data]
   (let [jdata (js/JSON.stringify (clj->js data))
         buf (if data
               (str msg ": " jdata)
               msg)]
     (if debug?
       (js/console.log buf)))))



(comment

  
  (js/console.log "I am connected to the browser!")
  (+ 1 1)
  ;(js/alert "I am connected to the browser!")
  
  )