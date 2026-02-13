// app/blog/page.tsx
import { getAllPosts } from '@/lib/get-posts';
import Link from 'next/link';

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="max-w-2xl mx-auto p-10">
      <h1 className="text-4xl font-extrabold mb-8 dark:text-white">Mi Blog</h1>
      <div className="space-y-6">
        {posts.map((slug) => (
          <div key={slug} className="border-b pb-4 dark:border-gray-800">
            <Link 
              href={`/blog/${slug}`} 
              className="text-xl font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 capitalize"
            >
              {slug.replace(/-/g, ' ')}
            </Link>
            <p className="text-gray-500 text-sm mt-1">Haz clic para leer más...</p>
          </div>
        ))}
      </div>
    </main>
  );
}