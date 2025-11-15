import { useState } from "react";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

function LanguageSwitch() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "en");

  const languages = [
    { code: "en", label: "English", flag: "/flags/en.svg" },
    { code: "fr", label: "Français", flag: "/flags/fr.svg" },
    { code: "es", label: "Español", flag: "/flags/es.svg" },
    { code: "de", label: "Deutsch", flag: "/flags/de.svg" },
    { code: "it", label: "Italian", flag: "/flags/it.svg" },
  ];

  const currentLang = languages.find((lang) => lang.code === language || lang.code === language.split("-")[0]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <div title={t('change_language')} className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn border border-base-300 rounded-md flex items-center gap-2 p-2 sm:p-4">
        <img src={currentLang.flag} alt={currentLang.label} className="hidden sm:inline w-6 h-4 object-cover rounded-sm" />
        <span className="hidden sm:inline font-medium">
          {currentLang.code.toUpperCase()}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="hidden sm:inline w-4 h-4 opacity-70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
        <Globe className="inline sm:hidden" />
      </div>

      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box mt-3 z-1 w-25 p-2 shadow">
        {languages.map((lang) => (
          <li key={lang.code}>
            <button onClick={() => changeLanguage(lang.code)} className={`flex items-center gap-3 px-2 py-1 ${language === lang.code ? "active font-semibold text-primary" : ""}`}>
              {lang.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageSwitch;
