'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import GradientText from '@/components/ui/GradientText';
import {
  HiCalendar,
  HiMapPin,
  HiUserGroup,
  HiCheckBadge,
} from 'react-icons/hi2';
import { RACE_INFO } from '@/lib/constants';

export default function RaceInfo() {
  const infoCards = [
    {
      icon: <HiCalendar size={40} />,
      title: 'Fecha y Hora',
      content: ['Fecha: Viernes 20 de noviembre de 2026 (FERIADO)', `Inicio: ${RACE_INFO.startTime} hs`, 'Largada cada hora en punto'],
      color: 'text-brand-cyan-neon',
    },
    {
      icon: <HiMapPin size={40} />,
      title: 'Ubicación',
      content: [
        RACE_INFO.location,
        'Circuito junto al Lago San Roque',
        'Largada y llegada en el mismo punto',
      ],
      color: 'text-brand-orange-ultra',
    },
    {
      icon: <HiUserGroup size={40} />,
      title: 'Formato',
      content: [
        `${RACE_INFO.distance} km por hora`,
        'Tiempo de descanso: lo que sobre hasta la hora',
        'Eliminación automática si no llegas',
      ],
      color: 'text-brand-violet-medium',
    },
    {
      icon: <HiCheckBadge size={40} />,
      title: 'Requisitos',
      content: [
        'Mayores de 18 años',
        'Apto médico y deslinde de responsabilidades',
        'Linterna frontal obligatoria',
      ],
      color: 'text-brand-magenta',
    },
  ];

  return (
    <section id="info" className="bg-brand-navy-dark py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-6xl">
            <GradientText>Información</GradientText> de la Carrera
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-400">
            Todo lo que necesitas saber para participar
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card hover glass>
                <div className={`mb-4 ${card.color}`}>{card.icon}</div>
                <h3 className="mb-4 text-2xl font-bold text-white">
                  {card.title}
                </h3>
                <ul className="space-y-2">
                  {card.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className={`mt-1 ${card.color}`}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16"
        >
          <div className="glass rounded-lg p-8">
            <h3 className="mb-6 text-center text-2xl font-bold text-white">
              Timeline del Evento
            </h3>
            <div className="grid gap-4 md:grid-cols-4">
              {[
                { time: '18:00', event: 'Acreditaciones' },
                { time: '20:30', event: 'Charla técnica' },
                { time: '21:00', event: '🏃 Primera vuelta' },
                { time: '22:00', event: '🏃 Segunda vuelta' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <p className="mb-2 text-2xl font-bold text-brand-cyan-neon">
                    {item.time}
                  </p>
                  <p className="text-gray-300">{item.event}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-gray-500">
              ... y así cada hora hasta que quede un solo corredor
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
