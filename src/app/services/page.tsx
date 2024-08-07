import Container from "@/components/layouts/Container"
import Link from "next/link"

export default function Services() {
  return (
    <Container>
      <h1 className="text-3xl font-bold">Teste</h1>
      <Link href="/blog">Acessar Serviços</Link>
    </Container>
  )
}
