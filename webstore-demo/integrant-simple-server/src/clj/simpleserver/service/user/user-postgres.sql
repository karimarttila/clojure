-- :name sql-get-user-by-email :? :1
SELECT u.email
FROM simpleserver.ssuser as u
WHERE u.email = :email;

-- :name sql-insert-user :! :1
INSERT INTO simpleserver.ssuser
VALUES (:id, :email, :fname, :lname, :hpwd );

-- :name sql-get-user-by-email-and-password :? :1
SELECT u.email, u.hpwd
FROM simpleserver.ssuser as u
WHERE u.email = :email AND
      u.hpwd = :hpwd;
