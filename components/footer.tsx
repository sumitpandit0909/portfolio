import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-6 px-4 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-[10px]">SP</span>
            </div>
            <span className="font-medium text-sm">Sumit Pandit</span>
          </div>

          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Sumit Pandit. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/sumitpandit0909"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/50 transition-colors"
              aria-label="GitHub"
            >
              <Github size={14} className="text-muted-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/sumitpandit0909/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} className="text-muted-foreground" />
            </a>
            <a
              href="https://x.com/sumitpandit0909"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/50 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={14} className="text-muted-foreground" />
            </a>
            <a
              href="mailto:its.sumitpandit@gmail.com"
              className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/50 transition-colors"
              aria-label="Email"
            >
              <Mail size={14} className="text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
