import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useTranslation } from '../i18n/TranslationProvider';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('common.sendMessageAlert'));
    setFormData({ name: '', phone: '', message: '' });
  };

  const branches = t('contact.branches') as Array<{ name: string; address: string; phone: string }>;

  return (
    <div className="w-full">
      <section className="bg-primary text-white py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t('contact.headerTitle')}
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
            {t('contact.headerDescription')}
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-secondary mb-8">{t('contact.branchesHeading')}</h2>

              <div className="space-y-8">
                {branches.map((branch, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-5">
                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">{branch.name}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{branch.address}</p>
                      <a href={`tel:${branch.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-primary font-medium hover:underline">
                        <Phone size={18} />
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                ))}

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-5">
                  <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">{t('contact.emailHeading')}</h3>
                    <p className="text-gray-600 leading-relaxed">{t('contact.emailDescription')}</p>
                    <a href={`mailto:${t('contact.email')}`} className="flex items-center gap-2 text-primary font-medium hover:underline mt-2">
                      {t('contact.email')}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-secondary mb-6">{t('contact.formHeading')}</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.nameLabel')}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                        placeholder={t('contact.namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.phoneLabel')}</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                        placeholder={t('contact.phonePlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.messageLabel')}</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                        placeholder={t('contact.messagePlaceholder')}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold transition-all shadow-md transform hover:-translate-y-1 flex justify-center items-center gap-2"
                    >
                      <Send size={20} />
                      {t('contact.sendButton')}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 h-96 w-full relative">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115264.49397682977!2d77.2435552309192!3d24.64687258908151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c6c4ea6db202f%3A0xcfd6dc3b3cd17bde!2sGuna%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1714030646197!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t('contact.mapTitle')}
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
