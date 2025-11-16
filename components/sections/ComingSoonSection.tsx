'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import GradientText from '@/components/ui/GradientText';
import { HiDocumentText, HiMap, HiChartBar, HiCamera, HiClipboardDocumentList, HiSparkles } from 'react-icons/hi2';

export default function ComingSoonSection() {
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
      description: 'Conoce el circuito de 6,7 km',
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
              Suscríbete para recibir notificaciones sobre inscripciones, novedades y más
            </p>
            <form className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="tu@email.com"
                className="glass flex-1 rounded-lg border border-brand-cyan-neon/30 bg-transparent px-4 py-3 text-white placeholder-gray-500 focus:border-brand-cyan-neon focus:outline-none"
              />
              <Button type="submit" size="md">
                Notificarme
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
