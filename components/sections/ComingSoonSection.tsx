'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import GradientText from '@/components/ui/GradientText';
import { HiDocumentText, HiMap, HiChartBar, HiCamera, HiClipboardDocumentList, HiSparkles } from 'react-icons/hi2';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ComingSoonSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');

  const comingSoonCards = [
    {
      icon: <HiDocumentText size={48} />,
      title: 'Inscripciones',
      description: 'Las inscripciones abrirán pronto',
      detail: 'Recibí un email cuando estén disponibles',
      color: 'text-brand-cyan-neon',
    },
    {
      icon: <HiMap size={48} />,
      title: 'Recorrido',
      description: 'Conoce el circuito de 6.706 km',
      detail: 'Mapa interactivo con elevación y puntos clave',
      color: 'text-brand-orange-ultra',
    },
    {
      icon: <HiChartBar size={48} />,
      title: 'Resultados en Vivo',
      description: 'Seguí la carrera en tiempo real',
      detail: 'Tracking de corredores y estadísticas actualizadas',
      color: 'text-brand-violet-medium',
    },
    {
      icon: <HiCamera size={48} />,
      title: 'Galería',
      description: 'Revive momentos de ediciones pasadas',
      detail: 'Fotos y videos de la experiencia',
      color: 'text-brand-magenta',
    },
    {
      icon: <HiClipboardDocumentList size={48} />,
      title: 'Reglamento',
      description: 'Reglas oficiales de la carrera',
      detail: 'Normativa completa y requisitos detallados',
      color: 'text-brand-pink-bright',
    },
    {
      icon: <HiSparkles size={48} />,
      title: 'Sponsors',
      description: 'Nuestros colaboradores y patrocinadores',
      detail: '¿Querés ser parte? Contactanos para sumarte',
      color: 'text-brand-coral-soft',
    },
  ];

  const handleNewsletterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          email: email,
          subject: 'Nueva suscripción al newsletter - Backyard Ultra VCP',
          message: `Nueva suscripción al newsletter desde: ${email}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setEmail('');
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        throw new Error(result.message || 'Error al suscribirse');
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  return (
    <section className="bg-brand-black-bg py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-6xl">
            <GradientText>Próximamente</GradientText>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-400">
            Estamos trabajando en estas funcionalidades para ofrecerte la mejor experiencia
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {comingSoonCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card hover glass className="relative overflow-hidden">
                {/* Coming Soon Badge */}
                <div className="absolute right-4 top-4 rounded-full bg-brand-orange-ultra/20 px-3 py-1 text-xs font-semibold text-brand-orange-ultra">
                  Próximamente
                </div>

                <div className={`mb-4 ${card.color}`}>{card.icon}</div>
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {card.title}
                </h3>
                <p className="mb-4 text-lg text-gray-300">{card.description}</p>
                <p className="mb-6 text-sm text-gray-500">{card.detail}</p>

                <Button variant="ghost" size="sm" disabled className="opacity-60">
                  Disponible pronto
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="glass mx-auto max-w-2xl rounded-lg p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Mantente Informado
            </h3>
            <p className="mb-6 text-gray-400">
              Suscríbete para recibir notificaciones sobre inscripciones, novedades y mucho más
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === 'loading'}
                placeholder="tu@email.com"
                className="glass flex-1 rounded-lg border border-brand-cyan-neon/30 bg-transparent px-4 py-3 text-white placeholder-gray-500 focus:border-brand-cyan-neon focus:outline-none disabled:opacity-50"
              />
              <Button type="submit" size="md" disabled={status === 'loading'}>
                {status === 'loading' ? 'Enviando...' : 'Notificarme'}
              </Button>
            </form>

            {/* Success/Error Messages */}
            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-green-400 font-semibold"
              >
                ✓ ¡Suscripción exitosa! Te notificaremos sobre novedades
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-red-400 font-semibold"
              >
                ✗ Error al suscribirse. Por favor, intenta nuevamente
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
