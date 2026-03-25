export interface PackagingInfo {
  weightKg: number;
  boxesPerPallet?: number;
  boxesPerContainer?: number;
  palletsPerContainer?: number;
  containerType?: string;
  notes?: string;
}

export interface PerishableProduct {
  id: string;
  name: string;
  namePlural?: string;
  origin: string[];
  season: string;
  packaging: PackagingInfo[];
  varieties?: string[];
  description?: string;
  emoji: string;
}

export interface ChipProduct {
  id: string;
  base: string;
  flavors: string[];
  sizes: string[];
  emoji: string;
}

export interface PeruProduct {
  id: string;
  name: string;
  varieties?: string[];
  description?: string;
  emoji: string;
}

// ─── PERECIBLES ───────────────────────────────────────────────────────────────

export const perishables: PerishableProduct[] = [
  {
    id: 'platano',
    name: 'Plátano',
    origin: ['Ecuador'],
    season: 'Todo el año',
    emoji: '🍌',
    packaging: [
      { weightKg: 50, notes: 'Caja estándar exportación' },
      { weightKg: 18, notes: 'Caja mercado especial' },
    ],
    description: 'Plátano ecuatoriano de primera calidad, disponible todo el año para exportación.',
  },
  {
    id: 'banana',
    name: 'Banana',
    origin: ['Ecuador'],
    season: 'Todo el año',
    emoji: '🍌',
    packaging: [
      {
        weightKg: 27,
        boxesPerPallet: 54,
        boxesPerContainer: 1080,
        palletsPerContainer: 20,
      },
    ],
    description: 'Banana fresca de origen ecuatoriano, una de las principales exportaciones del país.',
  },
  {
    id: 'pina',
    name: 'Piña',
    origin: ['Ecuador'],
    season: 'Todo el año',
    emoji: '🍍',
    packaging: [
      {
        weightKg: 27.2,
        boxesPerPallet: 54,
        boxesPerContainer: 1080,
        palletsPerContainer: 20,
      },
    ],
    description: 'Piña tropical dulce y jugosa, cultivada en las regiones más fértiles del Ecuador.',
  },
  {
    id: 'malanga',
    name: 'Malanga',
    origin: ['Ecuador'],
    season: 'Todo el año',
    emoji: '🌿',
    packaging: [
      {
        weightKg: 18.8,
        boxesPerPallet: 77,
        boxesPerContainer: 1540,
        palletsPerContainer: 20,
      },
    ],
    description: 'Raíz tropical versátil con alto valor nutritivo, cultivada en suelos ecuatorianos.',
  },
  {
    id: 'jengibre',
    name: 'Jengibre',
    origin: ['Ecuador'],
    season: 'Todo el año',
    emoji: '🫚',
    packaging: [
      { weightKg: 18, notes: 'Caja estándar' },
    ],
    description: 'Jengibre fresco de primer calidad para mercados gourmet e industriales.',
  },
  {
    id: 'edo-papa-china',
    name: 'EDO / Papa China',
    origin: ['Ecuador'],
    season: 'Todo el año',
    emoji: '🥔',
    packaging: [
      {
        weightKg: 18.18,
        boxesPerPallet: 77,
        boxesPerContainer: 1540,
        palletsPerContainer: 20,
        containerType: '40P',
      },
    ],
    description: 'Tubérculo tropical con sabor suave, muy apreciado en mercados globales.',
  },
  {
    id: 'aguacate',
    name: 'Aguacate',
    origin: ['Ecuador'],
    season: 'Todo el año',
    emoji: '🥑',
    varieties: ['Hass', 'Florida'],
    packaging: [
      { weightKg: 4, notes: 'Presentación premium' },
      { weightKg: 10, notes: 'Presentación estándar' },
    ],
    description: 'Aguacate ecuatoriano de distintas variedades para los mercados más exigentes.',
  },
  {
    id: 'higo',
    name: 'Higo',
    origin: ['Ecuador'],
    season: 'Estacional',
    emoji: '🫐',
    packaging: [
      { weightKg: 4, notes: 'Caja refrigerada' },
    ],
    description: 'Higo fresco de alta calidad para mercados gourmet.',
  },
  {
    id: 'papaya',
    name: 'Papaya',
    origin: ['Ecuador'],
    season: 'Todo el año',
    emoji: '🍈',
    packaging: [
      { weightKg: 10, notes: 'Caja estándar' },
    ],
    description: 'Papaya tropical ecuatoriana, dulce y aromática para exportación.',
  },
  {
    id: 'cacao',
    name: 'Cacao',
    origin: ['Ecuador'],
    season: 'Todo el año',
    emoji: '🍫',
    packaging: [
      { weightKg: 25, notes: 'Sacos de exportación' },
    ],
    description: 'Cacao fino de aroma, reconocido mundialmente por su excepcional calidad organoléptica.',
  },
  {
    id: 'tomate-arbol',
    name: 'Tomate de Árbol',
    origin: ['Ecuador'],
    season: 'Todo el año',
    emoji: '🍅',
    packaging: [
      { weightKg: 10, notes: 'Caja estándar' },
    ],
    description: 'Fruta andina única, ideal para jugos, salsas y el mercado gourmet internacional.',
  },
  {
    id: 'mango',
    name: 'Mango',
    origin: ['Ecuador'],
    season: 'Estacional',
    emoji: '🥭',
    packaging: [
      { weightKg: 8, notes: 'Caja estándar' },
    ],
    description: 'Mango tropical ecuatoriano de pulpa firme y sabor excepcional.',
  },
  {
    id: 'melon',
    name: 'Melón',
    origin: ['Ecuador'],
    season: 'Estacional',
    emoji: '🍈',
    packaging: [
      { weightKg: 20, notes: 'Caja estándar' },
    ],
    description: 'Melón dulce y jugoso cultivado en las costas ecuatorianas.',
  },
  {
    id: 'cafe',
    name: 'Café',
    origin: ['Ecuador'],
    season: 'Estacional',
    emoji: '☕',
    packaging: [
      { weightKg: 69, notes: 'Sacos de exportación' },
    ],
    description: 'Café de especialidad ecuatoriano, reconocido por su perfil de taza único.',
  },
  {
    id: 'arandanos',
    name: 'Arándanos',
    origin: ['Ecuador'],
    season: 'Estacional',
    emoji: '🫐',
    packaging: [
      { weightKg: 0.125, notes: 'Clamshell 125g' },
      { weightKg: 0.250, notes: 'Clamshell 250g' },
      { notes: 'Granel – según especificación del cliente' } as any,
    ],
    description: 'Arándanos frescos de alta calidad para mercados premium y supermercados.',
  },
  {
    id: 'palta-peru',
    name: 'Palta / Aguacate (Perú)',
    origin: ['Perú'],
    season: 'Estacional',
    emoji: '🥑',
    packaging: [],
    description: 'Paltas de primera calidad cultivadas en los valles interandinos del Perú.',
  },
  {
    id: 'arandano-peru',
    name: 'Arándanos (Perú)',
    origin: ['Perú'],
    season: 'Estacional',
    emoji: '🫐',
    packaging: [],
    description: 'Arándanos peruanos para mercados premium.',
  },
  {
    id: 'mandarina',
    name: 'Mandarina',
    origin: ['Perú'],
    season: 'Estacional',
    emoji: '🍊',
    packaging: [],
    description: 'Mandarina Murcott de alta dulzura y bajo contenido de semillas.',
  },
  {
    id: 'cacao-peru',
    name: 'Cacao (Perú)',
    origin: ['Perú'],
    season: 'Todo el año',
    emoji: '🍫',
    packaging: [],
    description: 'Cacao peruano de alta calidad.',
  },
  {
    id: 'mango-peru',
    name: 'Mango (Perú)',
    origin: ['Perú'],
    season: 'Estacional',
    emoji: '🥭',
    packaging: [],
    description: 'Mango peruano para mercados internacionales.',
  },
  {
    id: 'cafe-peru',
    name: 'Café (Perú)',
    origin: ['Perú'],
    season: 'Todo el año',
    emoji: '☕',
    packaging: [],
    description: 'Café de especialidad peruano.',
  },
  {
    id: 'esparragos',
    name: 'Espárragos',
    origin: ['Perú'],
    season: 'Todo el año',
    emoji: '🥦',
    packaging: [],
    description: 'Espárragos verdes y blancos peruanos.',
  },
  {
    id: 'limon-peru',
    name: 'Limón (Perú)',
    origin: ['Perú'],
    season: 'Todo el año',
    emoji: '🍋',
    packaging: [],
    description: 'Limón peruano aromático.',
  },
  {
    id: 'ajos',
    name: 'Ajos',
    origin: ['Perú'],
    season: 'Todo el año',
    emoji: '🧄',
    packaging: [],
    description: 'Ajos de alta concentración aromática de Perú.',
  },
  {
    id: 'granadina',
    name: 'Granadina',
    origin: ['Perú'],
    season: 'Todo el año',
    emoji: '🍷',
    packaging: [],
    description: 'Granadina / maracuyá peruano.',
  },
  {
    id: 'higo-peru',
    name: 'Higo (Perú)',
    origin: ['Perú'],
    season: 'Estacional',
    emoji: '🫐',
    packaging: [],
    description: 'Higo fresco de origen peruano.',
  },
  {
    id: 'camote-peru',
    name: 'Camote Fresco',
    origin: ['Perú'],
    season: 'Todo el año',
    emoji: '🍠',
    packaging: [],
    description: 'Camote peruano dulce para consumo fresco.',
  },
  {
    id: 'uvas',
    name: 'Uvas',
    origin: ['Perú'],
    season: 'Estacional',
    emoji: '🍇',
    packaging: [],
    description: 'Uvas de mesa peruanas.',
  },
];

