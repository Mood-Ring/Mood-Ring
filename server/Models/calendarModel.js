const calendarTable = `
  CREATE TABLE IF NOT EXISTS calendar (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    mood VARCHAR NOT NULL,
    user_id INTEGER REFERENCES users(id)
  );
`;

module.exports = calendarTable;
