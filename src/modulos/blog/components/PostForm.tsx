// src/modules/blog/components/PostForm.tsx
import React, { useState } from 'react'
import { useRouter } from 'next/router'

export default function PostForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    })

    if (response.ok) {
      router.push('/')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  )
}
