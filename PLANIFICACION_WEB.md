# 🌙 Planificación Web - Backyard Ultra Villa Carlos Paz

**Fecha de Creación**: 13 de Noviembre de 2025
**Versión**: 1.0
**Cuenta GitHub**: Dreadblitz (Personal)
**Repositorio**: https://github.com/Dreadblitz/backyard-ultra-vcp

---

## 📊 Análisis de Branding

### Paleta de Colores Oficial

Extraída de los logos oficiales (`A2.jpg` y `logo_circular.jpg`):

| Color | Hex | Uso |
|-------|-----|-----|
| **Navy Dark** | `#1B1B3A` | Fondo principal, cielo nocturno |
| **Violet Deep** | `#6B3D99` | Montañas, elementos secundarios |
| **Violet Medium** | `#8B4DAF` | Transiciones, gradientes |
| **Magenta** | `#E91E8C` | Acentos vibrantes, CTAs |
| **Pink Bright** | `#FF006E` | Highlights, hover states |
| **Orange Vibrant** | `#FF6B4D` | Horizonte, transiciones |
| **Orange Ultra** | `#FF8B3D` | Texto "ULTRA", énfasis |
| **Coral Soft** | `#FFB27D` | Luz ambiental, suaves |
| **Cyan Neon** | `#00D9FF` | Efectos neón, contornos |
| **White** | `#FFFFFF` | Textos principales |
| **Black BG** | `#0A0A1F` | Fondo oscuro, sombras |

### Gradientes Principales

```css
/* Hero Gradient - Atardecer/Anochecer */
linear-gradient(135deg, #1B1B3A 0%, #6B3D99 25%, #E91E8C 50%, #FF6B4D 75%, #FFB27D 100%)

/* Neon Gradient - Efectos luminosos */
linear-gradient(90deg, #00D9FF 0%, #8B4DAF 100%)

/* Night Gradient - Fondo nocturno */
linear-gradient(180deg, #0A0A1F 0%, #1B1B3A 50%, #6B3D99 100%)
```

### Estilo Visual

**Concepto**: Synthwave nocturno moderno con elementos futuristas

**Características clave**:
- Estética nocturna retrofuturista
- Efectos neón (cyan) sobre fondos oscuros
- Gradientes complejos simulando atardecer invertido
- Siluetas de corredores con contornos luminosos
- Estrellas y partículas en el fondo
- Tipografías bold para impacto
- Líneas de velocidad y movimiento

---

## 🛠️ Stack Tecnológico

### Frontend Framework
- **Next.js 14.2+** con App Router
- **React 18.3+**
- **TypeScript 5.6+**

### Styling y Animaciones
- **Tailwind CSS 3.4+** con configuración personalizada
- **CSS Variables** para paleta de colores dinámica
- **Framer Motion 11+** para animaciones fluidas
- **React Intersection Observer** para scroll animations

### Librerías Especiales
- **@tsparticles/react** + **@tsparticles/slim**: Efecto de estrellas nocturnas
- **Swiper 11+**: Carruseles de imágenes
- **date-fns 4+**: Manejo de fechas
- **react-icons 5+**: Iconografía consistente

### Herramientas de Desarrollo
- **ESLint 8+** con configuración Next.js
- **Prettier 3+** para formato consistente
- **TypeScript** con strict mode
- **Git + GitHub Actions** para CI/CD

### Infraestructura
- **Hosting**: Vercel (gratuito con CI/CD automático)
- **Dominio**: TBD (recomendado: backyardultravcp.com)
- **CDN**: Vercel Edge Network (global)
- **Analytics**: Vercel Analytics (incluido)

---

## 📁 Arquitectura del Proyecto

