"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
    >
      <div className="bg-card/90 backdrop-blur-md border border-border/50 rounded-full px-4 py-2.5 transition-all duration-300 hover:border-border">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 px-2 group">
            <div className="w-7 h-7 rounded-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/25 overflow-hidden">
              <img 
                src="/favicon.png" 
                alt="Sumit Pandit Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-medium text-foreground text-sm transition-colors duration-300 group-hover:text-primary">
              Sumit Pandit
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 px-3 py-1.5 rounded-full hover:bg-primary/10"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              size="sm"
              className="rounded-full text-xs h-8 px-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              Hire Me
            </Button>
          </div>

          <button
            className="md:hidden text-foreground p-2 transition-transform duration-300 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-border/50 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-1 pb-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 px-3 py-2 rounded-lg hover:bg-primary/10"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button size="sm" className="rounded-full mt-2 mx-3">
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
