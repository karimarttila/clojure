(ns backendinit
  (:require [integrant.repl :refer [clear go halt prep init reset reset-all]]
            [integrant.repl.state :as state]
            [clojure.java.io :as io]))

(def target-dev-public-dir "target/dev/public/assets")

(defn create-directory []
  (let [dir (io/file target-dev-public-dir)]
    (when-not (.exists dir)
      (.mkdirs dir))))


(defn copy-all-assets []
  (let [source-dir (io/file "public/assets")
        target-dir (io/file target-dev-public-dir)]
    (doseq [file (file-seq source-dir)]
      (when (.isFile file)
        (let [relative-path (.substring (.getPath file) (inc (.length (.getPath source-dir))))
              target-file (io/file target-dir relative-path)]
          (io/make-parents target-file)
          (io/copy file target-file))))))



;; Initialize our backend development environment:
; Create the target/dev/public/assets dir for copying assets there.
(create-directory)
; Copy files
(copy-all-assets)

; NOTE: For reasons of how Calva connects to the REPLs, we must do 
; Integrant go in the frontendinit.clj.

