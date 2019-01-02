CREATE TABLE houses(
    id SERIAL PRIMARY KEY,
    property_name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer,
    img text,
    mortgage DECIMAL,
    rent DECIMAL
);


-- ALTER TABLE houses
-- ADD img text;
-- select * from houses;

-- ALTER TABLE houses
-- ADD rent DECIMAL;
-- select * from houses;

-- ALTER TABLE houses
-- ADD mortgage DECIMAL;
-- select * from houses;