// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { getPostBySlug } from '@/lib/get-posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import DisqusComments from '@/components/DisqusComments';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { data } = getPostBySlug(slug);
    const title = data.title ?? slug.replace(/-/g, ' ');
    const description = data.description ?? 'Entrada del blog de Sethprie.';
    const url = `https://sethprie.com/blog/${slug}`;
    const publishedTime = data.date ? new Date(data.date).toISOString() : undefined;
    const keywords = [
      'Sethprie',
      'blog',
      'videojuegos indie',
      'desarrollo de videojuegos',
      ...(title ? title.split(/\s+/).slice(0, 5) : []),
    ];

    return {
      title,
      description,
      keywords,
      openGraph: {
        title,
        description,
        url,
        type: 'article',
        publishedTime,
        authors: ['https://sethprie.com'],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
      },
    };
  } catch {
    return {
      title: 'Entrada no encontrada | Sethprie',
      description: 'No se encontró el post especificado.',
    };
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  try {
    const { data, content } = getPostBySlug(slug);

    return (
      <main className="min-h-screen bg-background">
        <article className="max-w-2xl mx-auto px-6 pt-20 pb-20">
          {/* Header del post: tamaño normal */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-foreground">
              {data.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-foreground/50 font-mono">
              <span className="text-accent">@sethprie</span>
              <span>•</span>
              <span>{data.date}</span>
            </div>
          </header>

          {/* Cuerpo del texto: Legibilidad máxima */}
          <div className="prose prose-slate dark:prose-invert max-w-none 
            prose-p:text-[1.05rem] prose-p:leading-7 prose-p:text-foreground/90
            prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight
            prose-a:text-accent prose-strong:text-foreground
            prose-img:rounded-lg">
            <MDXRemote source={content} />
          </div>

          {/* Sección de comentarios discreta */}
          <footer className="mt-20 pt-10 border-t border-white/10">
            <DisqusComments slug={slug} title={data.title} />
          </footer>
        </article>
      </main>
    );
  } catch (error) {
    notFound();
  }
}