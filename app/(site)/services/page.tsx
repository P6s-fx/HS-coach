import { Container } from '../../../components/Container'
import { Hero } from '../../../components/Hero'
import { WorkSections } from '../../../components/WorkSections'
import { site } from '../../../data/site'

export default function ServicesPage() {
  return (
    <>
      <Hero content={site.servicesHero} />

      <section className="section">
        <Container>
          <div className="sectionHeaderMinimal">
            <div className="eyebrow">Services</div>
            <h2 className="h2">What we build</h2>
            <p className="p pMuted">{site.services.intro}</p>
          </div>

          <div className="cardsGrid">
            {site.services.items.map((item) => (
              <div key={item.id} className="card">
                <div className="cardTitle">{item.title}</div>
                <div className="cardDesc">{item.description}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <WorkSections
        id="work"
        eyebrow="Portfolio"
        title="Work, by service"
        subtitle="A selection of builds across structure, finishing, and interiors."
        sections={site.work.servicesSections}
      />
    </>
  )
}
