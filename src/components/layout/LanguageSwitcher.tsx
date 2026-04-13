import { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧', note: 'Original website text' },
  { code: 'lv', name: 'Latviešu', flag: '🇱🇻', note: 'Auto-translated for easier reading' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺', note: 'Auto-translated for easier reading' },
];

const GOOGLE_TRANSLATE_CONTAINER_ID = 'google_translate_element';
const GOOGLE_TRANSLATE_SCRIPT_ID = 'google-translate-script';

function ensureTranslateContainer() {
  if (document.getElementById(GOOGLE_TRANSLATE_CONTAINER_ID)) return;

  const container = document.createElement('div');
  container.id = GOOGLE_TRANSLATE_CONTAINER_ID;
  container.className = 'sr-only';
  document.body.appendChild(container);
}

function setTranslateCookie(languageCode: string) {
  const cookieValue = `/en/${languageCode}`;
  document.cookie = `googtrans=${cookieValue}; path=/`;

  try {
    document.cookie = `googtrans=${cookieValue}; domain=${window.location.hostname}; path=/`;
  } catch {
    // Ignore cookie domain issues on local/dev hosts
  }
}

function triggerGoogleTranslate(languageCode: string) {
  const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;

  if (!select) return false;

  select.value = languageCode;
  select.dispatchEvent(new Event('change'));
  return true;
}

function fallbackToGoogleTranslate(languageCode: string) {
  const currentUrl = `${window.location.origin}${window.location.pathname}${window.location.search}${window.location.hash}`;

  if (languageCode === 'en') {
    window.location.href = currentUrl;
    return;
  }

  window.location.href = `https://translate.google.com/translate?sl=en&tl=${languageCode}&u=${encodeURIComponent(currentUrl)}`;
}

export function LanguageSwitcher() {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const cookieMatch = document.cookie.match(/googtrans=\/en\/([a-z]{2})/i);
    if (cookieMatch?.[1]) {
      setCurrentLanguage(cookieMatch[1]);
    }

    ensureTranslateContainer();

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate || document.querySelector('.goog-te-combo')) return;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,lv,ru',
          autoDisplay: false,
        },
        GOOGLE_TRANSLATE_CONTAINER_ID,
      );
    };

    if (!document.getElementById(GOOGLE_TRANSLATE_SCRIPT_ID)) {
      const script = document.createElement('script');
      script.id = GOOGLE_TRANSLATE_SCRIPT_ID;
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google?.translate) {
      window.googleTranslateElementInit?.();
    }
  }, []);

  const handleLanguageChange = (code: string) => {
    setCurrentLanguage(code);
    setTranslateCookie(code);

    if (code === 'en') {
      window.location.reload();
      return;
    }

    if (!triggerGoogleTranslate(code)) {
      fallbackToGoogleTranslate(code);
    }
  };

  const currentLang = languages.find((lang) => lang.code === currentLanguage) ?? languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLang.flag} {currentLang.name}</span>
          <span className="sm:hidden">{currentLang.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={currentLanguage === lang.code ? 'bg-primary/10' : ''}
          >
            <div className="flex flex-col">
              <span>
                <span className="mr-2">{lang.flag}</span>
                {lang.name}
              </span>
              <span className="text-xs text-muted-foreground">{lang.note}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
