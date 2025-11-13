'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import GradientText from '@/components/ui/GradientText';
import Button from '@/components/ui/Button';
import StarryBackground from '@/components/effects/StarryBackground';
import { RACE_INFO } from '@/lib/constants';
import { HiChevronDown } from 'react-icons/hi';

export default function HeroSection() {
  const [inscriptionText, setInscriptionText] = useState('Inscripciones');

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInscriptionClick = () => {
    setInscriptionText('Próximamente');
    setTimeout(() => {
      setInscriptionText('Inscripciones');
    }, 2500);
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-night"
    >
      {/* Starry Background */}
      <StarryBackground />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <div className="relative mx-auto h-48 w-48 md:h-64 md:w-64">
            <Image
              src="/logos/logo_circular.jpg"
              alt="Backyard Ultra VCP Logo"
              fill
              className="animate-glow rounded-full object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl">
            <GradientText className="glow-neon">BACKYARD ULTRA</GradientText>
          </h1>

          <h2 className="mb-6 text-3xl font-semibold text-brand-orange-ultra md:text-5xl">
            Villa Carlos Paz
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-xl text-gray-300 md:text-2xl">
            La primera carrera de Backyard Ultra con <span className="text-brand-cyan-neon font-semibold">inicio nocturno</span>. Una experiencia única bajo las estrellas.
          </p>

          {/* Info Cards */}
          <div className="mx-auto mb-12 grid max-w-4xl gap-6 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glass rounded-lg p-6 transition-all hover:scale-105 hover:border-brand-cyan-neon"
            >
              <p className="text-5xl font-bold text-brand-cyan-neon">
                {RACE_INFO.distance}
              </p>
              <p className="mt-2 text-sm text-gray-300">km cada hora</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="glass rounded-lg p-6 transition-all hover:scale-105 hover:border-brand-orange-ultra"
            >
              <p className="text-5xl font-bold text-brand-orange-ultra">
                {RACE_INFO.startTime}
              </p>
              <p className="mt-2 text-sm text-gray-300">Hora de inicio</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="glass rounded-lg p-6 transition-all hover:scale-105 hover:border-brand-violet-medium"
            >
              <p className="text-5xl font-bold text-brand-violet-medium">∞</p>
              <p className="mt-2 text-sm text-gray-300">Sin límite de vueltas</p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button size="lg" glow onClick={handleInscriptionClick}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={inscriptionText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {inscriptionText}
                </motion.span>
              </AnimatePresence>
            </Button>
            <Button size="lg" variant="ghost" onClick={scrollToNext}>
              Más Información
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1.5 },
          y: { duration: 2, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-cyan-neon"
        aria-label="Scroll to next section"
      >
        <HiChevronDown size={48} />
      </motion.button>
    </section>
  );
}
