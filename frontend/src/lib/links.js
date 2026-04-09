function looksLikePlaceholder(url) {
  if (!url) return true
  const u = String(url).toLowerCase()
  return (
    u.includes('your-') ||
    u.includes('example.com') ||
    u.includes('your_handle') ||
    u.includes('your handle')
  )
}

export function safeExternalLink(url) {
  const value = String(url || '')
  if (!value) return { href: '#', disabled: true, reason: 'Missing URL' }
  if (looksLikePlaceholder(value)) {
    return { href: '#', disabled: true, reason: 'Update this link in profile.js' }
  }
  return { href: value, disabled: false, reason: '' }
}

