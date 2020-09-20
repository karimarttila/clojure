(ns simpleserver.service.session.session-interface
  "Session interface. Use only through session service.")

(defprotocol SessionInterface
  (create-json-web-token [this env email]
    "Creates the JSON web token and adds it to the sessions database.")
  (validate-token [this env token]
    "Validates the token. Returns {:email :exp} from token if session ok,
    nil otherwise. Token validation has two parts:
    1. Check that we actually created the token in the first place (should find it in the session db).
    2. Validate the token with buddy (can unsign it, token is not expired)."))





