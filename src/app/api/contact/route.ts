import { NextRequest, NextResponse } from 'next/server'

const CONTACT_EMAIL = 'gregory.declercq@ia-solutions-guadeloupe.fr'

type ContactBody = {
  name?: string
  email?: string
  phone?: string
  company?: string
  sector?: string
  employees?: string
  challenge?: string
  message?: string
  budget?: string
}

function buildContactEmailHtml(data: ContactBody): string {
  const rows = [
    ['Nom', data.name],
    ['Email', data.email],
    ['Téléphone', data.phone],
    ['Entreprise', data.company],
    ['Secteur', data.sector],
    ['Effectif', data.employees],
    ['Défi / Objectif', data.challenge],
    ['Budget envisagé', data.budget],
    ['Message', data.message],
  ].filter(([, v]) => v)

  const tableRows = rows
    .map(([label, value]) => `<tr><td style="padding:8px 12px 8px 0;color:#64748b;">${label}</td><td style="padding:8px 0;">${String(value).replace(/</g, '&lt;').replace(/>/g, '&gt;')}</td></tr>`)
    .join('')

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #0ea5e9;">📬 Nouvelle demande de contact</h2>
  <p>Un visiteur a soumis le formulaire de contact du site Smart Prospect.</p>
  <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
  <table style="width: 100%; border-collapse: collapse;">${tableRows}</table>
  <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
  <p style="color: #64748b; font-size: 12px;">Formulaire contact • ${new Date().toLocaleString('fr-FR')}</p>
</body>
</html>
  `.trim()
}

export async function POST(request: NextRequest) {
  try {
    const data = (await request.json()) as ContactBody

    if (!data.email || !data.name) {
      return NextResponse.json(
        { error: 'Nom et email requis' },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('[contact] RESEND_API_KEY manquant.')
      return NextResponse.json(
        { error: 'Configuration email manquante' },
        { status: 503 }
      )
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Smart Prospect <onboarding@resend.dev>'
    const html = buildContactEmailHtml(data)

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [CONTACT_EMAIL],
        subject: `[Smart Prospect] Contact : ${data.company || data.name}`,
        html,
        reply_to: data.email,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('[contact] Resend error:', res.status, err)
      return NextResponse.json(
        { error: 'Échec envoi du message' },
        { status: 502 }
      )
    }

    const result = await res.json()
    return NextResponse.json({ ok: true, id: result.id })
  } catch (e) {
    console.error('[contact]', e)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
