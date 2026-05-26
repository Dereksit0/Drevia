import type { Metadata } from "next";
import CasosContent from "./CasosContent";

export const metadata: Metadata = {
  title: "Casos de Éxito — DREVIA",
  description:
    "Proyectos reales que demuestran el impacto de DREVIA. Conoce cómo transformamos la presencia digital de empresas como la tuya.",
};

export default function CasosPage() {
  return <CasosContent />;
}
