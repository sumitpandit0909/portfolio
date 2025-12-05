"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "ZeroClipping",
    description:
      "A powerful content scaling platform connecting brands with expert clippers to boost reach through short-form content creation.",
    image: "/projects/zeroclipping.png",
    tags: ["Next.js", "Node.js", "AI/ML"],
    link: "https://www.zeroclipping.com/",
  },
  {
    title: "MailFlow",
    description: "Secure email authentication and management system with modern dark UI and seamless user experience.",
    image: "/projects/mail.png",
    tags: ["Next.js", "Auth", "Tailwind CSS"],
    link: "https://mail.zeroclipping.com/auth/login",
  },
  {
    title: "Career Creation 247",
    description:
      "Comprehensive career guidance platform helping students discover opportunities and achieve professional success.",
    image: "/projects/career.png",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://careercreation247.com/",
  },
  {
    title: "Bhutani Infra Noida",
    description:
      "A modern real estate website for Bhutani Infra showcasing premium commercial properties and investment opportunities in Noida.",
    image: "/projects/bhutani.webp",
    tags: ["Astro", "React", "Tailwind CSS"],
    link: "https://bhutani-infra.vercel.app/",
  },
  {
    title: "Quazire AI Studio",
    description:
      "An AI-powered creative studio platform offering custom AI solutions and innovative tools for businesses.",
    image: "/projects/quazire.webp",
    tags: ["Astro", "AI/ML", "Tailwind CSS"],
    link: "https://quazire-astro.vercel.app/",
  },
  {
    title: "BlueDolphin Logistics",
    description:
      "Professional logistics and shipping company website with service tracking and comprehensive freight solutions.",
    image: "/projects/bluedolphin.webp",
    tags: ["Next.js", "Node.js", "MongoDB"],
    link: "https://bluedolphinlogistics.com",
  },
  {
    title: "Career Creation",
    description:
      "Educational platform empowering students with career guidance, courses, and professional development resources.",
    image: "/projects/career.webp",
    tags: ["React", "Node.js", "Firebase"],
    link: "https://careercreation247.com",
  },
  {
    title: "LeadsTech AI",
    description:
      "AI-powered lead generation and digital marketing platform delivering smart solutions for business growth.",
    image: "/projects/leadstech.webp",
    tags: ["Next.js", "AI/ML", "Python"],
    link: "https://leadstechai.com",
  },
  {
    title: "Mudramoney Finance",
    description:
      "Financial services platform offering secure loan solutions and financial planning for individuals and businesses.",
    image: "/projects/mudramoney.webp",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://mudramoneyfinance.com",
  },
  {
    title: "Swastik Edu",
    description:
      "Educational institution website featuring course catalog, student portal, and comprehensive academic resources.",
    image: "/projects/swastik.webp",
    tags: ["Astro", "React", "Tailwind CSS"],
    link: "https://swastikedu.vercel.app",
  },
  {
    title: "Aquaduct Logistics",
    description:
      "Global logistics company website offering hassle-free shipping, warehousing, and supply chain management services.",
    image: "/projects/aquaduct.webp",
    tags: ["Next.js", "Node.js", "Stripe"],
    link: "https://aquaductlogistics.com",
  },
]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Featured Projects</h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">Innovative solutions that make a difference</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-card border border-border rounded-xl overflow-hidden group cursor-default
                transition-all duration-500 ease-out
                hover:border-primary/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2 transition-colors duration-300 group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-md transition-all duration-300 hover:bg-primary/20 hover:text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-full gap-1.5 h-8 text-xs bg-transparent border-border hover:border-primary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <ExternalLink size={12} />
                  Live Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
