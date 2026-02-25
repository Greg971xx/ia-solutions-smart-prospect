// src/components/MethodThreeSteps.tsx

// En haut de chaque fichier component
'use client' // Pour les composants interactifs
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function MethodThreeSteps() {
  const steps = [
    {
      id: 1,
      title: "Sensibiliser le dirigeant",
      desc:
        "Démystifier l’IA, cadrer les objectifs et identifier 2–3 quick wins réalistes. Livrable : mini diagnostic PDF.",
      bullet: [
        "Panorama IA (générative, automatisation, data)",
        "Cas concrets par secteur",
        "3 actions simples prioritaires",
      ],
      tag: "Étape 1",
    },
    {
      id: 2,
      title: "Acculturer les équipes",
      desc:
        "Ateliers pratiques avec des outils existants (ChatGPT, Copilot, Notion AI, Zapier/Make) pour une adoption réelle.",
      bullet: [
        "Formation aux prompts utiles",
        "Ateliers par métier (RH, compta, SAV…)",
        "Mise en place de quick wins",
      ],
      tag: "Étape 2",
    },
    {
      id: 3,
      title: "Déployer par briques",
      desc:
        "Implémentations ciblées, service par service. Chaque module est un mini-projet facturé avec ROI mesurable.",
      bullet: [
        "Connecteurs & APIs (CRM/ERP/Docs)",
        "Chatbots internes (RAG) sécurisés",
        "Workflows automatisés + maintenance",
      ],
      tag: "Étape 3",
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Notre méthode en 3 étapes</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Pas de big bang : on avance vite, concrètement, et service par service.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.id} className="rounded-2xl border p-6 hover:shadow-md transition">
            <div className="text-sm inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-4">
              <span>✅</span>
              <span className="font-medium">{s.tag}</span>
            </div>
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="text-gray-600 mt-2">{s.desc}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {s.bullet.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-[6px]">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
        >
          Réserver un diagnostic (1h)
        </a>
      </div>
    </section>
  )
}
