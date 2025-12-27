import { Hero } from '../../components/Hero'
import { SplitSection } from '../../components/SplitSection'
import { WorkSections } from '../../components/WorkSections'
import { site } from '../../data/site'

export default function HomePage() {
  return (
    <>
      <Hero content={site.homeHero} />

      <SplitSection
        imageSrc={site.homeSplit.imageSrc}
        eyebrow={site.homeSplit.eyebrow}
        title={site.homeSplit.title}
        paragraphs={site.homeSplit.paragraphs}
        bullets={site.homeSplit.bullets}
      />

      <WorkSections
        eyebrow="Portfolio"
        title="Work, by section"
        subtitle="A quick look at how we build—exteriors, interiors, and finishing, executed with the same premium standard."
        sections={site.work.homeSections}
      />
    </>
  )
}
