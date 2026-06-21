export type CasoServicio = {
  logo: string;
  company: string;
  type: string;
  industry: string;
  description: string;
  results: { metric: string; label: string }[];
  tags: string[];
};

export type ServicioData = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string;
  features: { title: string; description: string }[];
  benefits: { metric: string; label: string }[];
  casos: CasoServicio[];
};

export const servicios: ServicioData[] = [
  {
    slug: "paginas-web",
    title: "Páginas Web",
    tagline: "Tu presencia digital profesional, construida para convertir",
    description:
      "Diseñamos y desarrollamos sitios web corporativos a medida que reflejan la identidad de tu marca y generan confianza en tus clientes.",
    longDescription:
      "Una página web bien construida es tu mejor vendedor: trabaja 24/7, habla por tu marca y convierte visitantes en clientes. En DREVIA creamos sitios corporativos con diseño premium, tecnología de última generación y enfoque total en resultados. Cada proyecto es único, pensado para tu industria y tus objetivos.",
    icon: "RiComputerLine",
    features: [
      { title: "Diseño personalizado",       description: "Cada pixel pensado para tu marca. Sin plantillas, sin atajos." },
      { title: "Rendimiento premium",        description: "PageSpeed 95+ garantizado. Carga en menos de 2 segundos en cualquier dispositivo." },
      { title: "SEO técnico integrado",      description: "Estructura semántica, meta tags, sitemap y schema markup desde el primer día." },
      { title: "Mobile first",              description: "Experiencia perfecta en celulares, tablets y escritorios de todos los tamaños." },
      { title: "CMS intuitivo",             description: "Actualiza contenido, imágenes y textos tú mismo, sin depender de nadie." },
      { title: "Integraciones a demanda",   description: "WhatsApp, Google Analytics, CRM, formularios avanzados y más." },
    ],
    benefits: [
      { metric: "+180%", label: "Consultas online promedio" },
      { metric: "3x",    label: "Más visitas orgánicas" },
      { metric: "95+",   label: "PageSpeed Score" },
    ],
    casos: [
      {
        logo: "/imgs/centraldent.png",
        company: "CentralDent",
        type: "Página Web Corporativa",
        industry: "Salud & Odontología",
        description:
          "Diseñamos y desarrollamos el sitio web institucional de CentralDent. El nuevo sitio integra agendamiento de citas en línea, galería de tratamientos y testimonios de pacientes, generando un flujo constante de nuevos prospectos.",
        results: [
          { metric: "+180%", label: "Consultas online" },
          { metric: "3x",    label: "Más visitas orgánicas" },
          { metric: "4.9★",  label: "Satisfacción del cliente" },
        ],
        tags: ["Next.js", "SEO", "Reservas online"],
      },
    ],
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    tagline: "Diseñadas para convertir. Construidas para escalar.",
    description:
      "Páginas de aterrizaje optimizadas para convertir. Diseño enfocado en métricas, velocidad y máximo rendimiento de campañas.",
    longDescription:
      "Una landing page efectiva puede multiplicar el ROI de tus campañas de marketing en días. En DREVIA diseñamos páginas de aterrizaje con copywriting de alto impacto, jerarquía visual clara y CTAs estratégicos que guían al usuario hacia la conversión. Optimizadas para Google Ads, Meta Ads y posicionamiento orgánico.",
    icon: "RiLayoutLine",
    features: [
      { title: "Copywriting estratégico",     description: "Mensajes que hablan al dolor del cliente y lo llevan a actuar." },
      { title: "A/B testing nativo",          description: "Probamos variantes de diseño y texto para maximizar conversiones." },
      { title: "Carga ultrarrápida",          description: "Menos de 1.5 segundos de carga. Cada segundo cuenta en publicidad pagada." },
      { title: "Integración con CRMs",        description: "Conectamos tus leads con HubSpot, Salesforce, Notion o tu herramienta favorita." },
      { title: "Pixel tracking completo",     description: "Meta Pixel, Google Tag Manager y eventos personalizados configurados." },
      { title: "Optimización continua",       description: "Seguimiento post-lanzamiento con datos reales para mejorar resultados." },
    ],
    benefits: [
      { metric: "4.8%",  label: "Tasa de conversión promedio" },
      { metric: "+12k",  label: "Leads generados" },
      { metric: "98",    label: "PageSpeed Score" },
    ],
    casos: [
      {
        logo: "/imgs/kraken.png",
        company: "Kraken",
        type: "Landing Page de Alto Impacto",
        industry: "Marketing & Entretenimiento",
        description:
          "Creamos una landing page de alto rendimiento para la campaña de lanzamiento de Kraken. El diseño bold, animaciones estratégicas y copywriting orientado a conversión posicionaron la marca desde el primer día con resultados sobresalientes.",
        results: [
          { metric: "4.8%",  label: "Tasa de conversión" },
          { metric: "+12k",  label: "Leads en 30 días" },
          { metric: "98",    label: "PageSpeed Score" },
        ],
        tags: ["Landing Page", "Framer Motion", "Conversión"],
      },
    ],
  },
  {
    slug: "sistema-web",
    title: "Sistemas Web",
    tagline: "Automatiza procesos. Escala sin límites.",
    description:
      "Plataformas y aplicaciones web robustas para gestionar procesos internos, automatizar tareas y escalar tu operación.",
    longDescription:
      "Cuando tu negocio crece, los procesos manuales se convierten en un cuello de botella. En DREVIA desarrollamos sistemas web a medida que digitalizan y automatizan tu operación: paneles de control, gestión de usuarios, reportería en tiempo real, integraciones con APIs externas y mucho más. Arquitectura escalable pensada para el largo plazo.",
    icon: "RiCodeSSlashLine",
    features: [
      { title: "Panel de administración",     description: "Dashboard personalizado con las métricas y acciones que tu equipo necesita." },
      { title: "Roles y permisos",            description: "Control granular de accesos según el rol de cada usuario." },
      { title: "Reportería avanzada",         description: "Exporta reportes en Excel, PDF o visualiza gráficas en tiempo real." },
      { title: "Integraciones API",           description: "Conectamos tu sistema con ERP, CRM, facturación, logística y más." },
      { title: "Arquitectura escalable",      description: "Diseñado para crecer: desde 10 usuarios hasta miles sin rediseñar." },
      { title: "Seguridad enterprise",        description: "Autenticación robusta, cifrado de datos y cumplimiento de estándares." },
    ],
    benefits: [
      { metric: "60%",   label: "Reducción tiempo operativo" },
      { metric: "100%",  label: "Digitalización de procesos" },
      { metric: "0",     label: "Dependencia de papel" },
    ],
    casos: [
      {
        logo: "/imgs/sadmind.png",
        company: "Sadmind",
        type: "Sistema Web a Medida",
        industry: "Tecnología & Software",
        description:
          "Diseñamos e implementamos un sistema web de gestión interno para Sadmind, optimizando sus procesos operativos, control de proyectos y comunicación de equipos. Solución escalable con roles y permisos, reportería y panel de analítica en tiempo real.",
        results: [
          { metric: "60%",   label: "Reducción en tiempo operativo" },
          { metric: "100%",  label: "Digitalización de procesos" },
          { metric: "0",     label: "Dependencia de papel" },
        ],
        tags: ["Sistema Web", "Dashboard", "API REST"],
      },
    ],
  },
  {
    slug: "ecommerce",
    title: "E-commerce",
    tagline: "Tu tienda online. Ventas que no se detienen.",
    description:
      "Tiendas online de alto rendimiento con experiencia de compra fluida, pasarelas de pago integradas y gestión de inventario.",
    longDescription:
      "El comercio electrónico en México crece cada año y la competencia también. En DREVIA construimos tiendas en línea que se destacan: diseño que inspira confianza, proceso de compra sin fricciones, múltiples métodos de pago (Mercado Pago, Stripe, PayPal, OXXO) y un CMS intuitivo para gestionar tu catálogo. Resultados desde el primer mes.",
    icon: "RiShoppingCartLine",
    features: [
      { title: "Catálogo inteligente",        description: "Productos por colección, filtros avanzados y búsqueda con autocompletado." },
      { title: "Checkout optimizado",         description: "Proceso de compra en 3 pasos. Menos abandono, más ventas." },
      { title: "Multi-pasarela de pago",      description: "Mercado Pago, Stripe, PayPal, OXXO Pay y más integrados desde el día 1." },
      { title: "Gestión de inventario",       description: "Control de stock, alertas de agotamiento y reportes de ventas en tiempo real." },
      { title: "SEO para e-commerce",        description: "Páginas de producto y categoría optimizadas para posicionamiento orgánico." },
      { title: "Integraciones logísticas",    description: "Conexión con Fedex, DHL, Estafeta y otras empresas de envío." },
    ],
    benefits: [
      { metric: "+320%", label: "Ventas online promedio" },
      { metric: "5.2%",  label: "Conversión e-commerce" },
      { metric: "-40%",  label: "Abandono de carrito" },
    ],
    casos: [
      {
        logo: "/imgs/didacticosiq.png",
        company: "Didácticos IQ",
        type: "E-commerce",
        industry: "Educación & Juguetería",
        description:
          "Desarrollamos la tienda en línea de Didácticos IQ, especializada en materiales educativos y juguetes inteligentes. Catálogo dinámico, carrito de compras, múltiples métodos de pago y gestión de inventario desde un CMS intuitivo.",
        results: [
          { metric: "+320%", label: "Ventas online" },
          { metric: "68%",   label: "Tasa de retención" },
          { metric: "1.8s",  label: "Velocidad de carga" },
        ],
        tags: ["E-commerce", "CMS", "Pasarela de pago"],
      },
      {
        logo: "/imgs/musclevolution.png",
        company: "Muscle Evolution",
        type: "E-commerce + Landing Page",
        industry: "Fitness & Nutrición Deportiva",
        description:
          "Construimos el ecosistema digital completo de Muscle Evolution: tienda de suplementos deportivos, sistema de membresías, blog de nutrición y landing pages para campañas de temporada.",
        results: [
          { metric: "+240%", label: "Pedidos mensuales" },
          { metric: "5.2%",  label: "Conversión e-commerce" },
          { metric: "-40%",  label: "Abandono de carrito" },
        ],
        tags: ["E-commerce", "Membresías", "Blog"],
      },
      {
        logo: "/imgs/plata925logo.png",
        company: "Plata 925",
        type: "E-commerce de Joyería",
        industry: "Joyería & Moda",
        description:
          "Desarrollamos la tienda en línea de Plata 925, marca de joyería artesanal en plata esterlina. Experiencia de compra fluida, fotografía de producto premium y gestión de catálogo por colecciones.",
        results: [
          { metric: "+450%", label: "Ventas digitales" },
          { metric: "82%",   label: "Clientes recurrentes" },
          { metric: "+60k",  label: "Visitas al mes" },
        ],
        tags: ["E-commerce", "Fotografía de producto", "Colecciones"],
      },
    ],
  },
  {
    slug: "desarrollos-a-medida",
    title: "Desarrollos a Medida",
    tagline: "Tu problema es único. Tu solución también.",
    description:
      "Soluciones tecnológicas únicas adaptadas a tus necesidades específicas. Desde integraciones API hasta sistemas empresariales complejos.",
    longDescription:
      "Cuando las soluciones estándar no alcanzan, DREVIA entra en juego. Desarrollamos software a medida para empresas que tienen procesos únicos, flujos de trabajo complejos o necesidades que ninguna herramienta del mercado cubre. Analizamos tu operación, diseñamos la arquitectura y construimos exactamente lo que necesitas, sin pagar por lo que no usas.",
    icon: "RiSettings4Line",
    features: [
      { title: "Análisis de requerimientos",  description: "Sesiones de discovery para entender tu negocio antes de escribir una sola línea de código." },
      { title: "Arquitectura escalable",      description: "Diseño técnico pensado para crecer con tu empresa durante años." },
      { title: "Integraciones complejas",     description: "APIs, ERPs, CRMs, pasarelas, sistemas legados — los conectamos todos." },
      { title: "Desarrollo ágil",             description: "Entregas incrementales para que veas avances reales desde la primera semana." },
      { title: "Documentación completa",      description: "Manual técnico y de usuario para que tu equipo sepa exactamente cómo funciona." },
      { title: "Soporte post-entrega",        description: "Acompañamiento durante los primeros meses para garantizar el éxito del proyecto." },
    ],
    benefits: [
      { metric: "100%",  label: "Hecho a tu medida" },
      { metric: "60%",   label: "Reducción de tiempos manuales" },
      { metric: "0",     label: "Funciones innecesarias pagadas" },
    ],
    casos: [
      {
        logo: "/imgs/sadmind.png",
        company: "Sadmind",
        type: "Sistema Web a Medida",
        industry: "Tecnología & Software",
        description:
          "Diseñamos e implementamos un sistema web de gestión completamente personalizado para Sadmind. Solución escalable con roles y permisos, reportería y panel de analítica en tiempo real que automatizó el 60% de sus procesos.",
        results: [
          { metric: "60%",   label: "Reducción en tiempo operativo" },
          { metric: "100%",  label: "Digitalización de procesos" },
          { metric: "0",     label: "Dependencia de papel" },
        ],
        tags: ["Sistema Web", "Dashboard", "API REST"],
      },
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    tagline: "Posicionamiento orgánico que te trae clientes cada mes",
    description:
      "Estrategia de SEO técnico y de contenidos para que tu negocio aparezca en Google cuando tus clientes te buscan.",
    longDescription:
      "El SEO es el canal que sigue trayendo clientes mucho después de pagar por él. En DREVIA combinamos SEO técnico, contenido optimizado y autoridad de dominio para posicionar tu negocio en las primeras posiciones de Google. Reportes mensuales claros: tráfico, posiciones y oportunidades, sin permanencia.",
    icon: "RiLineChartLine",
    features: [
      { title: "Auditoría on-page",        description: "Revisamos estructura, velocidad, metadatos y contenido para detectar oportunidades." },
      { title: "Contenido que posiciona",  description: "Blogs optimizados por keyword, escritos para personas y para Google." },
      { title: "Keywords objetivo",        description: "Investigación y priorización de las búsquedas que sí convierten." },
      { title: "Backlinks de autoridad",   description: "Enlaces de calidad que aumentan la confianza de tu dominio." },
      { title: "GA4 + Search Console",     description: "Medición real de tráfico y posiciones, configurada y explicada." },
      { title: "Reportes mensuales",       description: "Sabes exactamente qué hicimos, qué mejoró y qué sigue." },
    ],
    benefits: [
      { metric: "+240%", label: "Tráfico orgánico" },
      { metric: "Pág. 1", label: "Posiciones objetivo" },
      { metric: "100%",  label: "Reportes transparentes" },
    ],
    casos: [
      {
        logo: "/imgs/centraldent.png",
        company: "CentralDent",
        type: "SEO local + contenidos",
        industry: "Salud & Odontología",
        description:
          "Estrategia de SEO técnico y contenido que triplicó las visitas orgánicas de CentralDent y la posicionó para búsquedas de alta intención en su ciudad.",
        results: [
          { metric: "3x",     label: "Más visitas orgánicas" },
          { metric: "+180%",  label: "Consultas online" },
          { metric: "Pág. 1", label: "Keywords locales" },
        ],
        tags: ["SEO técnico", "Contenido", "Local SEO"],
      },
    ],
  },
];

export function getServicio(slug: string): ServicioData | undefined {
  return servicios.find((s) => s.slug === slug);
}
