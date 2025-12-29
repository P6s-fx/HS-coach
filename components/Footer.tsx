import Link from 'next/link'
import { site } from '../data/site'
import { Container } from './Container'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container className="footerInner">
        <div className="footerBrand">
          <img className="footerLogo" src="/images/logo.png" alt={`${site.brand.name} logo`} width={48} height={48} />
          <div className="footerBrandName">{site.brand.name}</div>
          <div className="footerBrandTagline">{site.brand.tagline}</div>
        </div>

        <div className="footerLinks">
          <div className="footerColTitle">Explore</div>
          <ul className="footerList">
            <li>
              <Link className="footerLink" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="footerLink" href="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="footerLink" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="footerLink" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="footerContact">
          <div className="footerColTitle">Contact</div>
          <ul className="footerList">
            <li>
              <a className="footerLink" href={`https://wa.me/${site.contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer">
                {site.contact.phone}
              </a>
            </li>
            <li>
              <a className="footerLink" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
            </li>
            <li>
              <span className="footerLink">{site.contact.address}</span>
            </li>
          </ul>
        </div>

        <div className="footerLegal">
          <div className="footerBottom">
            <div>© {year} {site.brand.name}. All rights reserved.</div>
            <div className="footerAttribution">
              <span>Designed, Developed and Deployed by P6s</span>
              <a className="footerVisit" href="https://param.p6s.in" target="_blank" rel="noreferrer">
                Visit ↗
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
