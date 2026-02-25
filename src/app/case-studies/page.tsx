export const metadata = {
  title: "Études de cas | IA Solutions Guadeloupe",
  description: "Résultats obtenus, retours d’expérience et métriques business sur nos projets IA.",
}

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Études de cas</h1>
      <p className="mt-4 text-muted-foreground">
        Les études de cas seront publiées prochainement (après les premiers déploiements).
      </p>
      <ul className="mt-6 list-disc pl-6 space-y-2">
        <li>Prospection B2B automatisée pour magasins de sport</li>
        <li>Génération de messages personnalisés Email/WhatsApp</li>
        <li>Tracking Shopify et codes promotionnels dédiés</li>
      </ul>
      <div className="mt-8">
        <a
          href="/contact"
          className="inline-flex items-center rounded-xl px-5 py-3 border text-sm hover:bg-muted transition"
        >
          Me contacter
        </a>
      </div>
    </main>
  )
}
