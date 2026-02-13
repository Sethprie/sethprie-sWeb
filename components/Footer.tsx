export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-8 px-4 md:px-6 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-foreground/40 text-xs font-mono tracking-widest uppercase">
          © {new Date().getFullYear()} SETHPRIE
        </p>
      </div>
    </footer>
  );
}
