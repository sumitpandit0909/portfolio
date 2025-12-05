"use client"

import { useEffect, useRef, useState } from "react"
import { Rocket, Building2, GraduationCap } from "lucide-react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">About Me</h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Passionate developer building the future of web
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div
            className={`space-y-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <p className="text-muted-foreground leading-relaxed">
              {
                "Hi, I'm Sumit Pandit, a passionate web developer and tech enthusiast pursuing a B.Tech in Computer Science and Technology. I specialize in full-stack development with expertise in the MERN stack and modern frameworks like Astro."
              }
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {
                "I'm the founder of Devliqly, a dropservicing platform offering services in web development, AI development, and more, and I lead LeadstechAI, delivering solutions in lead generation and digital marketing."
              }
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {
                "With a strong focus on innovation, I've presented research on Cloud Computing for AI. Let's connect and bring impactful ideas to life!"
              }
            </p>
          </div>

          <div
            className={`space-y-3 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="bg-card border border-border rounded-xl p-5 group cursor-default transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Building2
                    className="text-primary transition-transform duration-300 group-hover:scale-110"
                    size={20}
                  />
                </div>
                <div>
                  <h3 className="font-semibold mb-0.5 transition-colors duration-300 group-hover:text-primary">
                    Founder @ Devliqly
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Dropservicing platform for web dev, AI development & more
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 group cursor-default transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Rocket className="text-primary transition-transform duration-300 group-hover:scale-110" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-0.5 transition-colors duration-300 group-hover:text-primary">
                    Lead @ LeadstechAI
                  </h3>
                  <p className="text-muted-foreground text-sm">Lead generation and digital marketing solutions</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 group cursor-default transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <GraduationCap
                    className="text-primary transition-transform duration-300 group-hover:scale-110"
                    size={20}
                  />
                </div>
                <div>
                  <h3 className="font-semibold mb-0.5 transition-colors duration-300 group-hover:text-primary">
                    B.Tech CST
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Computer Science & Technology with Research in Cloud Computing for AI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
