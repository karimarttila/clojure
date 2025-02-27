(ns preload
  (:require
   [shadow.cljs.devtools.client.browser]
   ))


(defonce init-repl!
  (let [eval-fn shadow.cljs.devtools.client.browser/global-eval]
    (set! shadow.cljs.devtools.client.browser/global-eval
          (fn [s]
            (let [_ (set! (.-eval-in-repl? js/globalThis) true)
                  ret (eval-fn s)
                  _ (set! (.-eval-in-repl? js/globalThis) false)]
              ret)))))
