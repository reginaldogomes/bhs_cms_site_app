'use client'
// src/app/page.tsx
import React from 'react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <Link href="/blog">teste</Link>
    </>
  )
}
