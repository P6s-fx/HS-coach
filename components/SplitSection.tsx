import { Container } from './Container'

type SplitSectionProps = {
  imageSrc: string
  eyebrow?: string
  title: string
  paragraphs: readonly string[]
  bullets?: readonly string[]
  reverse?: boolean
}

export function SplitSection({ imageSrc, eyebrow, title, paragraphs, bullets, reverse }: SplitSectionProps) {
  return (
    <section className="section">
      <Container>
        <div className={['split', reverse ? 'splitReverse' : ''].filter(Boolean).join(' ')}>
          <div className="splitMedia">
            <img className="splitImage" src={imageSrc} alt={title} loading="lazy" />
          </div>
          <div className="splitContent">
            {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
            <h2 className="h2">{title}</h2>
            {paragraphs.map((p) => (
              <p key={p} className="p">
                {p}
              </p>
            ))}
            {bullets && bullets.length ? (
              <ul className="bulletList">
                {bullets.map((b) => (
                  <li key={b} className="bulletItem">
                    {b}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  )
}
