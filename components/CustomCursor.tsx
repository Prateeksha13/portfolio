'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ring = ringRef.current
    const dot = dotRef.current
    if (!ring || !dot) return

    let mouseX = -100
    let mouseY = -100
    let ringX = -100
    let ringY = -100
    let rafId: number
    let hideTimer: ReturnType<typeof setTimeout>

    const isTouch = window.matchMedia('(pointer: coarse)').matches

    const showCursor = () => {
      clearTimeout(hideTimer)
      ring.style.opacity = '1'
      dot.style.opacity = '1'
    }

    const hideCursor = () => {
      ring.style.opacity = '0'
      dot.style.opacity = '0'
    }

    // Start hidden on touch devices
    if (isTouch) hideCursor()

    // ── Desktop mouse ──────────────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
    }

    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button, [data-hover]')) {
        ring.classList.add('is-hovered')
      }
    }

    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button, [data-hover]')) {
        ring.classList.remove('is-hovered')
      }
    }

    // ── Mobile touch ───────────────────────────────────────
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0]
      mouseX = t.clientX
      mouseY = t.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
      showCursor()
    }

    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0]
      mouseX = t.clientX
      mouseY = t.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
      showCursor()
    }

    // Disappear shortly after finger lifts (after click)
    const onTouchEnd = () => {
      hideTimer = setTimeout(hideCursor, 200)
    }

    // ── RAF loop for lagging ring ──────────────────────────
    const animate = () => {
      ringX += (mouseX - ringX) * 0.1
      ringY += (mouseY - ringY) * 0.1
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', onTouchEnd)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
      cancelAnimationFrame(rafId)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
