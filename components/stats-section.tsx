"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Briefcase, FolderKanban, Users } from "lucide-react"

const stats = [
  { icon: Briefcase, value: "3+", label: "Years Experience" },
  { icon: FolderKanban, value: "57+", label: "Projects Completed" },
  { icon: Award, value: "6", label: "Awards Won" },
  { icon: Users, value: "27+", label: "Happy Clients" },
]

export function StatsSection() {
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
    <section ref={sectionRef} className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`bg-card border border-border rounded-xl p-5 text-center group cursor-default
                transition-all duration-500 ease-out
                hover:border-primary/50 hover:bg-card/80 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <stat.icon className="text-primary transition-transform duration-300 group-hover:scale-110" size={20} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-0.5 transition-colors duration-300 group-hover:text-primary">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
