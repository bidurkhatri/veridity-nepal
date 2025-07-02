"use client"

import type React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'
import { translations, type Translation } from '@/lib/translations'

interface LanguageContextType {
  language: "en" | "ne"
  setLanguage: (language: "en" | "ne") => void
  t: Translation
  availableLanguages: { code: string; name: string; nativeName: string }[]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const availableLanguages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ne', name: 'Nepali', nativeName: 'नेपाली' }
]

type SupportedLanguage = keyof typeof translations

function isValidLanguage(lang: string): lang is SupportedLanguage {
  return lang in translations
}

interface LanguageProviderProps {
  children: React.ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<SupportedLanguage>('en')

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('veridity-language')
    if (savedLanguage && isValidLanguage(savedLanguage)) {
      setLanguageState(savedLanguage)
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0]
      if (isValidLanguage(browserLang)) {
        setLanguageState(browserLang)
      }
    }
  }, [])

  const setLanguage = (newLanguage: string) => {
    if (isValidLanguage(newLanguage)) {
      setLanguageState(newLanguage)
      localStorage.setItem('veridity-language', newLanguage)
    }
  }

  const t = translations[language]

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    t,
    availableLanguages
  }

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
