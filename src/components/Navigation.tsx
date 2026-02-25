'use client'

import Link from 'next/link';
import { useState } from 'react';

interface NavigationProps {
  currentPage?: 'accueil' | 'methode' | 'about' | 'contact';
}

export default function Navigation({ currentPage = 'accueil' }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b border-white/10 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-white hover:text-blue-300 transition-colors">
            IA Solutions Guadeloupe - Smart Prospect
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            <Link 
              href="/" 
              className={`transition-colors ${
                currentPage === 'accueil' 
                  ? 'text-white font-semibold' 
                  : 'text-blue-200 hover:text-white'
              }`}
            >
              Accueil
            </Link>
            <Link 
              href="/methode" 
              className={`transition-colors ${
                currentPage === 'methode' 
                  ? 'text-white font-semibold' 
                  : 'text-blue-200 hover:text-white'
              }`}
            >
              Notre Méthode
            </Link>
            <Link 
              href="/about" 
              className={`transition-colors ${
                currentPage === 'about' 
                  ? 'text-white font-semibold' 
                  : 'text-blue-200 hover:text-white'
              }`}
            >
              À propos
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors ${
                currentPage === 'contact' 
                  ? 'text-white font-semibold' 
                  : 'text-blue-200 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2">
            <div className="flex flex-col gap-2">
              <Link 
                href="/" 
                className={`py-2 px-4 rounded transition-colors ${
                  currentPage === 'accueil' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-blue-200 hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="/methode" 
                className={`py-2 px-4 rounded transition-colors ${
                  currentPage === 'methode' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-blue-200 hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Notre Méthode
              </Link>
              <Link 
                href="/about" 
                className={`py-2 px-4 rounded transition-colors ${
                  currentPage === 'about' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-blue-200 hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                À propos
              </Link>
              <Link 
                href="/contact" 
                className={`py-2 px-4 rounded transition-colors ${
                  currentPage === 'contact' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-blue-200 hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
