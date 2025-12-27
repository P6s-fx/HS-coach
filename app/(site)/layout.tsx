import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app">
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </div>
  )
}
