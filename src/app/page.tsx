import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import BeneficiosWeb from "./components/BeneficiosWeb";
import PorQueNosotros from "./components/PorQueNosotros";
import SliderLogos from "./components/SliderLogos";
import Planes from "./components/Planes";
import Testimonios from "./components/Testimonios";
import VideoTestimonios from "./components/VideoTestimonios";
import Tecnologias from "./components/Tecnologias";
import Proceso from "./components/Proceso";
import FAQ from "./components/FAQ";
import LogosCompatibles from "./components/LogosCompatibles";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicios />
        <BeneficiosWeb />
        <PorQueNosotros />
        <SliderLogos />
        <Planes />
        <Testimonios />
        <VideoTestimonios />
        <Tecnologias />
        <Proceso />
        <FAQ />
        <LogosCompatibles />
        <CTAFinal />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
