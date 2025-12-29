'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { Container } from './Container'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }

    if (open) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <>
      <div className="nav">
        <Container className="navInner">
          <Link href="/" className="brand">
            <img className="brandLogo" src="/images/logo.png" alt={`${site.brand.name} logo`} width={34} height={34} />
            <span className="brandName">{site.brand.name}</span>
          </Link>

          <div className="navRight">
            <div className="navLinks" aria-label="Primary">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={['navLink', isActive ? 'navLinkActive' : ''].filter(Boolean).join(' ')}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>

            <button
              type="button"
              className="navToggle"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <div className={['navToggleIcon', open ? 'navToggleIconOpen' : ''].filter(Boolean).join(' ')}>
                <span />
                <span />
              </div>
            </button>
          </div>
        </Container>
      </div>

      <div className={['navOverlay', open ? 'navOverlayOpen' : ''].filter(Boolean).join(' ')} onClick={() => setOpen(false)} />

      <div className={['navDrawer', open ? 'navDrawerOpen' : ''].filter(Boolean).join(' ')} role="dialog" aria-modal="true">
        <div className="navDrawerInner">
          <div className="navDrawerHeader">
            <div className="navDrawerTitle">Menu</div>
            <button type="button" className="navDrawerClose" aria-label="Close menu" onClick={() => setOpen(false)}>
              <span className="navDrawerCloseIcon" aria-hidden="true" />
            </button>
          </div>

          <nav className="navDrawerLinks" aria-label="Mobile">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={['navDrawerLink', isActive ? 'navDrawerLinkActive' : ''].filter(Boolean).join(' ')}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </>
  )
}
