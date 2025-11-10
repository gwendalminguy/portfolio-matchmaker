import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useTheme } from "../context/ThemeContext";
import LanguageSwitch from "../components/LanguageSwitch";
import ThemeSwitch from "../components/ThemeSwitch";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <nav className="navbar fixed top-0 left-0 w-full backdrop-blur-md bg-base-100/70 border-b border-base-300/70 shadow-sm z-100 h-20 transition-all duration-300">
      <div className="max-w-screen-7xl mx-auto px-4 h-full flex justify-between items-center w-full">

        {/* Title / Logo */}
        <div className="flex items-center">
          <Link to="/" translate="no" className="text-2xl text-primary font-bold hover:text-primary/90">
            MatchMaker
          </Link>
        </div>

        <div className="flex gap-4">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 lg:space-x-8 items-center">
            <Link to="/" className={`relative px-2 py-1 font-medium transition-colors duration-200 hover:text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${location.pathname === "/" ? "text-primary after:scale-x-100" : "text-base-content"}`}>
              {t('home')}
            </Link>

            {/* Login Button */}
            <a href="https://matchmaker.ovh/tournaments" className="bg-primary text-white font-medium px-4 py-2 cursor-pointer rounded-md hover:bg-primary/90">
              {t('login')}
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="dropdown md:hidden">
            <button tabIndex={0} role="button" className="btn border border-base-300 rounded-md">
              <p className="text-lg font-medium">{t('menu')}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-30 right-0 transition-all duration-300 ease-in-out">
              <li><Link to="/">{t('home')}</Link></li>
              <li><Link to="https://matchmaker.ovh/tournaments">{t('tournaments')}</Link></li>
              <li className="inline sm:hidden"><button onClick={toggleTheme}>{theme === "dark" ? t('light_mode') : t('dark_mode')}</button></li>
            </ul>
          </div>

          {/* Theme Switch */}
          <div className="hidden sm:block">
            <ThemeSwitch />
          </div>

          {/* Language Switch */}
          <div className="block">
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
