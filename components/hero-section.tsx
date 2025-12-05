"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      <div className="text-center px-4 max-w-3xl mx-auto relative z-10">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-semibold mb-2 text-balance tracking-tight transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="italic">{"I'm Sumit Pandit."}</span>
        </h1>
        <h2
          className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Built to create.
        </h2>

        <p
          className={`text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-8 text-pretty leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Full Stack Developer & 3D Enthusiast building innovative digital experiences. Founder of Devliqly &
          LeadstechAI, transforming ideas into scalable solutions.
        </p>

        <div
          className={`flex flex-wrap items-center justify-center gap-4 mb-10 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Button className="rounded-full gap-2 h-11 px-6 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
            Get in Touch
          </Button>
          <Button
            variant="outline"
            className="rounded-full gap-2 h-11 px-6 font-medium bg-transparent border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
          >
            View Projects
          </Button>
        </div>

        <div
          className={`flex items-center justify-center gap-4 transition-all duration-700 delay-[400ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <a
            href="https://github.com/sumitpandit0909"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:scale-110 hover:-translate-y-1"
            aria-label="GitHub"
          >
            <Github size={18} className="text-muted-foreground transition-colors duration-300 hover:text-primary" />
          </a>
          <a
            href="https://www.linkedin.com/in/sumitpandit0909/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:scale-110 hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} className="text-muted-foreground transition-colors duration-300 hover:text-primary" />
          </a>
          <a
            href="mailto:its.sumitpandit@gmail.com"
            className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:scale-110 hover:-translate-y-1"
            aria-label="Email"
          >
            <Mail size={18} className="text-muted-foreground transition-colors duration-300 hover:text-primary" />
          </a>
        </div>
      </div>
    </section>
  )
}
