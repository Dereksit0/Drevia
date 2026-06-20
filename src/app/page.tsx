import Header from "./components/Header";
import Hero from "./components/Hero";
import Problema from "./components/Problema";
import Servicios from "./components/Servicios";
import Proceso from "./components/Proceso";
import Casos from "./components/Casos";
import Planes from "./components/Planes";
import Comparativa from "./components/Comparativa";
import Testimonios from "./components/Testimonios";
// import VideoTestimonios from "./components/VideoTestimonios"; // Oculto temporalmente
import CTAFinal from "./components/CTAFinal";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problema />
        <Servicios />
        <Proceso />
        <Casos />
        <Planes />
        <Comparativa />
        <Testimonios />
        {/* <VideoTestimonios /> */}{/* Oculto temporalmente */}
        <CTAFinal />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
