import { cdnUrl, json, purgeCdn, putFile, readJson, requireAuth } from './_github.js'

function sanitizeName(name) {
  return name
    .toLowerCase()
    .replace(/\.[^.]+$/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 48) || 'image'
}

function extensionFromDataUrl(dataUrl, fallback) {
  const mime = dataUrl.match(/^data:([^;]+);base64,/)?.[1] || ''
  if (mime.includes('png')) return 'png'
  if (mime.includes('webp')) return 'webp'
  if (mime.includes('gif')) return 'gif'
  if (fallback?.match(/\.png$/i)) return 'png'
  return 'jpg'
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' })
  if (!requireAuth(req, res)) return

  try {
    const { filename, dataUrl } = await readJson(req)
    if (!dataUrl?.startsWith('data:image/')) return json(res, 400, { error: 'Expected image data' })

    const base64 = dataUrl.split(',')[1]
    const buffer = Buffer.from(base64, 'base64')
    if (buffer.length > 4_000_000) return json(res, 413, { error: 'Image is too large after compression' })

    const ext = extensionFromDataUrl(dataUrl, filename)
    const path = `media/${Date.now()}-${sanitizeName(filename)}.${ext}`
    await putFile(path, buffer, `Upload ${filename || 'image'}`)
    await purgeCdn(path)

    return json(res, 200, {
      file: {
        name: filename || path.split('/').pop(),
        path,
        url: `${cdnUrl(path)}?v=${Date.now()}`,
      },
    })
  } catch (error) {
    return json(res, 500, { error: error.message })
  }
}
