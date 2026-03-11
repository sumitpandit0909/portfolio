"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "Python", "PowerShell","FASTAPI"],
  },
  {
    title: "Frontend Technologies",
    skills: [
      "HTML5",
      "AstroJs",
      "CSS3",
      "React",
      "React Native",
      "React Router",
      "React Query",
      "React Hook Form",
      "Bootstrap",
      "TailwindCSS",
    ],
  },
  {
    title: "Backend Technologies",
    skills: ["Node.js", "Express.js", "NPM"],
  },
  {
    title: "Database Technologies",
    skills: ["MongoDB", "Firebase","VECTOR"],
  },
  {
    title: "State Management",
    skills: ["Redux"],
  },
  {
    title: "Design & Creative Tools",
    skills: ["Adobe Photoshop", "Adobe Creative Cloud", "Canva", "Blender"],
  },
]

export function SkillsSection() {
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
    <section ref={sectionRef} id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Skills & Technologies</h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-card border border-border rounded-xl p-5 group cursor-default
                transition-all duration-500 ease-out
                hover:border-primary/50 hover:bg-card/80 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="font-medium text-sm mb-3 text-primary transition-all duration-300 group-hover:text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-md transition-all duration-300 hover:bg-primary/20 hover:text-primary hover:scale-105 cursor-default"
                    style={{ transitionDelay: `${skillIndex * 30}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
