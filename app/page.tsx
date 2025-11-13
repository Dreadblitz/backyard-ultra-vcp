export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-night">
      {/* Hero Section Temporal */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4">
        {/* Background Stars Effect (placeholder) */}
        <div className="absolute inset-0 overflow-hidden opacity-50">
          <div className="absolute h-1 w-1 bg-white rounded-full animate-float" style={{ top: '10%', left: '20%' }}></div>
          <div className="absolute h-1 w-1 bg-white rounded-full animate-float" style={{ top: '20%', left: '80%', animationDelay: '1s' }}></div>
          <div className="absolute h-1 w-1 bg-white rounded-full animate-float" style={{ top: '60%', left: '30%', animationDelay: '2s' }}></div>
          <div className="absolute h-1 w-1 bg-white rounded-full animate-float" style={{ top: '80%', left: '70%', animationDelay: '1.5s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center animate-fade-in">
          <h1 className="mb-4 text-6xl font-bold md:text-8xl">
            <span className="bg-gradient-to-r from-brand-cyan-neon to-brand-violet-medium bg-clip-text text-transparent glow-neon">
              BACKYARD ULTRA
            </span>
          </h1>
          <h2 className="mb-6 text-3xl font-semibold text-brand-orange-ultra md:text-5xl">
            Villa Carlos Paz
          </h2>
          <p className="mb-8 text-xl text-gray-300 md:text-2xl">
            Primera Carrera Nocturna de Argentina
          </p>

          {/* CTA Placeholder */}
          <div className="glass inline-block rounded-lg px-8 py-4">
            <p className="text-lg font-medium text-brand-cyan-neon">
              🚧 Sitio web en construcción
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Próximamente: Inscripciones, recorrido, info y más
            </p>
          </div>

          {/* Info Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="glass rounded-lg p-6 transition-all hover:scale-105 hover:border-brand-cyan-neon">
              <p className="text-4xl font-bold text-brand-cyan-neon">6.706</p>
              <p className="mt-2 text-sm text-gray-300">km cada hora</p>
            </div>
            <div className="glass rounded-lg p-6 transition-all hover:scale-105 hover:border-brand-orange-ultra">
              <p className="text-4xl font-bold text-brand-orange-ultra">21:00</p>
              <p className="mt-2 text-sm text-gray-300">Hora de inicio</p>
            </div>
            <div className="glass rounded-lg p-6 transition-all hover:scale-105 hover:border-brand-violet-medium">
              <p className="text-4xl font-bold text-brand-violet-medium">∞</p>
              <p className="mt-2 text-sm text-gray-300">Sin límite de vueltas</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
