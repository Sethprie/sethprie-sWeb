import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/get-posts';

export default function BlogPreview() {
  const slugs = getAllPosts();
  
  // Get the 3 most recent posts
  const posts = slugs
    .map((slug) => {
      const { data } = getPostBySlug(slug);
      return { 
        slug, 
        title: data.title || slug.replace(/-/g, ' '), 
        date: data.date || 'Sin fecha',
        description: data.description || "Haz clic para leer la entrada completa..."
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Últimas entradas del blog
          </h2>
          <div className="h-1 w-24 mx-auto mt-4 bg-gradient-to-r from-primary via-accent to-primary" />
          <p className="text-sm md:text-base text-foreground/70 font-mono tracking-widest uppercase mt-4">
            [ PROYECTOS DESTACADOS Y LOGS DE DESARROLLO ]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group block border border-white/10 rounded-lg p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,100,0,0.15)] bg-white/5"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] font-bold">
                    {post.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors leading-tight line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-foreground/60 text-sm leading-relaxed line-clamp-3">
                  {post.description}
                </p>
                
                <div className="flex items-center gap-2 text-xs font-mono text-foreground/40 group-hover:text-foreground transition-colors pt-2">
                  <span>LEER_MÁS</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block px-8 py-3 border-2 border-primary text-primary font-bold hover:bg-primary hover:text-background transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]"
          >
            Ver todas las entradas
          </Link>
        </div>
      </div>
    </section>
  );
}
