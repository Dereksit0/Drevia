import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Política de Privacidad — DREVIA",
  description: "Conoce cómo DREVIA recopila, usa y protege tu información personal.",
};

export default function PrivacidadPage() {
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
              Política de Privacidad
            </h1>
            <p className="text-white/40 text-sm mb-12">
              Última actualización: mayo 2025
            </p>

            <div className="prose prose-invert prose-sm max-w-none space-y-10 text-white/60 leading-relaxed">

              <div>
                <h2 className="text-white font-semibold text-lg mb-3">1. Responsable del tratamiento</h2>
                <p>
                  DREVIA Solutions (en adelante, "DREVIA") es responsable del tratamiento de los datos personales que
                  recabe a través de su sitio web <span className="text-white/80">drevia.com</span> y cualquier
                  formulario de contacto asociado. Para cualquier consulta relacionada con privacidad, puedes
                  contactarnos en <span className="text-white/80">hola@drevia.com</span>.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-lg mb-3">2. Datos que recopilamos</h2>
                <p>Podemos recopilar los siguientes tipos de información:</p>
                <ul className="mt-3 space-y-2 list-disc list-inside marker:text-white/25">
                  <li>Nombre completo y datos de contacto (correo electrónico, teléfono).</li>
                  <li>Nombre de la empresa e industria.</li>
                  <li>Descripción del proyecto o consulta enviada.</li>
                  <li>Datos de navegación (cookies, dirección IP, páginas visitadas) con fines analíticos.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-white font-semibold text-lg mb-3">3. Finalidad del tratamiento</h2>
                <p>Usamos tus datos exclusivamente para:</p>
                <ul className="mt-3 space-y-2 list-disc list-inside marker:text-white/25">
                  <li>Responder a tu solicitud de información o cotización.</li>
                  <li>Gestionar la relación comercial contigo o con tu empresa.</li>
                  <li>Enviarte comunicaciones relacionadas con nuestros servicios (con tu consentimiento previo).</li>
                  <li>Mejorar la experiencia del sitio web mediante análisis de tráfico anónimo.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-white font-semibold text-lg mb-3">4. Base legal del tratamiento</h2>
                <p>
                  El tratamiento de tus datos se basa en tu consentimiento expreso al completar un formulario o
                  iniciar una conversación con nosotros, así como en el interés legítimo de DREVIA para gestionar
                  sus relaciones comerciales conforme a la Ley Federal de Protección de Datos Personales en Posesión
                  de los Particulares (LFPDPPP) de México.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-lg mb-3">5. Compartición de datos</h2>
                <p>
                  DREVIA no vende, alquila ni comparte tus datos personales con terceros, salvo en los siguientes
                  casos:
                </p>
                <ul className="mt-3 space-y-2 list-disc list-inside marker:text-white/25">
                  <li>Proveedores de servicios que actúan en nuestro nombre (hosting, analítica, correo) bajo acuerdos de confidencialidad.</li>
                  <li>Cuando sea requerido por ley o autoridad competente.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-white font-semibold text-lg mb-3">6. Cookies</h2>
                <p>
                  Nuestro sitio puede usar cookies técnicas y analíticas para mejorar la experiencia de usuario.
                  Puedes desactivarlas desde la configuración de tu navegador sin que esto afecte el funcionamiento
                  básico del sitio.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-lg mb-3">7. Tus derechos (ARCO)</h2>
                <p>
                  Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al tratamiento de tus datos personales
                  en cualquier momento. Para ejercer estos derechos, envía un correo a{" "}
                  <span className="text-white/80">hola@drevia.com</span> con el asunto "Derechos ARCO" e
                  indicando tu nombre y la acción que deseas realizar. Responderemos en un plazo máximo de 20 días
                  hábiles.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-lg mb-3">8. Seguridad de los datos</h2>
                <p>
                  Implementamos medidas técnicas y organizativas razonables para proteger tu información frente a
                  acceso no autorizado, pérdida o divulgación. Sin embargo, ninguna transmisión por internet es
                  100% segura, por lo que no podemos garantizar seguridad absoluta.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-lg mb-3">9. Cambios en esta política</h2>
                <p>
                  DREVIA se reserva el derecho de actualizar esta política en cualquier momento. La versión vigente
                  estará siempre disponible en esta página con la fecha de última modificación.
                </p>
              </div>

              <div>
                <h2 className="text-white font-semibold text-lg mb-3">10. Contacto</h2>
                <p>
                  Para cualquier duda sobre esta política, escríbenos a{" "}
                  <a
                    href="mailto:hola@drevia.com"
                    className="text-white/80 hover:text-white underline underline-offset-2 transition-colors"
                  >
                    hola@drevia.com
                  </a>{" "}
                  o comunícate por WhatsApp al{" "}
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
