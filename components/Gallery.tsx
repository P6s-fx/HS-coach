'use client'

import { useMemo, useState } from 'react'
import type { GalleryItem } from '../data/site'

type GalleryProps = {
  items: GalleryItem[]
}

export function Gallery({ items }: GalleryProps) {
  const [activeId, setActiveId] = useState<string | null>(null)

  const active = useMemo(() => items.find((x) => x.id === activeId) ?? null, [activeId, items])

  return (
    <>
      <div className="galleryGrid">
        {items.map((item) => (
          <button key={item.id} type="button" className="galleryCard" onClick={() => setActiveId(item.id)}>
            <img className="galleryImage" src={item.imageSrc} alt={item.title} loading="lazy" />
            <div className="galleryMeta">
              <div className="galleryTitle">{item.title}</div>
              {item.subtitle ? <div className="gallerySubtitle">{item.subtitle}</div> : null}
            </div>
          </button>
        ))}
      </div>

      {active ? (
        <div className="modalBackdrop" role="dialog" aria-modal="true" onClick={() => setActiveId(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modalTop">
              <div>
                <div className="modalTitle">{active.title}</div>
                {active.subtitle ? <div className="modalSubtitle">{active.subtitle}</div> : null}
              </div>
              <button className="textLink" type="button" onClick={() => setActiveId(null)}>
                Close
              </button>
            </div>
            <img className="modalImage" src={active.imageSrc} alt={active.title} />
          </div>
        </div>
      ) : null}
    </>
  )
}
