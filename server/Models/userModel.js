const userTable = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    hash VARCHAR NOT NULL
  );
`;

module.exports = userTable;
