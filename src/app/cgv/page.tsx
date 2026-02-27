import Link from 'next/link'
import Navigation from '@/components/Navigation'

export const metadata = {
  title: 'Conditions Générales de Vente | IA Solutions Guadeloupe',
  description: 'Conditions générales de vente des prestations Smart Prospect.',
}

export default function CGVPage() {
  return (
    <>
      <Navigation currentPage="accueil" />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Conditions Générales de Vente
          </h1>
          <p className="text-blue-200 mb-12">
            Dernière mise à jour : février 2025
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 space-y-8 text-blue-100">
            
            <section>
              <h2 className="text-xl font-bold text-white mb-4">Article 1 – Objet</h2>
              <p className="text-sm leading-relaxed">
                Les présentes Conditions Générales de Vente (CGV) régissent les prestations de prospection B2B proposées par <strong className="text-white">IA Solutions Guadeloupe</strong> (ci-après « le Prestataire ») dans le cadre de la solution Smart Prospect. Tout contrat conclu implique l&apos;acceptation sans réserve des présentes CGV.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Article 2 – Prestations</h2>
              <p className="text-sm leading-relaxed mb-4">
                Les prestations comprennent notamment :
              </p>
              <ul className="text-sm space-y-2 ml-4 list-disc">
                <li>Identification et ciblage de prospects B2B dans la zone définie</li>
                <li>Rédaction de messages personnalisés par IA (Email + WhatsApp)</li>
                <li>Envoi progressif sur environ 30 jours</li>
                <li>Suivi des retours et transmission des prospects intéressés</li>
                <li>Rapport final avec statistiques et recommandations</li>
              </ul>
              <p className="text-sm mt-4">
                Le détail des prestations est précisé dans le devis et le contrat signé pour chaque campagne.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Article 3 – Tarifs et paiement</h2>
              <p className="text-sm leading-relaxed">
                Les tarifs sont indiqués en euros HT sur le devis. Pour la formule Campagne Smart Prospect (2 500 € HT) : <strong className="text-white">acompte de 50 % à la commande</strong>, <strong className="text-white">solde de 50 % au lancement</strong> de la campagne. Paiement par virement bancaire ou en ligne sécurisé. Les montants sont dus à réception de facture.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Article 4 – Obligations du client</h2>
              <p className="text-sm leading-relaxed">
                Le client s&apos;engage à fournir les informations nécessaires au cadrage (cibles, offres, messages), à valider les documents soumis avant lancement, et à répondre aux prospects transmis dans un délai raisonnable (idéalement sous 24 h). Le Prestataire se réserve le droit de refuser ou d&apos;interrompre une campagne si les engagements du client ne sont pas respectés.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Article 5 – Garanties</h2>
              <p className="text-sm leading-relaxed">
                Le Prestataire garantit les <strong className="text-white">moyens</strong> (campagne optimisée, objectif d&apos;environ 50 à 100 décideurs B2B qui ouvrent ou répondent, 30 à 80 prospects intéressés transmis) et non le <strong className="text-white">résultat final</strong> (ventes conclues). La transformation des prospects en clients relève de la responsabilité du client. Aucune garantie de chiffre d&apos;affaires ou de nombre de ventes n&apos;est donnée.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Article 6 – Propriété intellectuelle</h2>
              <p className="text-sm leading-relaxed">
                Les outils, méthodologies et supports du Prestataire restent sa propriété. Le client reçoit les livrables prévus (liste de prospects, rapport) pour son usage interne. Toute reproduction ou diffusion à des tiers sans accord écrit est interdite.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Article 7 – Limitation de responsabilité</h2>
              <p className="text-sm leading-relaxed">
                La responsabilité du Prestataire est limitée au montant des sommes effectivement payées par le client pour la campagne concernée. Le Prestataire ne peut être tenu responsable des dommages indirects (perte de chiffre d&apos;affaires, préjudice commercial, etc.).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Article 8 – Données personnelles</h2>
              <p className="text-sm leading-relaxed">
                Les données personnelles sont traitées conformément à la politique de confidentialité et au RGPD. En signant le contrat, le client accepte les conditions de traitement décrites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Article 9 – Litiges et droit applicable</h2>
              <p className="text-sm leading-relaxed">
                En cas de litige, les parties s&apos;efforceront de trouver une solution amiable. À défaut, les tribunaux français seront seuls compétents. Le droit français est applicable.
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
