'use client'
// src/app/page.tsx
import React from 'react'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import ServiceSection from '@/components/services/ServiceSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceSection />
      <Skills />
    </>
  )
}
