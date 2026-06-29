import { json, getSession } from './_github.js'

export default async function handler(req, res) {
  if (req.method !== 'GET') return json(res, 405, { error: 'Method not allowed' })

  const session = getSession(req)
  if (!session) return json(res, 401, { error: 'Unauthorized' })

  return json(res, 200, {
    user: {
      email: session.email,
      name: session.name,
      role: session.role || 'admin',
    },
  })
}
