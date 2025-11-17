'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import GradientText from '@/components/ui/GradientText';
import Button from '@/components/ui/Button';
import { SOCIAL_LINKS } from '@/lib/constants';
import { FaInstagram, FaFacebook, FaYoutube, FaEnvelope } from 'react-icons/fa';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Nuevo mensaje desde Backyard Ultra VCP - ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        throw new Error(result.message || 'Error al enviar el mensaje');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Error al enviar el mensaje. Por favor, intenta nuevamente.'
      );
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-gray-300">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  disabled={status === 'loading'}
                  className="w-full rounded-lg border border-brand-cyan-neon/30 bg-brand-black-bg/50 px-4 py-3 text-white focus:border-brand-cyan-neon focus:outline-none disabled:opacity-50"
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
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  disabled={status === 'loading'}
                  className="w-full rounded-lg border border-brand-cyan-neon/30 bg-brand-black-bg/50 px-4 py-3 text-white focus:border-brand-cyan-neon focus:outline-none disabled:opacity-50"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-gray-300">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  disabled={status === 'loading'}
                  className="w-full rounded-lg border border-brand-cyan-neon/30 bg-brand-black-bg/50 px-4 py-3 text-white focus:border-brand-cyan-neon focus:outline-none disabled:opacity-50"
                  placeholder="Tu mensaje..."
                ></textarea>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
              </Button>

              {/* Success Message */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg bg-green-500/20 border border-green-500/30 p-4 text-center"
                >
                  <p className="text-green-400 font-semibold">
                    ✓ Mensaje enviado exitosamente
                  </p>
                  <p className="mt-1 text-sm text-green-300">
                    Te responderemos pronto a tu email
                  </p>
                </motion.div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg bg-red-500/20 border border-red-500/30 p-4 text-center"
                >
                  <p className="text-red-400 font-semibold">✗ Error al enviar</p>
                  <p className="mt-1 text-sm text-red-300">
                    {errorMessage || 'Por favor, intenta nuevamente'}
                  </p>
                </motion.div>
              )}
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
