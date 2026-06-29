import { cdnUrl, github, json, owner, repo, requireAuth } from './_github.js'

export default async function handler(req, res) {
  if (req.method !== 'GET') return json(res, 405, { error: 'Method not allowed' })
  if (!requireAuth(req, res)) return

  try {
    const files = await github(`/repos/${owner}/${repo}/contents/media`) || []
    const images = Array.isArray(files)
      ? files
          .filter((file) => file.type === 'file')
          .map((file) => ({ name: file.name, path: file.path, url: cdnUrl(file.path) }))
          .reverse()
      : []

    return json(res, 200, { files: images })
  } catch (error) {
    return json(res, 200, { files: [], warning: error.message })
  }
}
