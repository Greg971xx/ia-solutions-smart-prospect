import Link from "next/link"
import Image from "next/image"
import ChatbotWidget from "@/components/ChatbotWidget"

export default function HomePage() {
  
  return (
    <>
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
                L'agence qui transforme votre
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block mt-2">
                  prospection B2B en machine à ventes
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Nous identifions <strong className="text-blue-400">tous les clients B2B pertinents</strong> pour vos produits, créons des messages personnalisés par IA pour chacun, et lançons des campagnes multi-canaux avec <strong className="text-green-400">ROI mesurable</strong>.
              </p>

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

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">≈100</div>
                <div className="text-sm text-gray-300">messages ouverts ou conversations déclenchées</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-green-400 mb-2">10-45</div>
                  <div className="text-sm text-gray-300">nouveaux clients B2B</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-purple-400 mb-2">+150-300%</div>
                  <div className="text-sm text-gray-300">ROI moyen</div>
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

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                  Campagne multi-canal avec test A/B Email vs WhatsApp
                </p>
                <div className="text-green-400 font-semibold">
                  → On identifie ce qui marche le mieux
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center text-3xl mb-6">
                  📊
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">4. Mesurer</h3>
                <p className="text-blue-100 mb-4">
                  Dashboard temps réel : qui ouvre, qui clique, qui répond
                </p>
                <div className="text-green-400 font-semibold">
                  → ROI calculé au centime près
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Formules */}
        <section className="py-24 bg-white" id="formules">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Nos formules de campagnes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nous vendons des campagnes ponctuelles, pas un abonnement. Comme une campagne publicitaire, mais avec des résultats mesurables.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              
              {/* Campagne Standard */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border-2 border-blue-200 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">🚀 Standard</h3>
                  <div className="text-5xl font-extrabold text-blue-600 mb-2">3 500€</div>
                  <p className="text-gray-600 font-semibold">Objectif : ≈30 conversations qualifiées</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Volume suffisant pour générer ≈30 conversations qualifiées</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Messages personnalisés par IA</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Test A/B Email vs WhatsApp</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">1 relance automatique intelligente</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Dashboard tracking temps réel</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Rapport détaillé + ROI calculé</span>
                  </div>
                </div>

                <div className="bg-blue-100 rounded-2xl p-4 mb-6">
                  <div className="text-sm text-gray-700 font-semibold mb-2">Résultats attendus :</div>
                  <div className="text-2xl font-bold text-blue-600">10-15 nouveaux clients</div>
                  <div className="text-sm text-gray-600">ROI moyen : +150-200%</div>
                </div>

                <Link 
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
                >
                  Lancer une campagne
                </Link>

                <div className="text-center mt-4 text-sm text-gray-500">
                  Durée : 3-4 semaines • 7€/prospect
                </div>
              </div>

              {/* Campagne Premium - BEST SELLER */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 border-4 border-green-500 hover:shadow-2xl transition-all duration-300 relative transform scale-105">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                  ⭐ BEST SELLER
                </div>
                
                <div className="text-center mb-6 mt-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">💎 Premium</h3>
                  <div className="text-5xl font-extrabold text-green-600 mb-2">6 500€</div>
                  <p className="text-gray-600 font-semibold">Objectif : ≈60 conversations qualifiées</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Volume renforcé pour générer ≈60 conversations qualifiées</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Segmentation fine multi-niches</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Messages ultra-personnalisés IA</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Test A/B complet multi-canal</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">2 relances différenciées</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Optimisation campagne en temps réel</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Dashboard premium + analytics</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Gestion active des réponses</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Accompagnement closing</span>
                  </div>
                </div>

                <div className="bg-green-100 rounded-2xl p-4 mb-6">
                  <div className="text-sm text-gray-700 font-semibold mb-2">Résultats attendus :</div>
                  <div className="text-2xl font-bold text-green-600">20-30 nouveaux clients</div>
                  <div className="text-sm text-gray-600">ROI moyen : +200-300%</div>
                </div>

                <Link 
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-green-600 to-blue-600 text-white text-center px-6 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg"
                >
                  Lancer une campagne
                </Link>

                <div className="text-center mt-4 text-sm text-gray-500">
                  Durée : 1-2 mois • 6.50€/prospect
                </div>
              </div>

              {/* Campagne Domination */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-200 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">🏆 Domination</h3>
                  <div className="text-5xl font-extrabold text-purple-600 mb-2">9 500€</div>
                  <p className="text-gray-600 font-semibold">Objectif : 100+ conversations qualifiées</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Couverture quasi exhaustive de votre marché cible</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Couverture territoriale complète</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Stratégie commerciale sur-mesure</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Messages hyper-personnalisés</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Test A/B poussé multi-canaux</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">3 relances intelligentes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Optimisation continue</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Accompagnement closing avancé</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Reporting hebdomadaire</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">Session stratégique finale (2h)</span>
                  </div>
                </div>

                <div className="bg-purple-100 rounded-2xl p-4 mb-6">
                  <div className="text-sm text-gray-700 font-semibold mb-2">Résultats attendus :</div>
                  <div className="text-2xl font-bold text-purple-600">30-45 nouveaux clients</div>
                  <div className="text-sm text-gray-600">ROI moyen : +250-350%</div>
                </div>

                <Link 
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center px-6 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
                >
                  Lancer une campagne
                </Link>

                <div className="text-center mt-4 text-sm text-gray-500">
                  Durée : 2-3 mois • 6.33€/prospect
                </div>
              </div>

            </div>
          </div>
        </section>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{point.problem}</h3>
                      <p className="text-blue-600 font-medium mb-2">→ {point.solution}</p>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                        ⚡ {point.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Solutions 2025 */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technologies IA <span className="text-blue-400">leader 2025</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Les outils que vos concurrents utilisent déjà pour prendre de l'avance
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {aiSolutions2025.map((solution, index) => (
                <div key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">{solution.category}</h3>
                  <div className="mb-4">
                    <p className="text-blue-400 font-medium text-sm mb-2">Outils populaires :</p>
                    <p className="text-gray-300 text-sm">{solution.tools}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-green-400 font-medium text-sm mb-2">Cas d'usage :</p>
                    <ul className="space-y-1">
                      {solution.useCases.map((useCase, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-purple-900/50 rounded-xl p-3 border border-purple-700/50">
                    <p className="text-purple-300 font-bold text-sm">💰 Gain : {solution.roi}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Notre méthode <span className="text-blue-600">éprouvée</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Pas de révolution : une évolution maîtrisée, service par service
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="group relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-200 hover:shadow-xl transition-all duration-500">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-4">Diagnostic & Quick Wins</h3>
                <p className="text-gray-700 mb-6">
                  Audit de vos processus, identification des gains rapides, démonstration concrète du potentiel IA.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Audit processus (2h)
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    3 automatisations immédiates
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Rapport ROI personnalisé
                  </div>
                </div>
                <div className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-semibold">
                  Dès 490€
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 border border-green-200 hover:shadow-xl transition-all duration-500">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-4">Formation des équipes</h3>
                <p className="text-gray-700 mb-6">
                  Ateliers pratiques sur les outils IA du quotidien, création de workflows personnalisés par métier.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Formation ChatGPT avancé
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Workflows Zapier/Make
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Prompts personnalisés
                  </div>
                </div>
                <div className="mt-6 bg-green-600 text-white px-4 py-2 rounded-lg text-center font-semibold">
                  À partir de 890€
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-200 hover:shadow-xl transition-all duration-500">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-4">Déploiement sur-mesure</h3>
                <p className="text-gray-700 mb-6">
                  Implémentation d'assistants IA spécialisés, intégration APIs, chatbots intelligents avec vos données.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Chatbots RAG personnalisés
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Intégrations CRM/ERP
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Support & maintenance
                  </div>
                </div>
                <div className="mt-6 bg-purple-600 text-white px-4 py-2 rounded-lg text-center font-semibold">
                  Sur devis
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-900 to-purple-900" id="diagnostic">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-xl text-blue-200 mb-12">
              Diagnostic gratuit de 30 minutes pour identifier vos gains IA prioritaires
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Ce que vous obtiendrez :</h3>
              <div className="grid gap-4 md:grid-cols-2 text-left">
                <div className="flex items-center gap-3 text-white">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-sm">✓</span>
                  Audit de vos processus actuels
                </div>
                <div className="flex items-center gap-3 text-white">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-sm">✓</span>
                  3 automatisations prioritaires
                </div>
                <div className="flex items-center gap-3 text-white">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-sm">✓</span>
                  Estimation des gains de temps
                </div>
                <div className="flex items-center gap-3 text-white">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-sm">✓</span>
                  Feuille de route personnalisée
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-transform duration-300 shadow-2xl"
            >
              Réserver mon diagnostic gratuit
            </Link>

            <p className="text-blue-200 mt-6">
              📞 Disponible en visio ou sur site en Guadeloupe
            </p>
          </div>
        </section>

        {/* Services Preview */}
        {services.length > 0 && (
          <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos services phares</h2>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {services.map((service) => (
                  <div
                    key={service._id}
                    className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                  >
                    {service.heroImage && (
                      <div className="relative h-48 mb-6">
                        <Image
                          src={urlFor(service.heroImage).width(400).height(200).url()}
                          alt={service.title}
                          fill
                          className="object-cover rounded-2xl"
                        />
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    {service.excerpt && (
                      <p className="text-gray-600 mb-6">{service.excerpt}</p>
                    )}
                    {service.slug?.current && (
                      <Link
                        href={`/services/${service.slug.current}`}
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                      >
                        Découvrir
                        <span>→</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>

      {/* Floating Chatbot Widget */}
      <ChatbotWidget />
    </>
  )
}