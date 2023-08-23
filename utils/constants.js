const DB_NAME = process.env.DB_NAME;
const DB_HOST = process.env.DB_HOST;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASS = process.env.DB_PASS;
const DB_LANG = process.env.DB_LANG;
const SERVER_BASE_URL = process.env.SERVER_BASE_URL;
const SALT_ROUNDS = +process.env.SALT_ROUNDS;
const JWT_SECRETE_KEY = process.env.JWT_SECRETE_KEY;

module.exports = {
  DB_HOST,
  DB_LANG,
  DB_USERNAME,
  DB_PASS,
  DB_NAME,
  SERVER_BASE_URL,
  SALT_ROUNDS,
  JWT_SECRETE_KEY,
};
