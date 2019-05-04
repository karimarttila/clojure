;; NOTE: Do not use namespace in scratch!
;; That way you can send code snippets to the current namespace from this scratch file.
;; In Cursive send from editor to REPL. <shift>-<ctrl>-å.
;; NOTE: Keep in this file this project related scratch stuff that is in git.
;; Store general Clojure scratch code snippets in: /mnt/edata/aw/kari/my-clj-dev/dev-src/myscratch.clj
;; ... and rename that file occasionally to e.g. "old-scratch-2019-05" in that directory.

; Get vars in user namespace.
(ns-publics 'user)

; Require mydev which has development stuff.
(require '[mydev])

;; Mount:
(require '[mount.core :as mount])
(mount/start)
(mount/stop)
