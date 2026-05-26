import { notFound } from "next/navigation";
import { projects, getCaso } from "../casosData";
import CasoDetail from "./CasoDetail";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caso = getCaso(slug);
  if (!caso) return {};
  return {
    title: `${caso.company} — Caso de Éxito · DREVIA`,
    description: caso.description,
  };
}

export default async function CasoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caso = getCaso(slug);
  if (!caso) notFound();
  return <CasoDetail caso={caso} />;
}
