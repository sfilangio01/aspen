import { findUser, hashPassword, normalizeUserEmail, verifyPassword, writeUsers } from './_auth.js'
import { getSession, json, readJson } from './_github.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' })

  const session = getSession(req)
  if (!session?.email) return json(res, 401, { error: 'Unauthorized' })

  try {
    const { currentPassword, newPassword } = await readJson(req)
    if (!currentPassword || !newPassword) return json(res, 400, { error: 'Current and new password are required' })
    if (String(newPassword).length < 10) return json(res, 400, { error: 'New password must be at least 10 characters' })

    const { data, user } = await findUser(session.email)
    if (!user || !(await verifyPassword(currentPassword, user.passwordHash))) {
      return json(res, 401, { error: 'Current password is wrong' })
    }

    const email = normalizeUserEmail(session.email)
    const users = await Promise.all(data.users.map(async (item) => (
      normalizeUserEmail(item.email) === email
        ? { ...item, passwordHash: await hashPassword(newPassword), updatedAt: new Date().toISOString() }
        : item
    )))

    await writeUsers({ users }, `Update password for ${email}`)
    return json(res, 200, { ok: true })
  } catch (error) {
    return json(res, 500, { error: error.message })
  }
}
