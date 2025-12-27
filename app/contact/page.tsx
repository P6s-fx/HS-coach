import { ContactInfo } from '../../components/ContactInfo'
import { Container } from '../../components/Container'
import { InquiryForm } from '../../components/InquiryForm'
import { site } from '../../data/site'

export default function ContactPage() {
  return (
    <>
      <section className="contactHero">
        <Container>
          <div className="contactHeroInner">
            <div className="eyebrow">{site.brand.name}</div>
            <h1 className="h1">Enquiries & project requests</h1>
            <p className="p pMuted">
              Tell us what you want to build—interior upgrades, exterior skins, full coach body manufacturing, or refurbishment.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="contactSection">
            <InquiryForm
              title="Enquiry form"
              hint="Add as much detail as possible. If you have reference images, mention them and we can request them on WhatsApp."
            />
            <ContactInfo />
          </div>
        </Container>
      </section>
    </>
  )
}
