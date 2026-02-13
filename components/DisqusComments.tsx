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
    <div 
      id="disqus_thread_container"
      className="mt-20 pt-10 border-t border-solid border-gray-200 w-full min-h-[400px]"
      /* Forzamos colores HEX en todas las propiedades que Disqus suele leer */
      style={{ 
        color: '#000000', 
        backgroundColor: '#ffffff',
        borderColor: '#e5e7eb',
        appearance: 'none',
        fontFamily: 'sans-serif'
      }} 
    >
      <DiscussionEmbed
        shortname="sethprie"
        config={disqusConfig}
      />
    </div>
  );
}