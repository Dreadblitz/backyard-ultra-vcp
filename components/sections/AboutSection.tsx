'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import GradientText from '@/components/ui/GradientText';
import { HiClock, HiTrophy } from 'react-icons/hi2';
import { TbInfinity } from 'react-icons/tb';

export default function AboutSection() {
  const features = [
    {
      icon: <HiClock size={48} />,
      title: '6.706 km',
      subtitle: 'cada hora',
      description:
        'Cada corredor debe completar 6.706 km cada hora. Tu velocidad define tu descanso: terminas en 45 minutos, descansas 15. Tu estrategia, tu carrera. Si no llegas a tiempo, quedas eliminado.',
      color: 'text-brand-cyan-neon',
    },
    {
      icon: <TbInfinity size={48} />,
      title: 'Sin límite',
      subtitle: 'de vueltas',
      description:
        'La carrera no tiene un número máximo de vueltas. Continúa hasta que solo quede un corredor en pie.',
      color: 'text-brand-orange-ultra',
    },
    {
      icon: <HiTrophy size={48} />,
      title: 'El último',
      subtitle: 'que quede gana',
      description:
        'No gana el más rápido, gana el que más resiste. Es una prueba de resistencia mental y física extrema.',
      color: 'text-brand-violet-medium',
    },
  ];

  return (
    <section id="about" className="relative bg-brand-black-bg py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-6xl">
            ¿Qué es un <GradientText>Backyard Ultra</GradientText>?
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-400">
            Un formato único de ultra running creado por Lazarus Lake, donde la resistencia
            mental es tan importante como la física.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card hover glass>
                <div className={`mb-4 ${feature.color}`}>{feature.icon}</div>
                <h3 className="mb-1 text-3xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className={`mb-4 text-sm ${feature.color}`}>
                  {feature.subtitle}
                </p>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <blockquote className="mx-auto max-w-2xl text-xl italic text-gray-300">
            <span className="text-brand-cyan-neon text-4xl">&ldquo;</span>
            En Backyard Ultra no compites contra otros corredores, compites contra ti mismo.
            <span className="text-brand-cyan-neon text-4xl">&rdquo;</span>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
