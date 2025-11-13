# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Proyecto

**Landing page** para Backyard Ultra Villa Carlos Paz - Primera carrera nocturna de ultra running en Argentina.

**Concepto Visual**: Synthwave nocturno moderno con estética retrofuturista. Diferenciador único: carrera que inicia a las 21:00 hs (vs. mañana tradicional).

---

## Comandos Esenciales

```bash
# Desarrollo
npm run dev          # Servidor local en http://localhost:3000

# Build y Deploy
npm run build        # Compilar para producción (verifica errores)
npm run start        # Servidor de producción

# Code Quality
npm run lint         # ESLint (Next.js + TypeScript rules)
npm run format       # Prettier format

# Git Workflow
git checkout desarrollo     # Rama de trabajo principal
git checkout main          # Rama de producción (protegida, solo merge via PR)
```

---

## Arquitectura de Componentes

### 4 Categorías Organizadas

```
components/
├── layout/          # Estructura principal del sitio
│   ├── Header.tsx       # Nav sticky con glassmorphism + logo circular
│   └── Footer.tsx       # Redes sociales + links rápidos
│
├── sections/        # Secciones de la landing page
│   ├── HeroSection.tsx          # Hero con logo + gradiente animado + estrellas
│   ├── AboutSection.tsx         # Explicación formato Backyard Ultra
│   ├── NightExperience.tsx      # Diferenciador nocturno (split layout con A2.jpg)
│   ├── RaceInfo.tsx            # Info logística + timeline
│   ├── ComingSoonSection.tsx   # Placeholders para features futuras
│   └── ContactSection.tsx      # Formulario + info contacto
│
├── ui/              # Componentes reutilizables
│   ├── Button.tsx       # 3 variantes: primary, secondary, ghost
│   ├── Card.tsx         # Glass effect + hover animations
│   └── GradientText.tsx # Texto con gradiente cyan → violet
│
└── effects/         # Efectos visuales especiales
    └── StarryBackground.tsx  # Partículas con tsparticles
```

### Patrón de Uso

- **Client Components**: Todos los componentes con animaciones/interactividad usan `'use client';`
- **Framer Motion**: Para animaciones (whileInView, whileHover, whileTap)
- **Tailwind**: Utility-first con clases custom del design system
- **Next Image**: Siempre usar para optimización automática

---

## Sistema de Diseño

### Paleta de Colores (11 colores base)

Definida en `tailwind.config.ts` bajo namespace `brand-*`:

```css
brand-navy-dark:      #1B1B3A   /* Fondos principales */
brand-violet-deep:    #6B3D99   /* Elementos secundarios */
brand-violet-medium:  #8B4DAF   /* Gradientes */
brand-magenta:        #E91E8C   /* Acentos vibrantes */
brand-pink-bright:    #FF006E   /* Highlights hover */
brand-orange-vibrant: #FF6B4D   /* Transiciones */
brand-orange-ultra:   #FF8B3D   /* Énfasis "ULTRA" */
brand-coral-soft:     #FFB27D   /* Luz ambiental */
brand-cyan-neon:      #00D9FF   /* Efectos neón principales */
brand-white:          #FFFFFF   /* Textos */
brand-black-bg:       #0A0A1F   /* Fondo oscuro */
```

### 3 Gradientes Predefinidos

```css
/* Background utilities en Tailwind */
bg-gradient-hero   /* Atardecer/anochecer (135deg) */
bg-gradient-neon   /* Efectos neón (90deg cyan → violet) */
bg-gradient-night  /* Fondo nocturno vertical (180deg) */
```

### Clases Utility Personalizadas

```css
.glass              /* Glassmorphism: blur + border neón */
.glow-neon          /* Text-shadow cyan animado */
.glow-purple        /* Text-shadow violet animado */

/* Animaciones */
animate-glow        /* Glow pulsante (2s infinite) */
animate-float       /* Float vertical (3s infinite) */
animate-slide-up    /* Slide up + fade in (0.5s) */
animate-fade-in     /* Fade in simple (0.6s) */
```

---

## Constantes Centralizadas

**Archivo**: `lib/constants.ts`

```typescript
COLORS           // Paleta completa
RACE_INFO        // Información de la carrera (name, distance, startTime, etc.)
SOCIAL_LINKS     // URLs de redes sociales
NAV_ITEMS        // Items de navegación con hrefs
```

**Importante**: Al agregar nueva información de la carrera (fecha, ubicación, etc.), actualizar `RACE_INFO` en este archivo.

---

## Assets Visuales

### Logos en `public/logos/`

- **`logo_circular.jpg`**: Logo principal (HD) - Usar en header, hero, footer
- **`A2.jpg`**: Imagen del cartel en costanera - Usar en Night Experience section

### Uso de Imágenes

