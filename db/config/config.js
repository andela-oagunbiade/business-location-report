require('dotenv').config()

module.exports = {
  development: {
    url: process.env.DEV_DB_URL
  },
  test: {
    url: process.env.TEST_DB_URL
  },
  production: {
    url: process.env.PROD_DB_URL
  }
}
