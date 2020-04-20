(ns simpleserver.service.session.session-interface)

(defprotocol SessionInterface
  (create-json-web-token [this email]
    "Creates the JSON web token and adds it to the sessions database.")
  (validate-token [this token]
    "Validates the token. Returns {:email :exp} from token if session ok,
    nil otherwise. Token validation has two parts:
    1. Check that we actually created the token in the first place (should find it in the session db).
    2. Validate the token with buddy (can unsign it, token is not expired).")
  (-get-sessions [this]
    "Gets all sessions - used in testing.")
  (-reset-sessions! [this]
    "Resets all sessions - used in testing.")
  )





