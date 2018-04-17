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
    userid INTEGER REFERENCES users(id),
    posted_date DATE
);

CREATE TABLE answers(
    id SERIAL NOT NULL PRIMARY KEY UNIQUE,
    content TEXT,
    question_id INTEGER REFERENCES questions(id),
    userid INTEGER REFERENCES users(id),
    posted_date DATE,
    thumbs_up INTEGER,
    thumbs_down INTEGER
);
