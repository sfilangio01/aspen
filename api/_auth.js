import crypto from 'node:crypto'
import { getAuthFile, putAuthFile } from './_github.js'

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase()
}

function publicUser(user) {
  return {
    email: user.email,
    name: user.name,
    role: user.role || 'admin',
  }
}

function scrypt(password, salt) {
  return new Promise((resolve, reject) => {
    crypto.scrypt(password, salt, 64, (error, key) => {
      if (error) reject(error)
      else resolve(key.toString('hex'))
    })
  })
}

export async function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = await scrypt(password, salt)
  return `scrypt:${salt}:${hash}`
}

export async function verifyPassword(password, storedHash) {
  const [method, salt, expected] = String(storedHash || '').split(':')
  if (method !== 'scrypt' || !salt || !expected) return false
  const actual = await scrypt(password, salt)
  const actualBuffer = Buffer.from(actual, 'hex')
  const expectedBuffer = Buffer.from(expected, 'hex')
  if (actualBuffer.length !== expectedBuffer.length) return false
  return crypto.timingSafeEqual(actualBuffer, expectedBuffer)
}

export async function readUsers() {
  const file = await getAuthFile()
  if (!file?.content) return { users: [] }
  const raw = Buffer.from(file.content, 'base64').toString('utf8')
  const data = JSON.parse(raw)
  return { users: Array.isArray(data.users) ? data.users : [] }
}

export async function writeUsers(data, message) {
  const body = JSON.stringify({ users: data.users }, null, 2)
  await putAuthFile(Buffer.from(body), message)
  return data
}

export async function findUser(email) {
  const data = await readUsers()
  const normalized = normalizeEmail(email)
  const user = data.users.find((item) => normalizeEmail(item.email) === normalized)
  return user ? { data, user } : { data, user: null }
}

export function toPublicUser(user) {
  return publicUser(user)
}

export function normalizeUserEmail(email) {
  return normalizeEmail(email)
}
