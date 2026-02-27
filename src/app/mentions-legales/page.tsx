import Link from 'next/link'
import Navigation from '@/components/Navigation'

export const metadata = {
  title: 'Mentions légales | IA Solutions Guadeloupe',
  description: 'Mentions légales du site IA Solutions Guadeloupe - Smart Prospect.',
}

export default function MentionsLegalesPage() {
  return (
    <>
      <Navigation currentPage="accueil" />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Mentions légales
          </h1>
          <p className="text-blue-200 mb-12">
            Dernière mise à jour : février 2025
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 space-y-8 text-blue-100">
            
            <section>
              <h2 className="text-xl font-bold text-white mb-4">1. Éditeur du site</h2>
              <p className="text-sm leading-relaxed mb-2">
                Le site <strong className="text-white">ia-solutions-guadeloupe.fr</strong> (ou domaine en vigueur) est édité par :
              </p>
              <ul className="text-sm space-y-1 ml-4 list-disc">
                <li><strong className="text-white">IA Solutions Guadeloupe</strong></li>
                <li>Responsable de la publication : Grégory DECLERCQ</li>
                <li>Contact : gregory@ia-solutions-guadeloupe.fr</li>
                <li>Téléphone : +33 7 69 18 20 76</li>
                <li>Localisation : Guadeloupe, Antilles françaises</li>
              </ul>
              <p className="text-xs text-blue-300 mt-4 italic">
                Merci de compléter avec la forme juridique (auto-entrepreneur, SARL, SAS…), le numéro SIRET et l&apos;adresse postale complète.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">2. Hébergeur</h2>
              <p className="text-sm leading-relaxed">
                Ce site est hébergé par :<br />
                <strong className="text-white">Vercel Inc.</strong><br />
                440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">vercel.com</a>
              </p>
              <p className="text-xs text-blue-300 mt-4 italic">
                Modifiez cette section si votre hébergement est différent (OVH, O2Switch, etc.).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">3. Propriété intellectuelle</h2>
              <p className="text-sm leading-relaxed">
                L&apos;ensemble du contenu de ce site (textes, images, logos, structure, design) est protégé par le droit d&apos;auteur et la propriété intellectuelle. Toute reproduction, distribution ou utilisation sans autorisation écrite préalable est interdite.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">4. Limitation de responsabilité</h2>
              <p className="text-sm leading-relaxed">
                IA Solutions Guadeloupe s&apos;efforce d&apos;assurer l&apos;exactitude des informations publiées sur ce site. Toutefois, elle ne peut garantir l&apos;absence d&apos;erreurs ou d&apos;omissions. L&apos;utilisateur assume l&apos;ensemble des risques liés à l&apos;utilisation des informations fournies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">5. Liens hypertextes</h2>
              <p className="text-sm leading-relaxed">
                Ce site peut contenir des liens vers des sites externes. IA Solutions Guadeloupe n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu. La création de liens vers ce site est soumise à autorisation préalable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">6. Droit applicable</h2>
              <p className="text-sm leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-block text-blue-400 hover:text-white transition-colors"
            >
              ← Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
