'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 pl-4 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-[#6B76E5]">
          Raj Solanki
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Brand Designer
        </TextEffect>
      </div>
    </header>
  )
}
