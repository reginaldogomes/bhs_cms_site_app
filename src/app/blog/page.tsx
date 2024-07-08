// src/pages/index.tsx
import Link from 'next/link'

export default function Blog() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Bem-vindo ao Blog</h1>
      <Link href="/blog">Acessar Blog</Link>
    </div>
  )
}
