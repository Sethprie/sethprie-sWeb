'use client';

import { DiscussionEmbed } from 'disqus-react';
import { useEffect, useState } from 'react';

// 1. Definimos la interfaz aquí mismo
interface DisqusProps {
  slug: string;
  title: string;
}

export default function DisqusComments({ slug, title }: DisqusProps) {
  const [mounted, setMounted] = useState(false);

  // 2. Hydration fix: esperar a que el componente monte en el cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const disqusConfig = {
    url: `https://sethprie.vercel.app/blog/${slug}`, 
    identifier: `post-${slug}`,
    title: title,
    language: 'es_ES',
  };

  return (
    <div className="mt-16 border-t border-gray-200 pt-10 dark:border-gray-700">
      <DiscussionEmbed
        shortname="sethprie"
        config={disqusConfig}
      />
    </div>
  );
}