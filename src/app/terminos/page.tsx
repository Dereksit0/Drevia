import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Términos de Uso — DREVIA",
  description: "Términos y condiciones de uso del sitio web y servicios de DREVIA.",
};

export default function TerminosPage() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-black min-h-screen">
        <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block text-white/35 text-xs font-medium tracking-[0.3em] uppercase mb-5">
              Legal
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              Términos de Uso
            </h1>
            <p className="text-white/40 text-sm mb-12">
              Última actualización: mayo 2025
            </p>

            <div className="prose prose-invert prose-sm max-w-none space-y-10 text-white/60 leading-relaxed">

              <div>
                <h2 className="text-white font-semibold text-lg mb-3">1. Aceptación de los términos</h2>
                <p>
                  Al acceder y utilizar el sitio web <span className="text-white/80">drevia.com</span> (en adelante,
                  "el Sitio"), aceptas quedar vinculado por los presentes Términos de Uso. Si no estás de acuerdo
                  con alguno de estos términos, te pedimos que no utilices el Sitio. DREVIA Solutions se reserva el
                  derecho de modificar estos términos en cualquier momento sin previo aviso.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-lg mb-3">2. Uso permitido</h2>
                <p>El Sitio es de uso exclusivamente informativo y comercial. Está permitido:</p>
                <ul className="mt-3 space-y-2 list-disc list-inside marker:text-white/25">
                  <li>Navegar, leer y compartir el contenido del Sitio con fines personales o profesionales.</li>
                  <li>Contactarnos a través de los canales disponibles para solicitar información sobre nuestros servicios.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-white font-semibold text-lg mb-3">3. Uso prohibido</h2>
                <p>Queda estrictamente prohibido:</p>
                <ul className="mt-3 space-y-2 list-disc list-inside marker:text-white/25">
                  <li>Reproducir, distribuir o modificar el contenido del Sitio sin autorización escrita de DREVIA.</li>
                  <li>Usar el Sitio para actividades ilegales, fraudulentas o que violen derechos de terceros.</li>
                  <li>Intentar acceder a áreas restringidas, sistemas o datos de DREVIA sin autorización.</li>
                  <li>Utilizar bots, scrapers u otras herramientas automatizadas para recopilar información del Sitio.</li>
                  <li>Transmitir virus, malware o cualquier código malicioso a través del Sitio.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-white font-semibold text-lg mb-3">4. Propiedad intelectual</h2>
                <p>
                  Todo el contenido del Sitio —incluyendo textos, imágenes, logotipos, diseños, código y marca
                  DREVIA— es propiedad de DREVIA Solutions y está protegido por las leyes de propiedad intelectual
                  aplicables en México y tratados internacionales. Ningún contenido puede ser copiado, reproducido
                  o usado sin autorización expresa y por escrito.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-lg mb-3">5. Servicios y contratación</h2>
                <p>
                  La información presentada en el Sitio sobre precios, planes y servicios tiene carácter
                  orientativo. Ninguna cotización se considera firme hasta que ambas partes hayan firmado un
                  contrato o propuesta formal. DREVIA se reserva el derecho de modificar sus servicios y precios
                  sin previo aviso en el Sitio.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-lg mb-3">6. Limitación de responsabilidad</h2>
                <p>
                  DREVIA no garantiza que el Sitio esté disponible de forma ininterrumpida ni libre de errores.
                  En ningún caso DREVIA será responsable por daños directos, indirectos, incidentales o
                  consecuentes derivados del uso o la imposibilidad de usar el Sitio o sus contenidos.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-lg mb-3">7. Enlaces externos</h2>
                <p>
                  El Sitio puede contener enlaces a sitios web de terceros. DREVIA no es responsable del contenido,
                  políticas de privacidad ni prácticas de dichos sitios externos. La inclusión de un enlace no
                  implica respaldo o asociación.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-lg mb-3">8. Ley aplicable y jurisdicción</h2>
                <p>
                  Estos Términos de Uso se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier
                  controversia derivada de su interpretación o cumplimiento será sometida a la jurisdicción de
                  los tribunales competentes de la ciudad de Puebla, México, renunciando expresamente a cualquier
                  otro fuero que pudiera corresponder.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-lg mb-3">9. Contacto</h2>
                <p>
                  Para cualquier consulta sobre estos términos, contáctanos en{" "}
                  <a
                    href="mailto:hola@drevia.com"
                    className="text-white/80 hover:text-white underline underline-offset-2 transition-colors"
                  >
                    hola@drevia.com
                  </a>{" "}
                  o por WhatsApp al{" "}
                  <a
                    href="https://wa.me/522225497631"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white underline underline-offset-2 transition-colors"
                  >
                    +52 222 549 7631
                  </a>
                  .
                </p>
              </div>

            </div>

            <div className="mt-16 pt-8 border-t border-white/8">
              <a
                href="/"
                className="text-white/35 hover:text-white text-sm transition-colors duration-200"
              >
                ← Volver a la página principal
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
