// src/modules/blog/components/PostList.tsx
import React from 'react'
import PostItem from './PostItem'

type Post = {
  id: number
  title: string
  content: string
}

type PostListProps = {
  posts: Post[]
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  )
}
