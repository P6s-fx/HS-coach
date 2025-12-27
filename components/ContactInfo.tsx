import { site } from '../data/site'

export function ContactInfo() {
  const whatsappHref = `https://wa.me/${site.contact.whatsapp.replace(/\D/g, '')}`

  return (
    <div className="infoCard">
      <div className="infoTitle">Contact</div>
      <div className="infoRow">
        <div className="infoLabel">Phone / WhatsApp</div>
        <a className="infoValue" href={whatsappHref} target="_blank" rel="noreferrer">
          {site.contact.phone}
        </a>
      </div>
      <div className="infoRow">
        <div className="infoLabel">Email</div>
        <a className="infoValue" href={`mailto:${site.contact.email}`}>
          {site.contact.email}
        </a>
      </div>
      <div className="infoRow">
        <div className="infoLabel">Address</div>
        <div className="infoValue">{site.contact.address}</div>
      </div>
    </div>
  )
}
