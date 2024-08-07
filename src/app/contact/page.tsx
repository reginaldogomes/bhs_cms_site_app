"use client"

import ContactForm from "@/components/form/ContactForm"
import Container from "@/components/layouts/Container"

const Contact: React.FC = () => {
  return (
    <Container>
      <h1 className="text-3xl font-bold">Entre em Contto Conosco</h1>
      <ContactForm />
    </Container>
  )
}

export default Contact
