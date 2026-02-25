import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function MethodePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation currentPage="methode" />

      {/* Hero Section */}
      <div className="relative overflow-hidden py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30">
            <span className="text-blue-300 font-semibold">📋 Notre Méthode</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comment se déroule une campagne <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Smart Prospect</span>
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            De la signature du contrat jusqu'à la transmission des leads qualifiés : découvrez chaque étape de notre processus, transparent et structuré.
          </p>
        </div>
      </div>

      {/* Timeline principale */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* Vue d'ensemble */}
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-blue-400/30 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
            🗓️ Vue d'ensemble : 30 jours de A à Z
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">📝</div>
              <h3 className="font-bold text-white mb-2">Jours 1-3</h3>
              <p className="text-sm text-blue-200">Cadrage & Préparation</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-bold text-white mb-2">Jours 4-7</h3>
              <p className="text-sm text-blue-200">Lancement campagne</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-bold text-white mb-2">Jours 8-30</h3>
              <p className="text-sm text-blue-200">Envois progressifs + Suivi</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">📈</div>
              <h3 className="font-bold text-white mb-2">Jour 31+</h3>
              <p className="text-sm text-blue-200">Rapport final</p>
            </div>
          </div>
        </div>

        {/* Timeline détaillée */}
        <div className="space-y-8">

          {/* PHASE 0 : Avant la signature */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-slate-600/30">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                0
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Avant la signature</h3>
                <p className="text-blue-200 mb-4">
                  Premier contact et qualification de votre besoin
                </p>

                <div className="space-y-4">
                  <div className="bg-white/10 rounded-xl p-5 border border-white/20">
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                      <span className="text-blue-400">📞</span>
                      Rendez-vous découverte (30-45 min)
                    </h4>
                    <ul className="space-y-2 text-sm text-blue-100 ml-6">
                      <li>• Compréhension de votre activité et objectifs</li>
                      <li>• Identification de vos cibles B2B (métiers, zones géographiques)</li>
                      <li>• Définition de vos offres/produits/services à promouvoir</li>
                      <li>• Vérification que vous avez une personne pour répondre aux prospects (&lt; 24h)</li>
                    </ul>
                  </div>

                  <div className="bg-white/10 rounded-xl p-5 border border-white/20">
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      Validation mutuelle
                    </h4>
                    <p className="text-sm text-blue-100 mb-3">
                      Nous vérifions que votre entreprise correspond à nos critères de qualité :
                    </p>
                    <ul className="space-y-1 text-sm text-blue-100 ml-6">
                      <li>✅ Offres claires et identifiables</li>
                      <li>✅ Organisation capable de gérer les retours</li>
                      <li>✅ Engagement à répondre rapidement aux prospects</li>
                      <li>✅ Budget validé</li>
                    </ul>
                    <div className="mt-3 bg-yellow-900/30 rounded-lg p-3 border border-yellow-600/30">
                      <p className="text-xs text-yellow-300">
                        <strong>Important :</strong> Nous refusons certaines demandes pour garantir la qualité de nos campagnes et protéger notre réputation.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-5 border border-white/20">
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                      <span className="text-purple-400">📄</span>
                      Envoi de la proposition commerciale
                    </h4>
                    <p className="text-sm text-blue-100">
                      Vous recevez par email : Document d'offre détaillé, Devis chiffré (3 500€ HT), Contrat de prestation (conditions claires)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PHASE 1 : Signature et paiement */}
          <div className="bg-gradient-to-br from-green-800/30 to-emerald-900/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-green-500/30">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Jour 1 : Signature du contrat</h3>
                <p className="text-blue-200 mb-4">
                  Officialisation de notre collaboration
                </p>

                <div className="space-y-4">
                  <div className="bg-white/10 rounded-xl p-5 border border-green-400/30">
                    <h4 className="font-bold text-white mb-3">Ce qui se passe :</h4>
                    <div className="space-y-3 text-sm text-blue-100">
                      <div className="flex items-start gap-3">
                        <span className="text-green-400 font-bold">✓</span>
                        <div>
                          <strong className="text-white">Signature électronique du contrat</strong>
                          <p className="mt-1">Contrat envoyé par email, signature en quelques clics.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-400 font-bold">✓</span>
                        <div>
                          <strong className="text-white">Paiement à la commande (3 500€ HT)</strong>
                          <p className="mt-1">Virement bancaire ou paiement en ligne sécurisé.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-400 font-bold">✓</span>
                        <div>
                          <strong className="text-white">Confirmation de lancement</strong>
                          <p className="mt-1">Vous recevez un email confirmant le démarrage de la campagne.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-900/30 rounded-xl p-4 border border-green-500/30">
                    <p className="text-green-300 text-sm">
                      <strong>📅 Délai :</strong> Une fois le paiement reçu, nous lançons la phase de cadrage sous 24-48h.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PHASE 2 : Cadrage & Préparation */}
          <div className="bg-gradient-to-br from-blue-800/30 to-indigo-900/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-blue-500/30">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Jours 2-3 : Cadrage détaillé de la campagne</h3>
                <p className="text-blue-200 mb-4">
                  Préparation minutieuse pour maximiser les résultats
                </p>

                <div className="space-y-4">
                  <div className="bg-white/10 rounded-xl p-5 border border-blue-400/30">
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                      <span className="text-2xl">🎯</span>
                      Atelier de cadrage (1h30 en visio ou présentiel)
                    </h4>
                    <div className="space-y-3 text-sm text-blue-100">
                      <div>
                        <strong className="text-white">1. Identification précise des cibles</strong>
                        <ul className="mt-2 ml-6 space-y-1">
                          <li>• Quels métiers ? (ex: hôtels 3-4★, loueurs bateaux, gîtes, etc.)</li>
                          <li>• Quelle zone géographique ? (Guadeloupe, Martinique, Guyane...)</li>
                          <li>• Taille/profil des entreprises ciblées ?</li>
                        </ul>
                      </div>

                      <div>
                        <strong className="text-white">2. Définition des offres par segment</strong>
                        <ul className="mt-2 ml-6 space-y-1">
                          <li>• Produit/service A → Segment 1 (ex: kayaks → hôtels)</li>
                          <li>• Produit/service B → Segment 2 (ex: vélos → gîtes)</li>
                          <li>• Produit/service C → Segment 3 (ex: paddles → écoles surf)</li>
                        </ul>
                        <p className="mt-2 text-xs italic">
                          💡 Notre force : un message personnalisé par type d'activité, pas un message générique.
                        </p>
                      </div>

                      <div>
                        <strong className="text-white">3. Choix du canal optimal</strong>
                        <ul className="mt-2 ml-6 space-y-1">
                          <li>• Email seul (volume élevé, coût minimal)</li>
                          <li>• WhatsApp seul (cibles VIP, taux réponse max)</li>
                          <li>• Test A/B Email vs WhatsApp (pour comparer)</li>
                        </ul>
                      </div>

                      <div>
                        <strong className="text-white">4. Configuration contact client</strong>
                        <ul className="mt-2 ml-6 space-y-1">
                          <li>• Choix option email (Gmail / Votre domaine / IA Solutions)</li>
                          <li>• Numéro WhatsApp pour redirection (si applicable)</li>
                          <li>• Personne(s) en charge des réponses prospects</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-5 border border-blue-400/30">
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                      <span className="text-2xl">✍️</span>
                      Rédaction des messages personnalisés
                    </h4>
                    <p className="text-sm text-blue-100 mb-3">
                      Notre équipe IA rédige des messages adaptés à chaque segment :
                    </p>
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600/30 text-xs text-blue-100 font-mono">
                      <strong className="text-white">Exemple segment "Hôtels 4★" :</strong><br/><br/>
                      Bonjour M. Dupont,<br/><br/>
                      Grégory DECLERCQ - IA Solutions Guadeloupe, mandaté par Decathlon Guadeloupe.<br/><br/>
                      Votre hôtel 4★ Le Jardin Tropical propose-t-il des activités nautiques à vos clients ?<br/><br/>
                      Decathlon propose une gamme complète d'équipements B2B (kayaks, paddles, snorkeling) avec tarifs préférentiels pour hôteliers.<br/><br/>
                      Seriez-vous intéressé par un échange rapide ?
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-5 border border-blue-400/30">
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                      <span className="text-2xl">📋</span>
                      Validation finale avec vous
                    </h4>
                    <p className="text-sm text-blue-100">
                      Vous recevez pour validation :
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-blue-100 ml-6">
                      <li>• Liste complète des cibles (nombre par segment)</li>
                      <li>• Messages rédigés pour chaque segment</li>
                      <li>• Planning d'envoi (étalement sur 4 semaines)</li>
                    </ul>
                    <div className="mt-3 bg-blue-900/30 rounded-lg p-3 border border-blue-500/30">
                      <p className="text-xs text-blue-300">
                        <strong>Important :</strong> Aucun message n'est envoyé sans votre validation explicite.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PHASE 3 : Lancement */}
          <div className="bg-gradient-to-br from-purple-800/30 to-pink-900/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-purple-500/30">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Jours 4-7 : Lancement de la campagne</h3>
                <p className="text-blue-200 mb-4">
                  Vos messages commencent à partir, de manière progressive et contrôlée
                </p>

                <div className="space-y-4">
                  <div className="bg-white/10 rounded-xl p-5 border border-purple-400/30">
                    <h4 className="font-bold text-white mb-3">📅 Déploiement progressif sur 4 semaines</h4>
                    <p className="text-sm text-blue-100 mb-4">
                      <strong>Pourquoi étaler sur 1 mois ?</strong> Pour que vous puissiez gérer sereinement les réponses (1-3 conversations par jour), sans être submergé.
                    </p>
                    <div className="grid md:grid-cols-4 gap-3 text-center">
                      <div className="bg-purple-900/30 rounded-lg p-3 border border-purple-500/30">
                        <div className="font-bold text-white mb-1">Semaine 1</div>
                        <div className="text-2xl text-purple-300">250</div>
                        <div className="text-xs text-blue-200">contacts</div>
                      </div>
                      <div className="bg-purple-900/30 rounded-lg p-3 border border-purple-500/30">
                        <div className="font-bold text-white mb-1">Semaine 2</div>
                        <div className="text-2xl text-purple-300">250</div>
                        <div className="text-xs text-blue-200">contacts</div>
                      </div>
                      <div className="bg-purple-900/30 rounded-lg p-3 border border-purple-500/30">
                        <div className="font-bold text-white mb-1">Semaine 3</div>
                        <div className="text-2xl text-purple-300">250</div>
                        <div className="text-xs text-blue-200">contacts</div>
                      </div>
                      <div className="bg-purple-900/30 rounded-lg p-3 border border-purple-500/30">
                        <div className="font-bold text-white mb-1">Semaine 4</div>
                        <div className="text-2xl text-purple-300">250</div>
                        <div className="text-xs text-blue-200">contacts</div>
                      </div>
                    </div>
                    <p className="text-xs text-blue-200 mt-3 text-center">
                      Soit environ <strong>50-60 messages par jour ouvré</strong>, générant <strong>1-3 conversations qualifiées par jour</strong>.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-5 border border-purple-400/30">
                    <h4 className="font-bold text-white mb-3">🔔 Vous êtes informé en temps réel</h4>
                    <p className="text-sm text-blue-100 mb-3">
                      Dès le lancement, vous avez accès à votre <strong>dashboard personnalisé</strong> :
                    </p>
                    <ul className="space-y-2 text-sm text-blue-100 ml-6">
                      <li>• Nombre de messages ouverts / conversations déclenchées</li>
                      <li>• Nombre de messages envoyés (par jour, par segment)</li>
                      <li>• Taux d'ouverture (Email) / Taux de lecture (WhatsApp)</li>
                      <li>• Nombre de réponses reçues</li>
                      <li>• Qualification automatique : 🟢 Chaud / 🟡 Tiède / 🔴 Pas intéressé</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PHASE 4 : Gestion des réponses */}
          <div className="bg-gradient-to-br from-orange-800/30 to-red-900/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-orange-500/30">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Jours 8-30 : Qualification et transmission des leads</h3>
                <p className="text-blue-200 mb-4">
                  Nous traitons les réponses et vous transmettons uniquement les prospects qualifiés
                </p>

                <div className="space-y-4">
                  <div className="bg-white/10 rounded-xl p-5 border border-orange-400/30">
                    <h4 className="font-bold text-white mb-3">🎯 Notre rôle : qualification rapide</h4>
                    <div className="space-y-3 text-sm text-blue-100">
                      <div>
                        <strong className="text-white">Étape 1 : Détection réponse positive</strong>
                        <p className="mt-1">Prospect répond "Oui", "Intéressé", "Dites-m'en plus", etc.</p>
                      </div>
                      <div>
                        <strong className="text-white">Étape 2 : Qualification express (2-3 questions)</strong>
                        <ul className="mt-2 ml-6 space-y-1">
                          <li>• Volume/quantité souhaitée ?</li>
                          <li>• Budget envisagé ?</li>
                          <li>• Timing d'achat ?</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-white">Étape 3 : Redirection immédiate vers vous</strong>
                        <p className="mt-1">Le prospect reçoit un message automatique :</p>
                        <div className="mt-2 bg-slate-900/50 rounded-lg p-3 border border-slate-600/30 text-xs text-blue-100 font-mono">
                          Parfait M. Dupont ! 🎉<br/><br/>
                          Pour répondre précisément à vos questions, je vous mets en contact direct avec Jean MARTIN de Decathlon Guadeloupe :<br/><br/>
                          📱 WhatsApp : +590 XXX XX XX XX<br/>
                          📧 Email : j.martin@decathlon.gp<br/><br/>
                          Jean vous fera une proposition personnalisée pour votre établissement.<br/><br/>
                          Bonne journée !
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-5 border border-orange-400/30">
                    <h4 className="font-bold text-white mb-3">📧 Vous recevez les leads chauds en temps réel</h4>
                    <p className="text-sm text-blue-100 mb-3">
                      Deux options au choix selon votre préférence :
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                        <h5 className="font-bold text-white mb-2 text-sm">Option A : Contact direct</h5>
                        <p className="text-xs text-blue-100">
                          Le prospect vous contacte directement (vos coordonnées dans le message de redirection). Vous gérez 100% de la relation.
                        </p>
                      </div>
                      <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
                        <h5 className="font-bold text-white mb-2 text-sm">Option B : Notification email ⭐</h5>
                        <p className="text-xs text-blue-100">
                          Vous recevez un email pour chaque lead chaud avec : nom, contact, budget, besoins, questions posées. Vous reprenez contact à votre rythme.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-900/30 rounded-xl p-4 border border-orange-500/30">
                    <p className="text-orange-300 text-sm">
                      <strong>⚠️ Règle d'or :</strong> Répondez aux prospects sous 24h maximum. Un prospect qui attend 2-3 jours perd son intérêt. La rapidité de votre réponse impacte directement votre taux de conversion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PHASE 5 : Suivi et ajustements */}
          <div className="bg-gradient-to-br from-cyan-800/30 to-teal-900/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-cyan-500/30">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Pendant la campagne : Suivi continu</h3>
                <p className="text-blue-200 mb-4">
                  Nous restons disponibles et ajustons si nécessaire
                </p>

                <div className="space-y-4">
                  <div className="bg-white/10 rounded-xl p-5 border border-cyan-400/30">
                    <h4 className="font-bold text-white mb-3">📊 Dashboard temps réel</h4>
                    <p className="text-sm text-blue-100 mb-3">
                      Vous pouvez consulter à tout moment :
                    </p>
                    <ul className="space-y-1 text-sm text-blue-100 ml-6">
                      <li>• Progression envois (par jour, par segment)</li>
                      <li>• Taux d'ouverture/lecture</li>
                      <li>• Réponses positives vs négatives vs neutres</li>
                      <li>• Liste leads chauds avec détails</li>
                    </ul>
                  </div>

                  <div className="bg-white/10 rounded-xl p-5 border border-cyan-400/30">
                    <h4 className="font-bold text-white mb-3">🔧 Ajustements possibles</h4>
                    <p className="text-sm text-blue-100 mb-3">
                      Si nécessaire, nous pouvons :
                    </p>
                    <ul className="space-y-1 text-sm text-blue-100 ml-6">
                      <li>• Ajuster le wording d'un message (si taux réponse faible)</li>
                      <li>• Ralentir ou accélérer légèrement les envois</li>
                      <li>• Affiner la qualification (si trop de leads "tièdes")</li>
                    </ul>
                    <div className="mt-3 bg-cyan-900/30 rounded-lg p-3 border border-cyan-500/30">
                      <p className="text-xs text-cyan-300">
                        💡 Notre engagement : nous restons réactifs tout au long de la campagne.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-5 border border-cyan-400/30">
                    <h4 className="font-bold text-white mb-3">📞 Point hebdomadaire (optionnel)</h4>
                    <p className="text-sm text-blue-100">
                      Si vous le souhaitez, nous pouvons faire un point téléphonique rapide (15 min) chaque semaine pour :
                    </p>
                    <ul className="space-y-1 text-sm text-blue-100 ml-6 mt-2">
                      <li>• Faire le bilan des retours</li>
                      <li>• Répondre à vos questions</li>
                      <li>• Ajuster la suite si besoin</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PHASE 6 : Fin de campagne et rapport */}
          <div className="bg-gradient-to-br from-indigo-800/30 to-violet-900/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-indigo-500/30">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                6
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Jour 31+ : Rapport final et débrief</h3>
                <p className="text-blue-200 mb-4">
                  Bilan complet de la campagne avec toutes les données
                </p>

                <div className="space-y-4">
                  <div className="bg-white/10 rounded-xl p-5 border border-indigo-400/30">
                    <h4 className="font-bold text-white mb-3">📈 Rapport détaillé (PDF)</h4>
                    <p className="text-sm text-blue-100 mb-3">
                      Vous recevez un document professionnel contenant :
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <strong className="text-white text-sm">📊 Statistiques globales</strong>
                        <ul className="mt-2 space-y-1 text-xs text-blue-100 ml-6">
                          <li>• Nombre total de contacts approchés</li>
                          <li>• Taux d'ouverture Email / Taux lecture WhatsApp</li>
                          <li>• Nombre de réponses (positives/neutres/négatives)</li>
                          <li>• Taux de réponse global</li>
                        </ul>
                      </div>

                      <div>
                        <strong className="text-white text-sm">🎯 Répartition par segment</strong>
                        <ul className="mt-2 space-y-1 text-xs text-blue-100 ml-6">
                          <li>• Hôtels 3★ : X envoyés, Y réponses</li>
                          <li>• Hôtels 4★ : X envoyés, Y réponses</li>
                          <li>• Gîtes : X envoyés, Y réponses</li>
                          <li>• Etc.</li>
                        </ul>
                      </div>

                      <div>
                        <strong className="text-white text-sm">🔥 Leads qualifiés transmis</strong>
                        <ul className="mt-2 space-y-1 text-xs text-blue-100 ml-6">
                          <li>• Liste complète avec : nom, entreprise, contact, budget, timing</li>
                          <li>• Répartition géographique</li>
                          <li>• Niveau de maturité (chaud/tiède)</li>
                        </ul>
                      </div>

                      <div>
                        <strong className="text-white text-sm">💬 Verbatims anonymisés</strong>
                        <p className="mt-2 text-xs text-blue-100 ml-6">
                          Exemples de réponses reçues (positives et négatives) pour comprendre les retours du marché.
                        </p>
                      </div>

                      <div>
                        <strong className="text-white text-sm">💡 Recommandations</strong>
                        <p className="mt-2 text-xs text-blue-100 ml-6">
                          Nos conseils pour optimiser une prochaine campagne (segments à privilégier, messages à ajuster, etc.)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-5 border border-indigo-400/30">
                    <h4 className="font-bold text-white mb-3">📞 Call de débrief (30 min)</h4>
                    <p className="text-sm text-blue-100">
                      Nous organisons un échange pour :
                    </p>
                    <ul className="space-y-1 text-sm text-blue-100 ml-6 mt-2">
                      <li>• Présenter les résultats en détail</li>
                      <li>• Recueillir votre feedback sur les leads transmis</li>
                      <li>• Discuter d'une éventuelle nouvelle campagne (si pertinent)</li>
                    </ul>
                  </div>

                  <div className="bg-indigo-900/30 rounded-xl p-4 border border-indigo-500/30">
                    <p className="text-indigo-300 text-sm">
                      <strong>🎯 Notre engagement :</strong> Nous mesurons factuellement notre travail. Même si aucune vente n'est conclue (ce qui ne dépend pas de nous), vous aurez des données précises sur votre marché B2B local.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Section finale : Ce que nous NE faisons PAS */}
        <div className="mt-16 bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-red-500/30">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
            ⚠️ Transparence : Ce que nous NE faisons PAS
          </h2>
          <p className="text-blue-200 text-center mb-8 max-w-3xl mx-auto">
            Pour éviter tout malentendu, voici ce qui n'est <strong>pas inclus</strong> dans notre prestation :
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6 border border-red-400/30">
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-red-400">❌</span>
                Nous ne sommes pas vos commerciaux
              </h3>
              <p className="text-sm text-blue-100">
                Nous déclenchons des conversations, mais nous ne répondons pas aux questions techniques produit, ne négocions pas les prix, et ne signons pas les contrats à votre place.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 border border-red-400/30">
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-red-400">❌</span>
                Nous ne garantissons pas de ventes
              </h3>
              <p className="text-sm text-blue-100">
                Nous promettons des <strong>conversations qualifiées</strong>, pas des ventes. La transformation finale dépend de votre réactivité, votre offre, et vos prix.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 border border-red-400/30">
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-red-400">❌</span>
                Nous ne faisons pas de support client
              </h3>
              <p className="text-sm text-blue-100">
                Une fois le lead transmis, c'est à vous de gérer la relation commerciale. Nous ne relançons pas, ne suivons pas les devis, et ne gérons pas le SAV.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 border border-red-400/30">
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-red-400">❌</span>
                Nous ne mesurons pas le CA généré
              </h3>
              <p className="text-sm text-blue-100">
                Notre rapport final s'arrête aux <strong>conversations déclenchées</strong>. Le suivi des ventes conclues et du chiffre d'affaires généré ne fait pas partie de notre périmètre.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-yellow-900/30 rounded-xl p-6 border border-yellow-500/30 text-center">
            <p className="text-yellow-300 font-semibold">
              💡 Notre rôle = <strong>Génération de conversations B2B qualifiées</strong>
            </p>
            <p className="text-yellow-200 text-sm mt-2">
              Votre rôle = Transformer ces conversations en ventes grâce à votre expertise métier
            </p>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Prêt à activer votre réseau B2B local ?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Planifions un rendez-vous de 30 minutes pour déterminer si Smart Prospect peut vous aider à développer votre activité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
              >
                Demander une démo gratuite
              </Link>
              <a 
                href="https://wa.me/590690711464?text=Bonjour,%20je%20souhaite%20en%20savoir%20plus%20sur%20Smart%20Prospect"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all shadow-lg hover:shadow-xl"
              >
                📱 WhatsApp direct
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-900/50 backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-blue-300">
          <p className="mb-2">© 2026 IA Solutions Guadeloupe - Smart Prospect</p>
          <p className="text-sm text-blue-400">Activation de réseau B2B professionnel | Guadeloupe, Martinique, Guyane</p>
        </div>
      </footer>
    </div>
  );
}
