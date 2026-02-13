'use client';

import { DiscussionEmbed } from 'disqus-react';

interface DisqusProps {
  slug: string;
  title: string;
}

export default function DisqusComments({ slug, title }: DisqusProps) {
  // Usamos una variable de entorno o detectamos la URL actual
  const siteUrl = typeof window !== 'undefined' 
    ? window.location.origin 
    : 'https://sethprie.vercel.app/';

  const disqusShortname = "sethprie"; // Tu shortname de Disqus

  const disqusConfig = {
    url: `${siteUrl}/blog/${slug}`,
    identifier: `post-${slug}`, // Sugerencia de ChatGPT: prefijo para evitar conflictos
    title: title,
    language: 'es_ES',
  };

  return (
    <div className="mt-16 border-t border-gray-200 pt-10 dark:border-gray-700">
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  );
}