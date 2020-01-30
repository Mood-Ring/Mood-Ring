const userTable = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    hash VARCHAR NOT NULL,
    oauthId VARCHAR 
  );
`;

module.exports = userTable;
