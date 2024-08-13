"use client"
import Hero from "@/components/Hero"
import ServiceSection from "@/components/services/ServiceSection"

export default function HomePage() {
  return (
    <>
      <div className="container top-10">
        <Hero />
        <ServiceSection />
      </div>
    </>
  )
}
