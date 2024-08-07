// src/pages/index.tsx
import Container from "@/components/layouts/Container"
import Link from "next/link"

export default function Blog() {
  return (
    <Container>
      <h1 className="text-3xl font-bold">Bem-vindo ao Blog</h1>
      <Link href="/blog">Acessar Blog</Link>
    </Container>
  )
}
