'use client';

import { motion } from 'framer-motion';
import GradientText from '@/components/ui/GradientText';
import Button from '@/components/ui/Button';
import { SOCIAL_LINKS } from '@/lib/constants';
import { FaInstagram, FaFacebook, FaYoutube, FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-brand-navy-dark py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-6xl">
            <GradientText>Contacto</GradientText>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-400">
            ¿Tienes preguntas? Estamos aquí para ayudarte
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-lg p-8"
          >
            <h3 className="mb-6 text-2xl font-bold text-white">
              Envíanos un Mensaje
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-gray-300">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-lg border border-brand-cyan-neon/30 bg-brand-black-bg/50 px-4 py-3 text-white focus:border-brand-cyan-neon focus:outline-none"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border border-brand-cyan-neon/30 bg-brand-black-bg/50 px-4 py-3 text-white focus:border-brand-cyan-neon focus:outline-none"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-gray-300">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-lg border border-brand-cyan-neon/30 bg-brand-black-bg/50 px-4 py-3 text-white focus:border-brand-cyan-neon focus:outline-none"
                  placeholder="Tu mensaje..."
                ></textarea>
              </div>
              <Button type="submit" size="lg" className="w-full">
                Enviar Mensaje
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="glass rounded-lg p-8">
              <h3 className="mb-6 text-2xl font-bold text-white">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-brand-cyan-neon">
                    Email
                  </h4>
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="text-gray-300 hover:text-brand-cyan-neon"
                  >
                    {SOCIAL_LINKS.email}
                  </a>
                </div>

                <div>
                  <h4 className="mb-4 text-sm font-semibold text-brand-cyan-neon">
                    Redes Sociales
                  </h4>
                  <div className="flex gap-4">
                    <a
                      href={SOCIAL_LINKS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-black-bg/50 text-gray-300 transition-all hover:scale-110 hover:bg-brand-cyan-neon hover:text-brand-navy-dark"
                    >
                      <FaInstagram size={24} />
                    </a>
                    <a
                      href={SOCIAL_LINKS.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-black-bg/50 text-gray-300 transition-all hover:scale-110 hover:bg-brand-cyan-neon hover:text-brand-navy-dark"
                    >
                      <FaFacebook size={24} />
                    </a>
                    <a
                      href={SOCIAL_LINKS.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-black-bg/50 text-gray-300 transition-all hover:scale-110 hover:bg-brand-cyan-neon hover:text-brand-navy-dark"
                    >
                      <FaYoutube size={24} />
                    </a>
                    <a
                      href={`mailto:${SOCIAL_LINKS.email}`}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-black-bg/50 text-gray-300 transition-all hover:scale-110 hover:bg-brand-cyan-neon hover:text-brand-navy-dark"
                    >
                      <FaEnvelope size={24} />
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 text-sm font-semibold text-brand-cyan-neon">
                    Ubicación
                  </h4>
                  <p className="text-gray-300">
                    Villa Carlos Paz, Córdoba
                    <br />
                    Argentina
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
