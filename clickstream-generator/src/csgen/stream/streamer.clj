(ns csgen.stream.streamer
  (:require
    [clojure.tools.logging :as log]
    [clj-time.core :as time]
    [clj-time.format :as timeformat]
    [amazonica.aws.kinesis :as amazonica-kinesis]
    [csgen.util.prop :as cg-prop]
    [csgen.gen.generator :as cg-gen]))


(defn -put-record-to-kinesis
  "Puts a url event to kinesis stream."
  [url]
  (let [kinesis-stream-name (cg-prop/get-str-value "url-kinesis-stream-name")
        data {:url url}]
    (amazonica-kinesis/put-record kinesis-stream-name
                                  data
                                  (str (java.util.UUID/randomUUID)))))


(defn stream-clicks
  "Stream clicks to Kinesis n times"
  [n]
  (log/trace "ENTER stream-clicks")
  (dotimes [c n]
    (log/trace (str "stream-clicks - round " (inc c) " of " n))
    (let [url (cg-gen/generate-click)]
      (log/trace (str "Sending url <" url "> to Kinesis stream..."))
      (-put-record-to-kinesis url)
      )
    )

  )