// ─── CHIPS / SNACKS ───────────────────────────────────────────────────────────

export interface ChipSku {
  id: string;
  base: string;
  flavor?: string;
  sizeG: number;
  emoji: string;
}

const platanoFlavors = ['Natural', 'Limón', 'Picante', 'Maduritos', 'Tocino', 'Ajo'];

function makePlatanoSkus(size: number): ChipSku[] {
  return platanoFlavors.map((flavor) => ({
    id: `platano-${flavor.toLowerCase()}-${size}g`,
    base: 'Plátano',
    flavor,
    sizeG: size,
    emoji: '🍌',
  }));
}

export const chipSkus: ChipSku[] = [
  // 45g
  { id: 'malanga-45g', base: 'Malangas', sizeG: 45, emoji: '🌿' },
  { id: 'camote-45g', base: 'Camote', sizeG: 45, emoji: '🍠' },
  { id: 'yuca-45g', base: 'Yuca Frita', sizeG: 45, emoji: '🌾' },
  ...makePlatanoSkus(45),
  // 170g
  { id: 'malanga-170g', base: 'Malangas', sizeG: 170, emoji: '🌿' },
  { id: 'yuca-170g', base: 'Yuca Frita', sizeG: 170, emoji: '🌾' },
  ...makePlatanoSkus(170),
  // 350g
  { id: 'malanga-350g', base: 'Malangas', sizeG: 350, emoji: '🌿' },
  { id: 'camote-350g', base: 'Camote', sizeG: 350, emoji: '🍠' },
  { id: 'yuca-350g', base: 'Yuca Frita', sizeG: 350, emoji: '🌾' },
  ...makePlatanoSkus(350),
  // 450g
  ...makePlatanoSkus(450),
  // 600g
  ...makePlatanoSkus(600),
  // 800g
  ...makePlatanoSkus(800),
];

