import { contentPath, getFile, json, purgeCdn, putFile, readJson, requireAuth } from './_github.js'
import { DEFAULT_CONTENT } from '../src/defaultContent.js'

function decodeBase64(value) {
  return Buffer.from(value || '', 'base64').toString('utf8')
}

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const file = await getFile(contentPath)
      if (!file?.content) return json(res, 200, { content: DEFAULT_CONTENT, source: 'default' })
      return json(res, 200, { content: JSON.parse(decodeBase64(file.content)), source: 'github' })
    }

    if (req.method === 'POST') {
      if (!requireAuth(req, res)) return
      const { content } = await readJson(req)
      if (!content || typeof content !== 'object') return json(res, 400, { error: 'Invalid content' })

      const payload = `${JSON.stringify(content, null, 2)}\n`
      await putFile(contentPath, payload, 'Update Aspen portfolio content')
      await purgeCdn(contentPath)
      return json(res, 200, { content })
    }

    return json(res, 405, { error: 'Method not allowed' })
  } catch (error) {
    return json(res, 500, { error: error.message })
  }
}
