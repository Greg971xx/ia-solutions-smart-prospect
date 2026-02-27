import Link from 'next/link'
import Navigation from '@/components/Navigation'

export const metadata = {
  title: 'Politique de confidentialité | IA Solutions Guadeloupe',
  description: 'Politique de confidentialité et protection des données personnelles - RGPD.',
}

export default function ConfidentialitePage() {
  return (
    <>
      <Navigation currentPage="accueil" />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Politique de confidentialité
          </h1>
          <p className="text-blue-200 mb-12">
            Dernière mise à jour : février 2025
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 space-y-8 text-blue-100">
            
            <section>
              <h2 className="text-xl font-bold text-white mb-4">1. Responsable du traitement</h2>
              <p className="text-sm leading-relaxed">
                Le responsable du traitement des données personnelles est :<br />
                <strong className="text-white">IA Solutions Guadeloupe</strong> — Grégory DECLERCQ<br />
                Contact : gregory@ia-solutions-guadeloupe.fr<br />
                Téléphone : +33 7 69 18 20 76
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">2. Données collectées</h2>
              <p className="text-sm leading-relaxed mb-4">
                Nous collectons les données suivantes dans le cadre de nos services :
              </p>
              <ul className="text-sm space-y-2 ml-4 list-disc">
                <li><strong className="text-white">Formulaire de contact</strong> : nom, prénom, email, téléphone, entreprise, secteur, message</li>
                <li><strong className="text-white">Chatbot / Brief campagne</strong> : nom, email, téléphone, entreprise, secteur, objectifs de campagne, zone géographique</li>
                <li><strong className="text-white">Navigation</strong> : adresse IP, cookies (voir section Cookies), données de connexion</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">3. Finalités et base légale</h2>
              <p className="text-sm leading-relaxed mb-4">
                Vos données sont traitées pour :
              </p>
              <ul className="text-sm space-y-2 ml-4 list-disc">
                <li>Répondre à vos demandes de contact et démos</li>
                <li>Préparer et vous transmettre des propositions commerciales personnalisées</li>
                <li>Gérer la relation client et les campagnes Smart Prospect</li>
                <li>Améliorer nos services et l&apos;expérience utilisateur</li>
                <li>Respecter nos obligations légales</li>
              </ul>
              <p className="text-sm mt-4">
                Base légale : exécution d&apos;un contrat ou de mesures précontractuelles, consentement, intérêt légitime.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">4. Destinataires et durée de conservation</h2>
              <p className="text-sm leading-relaxed">
                Les données sont destinées au responsable du traitement et, le cas échéant, à des prestataires techniques (hébergement, emails) soumis à des obligations de confidentialité. Elles sont conservées pendant la durée de la relation commerciale, puis pendant 3 ans à des fins de prospection, ou plus si obligation légale.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">5. Vos droits (RGPD)</h2>
              <p className="text-sm leading-relaxed mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
              </p>
              <ul className="text-sm space-y-2 ml-4 list-disc">
                <li><strong className="text-white">Droit d&apos;accès</strong> : obtenir une copie de vos données</li>
                <li><strong className="text-white">Droit de rectification</strong> : corriger des données inexactes</li>
                <li><strong className="text-white">Droit à l&apos;effacement</strong> : demander la suppression de vos données</li>
                <li><strong className="text-white">Droit à la limitation</strong> : restreindre le traitement</li>
                <li><strong className="text-white">Droit d&apos;opposition</strong> : vous opposer au traitement, notamment à la prospection</li>
                <li><strong className="text-white">Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              </ul>
              <p className="text-sm mt-4">
                Pour exercer ces droits : gregory@ia-solutions-guadeloupe.fr. Vous avez également le droit d&apos;introduire une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">www.cnil.fr</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">6. Cookies</h2>
              <p className="text-sm leading-relaxed">
                Ce site peut utiliser des cookies pour améliorer la navigation et analyser le trafic (cookies essentiels, analytiques). Vous pouvez gérer vos préférences via le bandeau de consentement ou les paramètres de votre navigateur.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">7. Sécurité</h2>
              <p className="text-sm leading-relaxed">
                Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données contre tout accès, modification, divulgation ou destruction non autorisés.
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
