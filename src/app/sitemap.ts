import type { MetadataRoute } from "next";
import { projects } from "./casos/casosData";
import { servicios } from "./servicios/[slug]/data";

const SITE_URL = "https://drevia.com";

// Fecha estable de última actualización (evita marcar "hoy" en cada build — #17)
const LAST_MODIFIED = new Date("2026-06-21");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = LAST_MODIFIED;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`,           lastModified: now, changeFrequency: "weekly",  priority: 1   },
    { url: `${SITE_URL}/casos`,      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/privacidad`, lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${SITE_URL}/terminos`,   lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];

  const servicioRoutes: MetadataRoute.Sitemap = servicios.map((s) => ({
    url: `${SITE_URL}/servicios/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const casoRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${SITE_URL}/casos/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...servicioRoutes, ...casoRoutes];
}
