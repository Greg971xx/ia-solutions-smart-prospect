import Link from "next/link"
import Image from "next/image"
import ChatbotWidget from "@/components/ChatbotWidget"
import Navigation from "@/components/Navigation"

export default function HomePage() {
  
  return (
    <>
      <Navigation currentPage="accueil" />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/5 to-transparent animate-pulse"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              
              <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 px-4 py-2 rounded-full text-blue-300 mb-8">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">🇬🇵 Guadeloupe • 🇲🇶 Martinique • 🇬🇫 Guyane</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Et si vos meilleurs clients
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block mt-2">
                  n'étaient pas ceux que vous contactez ?
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                <strong className="text-white">Vous vendez aux particuliers ?</strong> Des entreprises, clubs et collectivités ont besoin de vous. <strong className="text-white">Vous faites déjà du B2B ?</strong> Vous ne touchez qu&apos;une partie de votre marché. <strong className="text-white">Développé pour un leader mondial du retail</strong>, Smart Prospect active un levier trop souvent négligé : <strong className="text-blue-400">les clients corporate</strong>.
              </p>

              <p className="text-lg text-gray-400 mb-2 max-w-3xl mx-auto">
                En <strong className="text-blue-400">30 jours</strong>, nous visons <strong className="text-blue-400">~100 messages ouverts ou conversations</strong> avec des décideurs B2B — et nous vous livrons :
              </p>
              <p className="text-sm text-gray-500 mb-6 max-w-3xl mx-auto italic">
                visibilité, message personnalisé par prospect, leads qualifiés, rapport et recommandations
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-blue-400 transition-all duration-300">
                  <div className="text-3xl mb-2">👁️</div>
                  <div className="font-bold text-white mb-1 text-sm">Visibilité massive</div>
                  <div className="text-gray-400 text-xs">Des centaines de décideurs B2B touchés</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-purple-400 transition-all duration-300">
                  <div className="text-3xl mb-2">📢</div>
                  <div className="font-bold text-white mb-1 text-sm">Présentation pro</div>
                  <div className="text-gray-400 text-xs">Un message unique par prospect (Email + WhatsApp)</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-green-400 transition-all duration-300">
                  <div className="text-3xl mb-2">🤝</div>
                  <div className="font-bold text-white mb-1 text-sm">Mise en relation</div>
                  <div className="text-gray-400 text-xs">Suivi temps réel + leads qualifiés livrés</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-yellow-400 transition-all duration-300">
                  <div className="text-3xl mb-2">📂</div>
                  <div className="font-bold text-white mb-1 text-sm">Rapport & données</div>
                  <div className="text-gray-400 text-xs">Rapport final détaillé + recommandations</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-green-600 to-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl shadow-green-500/25"
                >
                  Demander une démo
                  <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                </Link>
                
                <a
                  href="https://wa.me/590690711464"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
                >
                  💬 Parler sur WhatsApp
                </a>
              </div>

              {/* Vidéo de présentation Smart Prospect */}
              <div className="max-w-4xl mx-auto mb-16">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                  <video
                    src="/video/Smart_Prospect.mp4"
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full h-auto bg-black"
                  >
                    Votre navigateur ne supporte pas la vidéo HTML5.
                  </video>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-blue-400 mb-2">≈100</div>
                  <div className="text-sm text-gray-300">messages ouverts ou conversations déclenchées</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-green-400 mb-2">Visibilité + liste</div>
                  <div className="text-sm text-gray-300">prospects B2B qualifiés livrés</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-purple-400 mb-2">ROI positif</div>
                  <div className="text-sm text-gray-300">mesurable (ouvertures, conversations)</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">3-4 sem</div>
                  <div className="text-sm text-gray-300">mise en œuvre</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Le Problème */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Le problème de la prospection B2B traditionnelle
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                La plupart des entreprises aux Antilles font de la prospection B2B de manière artisanale
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-200">
                <div className="text-5xl mb-4">😓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Prospection manuelle</h3>
                <p className="text-gray-700">
                  Quelques appels par-ci, quelques emails par-là. Vous ne touchez que 10-20% de votre marché potentiel.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 border border-orange-200">
                <div className="text-5xl mb-4">❌</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Messages génériques</h3>
                <p className="text-gray-700">
                  Copier-coller le même email pour tous. Taux de réponse catastrophique &lt; 2%.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-3xl p-8 border border-yellow-200">
                <div className="text-5xl mb-4">🤷</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">ROI impossible à mesurer</h3>
                <p className="text-gray-700">
                  Pub radio, panneaux 4x3... Combien ont appelé ? Combien ont acheté ? Aucune idée.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 border border-red-200">
                <div className="text-5xl mb-4">💸</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Budget gaspillé</h3>
                <p className="text-gray-700">
                  3 500€ pour un panneau 4x3 pendant 1 mois. Résultat : 0-2 appels si vous avez de la chance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Notre Solution */}
        <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                La solution Smart Prospect
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Nous utilisons l'intelligence artificielle pour transformer votre prospection B2B
              </p>
            </div>

            {/* Les 4 étapes */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl mb-6">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">1. Identifier</h3>
                <p className="text-blue-100 mb-4">
                  Nous identifions <strong>TOUS</strong> vos clients B2B potentiels dans votre zone
                </p>
                <div className="text-green-400 font-semibold">
                  → un vivier complet de comptes B2B pertinents
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl mb-6">
                  🤖
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">2. Personnaliser</h3>
                <p className="text-blue-100 mb-4">
                  L'IA crée un message <strong>UNIQUE</strong> pour chaque prospect
                </p>
                <div className="text-green-400 font-semibold">
                  → Taux de réponse 5-10x supérieur
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center text-3xl mb-6">
                  🚀
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">3. Lancer</h3>
                <p className="text-blue-100 mb-4">
                  Envoi progressif sur 30 jours : Email (Brevo) + WhatsApp, avec gestion des opt-in et suivi des réponses
                </p>
                <div className="text-green-400 font-semibold">
                  → Multi-canal professionnel, résultats mesurables
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center text-3xl mb-6">
                  📊
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">4. Mesurer</h3>
                <p className="text-blue-100 mb-4">
                  Dashboard ROI temps réel, boîte de réception WhatsApp : qui ouvre, qui clique, qui répond
                </p>
                <div className="text-green-400 font-semibold">
                  → Suivi des conversions et transmission des leads qualifiés
                </div>
              </div>
            </div>

            {/* Ce qui est inclus (aligné sur l’offre réelle) */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-lg font-bold text-white mb-4 text-center">Inclus dans chaque campagne Smart Prospect</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-blue-100 text-sm">
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Prospects qualifiés identifiés dans votre zone (segments B2B : retail, services, mobilité)</li>
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Messages personnalisés générés par IA (un par prospect)</li>
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Envoi progressif sur 30 jours (Email + WhatsApp)</li>
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Suivi en temps réel et transmission des leads qualifiés</li>
                <li className="flex items-center gap-2 md:col-span-2"><span className="text-green-400">✓</span> Rapport final détaillé avec recommandations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section B2C → B2B - SÉPARÉE ET HARMONISÉE */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 px-4 py-2 rounded-full mb-6">
                <span className="text-purple-300 font-semibold text-sm">💡 Potentiel caché</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Vous êtes B2C, mais le B2B vous intéresse ?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Vous vendez principalement aux <strong className="text-white">particuliers</strong>, mais vous savez que des <strong className="text-purple-400">entreprises</strong> pourraient aussi être clientes ? Smart Prospect vous aide à débloquer ce potentiel sans bouleverser votre organisation.
              </p>
            </div>

            {/* Exemples concrets */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
              
              {/* Hôtel */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-white/20 hover:border-purple-400 transition-all duration-300">
                <div className="text-5xl mb-4">🏨</div>
                <h3 className="text-xl font-bold text-white mb-3">Hôtellerie</h3>
                
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-400 mb-2">Clientèle actuelle :</div>
                  <div className="text-gray-300">Touristes, familles</div>
                </div>

                <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl p-4 border border-purple-500/30">
                  <div className="text-sm font-semibold text-purple-300 mb-2">💼 Potentiel B2B :</div>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Séminaires entreprises</li>
                    <li>• Incentive commerciaux</li>
                    <li>• Hébergement chantiers</li>
                  </ul>
                  <div className="mt-3 pt-3 border-t border-purple-500/30">
                    <div className="text-xs text-purple-300 font-bold">CA additionnel : +15-25%</div>
                  </div>
                </div>
              </div>

              {/* Restaurant */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-white/20 hover:border-green-400 transition-all duration-300">
                <div className="text-5xl mb-4">🍽️</div>
                <h3 className="text-xl font-bold text-white mb-3">Restauration</h3>
                
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-400 mb-2">Clientèle actuelle :</div>
                  <div className="text-gray-300">Particuliers, familles</div>
                </div>

                <div className="bg-gradient-to-br from-green-900/50 to-blue-900/50 rounded-xl p-4 border border-green-500/30">
                  <div className="text-sm font-semibold text-green-300 mb-2">💼 Potentiel B2B :</div>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Traiteur corporate</li>
                    <li>• Événements entreprises</li>
                    <li>• Contrats cantines pros</li>
                  </ul>
                  <div className="mt-3 pt-3 border-t border-green-500/30">
                    <div className="text-xs text-green-300 font-bold">CA additionnel : +20-30%</div>
                  </div>
                </div>
              </div>

              {/* Garage */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-white/20 hover:border-blue-400 transition-all duration-300">
                <div className="text-5xl mb-4">🚗</div>
                <h3 className="text-xl font-bold text-white mb-3">Garage auto</h3>
                
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-400 mb-2">Clientèle actuelle :</div>
                  <div className="text-gray-300">Véhicules particuliers</div>
                </div>

                <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl p-4 border border-blue-500/30">
                  <div className="text-sm font-semibold text-blue-300 mb-2">💼 Potentiel B2B :</div>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Flottes entreprises</li>
                    <li>• Loueurs véhicules</li>
                    <li>• Contrats VTC/Taxis</li>
                  </ul>
                  <div className="mt-3 pt-3 border-t border-blue-500/30">
                    <div className="text-xs text-blue-300 font-bold">CA additionnel : +25-40%</div>
                  </div>
                </div>
              </div>

              {/* Salle sport */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-white/20 hover:border-orange-400 transition-all duration-300">
                <div className="text-5xl mb-4">🏋️</div>
                <h3 className="text-xl font-bold text-white mb-3">Fitness</h3>
                
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-400 mb-2">Clientèle actuelle :</div>
                  <div className="text-gray-300">Abonnés individuels</div>
                </div>

                <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 rounded-xl p-4 border border-orange-500/30">
                  <div className="text-sm font-semibold text-orange-300 mb-2">💼 Potentiel B2B :</div>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Abonnements corporate</li>
                    <li>• Cours entreprises</li>
                    <li>• Partenariats CE</li>
                  </ul>
                  <div className="mt-3 pt-3 border-t border-orange-500/30">
                    <div className="text-xs text-orange-300 font-bold">CA additionnel : +20-35%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pourquoi potentiel inexploité */}
            <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Pourquoi ce potentiel reste inexploité ?
              </h3>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-red-500/30">
                    <span className="text-2xl">🤷</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Méconnaissance du marché</h4>
                    <p className="text-gray-300 text-sm">
                      Vous ne savez pas combien d'entreprises pourraient être intéressées par vos services
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-orange-500/30">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Manque de temps</h4>
                    <p className="text-gray-300 text-sm">
                      Votre équipe est déjà débordée avec les clients particuliers, impossible d'ajouter la prospection B2B
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-yellow-500/30">
                    <span className="text-2xl">📋</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Pas de stratégie</h4>
                    <p className="text-gray-300 text-sm">
                      Vous n'avez ni offre B2B structurée, ni processus de prospection, ni tarifs négociés
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                    <span className="text-2xl">❓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Ne savez pas comment</h4>
                    <p className="text-gray-300 text-sm">
                      Qui contacter ? Comment les trouver ? Que leur dire ? Quels tarifs proposer ?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notre approche B2C → B2B */}
            <div className="mt-16 bg-gradient-to-br from-purple-900 to-blue-900 rounded-3xl p-8 md:p-12 shadow-2xl text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Notre approche pour débloquer votre potentiel B2B
              </h3>

              <div className="grid gap-8 md:grid-cols-3 mb-12">
                
                <div>
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h4 className="font-bold text-xl mb-3">Analyse & Adaptation</h4>
                  <p className="text-blue-100 mb-4">
                    On étudie votre offre B2C actuelle et on l'adapte au marché B2B :
                  </p>
                  <ul className="space-y-2 text-sm text-blue-200">
                    <li>• Création offre B2B spécifique</li>
                    <li>• Tarifs négociés professionnels</li>
                    <li>• Conditions paiement adaptées</li>
                    <li>• Arguments commerciaux B2B</li>
                  </ul>
                </div>

                <div>
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h4 className="font-bold text-xl mb-3">Identification Prospects</h4>
                  <p className="text-blue-100 mb-4">
                    On trouve les entreprises qui ont BESOIN de vos services :
                  </p>
                  <ul className="space-y-2 text-sm text-blue-200">
                    <li>• Recherche géolocalisée (Antilles)</li>
                    <li>• Qualification par secteur</li>
                    <li>• Analyse besoins spécifiques</li>
                    <li>• Sélection d'entreprises réellement pertinentes</li>
                  </ul>
                </div>

                <div>
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h4 className="font-bold text-xl mb-3">Campagne Clé en Main</h4>
                  <p className="text-blue-100 mb-4">
                    On gère la prospection de A à Z :
                  </p>
                  <ul className="space-y-2 text-sm text-blue-200">
                    <li>• Messages ultra-personnalisés IA</li>
                    <li>• Envoi multi-canal optimisé</li>
                    <li>• Suivi temps réel</li>
                    <li>• Leads qualifiés livrés</li>
                  </ul>
                </div>
              </div>

              {/* Cas d'usage concret restaurant */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h4 className="font-bold text-xl mb-6 text-center">
                  📊 Exemple concret : Restaurant créole
                </h4>
                
                <div className="grid md:grid-cols-2 gap-8">
                  
                  {/* Avant */}
                  <div>
                    <div className="bg-red-900/30 rounded-xl p-4 mb-4 border border-red-500/30">
                      <h5 className="font-bold text-red-300 mb-2">❌ AVANT Smart Prospect</h5>
                    </div>
                    <ul className="space-y-3 text-blue-100">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span><strong>CA :</strong> 400k€ (100% particuliers)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span><strong>B2B :</strong> 2-3 événements/an au hasard</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span><strong>Prospection :</strong> Aucune</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span><strong>Offre B2B :</strong> Inexistante</span>
                      </li>
                    </ul>
                  </div>

                  {/* Après */}
                  <div>
                    <div className="bg-green-900/30 rounded-xl p-4 mb-4 border border-green-500/30">
                      <h5 className="font-bold text-green-300 mb-2">✅ APRÈS Smart Prospect</h5>
                    </div>
                    <ul className="space-y-3 text-blue-100">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span><strong>CA :</strong> 480k€ (+80k€ B2B = +20%)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span><strong>B2B :</strong> 8-12 contrats réguliers/an</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span><strong>Prospection :</strong> 450 entreprises contactées</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span><strong>Offre B2B :</strong> 3 formules traiteur pro</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ROI */}
                <div className="mt-6 pt-6 border-t border-white/20 text-center">
                  <div className="text-sm text-blue-200 mb-2">Investissement Smart Prospect : 2 500 € HT</div>
                  <div className="text-3xl font-bold text-green-400">ROI positif : visibilité + liste + CA 🚀</div>
                  <div className="text-sm text-blue-200 mt-2">Communication établie avec des décideurs, CA additionnel possible selon closing</div>
                </div>
              </div>
            </div>

            {/* Ce qu'on fait pour vous */}
            <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                💡 Ce qu'on fait pour vous
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Analyse offre actuelle</h4>
                    <p className="text-gray-300 text-sm">
                      On étudie vos services B2C et on identifie ce qui peut s'adapter au B2B (tarifs, volumes, conditions)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Création offre B2B</h4>
                    <p className="text-gray-300 text-sm">
                      On construit avec vous 2-3 packages B2B attractifs (tarifs dégressifs, conditions paiement, services additionnels)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Identification prospects</h4>
                    <p className="text-gray-300 text-sm">
                      On trouve toutes les entreprises pertinentes de votre zone qui ont BESOIN de vos services (matching intelligent IA)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Messages personnalisés</h4>
                    <p className="text-gray-300 text-sm">
                      On crée des messages UNIQUES adaptés au contexte de chaque entreprise (pas de copier-coller)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                    5
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Campagne multi-canal</h4>
                    <p className="text-gray-300 text-sm">
                      On lance les envois Email + WhatsApp avec timing optimisé (taux lecture 45-60%)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                    6
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Leads qualifiés livrés</h4>
                    <p className="text-gray-300 text-sm">
                      Vous recevez 30-80 entreprises intéressées, prêtes à discuter. Vous n'avez qu'à closer !
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Témoignage */}
            <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 shadow-2xl text-white text-center">
              <div className="text-5xl mb-6">💬</div>
              <blockquote className="text-xl md:text-2xl font-medium mb-6 max-w-3xl mx-auto italic">
                "On pensait être uniquement B2C. Smart Prospect nous a ouvert les yeux sur le potentiel corporate. Aujourd'hui, 25% de notre CA vient d'entreprises qu'on n'aurait jamais contactées sans eux."
              </blockquote>
              <div className="text-blue-100">
                <div className="font-bold text-lg">— Hôtel Jardin Tropical</div>
                <div className="text-sm">Sainte-Anne, Guadeloupe • +120k€ CA B2B année 1</div>
              </div>
            </div>

            {/* CTA section */}
            <div className="mt-16 text-center">
              <h3 className="text-3xl font-bold text-white mb-6">
                Analysons votre potentiel B2B ensemble
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Démo gratuite de 30 minutes pour estimer le CA additionnel que vous pourriez générer
              </p>
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
              >
                Analyser mon potentiel B2B (gratuit) →
              </Link>
            </div>

          </div>
        </section>

        {/* Nos Formules */}
        <section className="py-24 bg-white" id="formules">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Une offre simple, au prix d&apos;une campagne de com&apos;
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                Même budget qu&apos;un spot radio, une campagne presse ou Facebook — mais avec <strong>visibilité mesurable</strong>, <strong>liste de prospects B2B qualifiés</strong> et <strong>communication établie</strong>. Pas d&apos;abonnement.
              </p>
              <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-6">
                Secteurs que nous accompagnons en priorité : loueurs longue durée, services informatiques, alarmes, loueurs de matériel pro, traiteurs, comptables, avocats.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              
              {/* Campagne Smart Prospect - offre principale */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 border-2 border-green-400 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">🚀 Campagne Smart Prospect</h3>
                  <div className="text-5xl font-extrabold text-green-600 mb-2">2 500 € HT</div>
                  <p className="text-gray-600 font-semibold">Objectif : ≈50–100 messages ouverts ou conversations déclenchées</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Ciblage B2B géolocalisé (Guadeloupe, Antilles)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Messages personnalisés par IA (Email + WhatsApp)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Dashboard : qui ouvre, qui répond, qui est intéressé</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Liste de prospects qualifiés + rapport final</span>
                  </div>
                </div>

                <div className="bg-green-100 rounded-2xl p-4 mb-6">
                  <div className="text-sm text-gray-700 font-semibold mb-2">Ce que vous en retirez :</div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Visibilité</strong> auprès de décideurs ciblés</li>
                    <li>• <strong>Liste de prospects</strong> réutilisable</li>
                    <li>• <strong>Communication établie</strong> (conversations engagées)</li>
                    <li>• ROI positif et mesurable (pas seulement en ventes directes)</li>
                  </ul>
                </div>

                <Link 
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-green-600 to-blue-600 text-white text-center px-6 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg"
                >
                  Lancer une campagne
                </Link>

                <div className="text-center mt-4 text-sm text-gray-500">
                  Durée : 3–4 semaines • Alternative crédible à radio, presse, panneaux, FB
                </div>
              </div>

              {/* Sur-mesure */}
              <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-3xl p-8 border-2 border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">📋 Sur-mesure</h3>
                  <p className="text-gray-600 font-semibold">Volume plus large, multi-secteurs, besoins spécifiques</p>
                </div>
                
                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex items-start gap-3">
                    <span className="text-gray-500 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Objectif 100+ conversations ou périmètre étendu</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gray-500 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Stratégie et accompagnement renforcés</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gray-500 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Devis selon votre secteur et vos objectifs</span>
                  </div>
                </div>

                <Link 
                  href="/contact"
                  className="block w-full border-2 border-gray-400 text-gray-800 text-center px-6 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all mt-auto"
                >
                  Demander un devis
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Comparaison vs Pub Traditionnelle */}
        <section className="py-24 bg-gradient-to-br from-gray-900 to-blue-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Smart Prospect vs Publicité Traditionnelle
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Même budget qu&apos;un spot radio, de la presse ou du Facebook — mais visibilité, liste de prospects et conversations mesurables
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              
              {/* Pub Traditionnelle */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-red-500/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">❌</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Pub Traditionnelle</h3>
                    <p className="text-red-300">Panneau 4x3, Radio, Presse</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-xl">✗</span>
                    <div>
                      <div className="text-white font-semibold">Budget : 1 500 à 3 500 € et plus</div>
                      <div className="text-gray-400 text-sm">Panneau 4x3, spots radio, presse, Facebook, catalogues imprimés</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-xl">✗</span>
                    <div>
                      <div className="text-white font-semibold">Audience : Inconnue</div>
                      <div className="text-gray-400 text-sm">Combien l'ont vu ? Mystère...</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-xl">✗</span>
                    <div>
                      <div className="text-white font-semibold">ROI : Impossible à mesurer</div>
                      <div className="text-gray-400 text-sm">Combien ont appelé ? Aucune idée</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-xl">✗</span>
                    <div>
                      <div className="text-white font-semibold">Message : Générique pour tous</div>
                      <div className="text-gray-400 text-sm">Même pub vue par tout le monde</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-xl">✗</span>
                    <div>
                      <div className="text-white font-semibold">Résultats : 0-2 appels si chance</div>
                      <div className="text-gray-400 text-sm">Taux de conversion &lt; 0.1%</div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-900/30 rounded-2xl p-4 border border-red-500/30">
                  <div className="text-red-300 text-center font-bold">
                    💸 Budget gaspillé sans garantie de résultat
                  </div>
                </div>
              </div>

              {/* Smart Prospect */}
              <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-green-400 shadow-2xl shadow-green-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">✅</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Smart Prospect</h3>
                    <p className="text-green-300">Campagne B2B intelligente</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <div>
                      <div className="text-white font-semibold">Budget : 2 500 € HT une fois</div>
                      <div className="text-gray-300 text-sm">Même ordre qu&apos;une campagne radio, presse ou Facebook — pas d&apos;abonnement</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <div>
                      <div className="text-white font-semibold">Visibilité + liste de prospects</div>
                      <div className="text-gray-300 text-sm">Décideurs B2B identifiés, contacts qualifiés, réutilisables</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <div>
                      <div className="text-white font-semibold">ROI mesurable</div>
                      <div className="text-gray-300 text-sm">Ouvertures, réponses, conversations — pas seulement ventes directes</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <div>
                      <div className="text-white font-semibold">Message : Personnalisé par IA</div>
                      <div className="text-gray-300 text-sm">Message unique pour chaque prospect</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <div>
                      <div className="text-white font-semibold">Communication établie</div>
                      <div className="text-gray-300 text-sm">Conversations engagées, leads qualifiés livrés</div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-900/50 rounded-2xl p-4 border border-green-400/50">
                  <div className="text-green-300 text-center font-bold">
                    💰 Alternative crédible et accessible, avec ROI positif (visibilité, liste, relation)
                  </div>
                </div>
              </div>

            </div>

            <div className="text-center mt-12">
              <p className="text-2xl text-white font-bold mb-4">
                Le choix est évident.
              </p>
              <p className="text-xl text-blue-200">
                Arrêtez de gaspiller votre budget marketing. Investissez dans du mesurable.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Prêt à lancer votre première campagne ?
            </h2>
            <p className="text-xl text-blue-200 mb-12">
              Démo de 20 minutes : visibilité auprès de décideurs B2B, liste de prospects qualifiés, communication établie — au prix d&apos;une campagne de com&apos; classique
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Ce que vous obtiendrez :</h3>
              <div className="grid gap-4 md:grid-cols-2 text-left">
                <div className="flex items-center gap-3 text-white">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-sm">✓</span>
                  Analyse de votre marché B2B cible
                </div>
                <div className="flex items-center gap-3 text-white">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-sm">✓</span>
                  Estimation du potentiel de conversations B2B
                </div>
                <div className="flex items-center gap-3 text-white">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-sm">✓</span>
                  Projection ROI personnalisée
                </div>
                <div className="flex items-center gap-3 text-white">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-sm">✓</span>
                  Recommandation de formule adaptée
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-transform duration-300 shadow-2xl"
              >
                Demander une démo gratuite
              </Link>

              <a
                href="https://wa.me/590690711464"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all duration-300"
              >
                💬 WhatsApp direct
              </a>
            </div>

            <p className="text-blue-200 mt-6">
              📞 Réponse en moins de 2h • 🇬🇵 Service local Guadeloupe
            </p>
          </div>
        </section>

      </main>

      {/* Floating Chatbot Widget */}
      <ChatbotWidget />
    </>
  )
}
