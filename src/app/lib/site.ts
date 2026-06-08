// Centralized DREVIA site constants — single source of truth for contact + CTAs.

export const PHONE = "+52 222 549 7631";
export const EMAIL = "dreviasolutions@gmail.com";
export const LOCATION = "Puebla, México";

const WA_BASE = "https://wa.me/522225497631";

/** Build a WhatsApp deep link with a prefilled, URL-encoded message. */
export const wa = (message: string) =>
  `${WA_BASE}?text=${encodeURIComponent(message)}`;

export const WA = {
  cotizar: wa("Hola, me interesa cotizar un proyecto con DREVIA."),
  general: wa("Hola, me gustaría más información sobre los servicios de DREVIA."),
  llamada: wa("Hola, me gustaría agendar una llamada gratuita con el equipo de DREVIA."),
  plan: (plan: string) => wa(`Hola, me interesa el plan ${plan} de DREVIA.`),
  pregunta: wa("Hola, tengo una pregunta sobre los servicios de DREVIA."),
};

export const SOCIAL = {
  instagram: "https://www.instagram.com/dreviasolutions/",
  tiktok: "https://www.tiktok.com/@dreviasolutionsweb?lang=es",
  facebook: "https://www.facebook.com/profile.php?id=61586295823455",
};

export const STATS = [
  { value: "+50", label: "proyectos entregados" },
  { value: "95%", label: "satisfacción de clientes" },
  { value: "+3", label: "años de experiencia" },
];

export const CITIES = ["Puebla", "CDMX", "Guadalajara"];
