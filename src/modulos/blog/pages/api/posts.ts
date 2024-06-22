// src/modules/blog/pages/api/posts.ts
import { NextApiRequest, NextApiResponse } from 'next'

type Post = {
  id: number
  title: string
  content: string
}

const posts: Post[] = [
  { id: 1, title: 'First Post', content: 'This is the first post' },
  { id: 2, title: 'Second Post', content: 'This is the second post' },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(posts)
  } else if (req.method === 'POST') {
    const { title, content } = req.body
    const newPost: Post = { id: posts.length + 1, title, content }
    posts.push(newPost)
    res.status(201).json(newPost)
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
