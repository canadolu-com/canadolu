import { Language } from "@/lib/types/guide";

interface LanguageSelectorProps {
  currentLanguage: Language;
  availableLanguages: Language[];
  onLanguageChange: (language: Language) => void;
}

export function LanguageSelector({
  currentLanguage,
  availableLanguages,
}: LanguageSelectorProps) {
  // Since we only support Turkish now, we don't need a language selector
  return null;
}
