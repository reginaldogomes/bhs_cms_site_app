'use client'
// src/app/page.tsx
import React from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'

export default function HomePage() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
    </>
  )
}
