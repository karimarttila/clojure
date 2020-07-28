
-- :name sql-get-token :? :1
SELECT token
FROM simpleserver.session
WHERE token = :token;

-- :name sql-insert-token :! :1
INSERT INTO simpleserver.session
VALUES (:token);

-- :name sql-remove-token :! :n
DELETE
FROM simpleserver.session
WHERE token = :token;
