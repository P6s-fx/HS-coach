import type { WorkSection } from '../data/site'
import { Container } from './Container'
import { Gallery } from './Gallery'

type WorkSectionsProps = {
  id?: string
  eyebrow?: string
  title: string
  subtitle?: string
  sections: WorkSection[]
}

export function WorkSections({ id, eyebrow, title, subtitle, sections }: WorkSectionsProps) {
  return (
    <section id={id} className="section">
      <Container>
        <div className="sectionHeaderMinimal">
          {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
          <h2 className="h2">{title}</h2>
          {subtitle ? <p className="p pMuted">{subtitle}</p> : null}
        </div>

        <div className="workSections">
          {sections.map((section) => (
            <div key={section.id} className="workSection">
              <div className="workSectionHead">
                <div className="workSectionTitle">{section.title}</div>
                {section.description ? <div className="workSectionDesc">{section.description}</div> : null}
              </div>
              <Gallery items={section.items} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
