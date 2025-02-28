(ns frontend.config)

(defonce mode (atom {:mode :NOT-CONFIGURE-YET}))


; See: https://shadow-cljs.github.io/docs/UsersGuide.html
(defn set-mode! 
  {:shadow.build/stage :configure}  
  [build-state & args]
  (prn "Build mode: " (:shadow.build/mode build-state))
  (swap! mode assoc :mode (:shadow.build/mode build-state))
  build-state)



(comment
  @mode
  (swap! mode assoc :mode :release)
  (set-mode! {:shadow.build/mode :dev})
  )


