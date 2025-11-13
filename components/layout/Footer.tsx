'use client';

import Image from 'next/image';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { RACE_INFO, SOCIAL_LINKS, NAV_ITEMS } from '@/lib/constants';

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-brand-cyan-neon/20 bg-brand-navy-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo y Descripción */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-16">
                <Image
                  src="/logos/logo_circular.jpg"
                  alt="Backyard Ultra VCP"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Backyard Ultra
                </h3>
                <p className="text-brand-orange-ultra">Villa Carlos Paz</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              {RACE_INFO.description}
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Enlaces Rápidos
            </h4>
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-gray-400 transition-colors hover:text-brand-cyan-neon"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Síguenos
            </h4>
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-all hover:scale-110 hover:text-brand-cyan-neon"
                aria-label="Instagram"
              >
                <FaInstagram size={32} />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-all hover:scale-110 hover:text-brand-cyan-neon"
                aria-label="Facebook"
              >
                <FaFacebook size={32} />
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="text-gray-400 transition-all hover:scale-110 hover:text-brand-cyan-neon"
                aria-label="Email"
              >
                <FaEnvelope size={32} />
              </a>
            </div>
            <div className="mt-4">
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="text-sm text-gray-400 hover:text-brand-cyan-neon"
              >
                {SOCIAL_LINKS.email}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-brand-cyan-neon/20 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 {RACE_INFO.name}. Todos los derechos reservados.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Desarrollado con 💜 por{' '}
            <a
              href="https://github.com/Dreadblitz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-cyan-neon hover:underline"
            >
              @caluiov
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
