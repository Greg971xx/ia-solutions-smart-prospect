'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    sector: '',
    employees: '',
    challenge: '',
    message: '',
    budget: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setSubmitError(data.error || 'Une erreur est survenue. Réessayez ou contactez-nous par WhatsApp.')
        return
      }
      setIsSubmitted(true)
    } catch {
      setSubmitError('Problème de connexion. Réessayez ou contactez-nous par WhatsApp.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <>
        <Navigation currentPage="contact" />
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <div className="text-6xl mb-6">🎉</div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Demande reçue avec succès !
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Merci <strong>{formData.name}</strong> ! Je vais analyser vos besoins et vous recontacter sous <strong className="text-green-600">24h maximum</strong> pour planifier votre démo personnalisée.
              </p>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">📋 Prochaines étapes :</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <div className="font-semibold text-gray-900">Analyse de votre marché</div>
                      <div className="text-sm text-gray-600">J&apos;estime le potentiel de conversations B2B pertinentes dans votre secteur</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                    <div>
                      <div className="font-semibold text-gray-900">Préparation proposition</div>
                      <div className="text-sm text-gray-600">Formule adaptée + estimation ROI pour votre cas spécifique</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                    <div>
                      <div className="font-semibold text-gray-900">Démo personnalisée (20-30 min)</div>
                      <div className="text-sm text-gray-600">Je vous montre concrètement comment Smart Prospect fonctionnera pour vous</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-4 mb-8 border border-blue-200">
                <p className="text-sm text-blue-900">
                  💡 <strong>En attendant :</strong> Consultez notre{' '}
                  <Link href="/methode" className="text-blue-600 font-semibold hover:underline">
                    méthode complète
                  </Link>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform"
                >
                  ← Retour à l&apos;accueil
                </Link>
                <a
                  href="https://wa.me/+33769182076?text=Bonjour, je viens d'envoyer une demande via le site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-green-600 text-green-700 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-colors"
                >
                  💬 Me contacter sur WhatsApp
                </a>
              </div>
            </div>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Navigation currentPage="contact" />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      
        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 px-4 py-2 rounded-full text-green-300 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Réponse garantie sous 24h</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Générez 10-45 nouveaux clients B2B
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Démo gratuite de 20 minutes pour découvrir comment Smart Prospect peut transformer votre prospection
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-bold text-white mb-2">Analyse gratuite</h3>
                <p className="text-gray-300 text-sm">Potentiel de visibilité et de conversations B2B dans votre secteur</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-bold text-white mb-2">ROI projeté</h3>
                <p className="text-gray-300 text-sm">ROI (visibilité, liste de prospects, conversations) pour votre cas</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-bold text-white mb-2">Proposition sur-mesure</h3>
                <p className="text-gray-300 text-sm">Formule et tarif adaptés à vos besoins</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Demander une démo personnalisée
                </h2>
                <p className="text-gray-600">
                  Remplissez ce formulaire et je vous recontacte sous 24h
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Informations personnelles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom et prénom *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
                      placeholder="Jean Martin"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
                      placeholder="jean@entreprise.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
                      placeholder="0690 12 34 56"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Entreprise *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
                      placeholder="Mon Entreprise SAS"
                    />
                  </div>
                </div>

                {/* Informations entreprise */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Secteur d&apos;activité *
                    </label>
                    <select
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      required
                      className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-white"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="commerce">Commerce / Distribution</option>
                      <option value="hotellerie">Hôtellerie / Restauration</option>
                      <option value="services_b2b">Services B2B</option>
                      <option value="industrie">Industrie / Manufacturing</option>
                      <option value="btp">BTP / Artisanat</option>
                      <option value="sante">Santé / Bien-être</option>
                      <option value="tech">Tech / Digital</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre d&apos;employés
                    </label>
                    <select
                      name="employees"
                      value={formData.employees}
                      onChange={handleChange}
                      className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-white"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="1-5">1-5 personnes</option>
                      <option value="6-20">6-20 personnes</option>
                      <option value="21-50">21-50 personnes</option>
                      <option value="51-100">51-100 personnes</option>
                      <option value="100+">Plus de 100</option>
                    </select>
                  </div>
                </div>

                {/* Défi principal */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Votre défi principal *
                  </label>
                  <select
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-white"
                  >
                    <option value="">Sélectionnez votre situation...</option>
                    <option value="manque_clients">😓 Manque de nouveaux clients B2B</option>
                    <option value="prospection_inefficace">❌ Prospection manuelle inefficace</option>
                    <option value="taux_reponse_faible">📉 Taux de réponse très faible (&lt;5%)</option>
                    <option value="pas_de_temps">⏰ Pas le temps de prospecter</option>
                    <option value="pas_de_systeme">🤷 Pas de système de prospection structuré</option>
                    <option value="expansion">🚀 Veux accélérer ma croissance</option>
                    <option value="autre">💡 Autre défi</option>
                  </select>
                </div>

              {/* Budget indicatif */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Budget envisagé pour la prospection
                </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-white"
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="2500">2 500 € HT — Campagne Smart Prospect (recommandé)</option>
                    <option value="custom">Sur-mesure (volume plus large, devis)</option>
                    <option value="unknown">À définir ensemble</option>
                  </select>
              </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Détails supplémentaires (optionnel)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
                    placeholder="Parlez-nous de vos produits/services B2B, de vos cibles idéales, de vos objectifs..."
                  />
                </div>

                {/* Info RGPD */}
                <div className="bg-blue-50 rounded-xl p-4 text-sm text-gray-700 border border-blue-200">
                  <p>
                    🔒 Vos données sont traitées de manière confidentielle et ne seront jamais partagées. 
                    En soumettant ce formulaire, vous acceptez d&apos;être recontacté par IA Solutions Guadeloupe.
                  </p>
                </div>

                {submitError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm">
                    {submitError}
                  </div>
                )}

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white p-5 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Envoi en cours...
                      </div>
                    ) : (
                      "Demander ma démo gratuite 🚀"
                    )}
                  </button>
                  <p className="text-center text-sm text-gray-500 mt-3">
                    ⏱️ Réponse garantie sous 24h • 📞 Démo sous 48h
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Direct */}
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ou contactez-moi directement
              </h2>
              <p className="text-gray-300">
                Choisissez le canal qui vous convient le mieux
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* WhatsApp */}
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-green-400/50 text-center">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-white mb-3">WhatsApp</h3>
                <p className="text-gray-300 mb-4">Discussion instantanée</p>
                <a 
                  href="https://wa.me/+33769182076?text=Bonjour, je souhaite en savoir plus sur Smart Prospect" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-green-700 transition-colors"
                >
                  Chatter maintenant
                </a>
                <p className="text-sm text-gray-400 mt-3">Réponse sous 2h</p>
              </div>

              {/* Téléphone */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
                <div className="text-5xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-white mb-3">Téléphone</h3>
                <p className="text-gray-300 mb-4">Appelez directement</p>
                <a 
                  href="tel:+33769182076" 
                  className="text-blue-400 font-semibold text-lg hover:text-blue-300 transition-colors inline-block"
                >
                  +33 7 69 18 20 76
                </a>
                <p className="text-sm text-gray-400 mt-3">Lun-Ven 9h-18h</p>
              </div>

              {/* Email */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
                <div className="text-5xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-white mb-3">Email</h3>
                <p className="text-gray-300 mb-4">Écrivez-moi votre projet</p>
                <a 
                  href="mailto:gregory@ia-solutions-guadeloupe.fr" 
                  className="text-blue-400 font-semibold hover:text-blue-300 transition-colors inline-block break-all"
                >
                  gregory@ia-solutions-guadeloupe.fr
                </a>
                <p className="text-sm text-gray-400 mt-3">Réponse sous 24h</p>
              </div>
            </div>
          </div>
        </section>

        {/* Zone géographique */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    🏝️ Basé en Guadeloupe
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    Je connais le marché antillais et ses spécificités. 
                    Smart Prospect est optimisé pour les entreprises B2B de la Caraïbe.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span>Guadeloupe (toutes communes)</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span>Martinique</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span>Guyane, Saint-Martin, Saint-Barthélemy</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span>RDV à distance (visio) disponibles</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold text-white mb-4">✅ Pourquoi un expert local ?</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Connaissance du tissu économique antillais</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Messages adaptés à la culture locale</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Disponibilité sur le même fuseau horaire</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">•</span>
                      <span>RDV en présentiel possibles</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Contact */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Questions fréquentes avant de démarrer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="font-semibold text-white mb-3 text-lg">⏱️ Combien de temps pour lancer ma campagne ?</h4>
                <p className="text-gray-300">Entre 5 et 7 jours après validation : cadrage (2h) → développement campagne (3 jours) → validation finale → lancement.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="font-semibold text-white mb-3 text-lg">💰 Quand dois-je payer ?</h4>
                <p className="text-gray-300">Acompte 50% à la commande, solde 50% au lancement de la campagne. Paiement sécurisé en ligne ou virement.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="font-semibold text-white mb-3 text-lg">📊 Comment je suis les résultats ?</h4>
                <p className="text-gray-300">Retours des prospects consultables en temps réel au fur et à mesure des réponses. Rapports hebdomadaires. Export leads en CSV quand vous voulez.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="font-semibold text-white mb-3 text-lg">🎯 C&apos;est garanti ?</h4>
                <p className="text-gray-300">Je garantis les moyens (campagne optimisée pour 50-100 décideurs B2B qui ouvrent ou répondent, 30-80 prospects intéressés livrés), pas le résultat final. Taux de réponse moyen : 7-12% vs 2-3% marché.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 border-2 border-green-500/30">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Prêt à générer vos premiers leads ?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Planifiez votre démo gratuite maintenant et découvrez comment Smart Prospect peut transformer votre prospection B2B
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })}
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl"
                >
                  ↑ Remplir le formulaire
                </button>
                <a
                  href="https://wa.me/+33769182076?text=Bonjour, je souhaite une démo Smart Prospect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white/50 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  💬 WhatsApp direct
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
