// Brand Colors
export const COLORS = {
  navyDark: '#1B1B3A',
  violetDeep: '#6B3D99',
  violetMedium: '#8B4DAF',
  magenta: '#E91E8C',
  pinkBright: '#FF006E',
  orangeVibrant: '#FF6B4D',
  orangeUltra: '#FF8B3D',
  coralSoft: '#FFB27D',
  cyanNeon: '#00D9FF',
  white: '#FFFFFF',
  blackBg: '#0A0A1F',
} as const;

// Race Information
export const RACE_INFO = {
  name: 'Backyard Ultra Villa Carlos Paz',
  shortName: 'Backyard Ultra VCP',
  location: 'Villa Carlos Paz, Córdoba',
  distance: '6.706',
  startTime: '21:00',
  description:
    'La primera carrera de Backyard Ultra con inicio nocturno de Argentina. Una experiencia única bajo las estrellas.',
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/backyardultravcp',
  facebook: 'https://facebook.com/backyardultravcp',
  youtube: 'https://youtube.com/@backyardultravcp',
  email: 'backyardultravcp@gmail.com',
} as const;

// Navigation
export const NAV_ITEMS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'La Carrera', href: '#about' },
  { label: 'Experiencia Nocturna', href: '#night' },
  { label: 'Información', href: '#info' },
  { label: 'Contacto', href: '#contact' },
] as const;
