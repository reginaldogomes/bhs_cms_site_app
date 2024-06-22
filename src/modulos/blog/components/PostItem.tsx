// src/modules/blog/components/PostItem.tsx
import React from 'react'

type PostItemProps = {
  title: string
  content: string
}

export default function PostItem({ title, content }: PostItemProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}