```
backyard-ultra-vcp/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Layout principal con metadata SEO
│   ├── page.tsx                 # Homepage (landing page)
│   ├── globals.css              # Estilos globales + CSS variables
│   ├── inscripcion/             # [FUTURO] Sistema de registro
│   ├── recorrido/               # [FUTURO] Mapa interactivo
│   ├── resultados/              # [FUTURO] Live tracking
│   └── galeria/                 # [FUTURO] Media gallery
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Nav sticky con efecto glass
│   │   ├── Footer.tsx           # Footer con redes + info
│   │   └── MobileMenu.tsx       # Menú mobile responsive
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx      # Hero con gradiente animado
│   │   ├── AboutSection.tsx     # ¿Qué es Backyard Ultra?
│   │   ├── NightExperience.tsx  # Diferenciador nocturno
│   │   ├── RaceInfo.tsx         # Detalles de la carrera
│   │   ├── PlaceholderSection.tsx # Template "Próximamente"
│   │   ├── SponsorsSection.tsx  # Grid de sponsors
│   │   ├── FAQSection.tsx       # Preguntas frecuentes
│   │   └── ContactSection.tsx   # Formulario contacto
│   │
│   ├── ui/
│   │   ├── Button.tsx           # Botones con efecto neón
│   │   ├── Card.tsx             # Cards con glass effect
│   │   ├── GradientText.tsx     # Texto con gradiente animado
│   │   └── LoadingScreen.tsx    # Loading con branding
│   │
│   └── effects/
│       ├── StarryBackground.tsx # Particles de estrellas
│       ├── ParallaxSection.tsx  # Wrapper parallax
│       └── NeonGlow.tsx         # Efecto neón reutilizable
│
├── lib/
│   ├── constants.ts             # Colores, URLs, config
│   └── utils.ts                 # Helpers
│
├── public/
│   ├── logos/                   # Logos del branding
│   │   ├── A2.jpg              # Logo en costanera
│   │   └── logo_circular.jpg   # Logo circular HD
│   ├── images/                  # Imágenes optimizadas
│   └── fonts/                   # Tipografías custom (si aplica)
│
└── styles/
    └── animations.css           # Animaciones CSS personalizadas
```

---

## 📱 Estructura de la Landing Page

### 1. Hero Section (Above the fold)
**Objetivo**: Impacto visual inmediato + comunicación clara del concepto

**Elementos**:
- Full viewport height (100vh)
- Fondo: Gradiente animado que simula atardecer → anochecer (loop infinito)
- Efecto de partículas de estrellas que aparecen gradualmente
- Logo circular central con efecto de glow neón
- Título principal: "BACKYARD ULTRA VILLA CARLOS PAZ"
- Subtítulo: "La primera carrera nocturna de Argentina"
- CTA principal: "Próximas Inscripciones" (con efecto neón pulsante)
- Scroll indicator animado en la parte inferior

**Animaciones**:
- Fade in del contenido (0.6s ease-out)
- Glow pulsante del logo (2s infinite)
- Partículas flotando (3s ease-in-out infinite)
- Gradiente de fondo en transición suave

---

### 2. ¿Qué es Backyard Ultra? (Sección educativa)
**Objetivo**: Explicar el formato único de la carrera

**Elementos**:
- Título con efecto de reveal
- Descripción del concepto Backyard Ultra
- Grid de 3 cards (glassmorphism):
  * **6.706 km** cada hora - Explicación de la distancia
  * **Sin límite** de vueltas - Concepto de resistencia
  * **El último que quede** gana - Formato eliminatorio
- Animación de entrada con parallax

**Diseño**:
- Cards con efecto glass (backdrop-filter: blur)
- Hover: elevación + glow en bordes
- Iconos con animaciones sutiles
- Responsive: 3 columnas desktop → 1 columna mobile

---

### 3. La Experiencia Nocturna (Sección destacada)
**Objetivo**: Destacar el diferenciador único (inicio nocturno)

**Elementos**:
- Fondo oscuro con efecto de cielo estrellado intensificado
- Split layout:
  * **Izquierda**: Imagen/video del lago de noche o corredor con linterna
  * **Derecha**: Contenido textual + highlights
