CREATE TABLE personinformation (
    id          serial PRIMARY KEY,
    firstName       VARCHAR(30),
    lastName        VARCHAR(30),
    date_of_birth   DATE
);

INSERT INTO personinformation(firstname, lastname, date_of_birth) VALUES ('Kaylee', 'Hartzog', '1997-06-30');

INSERT INTO personinformation(firstname, lastname, date_of_birth) VALUES ('Justin', 'Hartzog', '1995-11-20');

CREATE USER familyhistoryuser WITH PASSWORD 'elijah';
GRANT SELECT, INSERT, UPDATE ON personinformation TO familyhistoryuser;
GRANT USAGE, SELECT ON SEQUENCE personinformation_userid_seq TO familyhistoryuser;

DROP TABLE personinformation;