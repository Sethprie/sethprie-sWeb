'use client';

import { DiscussionEmbed } from 'disqus-react';
import { useEffect, useState } from 'react';

interface DisqusProps {
  slug: string;
  title: string;
}

export default function DisqusComments({ slug, title }: DisqusProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const disqusConfig = {
    url: typeof window !== 'undefined' ? window.location.href : '',
    identifier: `post-${slug}`,
    title: title,
    language: 'es_ES',
  };

  return (
    /* IMPORTANTE: El style={{ color: '#333' }} evita el error de "parseColor" 
       al darle a Disqus un color hexadecimal simple en lugar de lab() o oklch()
    */
    <div 
      className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800 w-full min-h-[400px]"
      style={{ color: '#333', backgroundColor: 'transparent' }} 
    >
      <DiscussionEmbed
        shortname="sethprie"
        config={disqusConfig}
      />
    </div>
  );
}