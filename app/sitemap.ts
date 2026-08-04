import fs from 'fs';
import path from 'path';
import { MetadataRoute } from 'next';
import { getAllPostsData } from '@/lib/get-posts';

const baseUrl = 'https://www.sethprie.com';

function getFileLastModified(relativeFilePath: string) {
  try {
    return fs.statSync(path.join(process.cwd(), relativeFilePath)).mtime;
  } catch {
    return undefined;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: '/', file: 'app/page.tsx', priority: 1 },
    { path: '/blog', file: 'app/blog/page.tsx', priority: 0.9 },
    { path: '/contacto', file: 'app/contacto/page.tsx', priority: 0.8 },
    { path: '/contenido', file: 'app/contenido/page.tsx', priority: 0.8 },
    { path: '/portfolio', file: 'app/portfolio/page.tsx', priority: 0.8 },
  ];

  const pages = staticPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: getFileLastModified(page.file),
    changeFrequency: 'monthly' as const,
    priority: page.priority,
  }));

  const posts = getAllPostsData().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...pages, ...posts];
}
