import { getPostBySlug, getAllPosts } from '@/lib/get-posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import DisqusComments from '@/components/DisqusComments';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((slug) => ({
    slug: slug,
  }));
}

interface PostProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PostProps) {
  const { slug } = await params;

  try {
    const { data, content } = getPostBySlug(slug);

    return (
      <main className="max-w-2xl mx-auto py-20 px-4">
        {/* Contenedor del Artículo */}
        <article className="prose prose-slate lg:prose-xl dark:prose-invert mb-16">
          <h1 className="mb-2">{data.title}</h1>
          <p className="text-sm text-gray-500 mb-8">Publicado el {data.date}</p>
          <hr className="border-t border-gray-200 dark:border-gray-700 mb-8" />
          
          <MDXRemote source={content} />
        </article>

        {/* Separador Visual y Espaciado para Disqus */}
        <div className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800 w-full min-h-[400px]">
          <h3 className="text-xl font-bold mb-8 dark:text-white">Comentarios</h3>
          <DisqusComments slug={slug} title={data.title} />
        </div>
      </main>
    );
  } catch (error) {
    notFound();
  }
}