- Highlights con iconos neón:
  * 🌙 Inicio: **21:00 hs** (único en Argentina)
  * 💡 Recorrido iluminado con luces LED
  * ✨ Atmósfera mágica bajo las estrellas
  * 🏞️ Vista del lago San Roque de noche
- Quote destacado: *"La única carrera que comienza cuando el resto termina"*

**Animaciones**:
- Elementos que entran desde los costados
- Parallax diferencial entre imagen y texto
- Iconos con efecto de glow al hacer scroll

---

### 4. Información de la Carrera
**Objetivo**: Comunicar detalles logísticos clave

**Elementos**:
- Cards glassmorphism con bordes neón (4 cards):
  * **📅 Fecha y hora**: TBD - 21:00 hs
  * **📍 Ubicación**: Villa Carlos Paz, Córdoba (con mini mapa estático)
  * **🏃 Formato**: 6.706 km cada hora en punto
  * **✅ Requisitos**: Mayores de 18 años, aptitud médica
- Timeline visual del evento (hora por hora)
- CTA secundario: "Más información próximamente"

**Diseño**:
- Layout tipo mosaic en desktop
- Stack vertical en mobile
- Hover: glow effect en bordes

---

### 5. Secciones "Próximamente" (4 cards placeholder)
**Objetivo**: Generar expectativa para funcionalidades futuras

**Cards**:

#### Card 1: Inscripción
- Icono: 📝
- Título: "Inscripciones"
- Mensaje: "Las inscripciones abrirán pronto"
- Botón: "Notificarme" → Modal con formulario email

#### Card 2: Recorrido
- Icono: 🗺️
- Título: "Recorrido"
- Mensaje: "Conoce el circuito de 6.706km"
- Botón: "Ver mapa próximamente"

#### Card 3: Resultados en Vivo
- Icono: 📊
- Título: "Resultados en Vivo"
- Mensaje: "Seguí la carrera en tiempo real"
- Botón: "Durante el evento"

#### Card 4: Galería
- Icono: 📸
- Título: "Galería"
- Mensaje: "Revive momentos de ediciones pasadas"
- Botón: "Próximamente"

**Diseño**:
- Grid 2x2 en desktop, stack en mobile
- Cards con efecto de "coming soon" (opacity reducida)
- Hover: elevación + cambio de opacity
- Modal para formulario de notificaciones

---

### 6. Sponsors y Colaboradores
**Objetivo**: Reconocer a sponsors y generar oportunidades

**Elementos**:
- Título de sección
- Categorías de sponsors:
  * **Sponsors Principales** (logos grandes)
  * **Sponsors Técnicos** (logos medianos)
  * **Aliados** (logos pequeños)
- Grid responsivo de logos
- CTA: "Quiero ser sponsor" → Formulario de contacto

**Diseño**:
- Logos con filtro grayscale que se colorean en hover
- Efecto glow en hover
- Grid adaptive (flex-wrap)

---

### 7. FAQ (Preguntas Frecuentes)
**Objetivo**: Responder dudas comunes

**Elementos**:
- Accordion interactivo con animaciones
- Preguntas clave:
  1. ¿Qué es un Backyard Ultra?
  2. ¿Cuál es el recorrido?
  3. ¿Cuándo abren las inscripciones?
  4. ¿Qué necesito para participar?
  5. ¿Hay categorías por edad/género?
  6. ¿Cómo funciona el sistema de eliminación?
  7. ¿Qué pasa si no completo la vuelta en tiempo?
  8. ¿Hay puestos de hidratación/nutrición?

**Diseño**:
- Estilo tipo terminal/neón
- Cada pregunta expande con animación smooth
- Iconos indicadores (+ / -)

---

### 8. Contacto
**Objetivo**: Facilitar comunicación con organizadores

**Elementos**:
- Formulario de contacto simple:
  * Nombre
  * Email
  * Mensaje
  * Botón "Enviar" (con efecto de carga)
- Información de contacto:
  * Email oficial
  * Teléfono (si aplica)
  * Redes sociales (iconos con links)
- Mapa de ubicación (Google Maps embed)

