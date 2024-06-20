import { GetStaticProps } from 'next'
import prisma from '@/lib/prisma'
import { Post } from '@prisma/client'

type Props = {
  posts: Post[]
}

const Home = ({ posts }: Props) => {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await prisma.post.findMany()
  return {
    props: { posts },
  }
}

export default Home
