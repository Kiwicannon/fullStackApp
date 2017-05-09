-- DROP TABLE IF EXISTS gender, favcolor; 

/*~~~~~~~~~~~~~~~~~~~*
    Gender Table
*~~~~~~~~~~~~~~~~~~~~*/
CREATE TABLE gender (
    id SERIAL PRIMARY KEY,
    gendertype VARCHAR(255)
);

INSERT INTO gender (gendertype) VALUES
('Male'),
('Female');

/*~~~~~~~~~~~~~~~~~~~*
    favColor Table
*~~~~~~~~~~~~~~~~~~~~*/
CREATE TABLE favcolor (
    userid SERIAL PRIMARY KEY,
    firstname VARCHAR(255),
    color VARCHAR(255),
    gender INT REFERENCES gender(id)
);

