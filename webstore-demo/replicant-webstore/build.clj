(ns build
  (:require [shadow.cljs.devtools.api :as shadow]
            [clojure.java.io :as io]
            [clojure.tools.build.api :as b]
            [clojure.java.shell :as shell]))

(def version "0.0.1-SNAPSHOT")
(def class-dir "target/classes")
(def uber-file "target/app.jar")


(def target-prod-public-assets-dir "target/prod/public/assets")

(defn create-prod-public-assets-directory []
  (let [dir (io/file target-prod-public-assets-dir)]
    (when-not (.exists dir)
      (.mkdirs dir))))


(defn copy-all-assets []
  (let [source-dir (io/file "public/assets")
        target-dir (io/file target-prod-public-assets-dir)]
    (doseq [file (file-seq source-dir)]
      (when (.isFile file)
        (let [relative-path (.substring (.getPath file) (inc (.length (.getPath source-dir))))
              target-file (io/file target-dir relative-path)]
          (io/make-parents target-file)
          (io/copy file target-file))))))


(def basis (delay
             (b/create-basis {:project "deps.edn"
                              :aliases [:backend]})))

(defn clean [_]
  (println "Deleting the target/prod directory...")
  (b/delete {:path "target/prod"})
  (println "Deleting the target/classes directory...")
  (b/delete {:path "target/classes"})
  (println "Deleting the target/app.jar...")
  (b/delete {:path "target/app.jar"}))

(defn uberjar [_] 
  (clean nil)

  ;; Build frontend:
  (println "Building the frontend using shadow/release :app...")
  (shadow/release :app)

  (println "Creating the assets directory...")
  (create-prod-public-assets-directory)
  (println "Copying assets...")
  (copy-all-assets)

  ;; Run postcss:release to build the CSS files
  ;; NOTE: We run postcss:release against the content in target/prod/public/js/main.js.
  ;; See tailwind.config.js.
  (println "Running postcss:release")
  (let [result (shell/sh "npm" "run" "postcss:release")]
    (println (:out result))
    (println (:err result)))

  ;; Run npm release script
  #_(println "Creating the postcss:release...")
  #_(let [process (.. (Runtime/getRuntime) (exec "npm run postcss:release"))]
    (.waitFor process))

  (println "Copying sources, resources and target/prod content...")
  (b/copy-dir {:src-dirs ["src/clj" "src/cljc" "resources" "target/prod"]
               :target-dir class-dir})

  
  #_(b/compile-clj {:basis @basis
                    :ns-compile '[backend.main]
                    :class-dir class-dir})

  (println "Building the uberjar...")
  (b/uber {:class-dir class-dir
           :uber-file uber-file
           ;; :main 'backend.main
           :basis @basis})

  (println "********** DONE **********")
  (println "Uberjar:" uber-file))
