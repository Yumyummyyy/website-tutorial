module.exports = {
  port: 8081,
  db: {
    database: process.env.DB_NAME || 'website-tutorial',
    user: process.env.DB_USER || 'website-tutorial',
    password: process.env.DB_PASS || 'website-tutorial',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './website-tutorial.sqlite'
    }
  }
}
