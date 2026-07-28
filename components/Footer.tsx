import { FaTwitch, FaYoutube, FaTiktok, FaDiscord, FaInstagram, FaGithub, FaItchIo } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-8 px-4 md:px-6 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <a
            href="https://www.twitch.tv/sethprie"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitch"
            className="w-10 h-10 border-2 border-primary/40 flex items-center justify-center text-primary/60 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
          >
            <FaTwitch className="w-4 h-4" />
          </a>

          <a
            href="https://www.youtube.com/@sethpriee"
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
            className="w-10 h-10 border-2 border-accent/40 flex items-center justify-center text-accent/60 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-300"
          >
            <FaYoutube className="w-4 h-4" />
          </a>

          <a
            href="https://www.tiktok.com/@sethprie?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            title="TikTok"
            className="w-10 h-10 border-2 border-primary/40 flex items-center justify-center text-primary/60 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
          >
            <FaTiktok className="w-4 h-4" />
          </a>

          <a
            href="https://discord.gg/V89yga8Ut9"
            target="_blank"
            rel="noopener noreferrer"
            title="Discord"
            className="w-10 h-10 border-2 border-accent/40 flex items-center justify-center text-accent/60 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-300"
          >
            <FaDiscord className="w-4 h-4" />
          </a>

          <a
            href="https://www.instagram.com/sethprie/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="w-10 h-10 border-2 border-primary/40 flex items-center justify-center text-primary/60 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
          >
            <FaInstagram className="w-4 h-4" />
          </a>

          <a
            href="https://github.com/Sethprie"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="w-10 h-10 border-2 border-accent/40 flex items-center justify-center text-accent/60 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-300"
          >
            <FaGithub className="w-4 h-4" />
          </a>

          <a
            href="https://sethprie.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
            title="itch.io"
            className="w-10 h-10 border-2 border-primary/40 flex items-center justify-center text-primary/60 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
          >
            <FaItchIo className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-foreground/40 text-xs font-mono tracking-widest uppercase">
          © {new Date().getFullYear()} SETHPRIE
        </p>
      </div>
    </footer>
  );
}
