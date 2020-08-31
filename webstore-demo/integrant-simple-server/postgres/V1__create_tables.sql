CREATE SCHEMA IF NOT EXISTS simpleserver;

DROP TABLE IF EXISTS simpleserver.product_group CASCADE;
DROP TABLE IF EXISTS simpleserver.product CASCADE;
DROP TABLE IF EXISTS simpleserver.session CASCADE;
DROP TABLE IF EXISTS simpleserver.ssuser CASCADE; -- NOTE: user is a reserved word in sql!

CREATE TABLE simpleserver.product_group
(
    id    TEXT PRIMARY KEY,
    name  TEXT
);

CREATE TABLE simpleserver.product
(
    id      TEXT PRIMARY KEY,
    pg_id   TEXT REFERENCES simpleserver.product_group (id) ON DELETE RESTRICT,
    title   TEXT,
    price   NUMERIC(6,2),
    a_or_d  TEXT,
    year    INT,
    country TEXT,
    g_or_l  TEXT

);

CREATE TABLE simpleserver.session
(
    token  TEXT PRIMARY KEY
);

CREATE TABLE simpleserver.ssuser
(
    id      TEXT PRIMARY KEY,
    email   TEXT,
    f_name  TEXT,
    l_name  TEXT,
    hpwd    TEXT
);
