import { NextRequest, NextResponse } from 'next/server'

const ALERT_EMAIL = 'gregory.declercq@ia-solutions-guadeloupe.fr'

function buildEmailHtml(data: Record<string, unknown>, summary: string): string {
  const contact = [
    data.contactName && `Nom : ${data.contactName}`,
    data.contactEmail && `Email : ${data.contactEmail}`,
    data.contactPhone && `Téléphone : ${data.contactPhone}`,
    data.contactFunction && `Fonction : ${data.contactFunction}`,
  ].filter(Boolean).join(' | ')

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #0ea5e9;">🔔 Nouveau brief Smart Prospect</h2>
  <p>Un visiteur a complété le parcours chatbot sur le site.</p>
  <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
  <p><strong>Contact :</strong><br/>${contact || '—'}</p>
  <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
  <pre style="background: #f8fafc; padding: 16px; border-radius: 8px; white-space: pre-wrap; font-size: 14px;">${summary.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
  <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
  <p style="color: #64748b; font-size: 12px;">Envoyé depuis le formulaire chatbot • ${new Date().toLocaleString('fr-FR')}</p>
</body>
</html>
  `.trim()
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { summary, data } = body as { summary?: string; data?: Record<string, unknown> }

    if (!summary || !data) {
      return NextResponse.json(
        { error: 'summary et data requis' },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('[chatbot-brief] RESEND_API_KEY manquant. Alerte non envoyée.', { data })
      return NextResponse.json(
        { error: 'Configuration email manquante (RESEND_API_KEY)' },
        { status: 503 }
      )
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Smart Prospect <onboarding@resend.dev>'
    const html = buildEmailHtml(data, summary)

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [ALERT_EMAIL],
        subject: `[Smart Prospect] Nouveau brief : ${(data.companyName as string) || 'Sans nom'}`,
        html,
        reply_to: (data.contactEmail as string) || undefined,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('[chatbot-brief] Resend error:', res.status, err)
      return NextResponse.json(
        { error: 'Échec envoi email' },
        { status: 502 }
      )
    }

    const result = await res.json()
    return NextResponse.json({ ok: true, id: result.id })
  } catch (e) {
    console.error('[chatbot-brief]', e)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
