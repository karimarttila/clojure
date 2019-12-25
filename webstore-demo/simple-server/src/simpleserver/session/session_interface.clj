(ns simpleserver.session.session-interface)

(defprotocol SessionInterface
  (create-json-web-token [env email]
    "Creates the JSON web token and adds it to the sessions database.")
  (validate-token [env token]
    "Validates the token. Returns {:email :exp} from token if session ok,
    nil otherwise. Token validation has two parts:
    1. Check that we actually created the token in the first place (should find it in the session db).
    2. Validate the token with buddy (can unsign it, token is not expired).")
  (-get-sessions [env]
    "Gets all sessions - used in testing.")
  (-reset-sessions! [env]
    "Resets all sessions - used in testing.")
  )





