import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useTranslation } from '../i18n/TranslationProvider';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const services = t('footer.services') as string[];

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white p-2 rounded-xl inline-block">
                <img src="/image/logo.svg" alt="Sunit Agrico Logo" className="h-12 w-auto" />
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">{t('footer.description')}</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              {t('footer.quickLinksHeading')}
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors inline-block hover:translate-x-1 transform duration-200">{t('nav.about')}</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-primary transition-colors inline-block hover:translate-x-1 transform duration-200">{t('nav.products')}</Link></li>
              <li><Link to="/spare-parts" className="text-gray-400 hover:text-primary transition-colors inline-block hover:translate-x-1 transform duration-200">{t('nav.spareParts')}</Link></li>
              <li><Link to="/engineering-works" className="text-gray-400 hover:text-primary transition-colors inline-block hover:translate-x-1 transform duration-200">{t('nav.engineeringWorks')}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors inline-block hover:translate-x-1 transform duration-200">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              {t('footer.servicesHeading')}
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="flex flex-col gap-3 text-gray-400">
              {services.map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              {t('footer.contactInfoHeading')}
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="flex flex-col gap-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={20} />
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <span>{t('footer.phone')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={20} />
                <span>{t('footer.email')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-primary shrink-0" size={20} />
                <span>{t('footer.hours')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>{t('footer.slogan')}</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Sunit Agrico. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};
