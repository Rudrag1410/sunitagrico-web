import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../i18n/TranslationProvider';

const navLinks = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'products', path: '/products' },
  { key: 'spareParts', path: '/spare-parts' },
  { key: 'engineeringWorks', path: '/engineering-works' },
  { key: 'contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { locale, setLocale, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-3 md:py-4'
        }`}
    >
      <div className="container-custom flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/image/logo.svg"
            alt="Sunit Agrico Logo"
            className="h-10 md:h-16 w-auto drop-shadow-sm object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary border-b-2 border-primary pb-1' : 'text-secondary'
                  }`}
              >
                {t(`nav.${link.key}`)}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full font-medium transition-all text-sm whitespace-nowrap"
          >
            {t('nav.getQuote')}
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setLocale('en')}
              className={`rounded-full px-3 py-1 text-sm font-medium transition ${locale === 'en' ? 'bg-primary text-white' : 'text-secondary hover:text-primary'}`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLocale('hi')}
              className={`rounded-full px-3 py-1 text-sm font-medium transition ${locale === 'hi' ? 'bg-primary text-white' : 'text-secondary hover:text-primary'}`}
            >
              HI
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setLocale(locale === 'en' ? 'hi' : 'en')}
            className="text-secondary hover:text-primary text-sm font-medium transition"
          >
            {locale === 'en' ? 'HI' : 'EN'}
          </button>
          <button
            className="md:hidden text-secondary hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t mt-3 sm:mt-4 px-4 overflow-hidden"
          >
            <div className="flex flex-col py-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  to={link.path}
                  className={`text-base font-medium ${location.pathname === link.path ? 'text-primary' : 'text-secondary'
                    }`}
                >
                  {t(`nav.${link.key}`)}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-primary text-center text-white px-4 py-2 rounded-lg font-medium mt-2"
              >
                {t('nav.getQuote')}
              </Link>
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <button
                  type="button"
                  onClick={() => setLocale('en')}
                  className={`rounded-full border border-gray-200 px-3 py-2 text-sm font-medium transition ${locale === 'en' ? 'bg-primary text-white' : 'text-secondary hover:text-primary'}`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLocale('hi')}
                  className={`rounded-full border border-gray-200 px-3 py-2 text-sm font-medium transition ${locale === 'hi' ? 'bg-primary text-white' : 'text-secondary hover:text-primary'}`}
                >
                  HI
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
