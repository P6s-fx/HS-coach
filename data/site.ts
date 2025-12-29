export type GalleryItem = {
  id: string
  title: string
  subtitle?: string
  imageSrc: string
  tags?: string[]
}

export type WorkSection = {
  id: string
  title: string
  description?: string
  items: GalleryItem[]
}

export type HeroContent = {
  eyebrow?: string
  titleLines: string[]
  subtitle: string
  imageSrc: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export type ServiceItem = {
  id: string
  title: string
  description: string
}

export const site = {
  brand: {
    name: 'HS coach',
    tagline: 'Modern luxury coach manufacturing for premium interiors and sculpted exteriors.',
  },
  contact: {
    phone: '+91 97375 77979',
    email: 'contact.hscoach@gmail.com',
    address: 'HS Coach, Survey No. 470, NH-48, Ahmedabad - Himmatnagar Highway, Fulpura Road, Valad, Gandhinagar',
    whatsapp: '9737577979',
  },
  services: {
    intro:
      'From concept sketches to delivery-ready builds, we manufacture luxury coaches with precision, consistency, and a premium finish.',
    items: [
      {
        id: 'coach-body',
        title: 'Coach Body Manufacturing',
        description:
          'Full coach body fabrication with structural integrity, weight balance, and premium fit-and-finish.',
      },
      {
        id: 'bus-skins',
        title: 'Luxury Bus Skins',
        description:
          'Modern skin designs with precise alignment, premium materials, and striking visual presence.',
      },
      {
        id: 'paint-finishing',
        title: 'Paint & Finishing',
        description:
          'High-quality paint systems and finishing processes engineered for long-lasting gloss and durability.',
      },
      {
        id: 'refurb-upgrade',
        title: 'Refurbishment & Upgrades',
        description:
          'Exterior and interior upgrades to modernize older coaches and restore premium appeal.',
      },
    ] satisfies ServiceItem[],
  },
  about: {
    title: 'Built for luxury. Engineered for the road.',
    paragraphs: [
      'HS coach manufactures luxury coach bodies and custom bus skins with a detail-first approach.',
      'Our team focuses on consistent panel gaps, clean lines, robust mounting, and premium finishing so the final vehicle looks exceptional and performs reliably.',
    ],
    stats: [
      { label: 'Years of craft', value: '10+' },
      { label: 'Premium builds', value: '250+' },
      { label: 'On-time delivery focus', value: 'High' },
    ],
  },
  homeHero: {
    eyebrow: 'Luxury Coach Manufacturing',
    titleLines: ['Designed for presence.', 'Built for comfort.'],
    subtitle:
      'We craft modern luxury bus interiors and refined exterior bodies—built with precision, finished with restraint, and delivered with pride.',
    imageSrc: '/images/hero/home-hero.svg',
    primaryCta: { label: 'View Services', href: '/services' },
    secondaryCta: { label: 'Start an Enquiry', href: '/contact' },
  } satisfies HeroContent,
  servicesHero: {
    eyebrow: 'Services',
    titleLines: ['End-to-end coach building', 'with premium execution.'],
    subtitle:
      'From fabrication and skins to interior finishing and upgrades, our workshop delivers cohesive luxury—inside and out.',
    imageSrc: '',
    primaryCta: { label: 'Enquire Now', href: '/contact' },
    secondaryCta: { label: 'See Work', href: '/services#work' },
  } satisfies HeroContent,
  homeSplit: {
    imageSrc: '/images/illustrations/coach-vector.svg',
    eyebrow: 'Craft + Consistency',
    title: 'Luxury is built on repeatable precision.',
    paragraphs: [
      'We obsess over the details that define premium builds: clean panel gaps, aligned surfaces, consistent finishing, and interiors that feel calm and intentional.',
      'Whether you need a full coach body or a premium upgrade, we design and execute with a clear visual language—modern, minimal, and unmistakably luxury.',
    ],
    bullets: ['Exterior body fabrication', 'Luxury skins & finishing', 'Interior fit-out & upgrades'],
  },
  work: {
    homeSections: [
      {
        id: 'exteriors',
        title: 'Exteriors & Skins',
        description: 'Modern lines, premium materials, and a finish that holds up on the road.',
        items: [
          {
            id: 'skin-01',
            title: 'Pearl Black + Gold Accent',
            subtitle: 'Luxury skin package',
            imageSrc: '/images/skins/skin-01.svg',
            tags: ['Skin', 'Luxury'],
          },
          {
            id: 'skin-02',
            title: 'Metallic Silver + Charcoal',
            subtitle: 'Executive coach look',
            imageSrc: '/images/skins/skin-02.svg',
            tags: ['Skin'],
          },
          {
            id: 'skin-03',
            title: 'Deep Blue + Chrome',
            subtitle: 'Premium touring',
            imageSrc: '/images/skins/skin-03.svg',
            tags: ['Skin'],
          },
        ] satisfies GalleryItem[],
      },
      {
        id: 'interiors',
        title: 'Interiors',
        description: 'Comfort-driven layouts with premium trim and clean lighting.',
        items: [
          {
            id: 'work-03',
            title: 'Interior Detailing',
            subtitle: 'Luxury seating & trim',
            imageSrc: '/images/work/work-03.svg',
            tags: ['Interior'],
          },
        ] satisfies GalleryItem[],
      },
    ] satisfies WorkSection[],
    servicesSections: [
      {
        id: 'fabrication',
        title: 'Fabrication & Structure',
        description: 'Solid foundations for long life, stability, and premium fitment.',
        items: [
          {
            id: 'work-01',
            title: 'Structure & Panel Fitment',
            subtitle: 'In-progress build',
            imageSrc: '/images/work/work-01.svg',
            tags: ['Build'],
          },
          {
            id: 'work-04',
            title: 'Frame Alignment',
            subtitle: 'Precision checks',
            imageSrc: '/images/work/work-04.svg',
            tags: ['Build'],
          },
        ] satisfies GalleryItem[],
      },
      {
        id: 'finish',
        title: 'Paint & Finish',
        description: 'Durable systems, consistent gloss, and a calm premium look.',
        items: [
          {
            id: 'work-02',
            title: 'Final Paint & Polish',
            subtitle: 'Delivery finish',
            imageSrc: '/images/work/work-02.jpg',
            tags: ['Finish'],
          },
          {
            id: 'work-05',
            title: 'Panel Finishing',
            subtitle: 'Surface prep & detailing',
            imageSrc: '/images/work/work-05.jpg',
            tags: ['Finish'],
          },
        ] satisfies GalleryItem[],
      },
      {
        id: 'interior',
        title: 'Interior Upgrades',
        description: 'Lighting, trims, and seating—executed as one cohesive interior.',
        items: [
          {
            id: 'work-06',
            title: 'Luxury Cabin Fit-out',
            subtitle: 'Premium materials',
            imageSrc: '/images/work/work-06.jpg',
            tags: ['Interior'],
          },
        ] satisfies GalleryItem[],
      },
    ] satisfies WorkSection[],
  },
} as const
