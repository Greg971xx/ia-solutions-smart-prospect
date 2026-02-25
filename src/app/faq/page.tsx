import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function FAQPage() {
  return (
    <>
      <Navigation currentPage="accueil" />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">FAQ</h1>
          <p className="text-gray-300 text-lg">
            Contenu à venir. Retour à l&apos;<Link href="/" className="text-blue-400 hover:underline">accueil</Link>.
          </p>
        </div>
      </main>
    </>
  )
}
