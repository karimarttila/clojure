(ns backend.bemain)

(comment
  (+ 1 2)
  ;;=> 3
  (print "Hello from backend")
  ;;=> nil

  ;; Testing that snitch works in the backend code.
  (require '[snitch.core :refer [*let]])
  (*let [x 1 
        y 2]
        (+ x y))
  )