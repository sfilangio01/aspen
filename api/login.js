import { json, readJson, signSession } from './_github.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' })

  try {
    const { password } = await readJson(req)
    if (!process.env.ADMIN_PASSWORD) return json(res, 500, { error: 'Missing ADMIN_PASSWORD' })
    if (password !== process.env.ADMIN_PASSWORD) return json(res, 401, { error: 'Wrong password' })

    return json(res, 200, { token: signSession() })
  } catch (error) {
    return json(res, 500, { error: error.message })
  }
}
