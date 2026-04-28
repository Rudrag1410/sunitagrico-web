import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cog, Handshake, DollarSign, Target } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { useTranslation } from '../i18n/TranslationProvider';

const About: React.FC = () => {
  const { t } = useTranslation();
  const storyParagraphs = t('about.storyParagraphs') as string[];
  const values = t('about.values') as Array<{ title: string; description: string }>;

  return (
    <div className="w-full">
      <section className="bg-light py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-secondary mb-6"
          >
            {t('about.headerTitle')}
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
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('about.headerDescription')}
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <img
                src="/image/img-3.jpeg"
                alt="Agricultural Equipment Manufacturing"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-3xl font-bold text-secondary mb-6">{t('about.storyHeading')}</h2>
              {storyParagraphs.map((paragraph, idx) => (
                <p key={idx} className="text-gray-600 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="container-custom">
          <SectionHeading title={t('about.valuesHeading')} subtitle={t('about.valuesSubtitle')} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {values.map((item) => (
              <Card
                key={item.title}
                icon={
                  item.title.includes('Durable') || item.title.includes('टिकाऊ') ? (
                    <Shield size={32} className="text-primary" />
                  ) : item.title.includes('Practical') || item.title.includes('व्यावहारिक') ? (
                    <Target size={32} className="text-primary" />
                  ) : item.title.includes('Reliable') || item.title.includes('विश्वसनीय') ? (
                    <Cog size={32} className="text-primary" />
                  ) : item.title.includes('Fair') || item.title.includes('समान्य') ? (
                    <DollarSign size={32} className="text-primary" />
                  ) : (
                    <Handshake size={32} className="text-primary" />
                  )}
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

export default About;
