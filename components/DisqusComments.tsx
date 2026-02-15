// components/DisqusComments.tsx
'use client'
import { DiscussionEmbed } from 'disqus-react'
import { useEffect, useState } from 'react'

export default function DisqusComments({ slug, title }: { slug: string, title: string }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="w-full opacity-90 transition-opacity hover:opacity-100">
      <DiscussionEmbed
        shortname="sethprie"
        config={{
          url: typeof window !== 'undefined' ? window.location.href : '',
          identifier: slug,
          title: title,
          language: 'es_ES',
        }}
      />
    </div>
  )
}