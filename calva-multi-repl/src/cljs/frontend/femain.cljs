(ns frontend.femain)

(defn init! []
  (js/console.log "Hello, shadow-cljs!"))

(defn ^:dev/after-load reload []
  (js/console.log "Code reloaded!"))

(comment
  (+ 3 4)
  ;;=> 7
  (print "Hello from frontend")
  ;;=> nil

  ;; Testing that snitch works in the frontend code.
  (require '[snitch.core :refer [*let]])
  (*let [x 3 
        y 4]
        (+ x y))
  )