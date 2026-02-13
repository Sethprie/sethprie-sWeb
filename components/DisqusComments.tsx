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

  const disqusShortname = 'sethprie';
  const disqusConfig = {
    url: typeof window !== 'undefined' ? window.location.href : '',
    identifier: slug,
    title: title,
    language: 'es_ES',
  };

  return (
    <div 
      className="mt-20 pt-10 border-t"
      style={{ 
        backgroundColor: '#0a0a0a', 
      //  color: '#fafafa',
      //  borderColor: '#262626',
      //  colorScheme: 'dark'
      }} 
    >
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  );
}