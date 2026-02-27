import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function AboutPage() {
  return (
    <>
      <Navigation currentPage="about" />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        
        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Portrait & Intro */}
              <div className="text-center lg:text-left">
                <div className="relative w-96 h-96 mx-auto lg:mx-0 mb-8">
                  <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl ring-2 ring-white/20">
                    <Image
                      src="/about/Photo_cv.jpg"
                      alt="Grégory Declercq"
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="320px"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-4 shadow-xl">
                    <span className="text-3xl">🤖</span>
                  </div>
                </div>

                <h1 className="text-4xl font-bold text-white mb-4">
                  Grégory Declercq
                </h1>
                <p className="text-xl text-blue-300 mb-6">
                  Fondateur IA Solutions Guadeloupe
                </p>
                
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                  <span className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-300 text-sm border border-blue-400/30">
                    🐍 Développeur Python
                  </span>
                  <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 text-sm border border-purple-400/30">
                    🤖 Expert IA
                  </span>
                  <span className="px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full text-green-300 text-sm border border-green-400/30">
                    💼 B2B Specialist
                  </span>
                </div>

                <div className="flex gap-4 justify-center lg:justify-start">
                  <a
                    href="https://www.linkedin.com/in/gregory-declercq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/20"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="mailto:gregory@ia-solutions-guadeloupe.fr"
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/20"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/590690711464"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-green-600/20 hover:bg-green-600/30 rounded-xl transition-all duration-300 backdrop-blur-sm border border-green-500/30"
                  >
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-blue-400/30">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ma mission
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  Transformer la prospection B2B des entreprises antillaises grâce à l&apos;intelligence artificielle, en leur offrant des solutions professionnelles testées et validées en environnement exigeant.
                </p>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <p className="text-white font-semibold mb-2">🎯 Vision</p>
                  <p className="text-blue-200 text-sm">
                    Rendre l&apos;IA accessible aux PME locales, en leur apportant des outils concrets qui génèrent des résultats mesurables dès les premières semaines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mon parcours - Version condensée */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Un parcours atypique
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                De la défense à l&apos;entrepreneuriat tech : comment l&apos;IA a tout changé
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Phase 1 : Militaire */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border-2 border-slate-600/30">
                <div className="text-5xl mb-4">🎖️</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  1997-2017
                </h3>
                <h4 className="text-lg font-semibold text-blue-300 mb-4">
                  Sous-officier Systèmes d&apos;Information
                </h4>
                <p className="text-blue-100 mb-4">
                  20 ans dans l&apos;armée française, spécialisé dans la mise en œuvre et la sécurisation de systèmes d&apos;information de défense.
                </p>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-xs text-blue-200">
                    <strong className="text-white">Compétences clés :</strong> Administration réseaux complexes, gestion de projets critiques, management d&apos;équipes techniques
                  </p>
                </div>
              </div>

              {/* Phase 2 : Transition */}
              <div className="bg-gradient-to-br from-blue-800/30 to-indigo-900/30 backdrop-blur-sm rounded-3xl p-8 border-2 border-blue-500/30">
                <div className="text-5xl mb-4">🏝️</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  2017-2023
                </h3>
                <h4 className="text-lg font-semibold text-blue-300 mb-4">
                  Reconversion & Découverte
                </h4>
                <p className="text-blue-100 mb-4">
                  Installation en Guadeloupe. Découverte du tissu économique local et des défis spécifiques des PME antillaises.
                </p>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-xs text-blue-200">
                    <strong className="text-white">Révélation :</strong> Constat du retard technologique et du potentiel inexploité de l&apos;IA pour les entreprises locales
                  </p>
                </div>
              </div>

              {/* Phase 3 : IA & Python */}
              <div className="bg-gradient-to-br from-purple-800/30 to-pink-900/30 backdrop-blur-sm rounded-3xl p-8 border-2 border-purple-500/30">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  2023-Aujourd&apos;hui
                </h3>
                <h4 className="text-lg font-semibold text-purple-300 mb-4">
                  Expert IA & Développeur
                </h4>
                <p className="text-blue-100 mb-4">
                  Plongée intensive dans l&apos;IA et le développement Python. Création de Smart Prospect suite à un besoin réel en entreprise.
                </p>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-xs text-blue-200">
                    <strong className="text-white">Passion :</strong> Transformer des problèmes business concrets en solutions IA opérationnelles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Genèse de Smart Prospect - SECTION PRINCIPALE */}
        <section className="py-16 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30">
                <span className="text-blue-300 font-semibold">🚀 Genèse du projet</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comment Smart Prospect est né
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                De l&apos;identification d&apos;un besoin réel à la validation en environnement professionnel exigeant
              </p>
            </div>

            {/* Timeline de création */}
            <div className="space-y-8">
              
              {/* Étape 1 : Le constat */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-slate-600/30">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Le constat terrain</h3>
                    <p className="text-blue-200 mb-4 text-lg">
                      En 2024, au sein d&apos;un grand groupe de la distribution, j&apos;ai observé une problématique récurrente : l&apos;équipe commerciale passait <strong className="text-white">des dizaines d&apos;heures par mois</strong> à identifier et contacter manuellement des prospects B2B.
                    </p>
                    <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30">
                      <p className="text-red-200 mb-3">
                        <strong className="text-white">❌ Problèmes identifiés :</strong>
                      </p>
                      <ul className="space-y-2 text-red-100">
                        <li>• Recherche manuelle fastidieuse (Google, réseaux sociaux, annuaires)</li>
                        <li>• Messages génériques peu personnalisés</li>
                        <li>• Taux de réponse décevants (&lt; 5%)</li>
                        <li>• Temps commercial gaspillé sur des tâches répétitives</li>
                        <li>• Aucune donnée exploitable pour améliorer les campagnes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Étape 2 : L&apos;idée */}
              <div className="bg-gradient-to-br from-blue-800/30 to-indigo-900/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-blue-500/30">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">L&apos;idée : automatiser l&apos;intelligence commerciale</h3>
                    <p className="text-blue-200 mb-4 text-lg">
                      Face à ce besoin concret, j&apos;ai développé Smart Prospect : une solution qui combine <strong className="text-white">recherche automatisée</strong> et <strong className="text-white">personnalisation par IA</strong>.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-xl p-5 border border-blue-400/30">
                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                          <span className="text-2xl">🔍</span>
                          Recherche automatisée
                        </h4>
                        <p className="text-sm text-blue-100">
                          Google Places API + scraping éthique pour identifier des centaines de prospects qualifiés en quelques minutes
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-5 border border-blue-400/30">
                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                          <span className="text-2xl">🤖</span>
                          Personnalisation IA
                        </h4>
                        <p className="text-sm text-blue-100">
                          Messages adaptés à chaque secteur d&apos;activité, taille d&apos;entreprise et besoin spécifique
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Étape 3 : Le développement */}
              <div className="bg-gradient-to-br from-purple-800/30 to-pink-900/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-purple-500/30">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Développement & itérations</h3>
                    <p className="text-blue-200 mb-4 text-lg">
                      6 mois de développement intensif en Python, avec plusieurs phases de tests et d&apos;améliorations basées sur les retours terrain.
                    </p>
                    <div className="space-y-3">
                      <div className="bg-white/5 rounded-xl p-5 border border-purple-400/30">
                        <h4 className="font-bold text-white mb-2">🔧 Technologies utilisées</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-xs border border-blue-400/30">Python</span>
                          <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-300 text-xs border border-green-400/30">Google Places API</span>
                          <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-xs border border-purple-400/30">OpenAI GPT-4</span>
                          <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-300 text-xs border border-yellow-400/30">Streamlit</span>
                          <span className="px-3 py-1 bg-red-500/20 rounded-full text-red-300 text-xs border border-red-400/30">Beautiful Soup</span>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-5 border border-purple-400/30">
                        <h4 className="font-bold text-white mb-2">📈 Évolution des performances</h4>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <p className="text-3xl font-bold text-purple-300">V1</p>
                            <p className="text-xs text-blue-200 mt-1">Recherche manuelle</p>
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-purple-300">V2</p>
                            <p className="text-xs text-blue-200 mt-1">API Google intégrée</p>
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-green-300">V3</p>
                            <p className="text-xs text-blue-200 mt-1">IA personnalisation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Étape 4 : La validation */}
              <div className="bg-gradient-to-br from-green-800/30 to-emerald-900/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-green-500/30">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Validation en environnement exigeant</h3>
                    <p className="text-blue-200 mb-4 text-lg">
                      Smart Prospect a été testé et validé au sein d&apos;un grand groupe de la distribution, dans un contexte professionnel exigeant avec <strong className="text-white">des résultats mesurables</strong>.
                    </p>
                    <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30 mb-4">
                      <p className="text-green-200 mb-3">
                        <strong className="text-white">✅ Résultats obtenus :</strong>
                      </p>
                      <ul className="space-y-2 text-green-100">
                        <li>• <strong className="text-white">95% de gain de temps</strong> sur la phase de recherche</li>
                        <li>• Taux de réponse multiplié par <strong className="text-white">3 à 5</strong> grâce à la personnalisation</li>
                        <li>• <strong className="text-white">plusieurs centaines de prospects qualifiés</strong> identifiés par campagne</li>
                        <li>• Validation par la direction commerciale du groupe</li>
                        <li>• Demande d&apos;extension à d&apos;autres départements</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-xl p-5 border border-green-400/30">
                      <p className="text-green-200 text-sm italic">
                        💡 <strong className="text-white">Leçon clé :</strong> Smart Prospect n&apos;est pas une &quot;belle idée théorique&quot; — c&apos;est un outil qui a fait ses preuves dans un environnement professionnel exigeant, avec des objectifs chiffrés et une pression de résultats réelle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Étape 5 : L&apos;agence */}
              <div className="bg-gradient-to-br from-orange-800/30 to-red-900/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-orange-500/30">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Ouverture aux entreprises antillaises</h3>
                    <p className="text-blue-200 mb-4 text-lg">
                      Suite à ce succès, j&apos;ai décidé de rendre Smart Prospect accessible aux PME et grands comptes de la Guadeloupe, Martinique et Guyane sous forme d&apos;<strong className="text-white">agence de prospection B2B</strong>.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-xl p-5 border border-orange-400/30">
                        <h4 className="font-bold text-white mb-2">🎯 Pourquoi une agence ?</h4>
                        <p className="text-sm text-blue-100">
                          Plutôt qu&apos;un SaaS complexe à maîtriser, nous gérons tout de A à Z : vous recevez directement des conversations qualifiées, sans vous soucier de la technique.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-5 border border-orange-400/30">
                        <h4 className="font-bold text-white mb-2">🌴 Focus Antilles</h4>
                        <p className="text-sm text-blue-100">
                          Connaissance fine du tissu économique local, des spécificités culturelles et des défis particuliers des entreprises antillaises.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* CTA Final */}
            <div className="mt-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Smart Prospect n&apos;est pas une promesse, c&apos;est une réalité prouvée
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                Testé et validé dans un environnement professionnel exigeant, Smart Prospect est aujourd&apos;hui disponible pour votre entreprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/methode"
                  className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
                >
                  Découvrir la méthode
                </Link>
                <Link 
                  href="/contact"
                  className="inline-block px-8 py-4 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl"
                >
                  Demander une démo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi me faire confiance */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pourquoi me faire confiance ?
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Au-delà de l&apos;outil, une approche rigoureuse et des valeurs solides
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/10 hover:border-blue-400/30 transition-all duration-300">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Rigueur opérationnelle
                </h3>
                <p className="text-blue-100">
                  20 ans d&apos;expérience militaire où la précision, la fiabilité et le respect des délais sont des impératifs absolus. Cette rigueur se retrouve dans chaque campagne Smart Prospect.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/10 hover:border-purple-400/30 transition-all duration-300">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Sécurité & Conformité
                </h3>
                <p className="text-blue-100">
                  Expertise en sécurisation de systèmes d&apos;information. Vos données et celles de vos prospects sont traitées avec le plus haut niveau de protection et dans le respect du RGPD.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/10 hover:border-green-400/30 transition-all duration-300">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Transparence totale
                </h3>
                <p className="text-blue-100">
                  Pas de promesses marketing vides. Résultats mesurables, reporting détaillé, méthode documentée. Vous savez exactement ce que vous achetez et ce que vous obtenez.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-blue-900">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à transformer votre prospection B2B ?
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Discutons de vos besoins lors d&apos;un rendez-vous de 30 minutes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Demander une démo gratuite
              </Link>
              <a
                href="https://wa.me/590690711464?text=Bonjour,%20je%20souhaite%20en%20savoir%20plus%20sur%20Smart%20Prospect"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-300 shadow-xl"
              >
                📱 WhatsApp direct
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
