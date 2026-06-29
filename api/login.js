import { findUser, toPublicUser, verifyPassword } from './_auth.js'
import { json, readJson, signSession } from './_github.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' })

  try {
    const { email, password } = await readJson(req)
    if (!email || !password) return json(res, 400, { error: 'Email and password are required' })

    const { user } = await findUser(email)
    if (!user || !(await verifyPassword(password, user.passwordHash))) {
      return json(res, 401, { error: 'Wrong email or password' })
    }

    const publicUser = toPublicUser(user)
    return json(res, 200, { token: signSession(publicUser), user: publicUser })
  } catch (error) {
    return json(res, 500, { error: error.message })
  }
}
