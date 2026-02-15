// app/blog/page.tsx
import { getAllPosts, getPostBySlug } from '@/lib/get-posts';
import Link from 'next/link';

export default function BlogIndex() {
  const slugs = getAllPosts();
  
  const posts = slugs.map((slug) => {
    const { data } = getPostBySlug(slug);
    return { 
      slug, 
      title: data.title || slug.replace(/-/g, ' '), 
      date: data.date || 'Sin fecha',
      description: data.description || "Haz clic para leer la entrada completa..."
    };
  });

  return (
    <main className="min-h-screen bg-background">
      {/* Título Principal - Estándar Sethprie (Home/Portfolio) */}
      <section className="flex flex-col items-center pt-16 pb-8 md:pt-20 md:pb-12 px-4 md:px-6">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground drop-shadow-lg uppercase text-center">
          Blog
        </h1>
        <div className="h-1 w-32 mt-4 mb-4 bg-gradient-to-r from-primary via-accent to-primary" />
        <p className="text-sm md:text-base text-foreground/70 font-mono tracking-widest uppercase text-center mb-6">
          [ PROYECTOS DESTACADOS Y LOGS DE DESARROLLO ]
        </p>
      </section>

      {/* Listado de Posts - Estilo Normal y Limpio */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="flex flex-col gap-12">
          {posts.map((post) => (
            <article key={post.slug} className="group border-b border-white/5 pb-8 last:border-0">
              <Link href={`/blog/${post.slug}`} className="block space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] font-bold">
                    {post.date}
                  </span>
                  <div className="h-[1px] flex-1 bg-white/5 group-hover:bg-accent/30 transition-colors" />
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-foreground/60 text-base leading-relaxed line-clamp-2 italic font-light">
                  {post.description}
                </p>
                
                <div className="flex items-center gap-2 text-xs font-mono text-foreground/40 group-hover:text-foreground transition-colors pt-2">
                  <span>LEER_ENTRADA</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}