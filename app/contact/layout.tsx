import { Navbar } from '../../components/Navbar'

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app">
      <Navbar />
      <main className="main">{children}</main>
    </div>
  )
}
