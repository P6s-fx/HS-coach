import Link from 'next/link'
import type { HeroContent } from '../data/site'
import { Container } from './Container'

type HeroProps = {
  content: HeroContent
}

export function Hero({ content }: HeroProps) {
  return (
    <section className="hero">
      <div className="heroMedia" aria-hidden="true">
        <img className="heroImage" src={content.imageSrc} alt="" />
        <div className="heroShade" />
      </div>
      <Container>
        <div className="heroInner">
          {content.eyebrow ? <div className="heroEyebrow">{content.eyebrow}</div> : null}

          <h1 className="heroTitle" aria-label={content.titleLines.join(' ')}>
            {content.titleLines.map((line, idx) => (
              <span key={`${line}-${idx}`} className="heroTitleLine">
                <span className="heroTitleReveal" style={{ animationDelay: `${120 + idx * 120}ms` }}>
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p className="heroSubtitle heroFadeIn" style={{ animationDelay: '420ms' }}>
            {content.subtitle}
          </p>

          <div className="heroLinks heroFadeIn" style={{ animationDelay: '520ms' }}>
            <Link className="textLink textLinkPrimary" href={content.primaryCta.href}>
              {content.primaryCta.label}
            </Link>
            {content.secondaryCta ? (
              <Link className="textLink" href={content.secondaryCta.href}>
                {content.secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  )
}
