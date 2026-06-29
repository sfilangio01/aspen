import crypto from 'node:crypto'

export const owner = process.env.CONTENT_REPO_OWNER || 'sfilangio01'
export const repo = process.env.CONTENT_REPO_NAME || 'aspen-assets'
export const branch = process.env.CONTENT_REPO_BRANCH || 'main'
export const contentPath = process.env.CONTENT_FILE_PATH || 'content/site.json'
export const authOwner = process.env.AUTH_REPO_OWNER || owner
export const authRepo = process.env.AUTH_REPO_NAME || 'aspen-admin'
export const authBranch = process.env.AUTH_REPO_BRANCH || branch
export const authPath = process.env.AUTH_FILE_PATH || 'auth/users.json'

const apiBase = 'https://api.github.com'

export function json(res, status, body) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Cache-Control', 'no-store')
  res.end(JSON.stringify(body))
}

export async function readJson(req) {
  if (req.body && typeof req.body === 'object') return req.body
  if (typeof req.body === 'string') return JSON.parse(req.body || '{}')

  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  const raw = Buffer.concat(chunks).toString('utf8')
  return raw ? JSON.parse(raw) : {}
}

function requireToken() {
  const token = process.env.GITHUB_CONTENT_TOKEN
  if (!token) throw new Error('Missing GITHUB_CONTENT_TOKEN')
  return token
}

export async function github(path, options = {}) {
  const response = await fetch(`${apiBase}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${requireToken()}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(options.headers || {}),
    },
  })

  if (response.status === 404) return null

  const data = await response.json().catch(() => ({}))
  if (!response.ok) {
    throw new Error(data.message || `GitHub request failed: ${response.status}`)
  }
  return data
}

export async function getRepoFile(repoOwner, repoName, repoBranch, path) {
  const encoded = path.split('/').map(encodeURIComponent).join('/')
  return github(`/repos/${repoOwner}/${repoName}/contents/${encoded}?ref=${repoBranch}`)
}

export async function putRepoFile(repoOwner, repoName, repoBranch, path, contentBuffer, message) {
  const existing = await getRepoFile(repoOwner, repoName, repoBranch, path)
  const encoded = path.split('/').map(encodeURIComponent).join('/')
  const body = {
    message,
    branch: repoBranch,
    content: Buffer.from(contentBuffer).toString('base64'),
    ...(existing?.sha ? { sha: existing.sha } : {}),
  }

  return github(`/repos/${repoOwner}/${repoName}/contents/${encoded}`, {
    method: 'PUT',
    body: JSON.stringify(body),
  })
}

export async function getFile(path) {
  return getRepoFile(owner, repo, branch, path)
}

export async function putFile(path, contentBuffer, message) {
  return putRepoFile(owner, repo, branch, path, contentBuffer, message)
}

export async function getAuthFile() {
  return getRepoFile(authOwner, authRepo, authBranch, authPath)
}

export async function putAuthFile(contentBuffer, message) {
  return putRepoFile(authOwner, authRepo, authBranch, authPath, contentBuffer, message)
}

export async function purgeCdn(path) {
  const url = `https://purge.jsdelivr.net/gh/${owner}/${repo}@${branch}/${path}`
  await fetch(url).catch(() => null)
}

export function cdnUrl(path) {
  return `https://cdn.jsdelivr.net/gh/${owner}/${repo}@${branch}/${path}`
}

export function signSession(user) {
  const secret = process.env.ADMIN_SECRET || process.env.ADMIN_PASSWORD
  if (!secret) throw new Error('Missing ADMIN_SECRET')
  const payload = Buffer.from(JSON.stringify({
    email: user.email,
    name: user.name,
    role: user.role || 'admin',
    exp: Date.now() + 1000 * 60 * 60 * 24 * 14,
  })).toString('base64url')
  const sig = crypto.createHmac('sha256', secret).update(payload).digest('base64url')
  return `${payload}.${sig}`
}

export function getSession(req) {
  const header = req.headers.authorization || ''
  const token = header.replace(/^Bearer\s+/i, '')
  const secret = process.env.ADMIN_SECRET || process.env.ADMIN_PASSWORD
  if (!token || !secret || !token.includes('.')) return null

  const [payload, sig] = token.split('.')
  const expected = crypto.createHmac('sha256', secret).update(payload).digest('base64url')
  if (sig.length !== expected.length) return null
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null

  const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'))
  return data.exp > Date.now() ? data : null
}

export function verifySession(req) {
  return Boolean(getSession(req))
}

export function requireAuth(req, res) {
  if (!verifySession(req)) {
    json(res, 401, { error: 'Unauthorized' })
    return false
  }
  return true
}