export const chipSizes = [45, 170, 350, 450, 600, 800];

// ─── EXTENSIÓN PERÚ / AGROPROA ────────────────────────────────────────────────

export const peruProducts: PeruProduct[] = [
  {
    id: 'palta',
    name: 'Palta / Aguacate',
    varieties: ['Hass', 'Fuerte'],
    description: 'Paltas de primera calidad cultivadas en los valles interandinos del Perú.',
    emoji: '🥑',
  },
  {
    id: 'arandano-peru',
    name: 'Arándanos',
    description: 'Arándanos peruanos de distintas calidades y presentaciones para mercados premium.',
    emoji: '🫐',
  },
  {
    id: 'mandarina',
    name: 'Mandarina',
    varieties: ['Murcott'],
    description: 'Mandarina Murcott de alta dulzura y bajo contenido de semillas.',
    emoji: '🍊',
  },
  {
    id: 'cacao-peru',
    name: 'Cacao',
    description: 'Cacao peruano de alta calidad para industria chocolatera y exportación.',
    emoji: '🍫',
  },
  {
    id: 'mango-peru',
    name: 'Mango',
    description: 'Mango peruano de variedades premium para mercados internacionales.',
    emoji: '🥭',
  },
  {
    id: 'cafe-peru',
    name: 'Café',
    description: 'Café de especialidad peruano, reconocido en los mercados de especialidad globales.',
    emoji: '☕',
  },
  {
    id: 'esparragos',
    name: 'Espárragos',
    description: 'Espárragos verdes y blancos de los valles costeros del Perú para mercados europeos y americanos.',
    emoji: '🥦',
  },
  {
    id: 'limon-peru',
    name: 'Limón',
    description: 'Limón peruano aromático para mercados de consumo fresco e industria.',
    emoji: '🍋',
  },
  {
    id: 'ajos',
    name: 'Ajos',
    description: 'Ajos de alta concentración aromática cultivados en las condiciones ideales del Perú.',
    emoji: '🧄',
  },
  {
    id: 'granadina',
    name: 'Granadina',
    description: 'Granadina / maracuyá peruano para mercados de jugos y especialidad gourmet.',
    emoji: '🍷',
  },
  {
    id: 'higo-peru',
    name: 'Higo',
    description: 'Higo fresco de origen peruano para mercados de especialidad.',
    emoji: '🫐',
  },
  {
    id: 'camote-peru',
    name: 'Camote',
    description: 'Camote peruano dulce de alta calidad para consumo fresco y procesamiento.',
    emoji: '🍠',
  },
  {
    id: 'uvas',
    name: 'Uvas',
    description: 'Uvas de mesa peruanas para mercados de Europa, Asia y América del Norte.',
    emoji: '🍇',
  },
];

// ─── BENEFICIOS ───────────────────────────────────────────────────────────────

export const productBenefits = [
  {
    icon: '✅',
    title: '¿Por qué nuestros productos?',
    description: 'Directamente del campo al contenedor: selección rigurosa, trazabilidad completa y cadena de frío garantizada para preservar la frescura y calidad de cada envío.',
  },
  {
    icon: '🧪',
    title: 'Información Nutricional',
    description: 'Nuestras frutas y vegetales tropicales son alimentos naturales ricos en vitaminas, minerales y antioxidantes. Perfectos para una dieta equilibrada y un estilo de vida saludable.',
  },
  {
    icon: '❤️',
    title: 'Mejore su Bienestar',
    description: 'Incorporar frutas tropicales y vegetales frescos en su dieta diaria contribuye al bienestar general. Nuestros productos son naturales, frescos y sin conservantes artificiales.',
  },
];
