import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Comment ça marche', href: '/methode' },
    { name: 'Demander une démo', href: '/contact' },
    { name: 'À propos', href: '/about' },
  ]

  const services = [
    { name: 'Smart Prospect', href: '/#smart-prospect' },
    { name: 'Prospection B2B', href: '/#solution' },
    { name: 'ROI Mesurable', href: '/#resultats' },
    { name: 'Tarifs & Formules', href: '/#tarifs' },
  ]

  const resources = [
    { name: 'Cas clients', href: '/#cas-clients' },
    { name: 'Méthode complète', href: '/methode' },
    { name: 'Comparaison vs Agences', href: '/#comparaison' },
    { name: 'FAQ', href: '/#faq' },
  ]

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/gregory-declercq-ia-solutions',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      name: 'WhatsApp', 
      href: 'https://wa.me/+33769182076?text=Bonjour, je souhaite en savoir plus sur Smart Prospect',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.686"/>
        </svg>
      )
    }
  ]

  const zones = [
    'Pointe-à-Pitre', 'Basse-Terre', 'Le Gosier', 'Sainte-Anne',
    'Saint-François', 'Capesterre', 'Marie-Galante', 'Martinique'
  ]

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-white">
      
      {/* CTA Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-3xl p-8 md:p-12 border border-green-500/30 backdrop-blur-sm text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à générer vos premiers clients B2B ?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Démo gratuite de 20 minutes • Analyse de votre marché • Proposition sur-mesure
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
              >
                Demander une démo 🚀
              </Link>
              <a
                href="https://wa.me/+33769182076?text=Bonjour, je souhaite une démo Smart Prospect"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all"
              >
                💬 WhatsApp direct
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold">IA</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">IA Solutions</h3>
                <p className="text-green-400 text-sm">Guadeloupe • Smart Prospect</p>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm mb-6">
              L&apos;agence qui génère 10-45 nouveaux clients B2B pour votre entreprise grâce à la prospection automatisée ultra-personnalisée.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-300">
                <span>📞</span>
                <a href="tel:+33769182076" className="hover:text-green-400 transition-colors">
                  +33 7 69 18 20 76
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span>📧</span>
                <a href="mailto:gregory@ia-solutions-guadeloupe.fr" className="hover:text-green-400 transition-colors break-all">
                  gregory@ia-solutions-guadeloupe.fr
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span>📍</span>
                <span>Guadeloupe, Antilles françaises</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-600 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Smart Prospect</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Stats Box */}
            <div className="mt-6 bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-2xl p-4 border border-green-700/30">
              <h5 className="font-semibold text-green-400 text-sm mb-3">📊 Résultats moyens</h5>
              <div className="space-y-2 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span>Taux ouverture :</span>
                  <span className="font-bold text-green-400">45-60%</span>
                </div>
                <div className="flex justify-between">
                  <span>Taux réponse :</span>
                  <span className="font-bold text-green-400">7-12%</span>
                </div>
                <div className="flex justify-between">
                  <span>ROI moyen :</span>
                  <span className="font-bold text-green-400">+200%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Ressources</h4>
            <ul className="space-y-3 mb-6">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact rapide */}
            <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-2xl p-4 border border-green-800/30">
              <h5 className="font-semibold text-green-400 text-sm mb-2">⚡ Besoin urgent ?</h5>
              <p className="text-xs text-gray-300 mb-3">Question sur Smart Prospect ?</p>
              <a
                href="https://wa.me/+33769182076?text=Question urgente Smart Prospect"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors inline-block w-full text-center"
              >
                WhatsApp immédiat
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Zone d'intervention */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h4 className="font-semibold text-lg mb-4 text-center">🏝️ Zones d&apos;intervention Antilles</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {zones.map((zone) => (
              <span
                key={zone}
                className="bg-white/10 backdrop-blur-sm text-gray-300 px-4 py-2 rounded-full text-sm border border-white/20 hover:border-green-600 hover:text-green-400 transition-colors"
              >
                {zone}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            💡 Également disponible : Guyane • Saint-Martin • Saint-Barthélemy
          </p>
        </div>
      </div>

      {/* Garanties */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <div className="text-3xl mb-2">⏱️</div>
              <div className="font-semibold text-white text-sm">Lancement rapide</div>
              <div className="text-gray-400 text-xs mt-1">3-4 semaines</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <div className="text-3xl mb-2">📊</div>
              <div className="font-semibold text-white text-sm">ROI mesurable</div>
              <div className="text-gray-400 text-xs mt-1">Dashboard temps réel</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <div className="text-3xl mb-2">🎯</div>
              <div className="font-semibold text-white text-sm">100% personnalisé</div>
              <div className="text-gray-400 text-xs mt-1">Zéro copier-coller</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <div className="text-3xl mb-2">🏝️</div>
              <div className="font-semibold text-white text-sm">Expert local</div>
              <div className="text-gray-400 text-xs mt-1">Basé en Guadeloupe</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>© {currentYear} IA Solutions Guadeloupe</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1">
                Fait avec <span className="text-red-500">❤️</span> en Guadeloupe
              </span>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <Link href="/mentions-legales" className="text-gray-500 hover:text-gray-300 transition-colors">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="text-gray-500 hover:text-gray-300 transition-colors">
                Confidentialité
              </Link>
              <Link href="/cgv" className="text-gray-500 hover:text-gray-300 transition-colors">
                CGV
              </Link>
            </div>
          </div>

          {/* Certifications */}
          <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-gray-800">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              RGPD Compliant
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Paiement Sécurisé
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Expert IA B2B
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
