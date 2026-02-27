'use client'

import Link from 'next/link'

/**
 * Bannière "Lancement prochainement" / pré-commande
 * Affichée uniquement si NEXT_PUBLIC_COMING_SOON=true dans .env.local
 * Désactiver en retirant ou mettant à false pour le lancement officiel
 */
export default function ComingSoonBanner() {
  const isComingSoon = process.env.NEXT_PUBLIC_COMING_SOON === 'true'

  if (!isComingSoon) return null

  return (
    <div className="sticky top-0 z-[60] w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 px-4 py-2.5 text-center shadow-lg">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <span className="font-semibold text-white text-sm sm:text-base">
          🚀 Lancement officiel prochainement
        </span>
        <span className="hidden sm:inline text-white/90">—</span>
        <span className="text-white/95 text-sm">
          Pré-commandes ouvertes
        </span>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 ml-0 sm:ml-2 px-3 py-1.5 bg-white text-orange-600 rounded-lg font-semibold text-sm hover:bg-orange-50 transition-colors"
        >
          Réserver ma place →
        </Link>
      </div>
    </div>
  )
}
