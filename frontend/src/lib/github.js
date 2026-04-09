function toNumber(x, fallback = 0) {
  const n = Number(x)
  return Number.isFinite(n) ? n : fallback
}

export async function fetchGithubRepos({
  username,
  perPage = 12,
  token,
  signal,
}) {
  if (!username) throw new Error('Missing GitHub username')

  const url = new URL(`https://api.github.com/users/${username}/repos`)
  url.searchParams.set('sort', 'updated')
  url.searchParams.set('per_page', String(perPage))
  url.searchParams.set('type', 'owner')

  const res = await fetch(url, {
    signal,
    headers: {
      Accept: 'application/vnd.github+json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  })

  if (!res.ok) {
    const msg = `GitHub API error (${res.status})`
    throw new Error(msg)
  }

  const data = await res.json()
  return (Array.isArray(data) ? data : [])
    .filter((r) => !r.fork)
    .map((r) => ({
      id: r.id,
      name: r.name,
      fullName: r.full_name,
      description: r.description,
      url: r.html_url,
      homepage: r.homepage,
      language: r.language,
      stars: toNumber(r.stargazers_count),
      forks: toNumber(r.forks_count),
      updatedAt: r.updated_at,
    }))
}

