import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Settings, Wrench, ArrowRight } from 'lucide-react';
import { Card } from '../components/Card';
import { SectionHeading } from '../components/SectionHeading';
import { useTranslation } from '../i18n/TranslationProvider';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const badges = t('home.badges') as string[];
  const highlights = t('home.highlights') as Array<{ title: string; description: string }>;
  const aboutOverview = t('home.aboutOverview') as { title: string; description: string; bullets: string[] };

  return (
    <div className="w-full">
      <section className="relative min-h-[70vh] md:min-h-[600px] flex items-center justify-center overflow-hidden py-12 md:py-0">
        <div className="absolute inset-0 z-0">
          <img
            src="/image/img-1.jpeg"
            alt="Agriculture Machinery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/85"></div>
        </div>

        <div className="container-custom relative z-10 text-center text-white px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-6"
          >
            {badges.map((badge) => (
              <span
                key={badge}
                className="px-2 sm:px-3 py-1 bg-primary/80 backdrop-blur rounded-full text-[9px] sm:text-xs font-semibold tracking-wider uppercase whitespace-nowrap"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight max-w-5xl mx-auto"
          >
            {t('home.hero.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            {t('home.hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center text-sm sm:text-base"
            >
              {t('home.hero.contactCta')}
            </Link>
            <Link
              to="/products"
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-secondary px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center text-sm sm:text-base"
            >
              {t('home.hero.viewProductsCta')}
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <Card
                key={item.title}
                icon={
                  item.title.includes('Spare') || item.title.includes('स्पेयर') ? (
                    <Settings size={28} className="text-primary" />
                  ) : item.title.includes('Precision') || item.title.includes('प्रिसीजन') ? (
                    <Wrench size={28} className="text-primary" />
                  ) : (
                    <ShieldCheck size={28} className="text-primary" />
                  )}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="/image/img-2.jpeg"
                alt="Farming Fields"
                className="rounded-2xl shadow-2xl z-10 relative w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary rounded-2xl z-0 hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary/20 rounded-2xl z-0 hidden md:block"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading title={aboutOverview.title} centered={false} />
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {aboutOverview.description}
            </p>
            <ul className="space-y-4 mb-8">
              {aboutOverview.bullets.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-secondary font-medium">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <ShieldCheck size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="text-primary font-bold hover:text-primary-dark transition-colors flex items-center gap-2 group"
            >
              {t('common.learnMore')}
              <ArrowRight size={20} className="transform group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{aboutOverview.title}</h2>
          <p className="text-primary-light text-xl mb-10 max-w-2xl mx-auto">
            {aboutOverview.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-white text-primary px-8 py-3 rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-lg hover:bg-gray-100"
            >
              {t('home.hero.contactCta')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
