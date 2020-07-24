
-- :name sql-get-product-groups :? :*
SELECT *
FROM simpleserver.product_group;

-- :name sql-get-products :? :*
SELECT *
FROM simpleserver.product
WHERE pg_id = :pg-id;

-- :name sql-get-product :? :1
SELECT *
FROM simpleserver.product
WHERE pg_id = :pg-id AND
      id = :p-id;
