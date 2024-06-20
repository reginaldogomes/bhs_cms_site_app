import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const posts = await prisma.post.findMany()
    res.json(posts)
  } else if (req.method === 'POST') {
    const { title, content } = req.body
    const post = await prisma.post.create({
      data: { title, content, published: false },
    })
    res.json(post)
  } else {
    res.status(405).end() // Método não permitido
  }
}

export default handler
