import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Settings } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { useTranslation } from '../i18n/TranslationProvider';

const EngineeringWorks: React.FC = () => {
  const { t } = useTranslation();
  const serviceItems = t('engineeringWorks.serviceItems') as Array<{ title: string; description: string }>;

  return (
    <div className="w-full">
      <section className="bg-light py-20 relative overflow-hidden">
        <div className="container-custom flex flex-col md:flex-row items-center gap-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
              {t('engineeringWorks.headerTitle')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              {t('engineeringWorks.headerDescription')}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-primary/20 transform rotate-3 rounded-3xl"></div>
            <img
              src="/image/img-1.jpeg"
              alt="Engineering Work"
              className="rounded-3xl shadow-xl relative z-10 w-full h-[350px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <SectionHeading title={t('engineeringWorks.servicesHeading')} subtitle={t('engineeringWorks.servicesSubtitle')} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {serviceItems.map((item, idx) => (
              <Card
                key={idx}
                icon={idx % 2 === 0 ? <Settings size={32} className="text-primary" /> : <Wrench size={32} className="text-primary" />}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EngineeringWorks;
