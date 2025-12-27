import Link from 'next/link'
import { Container } from '../components/Container'

export default function NotFound() {
  return (
    <section className="section">
      <Container>
        <div className="noteMinimal">
          <div className="eyebrow">404</div>
          <div className="noteMinimalTitle">Page not found</div>
          <div className="p pMuted">The page you are looking for doesn’t exist.</div>
          <div className="spacer12" />
          <Link className="textLink textLinkPrimary" href="/">
            Go Home
          </Link>
        </div>
      </Container>
    </section>
  )
}
