import { ref, computed } from 'vue'
import es from './es.json'
import en from './eng.json'

const translations = {
  es,
  en,
}

const language = ref('es') // idioma por defecto

const t = (key) => {
  const keys = key.split('.')
  return keys.reduce((obj, k) => (obj && obj[k]) || '', translations[language.value])
}

const setLanguage = (lang) => {
  if (translations[lang]) {
    language.value = lang
    localStorage.setItem('lang', lang)
  }
}

// Auto-guardar idioma elegido
const saved = localStorage.getItem('lang')
if (saved && translations[saved]) {
  language.value = saved
}

export default function useI18n() {
  return {
    t,
    setLanguage,
    language,
  }
}