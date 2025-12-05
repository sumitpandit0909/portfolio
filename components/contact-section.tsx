"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      // Check if response is OK
      if (!response.ok) {
        // Try to parse error response
        try {
          const errorResult = await response.json()
          throw new Error(errorResult.error || `HTTP error! status: ${response.status}`)
        } catch (parseError) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
      }

      const result = await response.json()

      setSubmitStatus({
        type: 'success',
        message: result.message || 'Message sent successfully! I\'ll get back to you soon.'
      })
      // Reset form
      if (e.currentTarget) {
        e.currentTarget.reset()
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{"Let's Connect"}</h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            {"Have a project in mind? Let's bring your ideas to life!"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            className={`space-y-3 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="bg-card border border-border rounded-xl p-5 group cursor-default transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Mail className="text-primary transition-transform duration-300 group-hover:scale-110" size={18} />
                </div>
                <div>
                  <h3 className="font-medium text-sm transition-colors duration-300 group-hover:text-primary">Email</h3>
                  <p className="text-muted-foreground text-sm">its.sumitpandit@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 group cursor-default transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Phone className="text-primary transition-transform duration-300 group-hover:scale-110" size={18} />
                </div>
                <div>
                  <h3 className="font-medium text-sm transition-colors duration-300 group-hover:text-primary">Phone</h3>
                  <p className="text-muted-foreground text-sm">+91 85272567XX</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 group cursor-default transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <MapPin className="text-primary transition-transform duration-300 group-hover:scale-110" size={18} />
                </div>
                <div>
                  <h3 className="font-medium text-sm transition-colors duration-300 group-hover:text-primary">
                    New Delhi
                  </h3>
                  <p className="text-muted-foreground text-sm">India</p>
                </div>
              </div>
            </div>
          </div>

          <form
            className={`bg-card border border-border rounded-xl p-5 space-y-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            onSubmit={handleSubmit}
          >
            <div className="group">
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-1.5 transition-colors duration-300 group-focus-within:text-primary"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2.5 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-foreground text-sm transition-all duration-300 hover:border-primary/30"
                placeholder="Your name"
              />
            </div>
            <div className="group">
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1.5 transition-colors duration-300 group-focus-within:text-primary"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2.5 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-foreground text-sm transition-all duration-300 hover:border-primary/30"
                placeholder="your@email.com"
              />
            </div>
            <div className="group">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1.5 transition-colors duration-300 group-focus-within:text-primary"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-3 py-2.5 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none text-foreground text-sm transition-all duration-300 hover:border-primary/30"
                placeholder="Tell me about your project..."
              />
            </div>

            {submitStatus.type && (
              <div
                className={`p-3 rounded-lg text-sm ${submitStatus.type === 'success' ? 'bg-green-500/10 text-green-600 border border-green-500/20' : 'bg-red-500/10 text-red-600 border border-red-500/20'}`}
              >
                {submitStatus.message}
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg gap-2 h-10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
