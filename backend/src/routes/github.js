const express = require('express')

const router = express.Router()

router.get('/github/repos', async (req, res) => {
  const username = String(req.query.username || '').trim()
  const perPage = Math.min(Number(req.query.per_page || 12) || 12, 50)

  if (!username) {
    res.status(400).json({ ok: false, error: 'Missing username' })
    return
  }

  const url = new URL(`https://api.github.com/users/${username}/repos`)
  url.searchParams.set('sort', 'updated')
  url.searchParams.set('per_page', String(perPage))
  url.searchParams.set('type', 'owner')

  try {
    const ghToken = process.env.GITHUB_TOKEN
    const r = await fetch(url, {
      headers: {
        Accept: 'application/vnd.github+json',
        ...(ghToken ? { Authorization: `Bearer ${ghToken}` } : {}),
      },
    })

    if (!r.ok) {
      res.status(r.status).json({ ok: false, error: 'GitHub API error' })
      return
    }

    const data = await r.json()
    res.json({ ok: true, data })
  } catch (e) {
    res.status(500).json({ ok: false, error: 'Failed to fetch repos' })
  }
})

module.exports = { router }

