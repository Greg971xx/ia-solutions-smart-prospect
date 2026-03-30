import Link from "next/link"
import type { Metadata } from "next"
import Navigation from "@/components/Navigation"

export const metadata: Metadata = {
  title:
    "FAQ | IA Guadeloupe, marketing B2B, agence web — Smart Prospect",
  description:
    "Questions fréquentes : prospection B2B par IA en Guadeloupe, différence avec une agence web ou de communication, marketing digital et publicité. Offre Smart Prospect inchangée.",
  alternates: {
    canonical: "/faq",
  },
}

const faqItems: { question: string; answer: string }[] = [
  {
    question: "Qu’est-ce que la prospection B2B par IA en Guadeloupe ?",
    answer:
      "C’est une campagne d’acquisition commerciale ciblée sur les décideurs d’entreprises (secteurs et zones que vous définissez), avec des messages uniques générés ou assistés par l’IA, des envois par Email et WhatsApp, et la remontée des contacts intéressés. IA Solutions Guadeloupe pilote Smart Prospect pour les entreprises en Guadeloupe, Martinique et Guyane — sans que vous ayez à gérer un outil ou une formation longue.",
  },
  {
    question: "En quoi IA Solutions diffère d’une agence web ou d’une agence de communication ?",
    answer:
      "Une agence web ou de communication couvre souvent le site, l’identité visuelle, la création de contenus ou des campagnes média larges. Nous, nous nous concentrons sur une brique : générer des conversations et des leads B2B grâce à la prospection personnalisée par IA et aux canaux directs (Email, WhatsApp). Vous pouvez travailler avec une agence pour votre image et avec nous pour alimenter votre pipe commercial — les rôles sont complémentaires.",
  },
  {
    question: "Faites-vous du marketing digital ou de la publicité en ligne comme une agence digitale ?",
    answer:
      "Nous pilotons l’outreach B2B (messages, délivrabilité, suivi des réponses) et la mise en relation avec des prospects qualifiés. Nous ne remplaçons pas un plan média display complet ni une stratégie de marque globale ; en revanche, pour beaucoup d’entreprises locales, la « publicité » la plus rentable est d’atteindre directement les bons décideurs — c’est le cœur de Smart Prospect.",
  },
  {
    question: "Pourquoi « IA Guadeloupe » et Smart Prospect vont ensemble ?",
    answer:
      "« IA Guadeloupe » décrit notre ancrage : solutions d’intelligence artificielle appliquées aux entreprises des Antilles. Smart Prospect est le produit — une campagne de prospection B2B sur 30 jours avec objectifs d’engagement et de livraison de prospects intéressés. La marque IA Solutions Guadeloupe porte cette offre avec transparence sur le périmètre (prospection B2B, pas agence généraliste).",
  },
  {
    question: "Je cherchais une agence de publicité à la Guadeloupe — est-ce le bon site ?",
    answer:
      "Si votre besoin principal est la notoriété large (TV, radio, panneaux, réseaux sociaux sans ciblage B2B fin), une agence média ou de publicité classique peut être adaptée. Si vous voulez des rendez-vous et des leads auprès d’entreprises ciblées, avec un coût maîtrisé et des indicateurs sur les ouvertures et les réponses, Smart Prospect correspond mieux — dites-nous votre objectif en démo.",
  },
  {
    question: "Intervenez-vous hors Guadeloupe ?",
    answer:
      "Oui : Martinique, Guyane et plus largement les Antilles françaises sont couvertes, avec la même méthode Smart Prospect. Les délais et le cadrage sont identiques ; seules les cibles géographiques et sectorielles changent.",
  },
]

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navigation currentPage="faq" />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <p className="text-blue-300 text-sm font-medium mb-4">
            IA Guadeloupe · prospection B2B · marketing de l’acquisition
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Questions fréquentes
          </h1>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Réponses alignées sur ce que les internautes recherchent (agence web,
            marketing, IA locale) tout en restant fidèles à notre offre{" "}
            <strong className="text-white">Smart Prospect</strong> — prospection
            B2B par IA aux Antilles.
          </p>

          <div className="space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden open:border-blue-400/40"
              >
                <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-white flex items-center justify-between gap-4 hover:bg-white/5">
                  <span>{item.question}</span>
                  <span className="text-blue-300 shrink-0 text-xl leading-none group-open:rotate-180 transition-transform">
                    ▾
                  </span>
                </summary>
                <div className="px-5 pb-4 text-blue-100/95 text-sm md:text-base leading-relaxed border-t border-white/5 pt-4">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-green-600/20 to-blue-600/20 border border-green-500/30 text-center">
            <p className="text-gray-200 mb-4">
              Une question précise sur votre secteur à la Guadeloupe ?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:opacity-95 transition-opacity"
            >
              Demander une démo
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              <Link href="/methode" className="text-blue-400 hover:underline">
                Voir notre méthode
              </Link>
              {" · "}
              <Link href="/" className="text-blue-400 hover:underline">
                Accueil
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
