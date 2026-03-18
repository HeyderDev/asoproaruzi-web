export interface ContactOffice {
  company: string;
  country: string;
  address: string;
  phone: string;
  whatsapp: string;
  whatsappMessage: string;
  email: string;
  representative?: string;
  hours?: string;
  flagEmoji: string;
}

export const headquarters: ContactOffice = {
  company: 'Asoproaruzi',
  country: 'Ecuador',
  address: 'Ecuador — dirección a confirmar',
  phone: '+593 XXX XXX XXXX',
  whatsapp: '+593XXXXXXXXX',
  whatsappMessage: 'Hola, me gustaría obtener más información sobre sus productos de exportación.',
  email: 'info@asoproaruzi.com',
  representative: 'Andrea Mendoza',
  hours: 'Lunes a Viernes: 8:00 AM – 6:00 PM (ECT)',
  flagEmoji: '🇪🇨',
};

export const extensionPeru: ContactOffice = {
  company: 'Agroproa – Extensión Perú',
  country: 'Perú',
  address: 'Perú — dirección a confirmar',
  phone: '+51 XXX XXX XXXX',
  whatsapp: '+51XXXXXXXXX',
  whatsappMessage: 'Hola, me interesa información sobre los productos Agroproa de Perú.',
  email: 'peru@asoproaruzi.com',
  hours: 'Lunes a Viernes: 8:00 AM – 6:00 PM (PET)',
  flagEmoji: '🇵🇪',
};

export const acmaContact: ContactOffice = {
  company: 'ACMA LLC',
  country: 'Estados Unidos',
  address: 'United States — dirección a confirmar',
  phone: '+1 XXX XXX XXXX',
  whatsapp: '+1XXXXXXXXXX',
  whatsappMessage: 'Hello, I would like more information about your export products.',
  email: 'usa@asoproaruzi.com',
  hours: 'Monday to Friday: 9:00 AM – 5:00 PM (EST)',
  flagEmoji: '🇺🇸',
};

export const socialLinks = {
  facebook: 'https://facebook.com/asoproaruzi',
  instagram: 'https://instagram.com/asoproaruzi',
  linkedin: 'https://linkedin.com/company/asoproaruzi',
  whatsappGeneral: '+593XXXXXXXXX',
};
