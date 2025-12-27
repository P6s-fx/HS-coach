import { Container } from '../../../components/Container'
import { SplitSection } from '../../../components/SplitSection'
import { site } from '../../../data/site'

export default function AboutPage() {
  return (
    <>
      <section className="contactHero">
        <Container>
          <div className="contactHeroInner">
            <div className="eyebrow">About</div>
            <h1 className="h1">{site.about.title}</h1>
            <p className="p pMuted">A detail-first workshop focused on modern luxury interiors and premium exterior bodies.</p>
          </div>
        </Container>
      </section>

      <SplitSection
        imageSrc={site.homeSplit.imageSrc}
        eyebrow="Our approach"
        title="A calm luxury language—inside and out."
        paragraphs={site.about.paragraphs}
        bullets={site.homeSplit.bullets}
        reverse
      />

      <section className="section">
        <Container>
          <div className="statsRow">
            {site.about.stats.map((s) => (
              <div key={s.label} className="statMinimal">
                <div className="statMinimalValue">{s.value}</div>
                <div className="statMinimalLabel">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