**Diseño**:
- Split layout: form (izq) + info (der)
- Formulario con validación
- Confirmación visual al enviar

---

### 9. Footer
**Objetivo**: Navegación secundaria + info legal

**Elementos**:
- Logo de la carrera
- Links rápidos a secciones
- Redes sociales (iconos grandes con hover neón)
- Copyright
- Términos y condiciones (cuando aplique)
- Créditos de diseño

**Diseño**:
- 3 columnas en desktop, stack en mobile
- Fondo: navy-dark con borde superior neón

---

## ✨ Características UX/UI Excepcionales

### 1. Efectos Visuales Avanzados

#### Cursor Personalizado
- Efecto de linterna que ilumina elementos al pasar sobre ellos
- Simula corredor de noche con frontal
- Partículas que siguen el cursor

#### Parallax Multi-Capa
- Fondo de estrellas se mueve más lento que contenido
- Crea sensación de profundidad 3D
- Aplicado en secciones específicas (Hero, Night Experience)

#### Morphing Gradients
- Gradientes que cambian suavemente entre estados
- Transición de colores en loop infinito
- Aplicado en Hero background

#### Glow Effects
- Elementos con resplandor neón que se intensifica en hover/focus
- Colores: cyan (#00D9FF) y violet (#8B4DAF)
- Text-shadow + box-shadow animados

#### Text Reveal Animations
- Texto que aparece letra por letra con efecto neón
- Usado en títulos principales de secciones
- Timing: 50ms por letra

#### Smooth Scroll
- Transiciones suaves entre secciones con easing personalizado
- cubic-bezier(0.645, 0.045, 0.355, 1)
- Duración: 800ms

---

### 2. Micro-interacciones

#### Botones
- Efecto de "carga de energía" antes del click
- Glow pulsante en hover
- Ripple effect al hacer click
- Haptic feedback (en dispositivos compatibles)

#### Cards
- Elevación en hover (translateY(-10px))
- Glow en bordes al hacer hover
- Transición suave de opacidad
- Rotación 3D sutil en hover

#### Iconos
- Animaciones en loop (float, rotate)
- Scale en hover (1.1x)
- Color shift al interactuar

#### Progress Indicators
- Barras de progreso animadas
- Counters que cuentan desde 0 hasta el valor final
- Usado para stats (ej: 6.706 km)

#### Toast Notifications
- Diseño neón con glassmorphism
- Slide in desde arriba
- Auto-dismiss después de 5s

#### Loading States
- Spinners con branding
- Skeleton screens con shimmer effect
- Loading bar con gradiente animado

---

### 3. Animaciones de Scroll

#### Fade In + Slide Up
- Elementos que entran en viewport
- Fade in (opacity: 0 → 1)
- Slide up (translateY: 50px → 0)
- Stagger: 100ms entre elementos

#### Contador Numérico Animado
- Números que cuentan desde 0
- Usado en stats: "6.706 km", "21:00 hs"
- Duración: 2s con easing

#### Timeline Progresiva
- Línea de tiempo que se dibuja al hacer scroll
- SVG path animation
- Iconos que aparecen secuencialmente

#### Imágenes con Reveal
- Imágenes que se revelan con efecto de recorte
- clip-path animation
- Parallax en las imágenes

#### Parallax Diferencial
- Elementos se mueven a diferentes velocidades
- Fondo: 0.5x velocidad de scroll
- Medio: 0.7x
- Frente: 1x

---

### 4. Responsive Design Premium

#### Breakpoints
```css
/* Mobile First Approach */
- xs: 320px   (Mobile pequeño)
- sm: 640px   (Mobile grande)
- md: 768px   (Tablet)
- lg: 1024px  (Desktop pequeño)
- xl: 1280px  (Desktop)
- 2xl: 1536px (Desktop grande)
```

#### Mobile Menu
- Hamburger → X animation fluida
- Full screen overlay con blur
- Slide in desde el lado
- Links con animación staggered

#### Touch Gestures
- Swipe para cambiar secciones
- Pull to refresh
- Long press para acciones secundarias
- Optimizado para thumb zone

#### Imágenes Responsive
- Diferentes resoluciones por dispositivo
- Lazy loading con blur placeholder
- WebP con fallback a JPG
- Art direction (crop diferente por dispositivo)

---

### 5. Performance Optimizations

#### Lazy Loading
- Imágenes: blur placeholder → full image
- Componentes: React.lazy + Suspense
- Módulos: dynamic imports

#### Code Splitting
- Split por rutas
- Vendor chunks separados
- Critical CSS inline

#### Prefetch
- Prefetch de recursos críticos
- Preload de fonts
- DNS prefetch para APIs externas

#### Compression
- Gzip / Brotli en servidor
- Minificación de JS/CSS
- Tree shaking de imports no usados

#### Image Optimization
- Next.js Image component
- AVIF/WebP con fallback
- Responsive images (srcset)
- Dimensiones fijas para CLS

#### Lighthouse Score Objetivo
- Performance: >95
- Accessibility: >95
- Best Practices: 100
- SEO: 100

---

## 🔐 SEO y Metadata

### Metadata Base
```typescript
{
  metadataBase: new URL('https://backyardultravcp.com'),
  title: {
    default: 'Backyard Ultra Villa Carlos Paz | Primera Carrera Nocturna de Argentina',
    template: '%s | Backyard Ultra VCP'
  },
  description: 'La primera carrera de Backyard Ultra nocturna de Argentina. 6.706 km cada hora, inicio 21:00 hs en Villa Carlos Paz, Córdoba. Una experiencia única bajo las estrellas.',
  keywords: [
    'backyard ultra',
    'carrera nocturna',
    'villa carlos paz',
    'ultra running',
    'trail running argentina',
    'running cordoba',
    'carrera de resistencia'
  ],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    images: ['/og-image.jpg'],
    siteName: 'Backyard Ultra VCP'
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/twitter-image.jpg']
  },
  robots: { index: true, follow: true }
}
```

### Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  "name": "Backyard Ultra Villa Carlos Paz",
  "description": "Primera carrera Backyard Ultra nocturna de Argentina",
  "location": {
    "@type": "Place",
    "name": "Villa Carlos Paz",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Villa Carlos Paz",
      "addressRegion": "Córdoba",
      "addressCountry": "AR"
    }
  }
}
```

---

## ♿ Accesibilidad (WCAG AA)

### Requisitos Cumplidos
- ✅ Contraste mínimo 4.5:1 para textos normales
- ✅ Contraste mínimo 3:1 para textos grandes (>18px)
- ✅ Navegación completa por teclado (Tab, Shift+Tab)
- ✅ ARIA labels en elementos interactivos
- ✅ Alt text descriptivo en todas las imágenes
- ✅ Focus visible en todos los elementos interactivos
- ✅ Skip to content link (oculto hasta focus)
- ✅ Semantic HTML (header, nav, main, section, footer)
- ✅ Screen reader friendly
- ✅ Reduced motion para usuarios con preferencias

### Tests de Accesibilidad
- Lighthouse Accessibility: >95
- WAVE (Web Accessibility Evaluation Tool)
- axe DevTools
- Teclado navigation manual test

---

## 🚀 Plan de Implementación

### FASE 0 - Setup Inicial ✅ (Completada)
**Sprint 0** - 1 día

- [x] Crear repositorio en GitHub (Dreadblitz)
- [x] Crear ramas `main` y `desarrollo`
- [x] Inicializar proyecto Next.js 14 con TypeScript
- [x] Configurar Tailwind CSS con paleta personalizada
- [x] Configurar ESLint + Prettier
- [x] Configurar estructura de carpetas
- [x] Copiar logos al proyecto
- [x] Página inicial temporal "en construcción"

---

### FASE 1 - Componentes Base
**Sprint 1** - 3-4 días

**Objetivos**:
- Crear sistema de diseño reutilizable
- Layout principal (Header + Footer)
- Componentes UI base

**Tareas**:
1. **Componentes UI Base** (1 día):
   - [ ] `Button.tsx` - Botones con variantes (primary, secondary, ghost)
   - [ ] `Card.tsx` - Cards con glass effect
   - [ ] `GradientText.tsx` - Texto con gradiente animado
   - [ ] `LoadingScreen.tsx` - Loading screen con branding

2. **Layout Components** (1 día):
   - [ ] `Header.tsx` - Navigation sticky con glassmorphism
   - [ ] `Footer.tsx` - Footer completo con links y redes
   - [ ] `MobileMenu.tsx` - Menú mobile con animaciones

3. **Sistema de Animaciones** (1 día):
   - [ ] Configurar Framer Motion
   - [ ] Crear variantes de animación reutilizables
   - [ ] Setup de Intersection Observer

4. **Testing y Ajustes** (1 día):
   - [ ] Test responsive en múltiples dispositivos
   - [ ] Ajustes de accesibilidad
   - [ ] Deploy a Vercel Preview

---

### FASE 2 - Hero y Secciones Principales
**Sprint 2** - 5 días

**Objetivos**:
- Hero impactante con efectos avanzados
- Secciones educativas e informativas

**Tareas**:
1. **Hero Section** (2 días):
   - [ ] Gradiente animado de fondo
   - [ ] Efecto de estrellas con tsparticles
   - [ ] Logo con glow effect
   - [ ] Títulos con animaciones
   - [ ] CTA con efecto neón
   - [ ] Scroll indicator

2. **About Section** (1 día):
   - [ ] Cards con información del formato
   - [ ] Iconos animados
   - [ ] Reveal animations

3. **Night Experience Section** (1 día):
   - [ ] Split layout con imagen/video
   - [ ] Highlights con iconos
   - [ ] Parallax effects
   - [ ] Quote destacado

4. **Responsive y Testing** (1 día):
   - [ ] Ajustes mobile
   - [ ] Testing cross-browser
   - [ ] Optimización de performance

---

### FASE 3 - Secciones Informativas
**Sprint 3** - 4 días

**Objetivos**:
- Información de la carrera
- Secciones "Próximamente"
- FAQ y Contacto

**Tareas**:
1. **Race Info Section** (1 día):
   - [ ] Cards con detalles logísticos
   - [ ] Timeline del evento
   - [ ] Mini mapa estático

2. **Placeholder Sections** (1 día):
   - [ ] 4 cards "Próximamente"
   - [ ] Modal de notificaciones email
   - [ ] Integración con servicio de email (ej: Mailchimp)

3. **FAQ Section** (1 día):
   - [ ] Accordion interactivo
   - [ ] 8-10 preguntas frecuentes
   - [ ] Animaciones smooth

4. **Contact Section y Footer** (1 día):
   - [ ] Formulario de contacto
   - [ ] Validación de campos
   - [ ] Integración con servicio de email
   - [ ] Footer completo

---

### FASE 4 - Polish y Optimización
**Sprint 4** - 3 días

**Objetivos**:
- Micro-interacciones y efectos avanzados
- Optimización de performance
- SEO completo

**Tareas**:
1. **Efectos Avanzados** (1 día):
   - [ ] Cursor personalizado (efecto linterna)
   - [ ] Parallax multi-capa refinado
   - [ ] Morphing gradients
   - [ ] Glow effects en todos los elementos

2. **Optimización** (1 día):
   - [ ] Lazy loading de imágenes
   - [ ] Code splitting optimizado
   - [ ] Compression de assets
   - [ ] Lighthouse audit y correcciones

3. **SEO y Deploy Final** (1 día):
   - [ ] Metadata completo
   - [ ] Structured data (JSON-LD)
   - [ ] Sitemap.xml
   - [ ] Robots.txt
   - [ ] Deploy a producción (main branch)
   - [ ] Configuración de dominio custom

---

### FASE 5 - Features Futuras (Post-launch)
**Roadmap extendido** - A definir

1. **Sistema de Inscripción** (2-3 semanas):
   - [ ] Formulario de registro completo
   - [ ] Integración con pasarela de pago (MercadoPago/Stripe)
   - [ ] Confirmación por email
   - [ ] Panel de usuario para ver inscripción

2. **Mapa Interactivo del Recorrido** (1-2 semanas):
   - [ ] Integración con Mapbox o Google Maps
   - [ ] Visualización del circuito de 6.706 km
   - [ ] Elevación del recorrido
   - [ ] Puntos de interés (hidratación, largada/llegada)

3. **Resultados en Vivo** (2-3 semanas):
   - [ ] Sistema de tracking en tiempo real
   - [ ] Tabla de posiciones actualizada
   - [ ] Gráficos de progreso
   - [ ] Notificaciones push para seguidores

4. **Galería de Fotos/Videos** (1 semana):
   - [ ] Upload de media por organizadores
   - [ ] Categorización por edición/evento
   - [ ] Lightbox para visualización
   - [ ] Compartir en redes sociales

5. **Panel de Administración** (2-3 semanas):
   - [ ] Dashboard para organizadores
   - [ ] Gestión de inscripciones
   - [ ] Edición de contenido de la web
   - [ ] Envío de comunicaciones masivas

6. **Blog/Noticias** (1 semana):
   - [ ] Sistema de posts
   - [ ] Categorización
   - [ ] Comentarios (opcional)
   - [ ] RSS feed

---

## 🔄 Workflow de Desarrollo

### Ramas de Git
- **`main`**: Producción (protegida, solo merge desde desarrollo)
- **`desarrollo`**: Rama principal de desarrollo (default)

### Estructura de Commits
```
feat: Nueva funcionalidad
fix: Corrección de bugs
style: Cambios de estilos/diseño
refactor: Refactorización de código
docs: Documentación
chore: Tareas de mantenimiento
perf: Mejoras de performance
test: Tests
```

### GitHub Actions (CI/CD)
```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [desarrollo, main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    - Push a 'desarrollo' → Deploy automático a Vercel Preview
    - Push/PR a 'main' → Deploy a Vercel Production
    - Lint y Type Check en cada PR
```

### Protecciones de Rama `main`
- Require PR review
- Require status checks to pass
- No force push
- No direct commits

### Proceso de Desarrollo
1. Desarrollar features en rama `desarrollo`
2. Testear en Vercel Preview (URL automática)
3. Cuando esté listo, crear PR de `desarrollo` → `main`
4. Review y aprobar PR
5. Merge a `main`
6. Deploy automático a producción

---

## 📋 Contenido Requerido del Cliente

### Información de la Carrera
- [ ] Fecha exacta del evento
- [ ] Hora de inicio (21:00 confirmado)
- [ ] Ubicación precisa (dirección completa, coordenadas GPS)
- [ ] Descripción detallada del circuito de 6.706 km
- [ ] Puntos de hidratación/nutrición
- [ ] Requisitos de inscripción
- [ ] Rangos de precios (Early Bird, Regular, Last Minute)
- [ ] Cupos disponibles

### Textos Institucionales
- [ ] Historia del evento (si es primera edición, mencionar inspiración)
- [ ] Misión y visión de los organizadores
- [ ] Equipo organizador (nombres, roles)
- [ ] Email oficial de contacto
- [ ] Teléfono de contacto (opcional)
- [ ] Enlaces a redes sociales (Instagram, Facebook, etc.)

### Assets Visuales Adicionales
- [ ] Fotos del lugar/recorrido en alta resolución
- [ ] Video del recorrido (opcional pero recomendado)
- [ ] Logos de sponsors (cuando los tengan)
- [ ] Imágenes de ediciones anteriores (si las hay)
- [ ] Renders o mockups del evento

### FAQ Específicas
- [ ] Lista de preguntas más frecuentes que reciben
- [ ] Respuestas oficiales y detalladas
- [ ] Políticas de cancelación y reembolso
- [ ] Información sobre seguros

### Legal (Futuro)
- [ ] Términos y condiciones de inscripción
- [ ] Política de privacidad
- [ ] Deslinde de responsabilidad

---

## 🔗 Enlaces Útiles

- **Repositorio**: https://github.com/Dreadblitz/backyard-ultra-vcp
- **Vercel Dashboard**: https://vercel.com/dreadblitz/backyard-ultra-vcp (pendiente setup)
- **Documentación Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/

---

## 📝 Notas y Decisiones Técnicas

### ¿Por qué Next.js 14?
- SEO excelente con Server Components
- App Router moderno con file-based routing
- Optimización de imágenes automática
- Integración perfecta con Vercel
- TypeScript first-class support
- Turbopack para desarrollo ultrarrápido

### ¿Por qué Tailwind CSS?
- Utility-first approach = desarrollo rápido
- Personalización total de la paleta de colores
- PurgeCSS integrado = CSS mínimo en producción
- JIT compiler = clases dinámicas sin configuración
- Excelente ecosistema de plugins

### ¿Por qué Vercel?
- Hosting gratuito para proyectos personales
- CI/CD automático desde GitHub
- Preview deployments en cada push
- Edge Network global (CDN)
- Analytics incluido
- Certificados SSL automáticos

### Alternativas Consideradas (Descartadas)
- **Astro**: Descartado (preferencia por React ecosystem)
- **Nuxt.js**: Descartado (equipo más familiarizado con React)
- **Gatsby**: Descartado (Next.js es más moderno y rápido)
- **Netlify**: Descartado (Vercel es mejor para Next.js)

---

## 🎯 Métricas de Éxito

### Performance
- Lighthouse Score > 95 en todas las métricas
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Time to Interactive < 3s
- Cumulative Layout Shift < 0.1

### SEO
- Aparecer en primeros resultados para:
  * "backyard ultra villa carlos paz"
  * "carrera nocturna cordoba"
  * "backyard ultra argentina"
- Rich snippets en Google
- Featured snippet para "qué es backyard ultra"

### Engagement
- Tasa de rebote < 40%
- Tiempo promedio en sitio > 2 minutos
- Conversión en formulario de notificaciones > 5%
- Shares en redes sociales

---

## ⚠️ Riesgos y Mitigaciones

### Riesgo 1: Imágenes muy pesadas
**Mitigación**: Next.js Image optimization + WebP/AVIF

### Riesgo 2: Animaciones afectan performance
**Mitigación**:
- Usar will-change con precaución
- Prefers-reduced-motion
- Lazy load de particles

### Riesgo 3: Contenido incompleto al launch
**Mitigación**:
- Secciones "Próximamente" con notificaciones
- Launch iterativo (MVP primero)

### Riesgo 4: No hay dominio custom al inicio
**Mitigación**:
- Usar dominio de Vercel temporalmente
- Agregar dominio custom cuando esté disponible

---

## 📞 Próximos Pasos Inmediatos

1. **Configurar Vercel**:
   - Conectar repositorio con Vercel
   - Configurar environment variables (si aplica)
   - Verificar preview deployments

2. **Definir Contenido**:
   - Reunir información requerida del cliente
   - Crear documento de contenido separado

3. **Sprint Planning**:
   - Priorizar features para MVP
   - Definir timeline realista
   - Asignar tareas

4. **Comenzar Desarrollo**:
   - FASE 1: Componentes Base
   - Setup de Vercel
   - Primeros componentes UI

---

**Documento generado**: 13 de Noviembre de 2025
**Última actualización**: 13 de Noviembre de 2025
**Versión**: 1.0
**Autor**: Claude AI + Ale (Dreadblitz)

---

## 🏷️ Tags

`nextjs` `react` `typescript` `tailwindcss` `vercel` `landing-page` `synthwave` `glassmorphism` `performance` `seo` `accessibility` `backyard-ultra` `running` `argentina`