```tsx
// Siempre usar Next.js Image component
import Image from 'next/image';

<Image
  src="/logos/logo_circular.jpg"
  alt="Backyard Ultra VCP"
  fill                           // O width/height específicos
  className="rounded-full"
  priority                       // Para imágenes above-the-fold
/>
```

---

## Workflow de Git

### Ramas

- **`desarrollo`**: Rama de trabajo principal (default) - Todo desarrollo se hace aquí
- **`main`**: Producción (protegida) - Solo merge via PR después de validación

### Proceso

1. Desarrollar en `desarrollo`
2. Commit con formato Conventional Commits (`feat:`, `fix:`, `style:`, etc.)
3. Push a `desarrollo` para testing local
4. Cuando esté validado → PR a `main` → Deploy a Vercel

### NO hacer

- ❌ Commits directos a `main`
- ❌ Force push a ninguna rama
- ❌ Merge sin validación local previa

---

## Estilo Visual y Efectos

### Concepto: Synthwave Nocturno

- Fondos oscuros con gradientes complejos
- Efectos neón (cyan #00D9FF) sobre elementos clave
- Glassmorphism en cards y header
- Partículas de estrellas (tsparticles)
- Animaciones suaves con Framer Motion

### Efectos Implementados

```typescript
// Scroll animations
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}

// Hover effects
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

### Glassmorphism Pattern

```tsx
<div className="glass rounded-lg p-6 hover:border-brand-cyan-neon">
  {/* Content */}
</div>
```

---

## Estructura de Página

### app/page.tsx

Importa y renderiza secciones en este orden:

1. **HeroSection** - Above the fold, logo + CTAs + info cards
2. **AboutSection** - Explicación del formato Backyard Ultra
3. **NightExperience** - Diferenciador nocturno (split layout con imagen)
4. **RaceInfo** - Detalles logísticos + timeline
5. **ComingSoonSection** - 4 placeholders para features futuras
6. **ContactSection** - Formulario + redes sociales

**Layout envolvente**: `Header` (sticky top) + `main` + `Footer`

---

## Features Futuras (Roadmap)

Secciones actualmente con placeholder "Próximamente":

1. **Sistema de Inscripción** - Formulario + pasarela de pago
2. **Mapa Interactivo** - Circuito de 6.706 km con elevación
3. **Resultados en Vivo** - Tracking en tiempo real durante evento
4. **Galería** - Fotos/videos de ediciones

Cuando se implementen, crear rutas en `app/[feature]/page.tsx`

---

## Responsive Design

### Breakpoints (Tailwind)

```
sm: 640px    md: 768px    lg: 1024px    xl: 1280px    2xl: 1536px
```

### Enfoque

- **Mobile-first**: Diseño base para mobile, enhance para desktop
- **Header**: Logo siempre visible, texto solo en desktop (`hidden md:block`)
- **Sections**: Grid → Stack en mobile
- **Mobile menu**: Accordion animado con Framer Motion

---

## SEO y Metadata

### app/layout.tsx

```typescript
metadataBase: new URL('https://backyardultravcp.com')
title: Template con "| Backyard Ultra VCP"
description: Enfoque en keywords (nocturna, villa carlos paz, ultra running)
openGraph + twitter cards configurados
robots: index:true, follow:true
```

### Keywords Principales

- backyard ultra villa carlos paz
- carrera nocturna argentina
- ultra running cordoba

---

## Documentación de Referencia

- **PLANIFICACION_WEB.md**: Plan completo de implementación (17,000 palabras)
- **README.md**: Guía de inicio rápido y stack tecnológico

---

## Debugging Común

### Build Errors

```bash
npm run build    # Compilar y verificar errores TypeScript
```

**Error común**: Imports de react-icons que no existen → Verificar en [react-icons.github.io](https://react-icons.github.io/react-icons/)

### Development Server

```bash
npm run dev      # Puerto 3000 por defecto
```

Si el puerto está ocupado: `PORT=3001 npm run dev`

---

## TypeScript

### Path Aliases

```typescript
@/*  →  ./       (raíz del proyecto)
```

### Strict Mode

Habilitado en `tsconfig.json`. Todos los componentes deben tener tipos explícitos.

---

## Performance

### Optimizaciones Aplicadas

- Next.js Image component para optimización automática (AVIF/WebP)
- Lazy loading de componentes pesados (particles)
- CSS purge automático con Tailwind
- Code splitting por rutas (App Router)

### Lighthouse Target

- Performance: >95
- Accessibility: >95
- Best Practices: 100
- SEO: 100

**Actual**: 181 kB First Load JS (bueno para landing page con animaciones)

---

## Accesibilidad

- Navegación por teclado completa
- ARIA labels en elementos interactivos
- Alt text en todas las imágenes
- Contraste >4.5:1 para textos
- Semantic HTML (header, nav, main, section, footer)

---

**Última actualización**: 13 de Noviembre de 2025
**Versión del proyecto**: 0.1.0 (MVP en desarrollo)
