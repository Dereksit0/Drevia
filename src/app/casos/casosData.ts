export type Caso = {
  slug: string;
  logo: string;
  company: string;
  type: string;
  industry: string;
  description: string;
  problema: string;
  solucion: string;
  results: { metric: string; label: string }[];
  tags: string[];
  url?: string;
};

export const projects: Caso[] = [
  {
    slug: "centraldent",
    logo: "/imgs/centraldent.png",
    company: "CentralDent",
    type: "Página Web Corporativa",
    industry: "Salud & Odontología",
    description:
      "Diseñamos y desarrollamos el sitio web institucional de CentralDent, una clínica dental de referencia en la región. El nuevo sitio integra agendamiento de citas en línea, galería de tratamientos y testimonios de pacientes, generando un flujo constante de nuevos prospectos.",
    problema:
      "CentralDent operaba sin presencia digital real. Sus pacientes nuevos llegaban solo por recomendación directa y no tenían forma de agendar citas en línea, lo que generaba pérdida de prospectos fuera de horario de atención. Además, su imagen no transmitía la calidad y profesionalismo de sus servicios.",
    solucion:
      "Desarrollamos un sitio web institucional de alto impacto con diseño médico premium, sistema de agendamiento de citas integrado, galería de tratamientos con antes/después, sección de testimonios verificados y optimización SEO local para búsquedas en Puebla. El resultado fue un flujo constante de nuevos pacientes 24/7.",
    results: [
      { metric: "+180%", label: "Consultas online" },
      { metric: "3x",    label: "Más visitas orgánicas" },
      { metric: "4.9★",  label: "Satisfacción del cliente" },
    ],
    tags: ["Next.js", "SEO", "Reservas online"],
    url: "https://centraldentmx.com/",
  },
  {
    slug: "didacticosiq",
    logo: "/imgs/didacticosiq.png",
    company: "Didácticos IQ",
    type: "E-commerce",
    industry: "Educación & Juguetería",
    description:
      "Desarrollamos la tienda en línea de Didácticos IQ, especializada en materiales educativos y juguetes inteligentes. Implementamos catálogo dinámico, carrito de compras, múltiples métodos de pago y gestión de inventario desde un CMS intuitivo.",
    problema:
      "Didácticos IQ vendía únicamente a través de redes sociales y grupos de WhatsApp, lo que dificultaba la gestión de pedidos y limitaba su alcance. No tenían forma de mostrar su catálogo completo, los clientes preguntaban precios individualmente y el proceso de compra era manual y tardado.",
    solucion:
      "Construimos una tienda en línea completa con catálogo de más de 200 productos organizados por categoría y edad, carrito de compras, checkout en 3 pasos, integración con Mercado Pago y OXXO Pay, sistema de cupones y un panel de administración donde el equipo gestiona pedidos, inventario y clientes sin depender de nosotros.",
    results: [
      { metric: "+320%", label: "Ventas online" },
      { metric: "68%",   label: "Tasa de retención" },
      { metric: "1.8s",  label: "Velocidad de carga" },
    ],
    tags: ["E-commerce", "CMS", "Pasarela de pago"],
    url: "https://didacticosiq.com/",
  },
  {
    slug: "kraken",
    logo: "/imgs/kraken.png",
    company: "Kraken",
    type: "Landing Page de Alto Impacto",
    industry: "Marketing & Entretenimiento",
    description:
      "Creamos una landing page de alto rendimiento para la campaña de lanzamiento de Kraken. El diseño bold, animaciones estratégicas y copywriting orientado a conversión posicionaron la marca desde el primer día con resultados sobresalientes.",
    problema:
      "Kraken necesitaba lanzar su nueva propuesta al mercado en tiempo récord y con presupuesto de campaña significativo en Meta Ads y Google Ads. El problema era que no contaban con una página de destino de calidad — sus visitantes llegaban a una página genérica que no convertía, desperdiciando el presupuesto publicitario.",
    solucion:
      "Diseñamos y desarrollamos una landing page de alto impacto en 10 días, con copywriting persuasivo, jerarquía visual clara, animaciones estratégicas y múltiples CTAs. Integramos Meta Pixel, Google Tag Manager y el CRM del cliente para captura de leads automatizada. PageSpeed de 98 para que ningún centavo de publicidad se desperdiciara en carga lenta.",
    results: [
      { metric: "4.8%",  label: "Tasa de conversión" },
      { metric: "+12k",  label: "Leads en 30 días" },
      { metric: "98",    label: "PageSpeed Score" },
    ],
    tags: ["Landing Page", "Framer Motion", "Conversión"],
    url: "https://krakenfitnesspuebla.com/",
  },
  {
    slug: "musclevolution",
    logo: "/imgs/musclevolution.png",
    company: "Muscle Evolution",
    type: "E-commerce + Landing Page",
    industry: "Fitness & Nutrición Deportiva",
    description:
      "Construimos el ecosistema digital completo de Muscle Evolution: tienda de suplementos deportivos, sistema de membresías, blog de nutrición y landing pages para campañas de temporada. Todo integrado con logística y envíos.",
    problema:
      "Muscle Evolution tenía miles de seguidores en redes sociales pero no tenía una tienda en línea propia. Dependían de marketplaces con altas comisiones y no podían ofrecer su programa de membresías de forma digital. Cada temporada de ofertas era un caos operativo.",
    solucion:
      "Desarrollamos un ecosistema digital completo: tienda de suplementos con más de 100 productos, sistema de membresías con beneficios exclusivos, blog de nutrición con artículos SEO optimizados y landing pages de alta conversión para temporadas especiales. Integración con Fedex y DHL para cálculo de envíos en tiempo real. Resultado: independencia total de marketplaces.",
    results: [
      { metric: "+240%", label: "Pedidos mensuales" },
      { metric: "5.2%",  label: "Conversión e-commerce" },
      { metric: "-40%",  label: "Abandono de carrito" },
    ],
    tags: ["E-commerce", "Membresías", "Blog"],
    url: "https://musclevolution.com/",
  },
  {
    slug: "plata925",
    logo: "/imgs/plata925logo.png",
    company: "Plata 925",
    type: "E-commerce de Joyería",
    industry: "Joyería & Moda",
    description:
      "Desarrollamos la tienda en línea de Plata 925, marca de joyería artesanal en plata esterlina. El sitio refleja la elegancia de sus piezas con fotografía de producto premium, experiencia de compra fluida y gestión de catálogo por colecciones.",
    problema:
      "Plata 925 vendía exclusivamente en ferias artesanales y por DM en Instagram. La dueña pasaba horas respondiendo preguntas de precio y disponibilidad, el proceso de venta era completamente manual y no tenía forma de llegar a clientes fuera de su ciudad.",
    solucion:
      "Creamos una tienda de joyería de lujo asequible con diseño editorial, galería de producto con zoom de alta resolución, colecciones organizadas por material y ocasión, filtros avanzados, wishlist y checkout express. Integramos Mercado Pago con todas las opciones de pago, incluyendo meses sin intereses. La tienda posiciona orgánicamente para búsquedas de joyería de plata en México.",
    results: [
      { metric: "+450%", label: "Ventas digitales" },
      { metric: "82%",   label: "Clientes recurrentes" },
      { metric: "+60k",  label: "Visitas al mes" },
    ],
    tags: ["E-commerce", "Fotografía de producto", "Colecciones"],
    url: "https://compraplata925.com/es",
  },
  {
    slug: "sadmind",
    logo: "/imgs/sadmind.png",
    company: "Sadmind",
    type: "Sistema Web a Medida",
    industry: "Tecnología & Software",
    description:
      "Diseñamos e implementamos un sistema web de gestión interno para Sadmind, optimizando sus procesos operativos, control de proyectos y comunicación de equipos. Solución escalable, con roles y permisos, reportería y panel de analítica en tiempo real.",
    problema:
      "Sadmind gestionaba todos sus proyectos con hojas de Excel, correos y aplicaciones desconectadas entre sí. El equipo perdía horas buscando información, los reportes tardaban días en generarse y no había visibilidad real del avance de cada proyecto. La comunicación interna era caótica.",
    solucion:
      "Desarrollamos un sistema web de gestión integral a medida: panel de proyectos con estados y asignación de tareas, módulo de clientes y contratos, sistema de comunicación interna, generación automática de reportes en PDF, dashboard con métricas en tiempo real y control de acceso por roles (dirección, líderes, desarrolladores). Integración con Slack y Google Workspace.",
    results: [
      { metric: "60%",   label: "Reducción en tiempo operativo" },
      { metric: "100%",  label: "Digitalización de procesos" },
      { metric: "0",     label: "Dependencia de papel" },
    ],
    tags: ["Sistema Web", "Dashboard", "API REST"],
  },
];

export function getCaso(slug: string): Caso | undefined {
  return projects.find((p) => p.slug === slug);
}
