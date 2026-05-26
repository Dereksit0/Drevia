import { notFound } from "next/navigation";
import { servicios, getServicio } from "./data";
import ServicioContent from "./ServicioContent";

export function generateStaticParams() {
  return servicios.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const servicio = getServicio(slug);
  if (!servicio) return {};
  return {
    title: `${servicio.title} — DREVIA`,
    description: servicio.description,
  };
}

export default async function ServicioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const servicio = getServicio(slug);
  if (!servicio) notFound();
  return <ServicioContent servicio={servicio} />;
}
