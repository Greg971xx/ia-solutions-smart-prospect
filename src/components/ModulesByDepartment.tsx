// src/components/ModulesByDepartment.tsx
import Link from "next/link"

const MODULES = [
  { dept: "RH", desc: "Pré-tri de CV, FAQ interne, onboarding…", href: "/services", cta: "Voir les modules RH" },
  { dept: "Comptabilité", desc: "Notes de frais, rapprochements, relances…", href: "/services", cta: "Voir les modules Compta" },
  { dept: "SAV / Commercial", desc: "Chatbot, devis, résumés d’appels…", href: "/services", cta: "Voir les modules SAV" },
  { dept: "Logistique", desc: "Suivi colis, prévision stock, tournées…", href: "/services", cta: "Voir les modules Logistique" },
  { dept: "Direction", desc: "Dashboards IA, synthèse hebdo, veille…", href: "/services", cta: "Voir les modules Direction" },
]

export default function ModulesByDepartment() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Modules par service</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          On active des briques ciblées, service par service. Chacune est un mini-projet avec livrable et ROI mesurable.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {MODULES.map((m) => (
          <div key={m.dept} className="rounded-2xl border p-6 hover:shadow-md transition flex flex-col">
            <h3 className="text-xl font-semibold">{m.dept}</h3>
            <p className="text-gray-600 mt-2 flex-grow">{m.desc}</p>
            <Link href={m.href} className="mt-4 inline-block text-blue-600 font-medium hover:underline">
              {m.cta} →
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
