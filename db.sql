CREATE TABLE users(
    id SERIAL NOT NULL PRIMARY KEY UNIQUE,
    username VARCHAR,
    password VARCHAR,
    email VARCHAR
);
CREATE TABLE questions(
    id SERIAL NOT NULL PRIMARY KEY UNIQUE,
    title VARCHAR,
    content TEXT,
    category VARCHAR,
    userid INTEGER,
    posted_date DATE
);

CREATE TABLE answers(
    id SERIAL NOT NULL PRIMARY KEY UNIQUE,
    content TEXT,
    questionid INTEGER,
    userid INTEGER,
    posted_date DATE
);