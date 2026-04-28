import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Star } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/TranslationProvider';

const Products: React.FC = () => {
  const { t } = useTranslation();
  const manufacturedSections = t('products.manufacturedSections') as Array<{
    label: string;
    items: Array<{ title: string; description: string; image: string }>;
  }>;
  const dealerItems = t('products.dealerItems') as string[];
  const whyReasons = t('products.whyReasons') as string[];

  return (
    <div className="w-full">
      <section className="bg-primary text-white py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t('products.headerTitle')}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-white mx-auto rounded-full mb-8"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-primary-light max-w-3xl mx-auto"
          >
            {t('products.headerDescription')}
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <SectionHeading title={t('products.manufacturedHeading')} subtitle={t('products.manufacturedSubtitle')} />

          {manufacturedSections.map((section, sectionIndex) => (
            <div className="mb-16" key={section.label}>
              <h3 className="text-2xl font-bold text-secondary mb-8 border-b pb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">{sectionIndex + 1}</span>
                {section.label}
              </h3>
              <div className={`grid grid-cols-1 ${section.items.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-6 max-w-4xl mx-auto`}>
                {section.items.map((item) => (
                  <Card
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-light border-y border-gray-200">
        <div className="container-custom">
          <SectionHeading title={t('products.dealerHeading')} subtitle={t('products.dealerSubtitle')} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dealerItems.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center gap-4"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  <Star size={24} />
                </div>
                <h4 className="font-bold text-lg text-secondary">{item}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-primary p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-2">{t('products.whyHeading')}</h2>
              <p className="text-primary-light">{t('products.whyDescription')}</p>
            </div>
            <div className="p-8 md:p-12">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whyReasons.map((reason, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-lg text-secondary font-medium border-b border-gray-100 pb-4">
                    <ShieldCheck className="text-primary shrink-0" size={24} />
                    {reason}
                  </li>
                ))}
              </ul>
              <div className="mt-10 text-center">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold transition-all hover:bg-primary-dark">
                  {t('products.requestPricing')}
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
