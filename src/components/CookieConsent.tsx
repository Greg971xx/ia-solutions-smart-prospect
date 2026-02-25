'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Afficher après 2s si pas encore de choix
    if (typeof window !== 'undefined' && !localStorage.getItem('cookieConsent')) {
      const t = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(t);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-gray-900 text-white p-4 rounded-xl shadow-2xl z-50">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm">🍪 Ce site utilise des cookies pour améliorer votre expérience.</p>
        <div className="flex gap-2">
          <button
            onClick={() => {
              localStorage.setItem('cookieConsent', 'accepted');
              setVisible(false);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
          >
            Accepter
          </button>
          <button
            onClick={() => {
              localStorage.setItem('cookieConsent', 'refused');
              setVisible(false);
            }}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
}
