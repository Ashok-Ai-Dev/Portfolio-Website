const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
const morgan = require('morgan')

const { router: healthRouter } = require('./routes/health')
const { router: githubRouter } = require('./routes/github')

function createApp() {
  const app = express()

  app.use(helmet())
  app.use(compression())
  app.use(morgan('tiny'))
  app.use(express.json({ limit: '1mb' }))

  const corsOrigin = process.env.CORS_ORIGIN || '*'
  app.use(
    cors({
      origin: corsOrigin === '*' ? true : corsOrigin.split(',').map((s) => s.trim()),
      credentials: false,
    }),
  )

  app.get('/', (req, res) => {
    res.type('text').send('Portfolio API is running.')
  })

  app.use('/api', healthRouter)
  app.use('/api', githubRouter)

  app.use((req, res) => {
    res.status(404).json({ ok: false, error: 'Not found' })
  })

  return app
}

module.exports = { createApp }

