require('dotenv').config()

const { createApp } = require('./app')
const { connectDb } = require('./config/db')

const PORT = Number(process.env.PORT || 8080)

async function start() {
  const app = createApp()

  if (process.env.MONGODB_URI) {
    try {
      await connectDb(process.env.MONGODB_URI)
      // eslint-disable-next-line no-console
      console.log('MongoDB connected')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('MongoDB connection failed:', e.message)
    }
  }

  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`API listening on :${PORT}`)
  })
}

start().catch((e) => {
  // eslint-disable-next-line no-console
  console.error(e)
  process.exit(1)
})

