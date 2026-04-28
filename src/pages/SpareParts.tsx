import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, PackageSearch } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { useTranslation } from '../i18n/TranslationProvider';

const SpareParts: React.FC = () => {
  const { t } = useTranslation();
  const items = t('spareParts.items') as string[];

  return (
    <div className="w-full">
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/image/img-5.jpeg"
            alt="Spare Parts Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t('spareParts.headerTitle')}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {t('spareParts.headerDescription')}
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <SectionHeading title={t('spareParts.inventoryHeading')} subtitle={t('spareParts.inventorySubtitle')} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
            {items.map((part, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center gap-4 group hover:shadow-lg transition-all"
              >
                <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <PackageSearch size={24} />
                </div>
                <h4 className="font-bold text-lg text-secondary group-hover:text-primary transition-colors">{part}</h4>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto bg-light p-8 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold text-secondary mb-4">{t('spareParts.specificTitle')}</h3>
            <p className="text-gray-600 mb-6">{t('spareParts.specificDescription')}</p>
            <a
              href="https://wa.me/918319395925"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-bold transition-all"
            >
              <CheckCircle2 size={20} />
              {t('spareParts.inquireWhatsApp')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpareParts;
