import { ContactInfo } from '../../../components/ContactInfo'
import { Container } from '../../../components/Container'
import { Hero } from '../../../components/Hero'
import { InquiryForm } from '../../../components/InquiryForm'
import { WorkSections } from '../../../components/WorkSections'
import { site } from '../../../data/site'

export default function ServicesPage() {
  return (
    <>
      <Hero content={site.servicesHero} />

      <section className="section">
        <Container>
          <div className="sectionHeaderMinimal">
            <div className="eyebrow">What we do</div>
            <h2 className="h2">Services</h2>
            <p className="p pMuted">{site.services.intro}</p>
          </div>

          <div className="serviceGridMinimal">
            {site.services.items.map((s) => (
              <div key={s.id} className="serviceItem">
                <div className="serviceItemTitle">{s.title}</div>
                <div className="serviceItemText">{s.description}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <WorkSections
        id="work"
        eyebrow="Gallery"
        title="Work photos"
        subtitle="Browse more examples across fabrication, skins, finishing, and interior upgrades."
        sections={site.work.servicesSections}
      />

      <section className="section">
        <Container>
          <div className="contactSection">
            <InquiryForm title="Get a quote" hint="Share your requirements. We’ll respond with next steps and timelines." />
            <ContactInfo />
          </div>
        </Container>
      </section>
    </>
  )
}
