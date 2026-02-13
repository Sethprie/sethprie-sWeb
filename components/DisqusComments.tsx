'use client'

import { DiscussionEmbed } from 'disqus-react'
import { useEffect, useState } from 'react'

interface DisqusProps {
  slug: string
  title: string
}

export default function DisqusComments({ slug, title }: DisqusProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const disqusShortname = 'sethprie'

  const disqusConfig = {
    url: typeof window !== 'undefined' ? window.location.href : '',
    identifier: slug,
    title: title,
    language: 'es_ES',
  }

  return (
    <section className="mt-24 border-t border-neutral-800 bg-black isolate">
      <div className="pt-12 max-w-3xl mx-auto">
        <div id="disqus_wrapper" className="bg-black text-white">
          <DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </div>
      </div>
    </section>
  )
}
