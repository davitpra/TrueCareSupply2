import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import TrustBar from "@/components/TrustBar/TrustBar";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Benefits from "@/components/Benefits/Benefits";
import Clients from "@/components/Clients/Clients";
import CTA from "@/components/CTA/CTA";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Benefits />
      <Clients />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
