import { ImageResponse } from "next/og";

export const alt = "DREVIA — Desarrollo Web para Empresas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          backgroundImage:
            "radial-gradient(ellipse 80% 80% at 50% -10%, rgba(255,255,255,0.10), transparent)",
        }}
      >
        <div
          style={{
            fontSize: 140,
            fontWeight: 800,
            letterSpacing: "-6px",
            color: "#ffffff",
            lineHeight: 1,
          }}
        >
          DREVIA
        </div>
        <div
          style={{
            fontSize: 40,
            color: "rgba(255,255,255,0.65)",
            marginTop: 28,
          }}
        >
          Desarrollo Web para Empresas
        </div>
        <div
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.40)",
            marginTop: 16,
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          Páginas web · Landing pages · E-commerce · Sistemas web
        </div>
      </div>
    ),
    { ...size }
  );
}
