'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
  options?: Array<{label: string, value: string, icon?: string}>
  requiresInput?: boolean
}

interface CampaignData {
  companyName?: string
  sector?: string
  campaignType?: string
  campaignObjective?: string
  productDescription?: string
  targetDescription?: string
  offerDetails?: string
  offerDeadline?: string
  offerType?: string
  eventType?: string
  eventDate?: string
  eventTime?: string
  eventLocation?: string
  eventDescription?: string
  geography?: string[]
  prospectVolume?: string
  channel?: string
  exclusions?: string
  contactName?: string
  contactEmail?: string
  contactPhone?: string
  contactFunction?: string
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [currentStep, setCurrentStep] = useState('welcome')
  const [campaignData, setCampaignData] = useState<CampaignData>({})
  const [isTyping, setIsTyping] = useState(false)
  const [textInput, setTextInput] = useState('')
  const [completionPercentage, setCompletionPercentage] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          "👋 Bonjour ! Je suis l'assistant Smart Prospect.\n\nEn quelques minutes, je vais vous aider à configurer votre campagne de prospection B2B sur-mesure.\n\n✅ Brief généré automatiquement\n✅ Proposition immédiate\n✅ 100% personnalisé\n\nCommençons ! Quel est le nom de votre entreprise ?",
          undefined,
          500
        )
        setCurrentStep('companyName')
      }, 300)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps -- run only when isOpen becomes true
  }, [isOpen])

  const addBotMessage = (text: string, options?: Array<{label: string, value: string, icon?: string}>, delay = 1000) => {
    setIsTyping(true)
    setTimeout(() => {
      const message: Message = {
        id: Date.now().toString(),
        text,
        isUser: false,
        timestamp: new Date(),
        options,
        requiresInput: !options
      }
      setMessages(prev => [...prev, message])
      setIsTyping(false)
    }, delay)
  }

  const addUserMessage = (text: string) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, message])
  }

  const updateCompletionPercentage = (step: string) => {
    const steps = [
      'companyName', 'sector', 'campaignType',
      'campaignObjective', 'targetDescription', 
      'geography', 'prospectVolume', 'channel', 'contactInfo'
    ]
    const currentIndex = steps.indexOf(step)
    const percentage = Math.round((currentIndex / steps.length) * 100)
    setCompletionPercentage(percentage)
  }

  const handleTextSubmit = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!textInput.trim()) return

    addUserMessage(textInput)
    const updatedData = { ...campaignData }

    switch (currentStep) {
      case 'companyName':
        updatedData.companyName = textInput
        setCampaignData(updatedData)
        setCurrentStep('sector')
        updateCompletionPercentage('sector')
        addBotMessage(
          `Merci ! Et dans quel secteur d'activité évolue ${textInput} ?`,
          [
            { label: '🏪 Commerce / Distribution', value: 'commerce' },
            { label: '🏨 Hôtellerie / Restauration', value: 'hotellerie' },
            { label: '💼 Services B2B', value: 'services_b2b' },
            { label: '🏗️ BTP / Artisanat', value: 'btp' },
            { label: '🏥 Santé / Bien-être', value: 'sante' },
            { label: '💻 Tech / Digital', value: 'tech' },
            { label: '📚 Autre secteur', value: 'autre' }
          ]
        )
        break

      case 'productDescription':
        updatedData.productDescription = textInput
        setCampaignData(updatedData)
        setCurrentStep('targetDescription')
        updateCompletionPercentage('targetDescription')
        addBotMessage(
          "Parfait ! Maintenant, à qui voulez-vous vous adresser ?\n\n(Types d'entreprises cibles)",
          undefined
        )
        break

      case 'targetDescription':
        updatedData.targetDescription = textInput
        setCampaignData(updatedData)
        
        if (campaignData.campaignType === 'offre_commerciale') {
          setCurrentStep('offerDetails')
          addBotMessage("Décrivez votre offre en quelques mots :", undefined)
        } else if (campaignData.campaignType === 'promotion') {
          setCurrentStep('offerDetails')
          addBotMessage("Décrivez votre promotion en quelques mots :", undefined)
        } else if (campaignData.campaignType === 'evenement') {
          setCurrentStep('eventType')
          addBotMessage(
            "Quel type d'événement organisez-vous ?",
            [
              { label: '🏢 Portes ouvertes showroom', value: 'portes_ouvertes' },
              { label: '🎯 Démonstration produit', value: 'demo_produit' },
              { label: '🎪 Salon professionnel', value: 'salon' },
              { label: '🎓 Webinar / Conférence', value: 'webinar' },
              { label: '🎉 Inauguration', value: 'inauguration' },
              { label: '📋 Autre événement', value: 'autre' }
            ]
          )
        } else {
          setCurrentStep('geography')
          updateCompletionPercentage('geography')
          addBotMessage(
            "Quelle zone géographique souhaitez-vous cibler ?",
            [
              { label: '🇬🇵 Guadeloupe', value: 'guadeloupe' },
              { label: '🇲🇶 Martinique', value: 'martinique' },
              { label: '🇬🇫 Guyane', value: 'guyane' },
              { label: '🏝️ Saint-Martin / Saint-Barth', value: 'saint_martin' },
              { label: '🌴 Toutes les Antilles', value: 'toutes' }
            ]
          )
        }
        break

      case 'offerDetails':
        updatedData.offerDetails = textInput
        setCampaignData(updatedData)
        setCurrentStep('offerDeadline')
        addBotMessage(
          "Cette offre est-elle limitée dans le temps ?",
          [
            { label: '📅 Oui, jusqu\'à une date précise', value: 'date' },
            { label: '♾️ Non, offre permanente', value: 'permanente' },
            { label: '📦 Stocks limités', value: 'stocks' }
          ]
        )
        break

      case 'offerDeadlineDate':
        updatedData.offerDeadline = `jusqu'au ${textInput}`
        setCampaignData(updatedData)
        setCurrentStep('geography')
        updateCompletionPercentage('geography')
        addBotMessage(
          "Quelle zone géographique souhaitez-vous cibler ?",
          [
            { label: '🇬🇵 Guadeloupe', value: 'guadeloupe' },
            { label: '🇲🇶 Martinique', value: 'martinique' },
            { label: '🇬🇫 Guyane', value: 'guyane' },
            { label: '🏝️ Saint-Martin / Saint-Barth', value: 'saint_martin' },
            { label: '🌴 Toutes les Antilles', value: 'toutes' }
          ]
        )
        break

      case 'offerDeadlineStocks':
        updatedData.offerDeadline = `stocks limités (${textInput} unités)`
        setCampaignData(updatedData)
        setCurrentStep('geography')
        updateCompletionPercentage('geography')
        addBotMessage(
          "Quelle zone géographique souhaitez-vous cibler ?",
          [
            { label: '🇬🇵 Guadeloupe', value: 'guadeloupe' },
            { label: '🇲🇶 Martinique', value: 'martinique' },
            { label: '🇬🇫 Guyane', value: 'guyane' },
            { label: '🏝️ Saint-Martin / Saint-Barth', value: 'saint_martin' },
            { label: '🌴 Toutes les Antilles', value: 'toutes' }
          ]
        )
        break

      case 'eventDate':
        updatedData.eventDate = textInput
        setCampaignData(updatedData)
        setCurrentStep('eventTime')
        addBotMessage("À quelle heure ? (ex: 14h00)", undefined)
        break

      case 'eventTime':
        updatedData.eventTime = textInput
        setCampaignData(updatedData)
        setCurrentStep('eventLocation')
        addBotMessage("Où se déroule l'événement ? (adresse)", undefined)
        break

      case 'eventLocation':
        updatedData.eventLocation = textInput
        setCampaignData(updatedData)
        setCurrentStep('eventDescription')
        addBotMessage("Que proposerez-vous aux invités ?\n\n(ex: démonstrations, buffet, networking...)", undefined)
        break

      case 'eventDescription':
        updatedData.eventDescription = textInput
        setCampaignData(updatedData)
        setCurrentStep('geography')
        updateCompletionPercentage('geography')
        addBotMessage(
          "Quelle zone géographique pour inviter vos prospects ?",
          [
            { label: '🇬🇵 Guadeloupe', value: 'guadeloupe' },
            { label: '🇲🇶 Martinique', value: 'martinique' },
            { label: '🇬🇫 Guyane', value: 'guyane' },
            { label: '🏝️ Saint-Martin / Saint-Barth', value: 'saint_martin' },
            { label: '🌴 Toutes les Antilles', value: 'toutes' }
          ]
        )
        break

      case 'exclusions':
        updatedData.exclusions = textInput
        setCampaignData(updatedData)
        setCurrentStep('contactName')
        addBotMessage("Dernière étape ! Vos coordonnées pour vous recontacter :\n\nVotre nom et prénom :", undefined)
        break

      case 'contactName':
        updatedData.contactName = textInput
        setCampaignData(updatedData)
        setCurrentStep('contactEmail')
        addBotMessage("Votre email professionnel :", undefined)
        break

      case 'contactEmail':
        updatedData.contactEmail = textInput
        setCampaignData(updatedData)
        setCurrentStep('contactPhone')
        addBotMessage("Votre téléphone :", undefined)
        break

      case 'contactPhone':
        updatedData.contactPhone = textInput
        setCampaignData(updatedData)
        setCurrentStep('contactFunction')
        addBotMessage("Votre fonction dans l'entreprise :", undefined)
        break

      case 'contactFunction':
        updatedData.contactFunction = textInput
        setCampaignData(updatedData)
        
        const briefSummaryContact = generateBriefSummary(updatedData)
        setCurrentStep('completed')
        setCompletionPercentage(100)
        
        // Envoi alerte email à Gregory
        fetch('/api/chatbot-brief', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ summary: briefSummaryContact, data: updatedData }),
        }).then((res) => {
          if (!res.ok) console.warn('[Chatbot] Alerte email non envoyée:', res.status)
        }).catch(() => console.warn('[Chatbot] Erreur envoi alerte email'))
        
        addBotMessage(
          `🎉 Parfait ${updatedData.contactName} ! Votre brief est prêt.\n\n${briefSummaryContact}\n\n📧 Un expert vous contactera sous 24h.\n\nPour aller plus vite :`,
          [
            { label: 'Demander une démo', value: 'rdv' },
            { label: 'WhatsApp', value: 'whatsapp' }
          ]
        )
        break
    }

    setTextInput('')
  }

  const handleOptionClick = (option: {label: string, value: string}) => {
    addUserMessage(option.label)
    const updatedData = { ...campaignData }

    switch (currentStep) {
      case 'sector':
        updatedData.sector = option.value
        setCampaignData(updatedData)
        setCurrentStep('campaignType')
        updateCompletionPercentage('campaignType')
        addBotMessage(
          "Parfait ! Quel est l'OBJECTIF principal de votre campagne ?",
          [
            { label: '🤝 Me faire connaître', value: 'presentation', icon: '🤝' },
            { label: '💰 Pousser une offre B2B', value: 'offre_commerciale', icon: '💰' },
            { label: '🎁 Promouvoir une promotion', value: 'promotion', icon: '🎁' },
            { label: '🎪 Inviter à un événement', value: 'evenement', icon: '🎪' },
            { label: '🤝 Recruter des partenaires', value: 'partenariat', icon: '🤝' },
            { label: '📊 Enquête besoins marché', value: 'enquete', icon: '📊' },
            { label: '😴 Réactiver clients dormants', value: 'reactivation', icon: '😴' },
            { label: '📈 Upsell clients actuels', value: 'upsell', icon: '📈' }
          ]
        )
        break

      case 'campaignType':
        updatedData.campaignType = option.value
        setCampaignData(updatedData)
        setCurrentStep('campaignObjective')
        updateCompletionPercentage('campaignObjective')
        
        // Messages adaptés au type de campagne
        if (option.value === 'presentation') {
          addBotMessage("Vous voulez vous faire connaître ! Votre entreprise est-elle :", [
            { label: '🆕 Toute nouvelle (< 6 mois)', value: 'nouvelle' },
            { label: '🌱 Jeune (6 mois - 2 ans)', value: 'jeune' },
            { label: '🔄 Nouveau marché / repositionnement', value: 'repositionnement' },
            { label: '📦 Nouvelle gamme produits', value: 'nouvelle_gamme' }
          ])
        } else if (option.value === 'offre_commerciale') {
          addBotMessage("Vous avez une offre B2B à pousser ! De quel type ?", [
            { label: '💸 Tarif préférentiel (-X%)', value: 'tarif' },
            { label: '📦 Package / Bundle spécial', value: 'package' },
            { label: '💳 Conditions paiement avantageuses', value: 'conditions' },
            { label: '🎁 Offre découverte (1er achat)', value: 'decouverte' }
          ])
        } else if (option.value === 'promotion') {
          addBotMessage("Quelle type de promotion proposez-vous ?", [
            { label: '🔥 Déstockage saisonnier', value: 'destockage' },
            { label: '⚡ Opération flash limitée', value: 'flash' },
            { label: '🎉 Black Friday B2B', value: 'black_friday' },
            { label: '🎖️ Prime fidélité', value: 'fidelite' }
          ])
        } else if (option.value === 'evenement') {
          setCurrentStep('targetDescription')
          addBotMessage("Pour votre événement, qui souhaitez-vous inviter ?\n\n(ex: hôteliers 3-4★, restaurateurs, etc.)", undefined)
        } else {
          setCurrentStep('productDescription')
          addBotMessage("Décrivez en 1-2 phrases vos produits/services B2B :", undefined)
        }
        break

      case 'campaignObjective':
        updatedData.campaignObjective = option.value
        setCampaignData(updatedData)
        setCurrentStep('productDescription')
        addBotMessage("Décrivez en 1-2 phrases ce que vous proposez en B2B :", undefined)
        break

      case 'offerDeadline':
        if (option.value === 'date') {
          updatedData.offerType = 'date'
          setCampaignData(updatedData)
          setCurrentStep('offerDeadlineDate')
          addBotMessage("Jusqu'à quelle date ? (ex: 31/03/2025)", undefined)
        } else if (option.value === 'stocks') {
          updatedData.offerType = 'stocks'
          setCampaignData(updatedData)
          setCurrentStep('offerDeadlineStocks')
          addBotMessage("Combien d'unités disponibles ?", undefined)
        } else {
          updatedData.offerDeadline = 'offre permanente'
          setCampaignData(updatedData)
          setCurrentStep('geography')
          updateCompletionPercentage('geography')
          addBotMessage(
            "Quelle zone géographique souhaitez-vous cibler ?",
            [
              { label: '🇬🇵 Guadeloupe', value: 'guadeloupe' },
              { label: '🇲🇶 Martinique', value: 'martinique' },
              { label: '🇬🇫 Guyane', value: 'guyane' },
              { label: '🏝️ Saint-Martin / Saint-Barth', value: 'saint_martin' },
              { label: '🌴 Toutes les Antilles', value: 'toutes' }
            ]
          )
        }
        break

      case 'eventType':
        updatedData.eventType = option.value
        setCampaignData(updatedData)
        setCurrentStep('eventDate')
        addBotMessage("Quelle est la date de l'événement ? (ex: 15/05/2025)", undefined)
        break

      case 'geography':
        const currentGeo = updatedData.geography || []
        if (!currentGeo.includes(option.value)) {
          currentGeo.push(option.value)
        }
        updatedData.geography = currentGeo
        setCampaignData(updatedData)
        
        setCurrentStep('prospectVolume')
        updateCompletionPercentage('prospectVolume')
        addBotMessage(
          "Quelle formule vous correspond ?",
          [
            { label: 'Campagne Smart Prospect — 2 500 € HT (recommandé)', value: '2500' },
            { label: 'Sur-mesure (volume plus large, devis)', value: 'custom' }
          ]
        )
        break

      case 'prospectVolume':
        updatedData.prospectVolume = option.value
        setCampaignData(updatedData)
        setCurrentStep('channel')
        updateCompletionPercentage('channel')
        addBotMessage(
          "Canal de communication préféré ?",
          [
            { label: '📧 Email (volume élevé)', value: 'email' },
            { label: '💬 WhatsApp (cibles VIP)', value: 'whatsapp' },
            { label: '🔀 Mix Email + WhatsApp', value: 'mix' },
            { label: '🤔 Conseillez-moi', value: 'conseil' }
          ]
        )
        break

      case 'channel':
        updatedData.channel = option.value
        setCampaignData(updatedData)
        setCurrentStep('exclusions')
        addBotMessage(
          "Y a-t-il des entreprises à exclure absolument ?\n\n(Concurrents, zones trop éloignées, taille min/max...)\n\nRépondez 'non' si rien à exclure.",
          undefined
        )
        break

      case 'completed':
        if (option.value === 'rdv') {
          window.open('/contact', '_blank')
        } else if (option.value === 'whatsapp') {
          const summaryForWhatsApp = generateBriefSummary(campaignData)
          const message = `Bonjour, je viens de compléter mon brief Smart Prospect sur le site. Voici le récap :\n\n${summaryForWhatsApp}`
          window.open(`https://wa.me/33769182076?text=${encodeURIComponent(message)}`, '_blank')
        }
        break
    }
  }

  const generateBriefSummary = (data: CampaignData): string => {
    let summary = `📊 VOTRE BRIEF CAMPAGNE\n${'━'.repeat(35)}\n\n`
    summary += `Entreprise : ${data.companyName}\n`
    summary += `Secteur : ${data.sector}\n`
    
    const campaignTypes: {[key: string]: string} = {
      'presentation': 'Présentation entreprise',
      'offre_commerciale': 'Offre commerciale B2B',
      'promotion': 'Promotion en cours',
      'evenement': 'Événement',
      'partenariat': 'Recrutement partenaires',
      'enquete': 'Enquête marché',
      'reactivation': 'Réactivation clients',
      'upsell': 'Upsell clients'
    }
    
    summary += `Type campagne : ${campaignTypes[data.campaignType || '']}\n`
    summary += `Cibles : ${data.targetDescription}\n`
    summary += `Zone : ${data.geography?.join(', ')}\n`
    summary += `Formule : ${data.prospectVolume === '2500' ? 'Campagne Smart Prospect — 2 500 € HT' : 'Sur-mesure'}\n`
    summary += `Canal : ${data.channel}\n`
    if (data.exclusions) summary += `Exclusions : ${data.exclusions}\n`
    summary += `\nBudget estimé : ${data.prospectVolume === '2500' ? '2 500 € HT' : 'Sur devis'}\n`
    summary += `\n${'─'.repeat(35)}\nCONTACT\n`
    summary += `Nom : ${data.contactName || '—'}\n`
    summary += `Email : ${data.contactEmail || '—'}\n`
    summary += `Téléphone : ${data.contactPhone || '—'}\n`
    summary += `Fonction : ${data.contactFunction || '—'}`
    return summary
  }

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 group"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-2xl sm:text-3xl animate-bounce">🚀</span>
            <div className="text-left">
              <div className="font-bold text-sm sm:text-lg">Smart Prospect</div>
              <div className="text-xs opacity-90 hidden sm:block">Configurez votre campagne</div>
            </div>
          </div>
        </button>
      )}

      {/* Chat Window - responsive: plein écran mobile, fenêtre desktop */}
      {isOpen && (
        <div className="fixed inset-4 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[420px] sm:h-[650px] z-50 w-[calc(100vw-2rem)] h-[calc(100vh-2rem)] sm:max-h-[85vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-blue-200 overflow-hidden flex flex-col">
          
          {/* Header - compact sur mobile */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-3 sm:p-4 flex-shrink-0">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
                <div className="min-w-0">
                  <h3 className="font-bold text-base sm:text-lg truncate">Smart Prospect</h3>
                  <p className="text-xs opacity-90 hidden sm:block">Configuration campagne B2B</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex-shrink-0 text-white hover:bg-white/20 rounded-full p-2 transition-colors text-lg leading-none"
                aria-label="Fermer le chatbot"
              >
                ✕
              </button>
            </div>
            
            {/* Progress Bar - compact sur mobile */}
            {completionPercentage > 0 && completionPercentage < 100 && (
              <div className="mt-2 sm:mt-3">
                <div className="flex justify-between text-xs mb-1">
                  <span>Progression</span>
                  <span>{completionPercentage}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-1.5 sm:h-2">
                  <div 
                    className="bg-white h-1.5 sm:h-2 rounded-full transition-all duration-500"
                    style={{ width: `${completionPercentage}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Messages - zone scrollable, police lisible sur mobile */}
          <div className="flex-1 overflow-y-auto overscroll-contain p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gradient-to-b from-blue-50 to-white min-h-0">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[92%] sm:max-w-[85%] p-3 sm:p-4 rounded-2xl shadow-md ${
                    message.isUser
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white'
                      : 'bg-white text-gray-800 border border-gray-200'
                  }`}
                >
                  <p className="whitespace-pre-line text-base sm:text-sm leading-relaxed">{message.text}</p>
                  
                  {/* Options buttons - lisibles sur mobile */}
                  {message.options && !message.isUser && (
                    <div className="mt-3 sm:mt-4 space-y-2">
                      {message.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleOptionClick(option)}
                          className="block w-full text-left px-3 py-2.5 sm:px-4 sm:py-3 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl hover:from-blue-100 hover:to-blue-200 hover:border-blue-400 transition-all text-sm sm:text-sm font-medium text-gray-800 hover:scale-[1.01] active:scale-[0.99]"
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-4 rounded-2xl shadow-md">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area - compact sur mobile */}
          {currentStep !== 'completed' && currentStep !== 'welcome' && !messages[messages.length - 1]?.options && (
            <div className="p-3 sm:p-4 border-t border-gray-200 bg-white flex-shrink-0">
              <form onSubmit={handleTextSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  placeholder="Tapez votre réponse..."
                  className="flex-1 min-w-0 px-3 py-2.5 sm:px-4 sm:py-3 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base sm:text-sm text-gray-900 bg-white placeholder:text-gray-400"
                  autoFocus
                />
                <button
                  type="submit"
                  className="flex-shrink-0 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold hover:scale-105 active:scale-95 transition-transform shadow-lg"
                >
                  ➤
                </button>
              </form>
            </div>
          )}

          {/* Footer Info - masqué sur mobile (économise de l'espace) */}
          {currentStep === 'welcome' && (
            <div className="hidden sm:block p-4 border-t border-gray-200 bg-gradient-to-r from-green-50 to-blue-50 flex-shrink-0">
              <div className="text-center text-sm text-gray-600">
                <p className="font-semibold mb-2">🔒 Vos données sont confidentielles</p>
                <p className="text-xs">Brief généré en temps réel • Proposition immédiate</p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}
