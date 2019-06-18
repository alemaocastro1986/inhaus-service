require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.testing' : '.env'
})

module.exports = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mssql',
  // operatorsAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  },
  logging: false
}
