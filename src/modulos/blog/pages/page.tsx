// src/modules/blog/pages/index.tsx
import React from 'react'
import PostList from '../components/PostList'
import Layout from '../../../app/layout'

type BlogPageProps = {
  posts: { id: number; title: string; content: string }[]
}

export default function BlogPage({ posts }: BlogPageProps) {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <PostList posts={posts} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}
