'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import GradientText from '@/components/ui/GradientText';
import { HiMoon, HiLightBulb, HiSparkles, HiMapPin } from 'react-icons/hi2';

export default function NightExperience() {
  const highlights = [
    {
      icon: <HiMoon size={32} />,
      title: 'Inicio: 21:00 hs',
      description: 'Único en Argentina - Todas las demás carreras comienzan de día',
    },
    {
      icon: <HiLightBulb size={32} />,
      title: 'Recorrido Iluminado',
      description: 'Gran parte del circuito es iluminado',
    },
    {
      icon: <HiSparkles size={32} />,
      title: 'Bajo las Estrellas',
      description: 'Atmósfera mágica con el cielo nocturno de Villa Carlos Paz',
    },
    {
      icon: <HiMapPin size={32} />,
      title: 'Vista al Lago y a las Sierras',
      description: 'Recorrido con vistas al Lago San Roque, sierras chicas y sierras grandes',
    },
  ];

  return (
    <section id="night" className="relative overflow-hidden bg-gradient-night py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-brand-cyan-neon blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-brand-violet-medium blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-6xl">
            La <GradientText>Experiencia Nocturna</GradientText>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            Nuestra carrera ofrece algo que ninguna otra en Argentina tiene
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg lg:h-[500px]">
              <Image
                src="/logos/A2.jpg"
                alt="Villa Carlos Paz de noche"
                fill
                className="object-cover object-[20%_center] md:object-center"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass flex items-start gap-4 rounded-lg p-4 transition-all hover:border-brand-cyan-neon"
                >
                  <div className="text-brand-cyan-neon">{highlight.icon}</div>
                  <div>
                    <h3 className="mb-1 text-xl font-semibold text-white">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-400">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 text-center lg:text-left"
            >
              <p className="text-2xl font-bold text-gray-300">
                <span className="text-brand-cyan-neon">&ldquo;</span>
                No hay metas, no hay rivales, <span className="text-brand-orange-ultra">SOLO VOS</span>
                <span className="text-brand-cyan-neon">&rdquo;</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
