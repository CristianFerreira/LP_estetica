export const whatsappNumber = "351929248425";

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
  ctaMessage: "Olá! Gostaria de agendar uma avaliação.",
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
    id: "beatriz-santos",
    name: "Beatriz Santos",
    quote:
      "Adoro e não troco as minhas sessões semanais! A Simone é uma pessoa super querida, atenciosa e dedicada, que nos faz sentir sempre bem. Já faz parte da minha rotina e não podia estar mais grata por todo o carinho. ❤️",
  },
  {
    id: "beatriz-machado",
    name: "Beatriz Machado",
    quote:
      "A Simone tem umas mãos de fada, saio de cada sessão renovada, relaxada e com o corpo muito mais leve. Aconselho 100%, as mãos da Simone salvam os meus dias 🩷",
  },
  {
    id: "marcela",
    name: "Marcela",
    quote:
      "Simone!!! Eu não vivo mais sem a sua drenagem.. me sinto mais desinchada e mais disposta! Obrigada pelo carinho de sempre. ❤️🥰",
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
      "Olá! Gostaria de marcar uma Sessão Única de massoterapia.",
  },
  {
    id: "pack-4-sessoes",
    name: "Pack 4 Sessões",
    price: "69 €",
    pricePerSession: "17,25€ / sessão",
    originalPrice: "80 €",
    savings: "Poupa 11 €",
    badge: "Black November",
    featured: false,
    whatsappMessage:
      "Olá! Gostaria de agendar e saber mais sobre o Pack de Sessões.",
  },
  {
    id: "pack-6-sessoes",
    name: "Pack 6 Sessões",
    price: "89 €",
    pricePerSession: "14,83€ / sessão",
    originalPrice: "110 €",
    savings: "Poupa 21 €",
    badge: "Melhor relação qualidade-preço",
    featured: true,
    extraPerk: "Apenas +20€ em relação ao Pack de 4 sessões.",
    whatsappMessage:
      "Olá! Gostaria de agendar e saber mais sobre o Pack de Sessões.",
  },
];
