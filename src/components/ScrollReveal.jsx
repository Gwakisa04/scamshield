import { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({
  children,
  className = '',
  variant = 'fade-up',
  delay = 0,
  as: Tag = 'div',
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

export function StaggerGroup({ children, className = '', stagger = 100, baseDelay = 0 }) {
  return (
    <div className={className}>
      {Array.isArray(children)
        ? children.map((child, i) =>
            child ? (
              <ScrollReveal
                key={child.key ?? i}
                delay={baseDelay + i * stagger}
              >
                {child}
              </ScrollReveal>
            ) : null,
          )
        : children}
    </div>
  )
}
