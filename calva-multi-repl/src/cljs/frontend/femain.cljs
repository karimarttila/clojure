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
  )