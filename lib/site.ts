export const whatsappNumber = "351900000000";

export function whatsappHref(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const instagramUrl = "https://www.instagram.com/esteticaby_simone/";
export const instagramHandle = "@esteticaby_simone";

export const googleReviewsUrl =
  "https://www.google.com/maps/search/?api=1&query=Simone+Keisman+Saúde+Estética+Vila+Nova+de+Gaia";

export const brand = {
  name: "Simone Keisman",
  title: "Simone Keisman | Saúde Estética",
} as const;

export const hero = {
  title:
    "Há 10 anos a cuidar do seu bem-estar e da sua autoestima em Vila Nova de Gaia e no Porto.",
  subtitle:
    "Tratamentos personalizados num ambiente acolhedor, com atenção às necessidades de cada mulher.",
  notice: "Atendimento exclusivo ao público feminino.",
  ctaLabel: "Agendar pelo WhatsApp",
  ctaMessage: "Olá, Simone. Gostaria de agendar uma avaliação.",
} as const;

export const location = "Vila Nova de Gaia, Portugal";

export const metadataDescription = `${hero.title} ${hero.subtitle}`;

export const planCtaLabel = "Saber mais no WhatsApp";

export const testimonialsHeading = "O que dizem as nossas clientes";

export type Testimonial = {
  id: string;
  name: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "maria",
    name: "Maria S.",
    quote:
      "Cheguei com dores nas costas e saí com o corpo leve. O alívio foi imediato e o ambiente transmite uma calma rara.",
  },
  {
    id: "ana",
    name: "Ana P.",
    quote:
      "Depois de semanas de tensão, a sessão foi o descanso que eu precisava. Voltei a dormir melhor logo na primeira semana.",
  },
  {
    id: "carla",
    name: "Carla M.",
    quote:
      "Atendimento cuidadoso e um toque que realmente relaxa. Senti a dor a diminuir sem pressa e sem desconforto.",
  },
];

export type Plan = {
  id: string;
  name: string;
  price: string;
  pricePerSession?: string;
  description?: string;
  originalPrice?: string;
  badge?: string;
  savings?: string;
  featured?: boolean;
  validity?: string;
  extraPerk?: string;
  whatsappMessage: string;
};

export const plans: Plan[] = [
  {
    id: "sessao-unica",
    name: "Sessão Única",
    price: "25 €",
    pricePerSession: "25€ / sessão",
    originalPrice: "28 €",
    savings: "Poupa 3 €",
    badge: "Black November",
    featured: false,
    whatsappMessage:
      "Olá! Tenho interesse na Sessão Única da Black November por 25€.",
  },
  {
    id: "pack-4-sessoes",
    name: "Pack 4 Sessões",
    price: "65 €",
    pricePerSession: "16,25€ / sessão",
    originalPrice: "80 €",
    savings: "Poupa 15 €",
    badge: "Black November",
    featured: false,
    whatsappMessage:
      "Olá! Tenho interesse no Pack 4 Sessões da Black November por 65€.",
  },
  {
    id: "pack-6-sessoes",
    name: "Pack 6 Sessões",
    price: "85 €",
    pricePerSession: "14,17€ / sessão",
    originalPrice: "110 €",
    savings: "Poupa 25 €",
    badge: "Melhor relação qualidade-preço",
    featured: true,
    extraPerk: "Por apenas mais 20€, tenha mais 2 sessões.",
    whatsappMessage:
      "Olá! Tenho interesse no Pack 6 Sessões da Black November por 85€.",
  },
];
