import { getPostBySlug, getAllPosts } from '@/lib/get-posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import DisqusComments from '@/components/DisqusComments'; // Importamos el componente de comentarios

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
  // 1. IMPORTANTE: Mantenemos el await porque en Next.js 15+ params ES una promesa.
  const { slug } = await params;

  try {
    const { data, content } = getPostBySlug(slug);

    return (
      <main className="max-w-2xl mx-auto py-20 px-4">
        {/* Sección del Contenido */}
        <article className="prose prose-slate lg:prose-xl dark:prose-invert">
          <h1 className="mb-2">{data.title}</h1>
          <p className="text-sm text-gray-500 mb-8">Publicado el {data.date}</p>
          <hr className="border-t border-gray-200 dark:border-gray-700 mb-8" />
          
          <MDXRemote source={content} />
        </article>

        {/* Sección de Comentarios */}
        {/* Pasamos el slug y el título para que Disqus cree el hilo correctamente */}
        <DisqusComments slug={slug} title={data.title} />
      </main>
    );
  } catch (error) {
    notFound();
  }
}