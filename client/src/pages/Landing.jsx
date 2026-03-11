import Hero from "../components/Hero";
import Navbar from "../components/NavBar";
import Benefits from "../components/Benefits";
import Features from "../components/Features";
import FeaturesApp from "../components/FeaturesApp";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import CTA from "../components/Cta";
import FAQ from "../components/Faq";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <>
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="features">
        <FeaturesApp />
      </section>

      <section id="cta">
        <CTA />
      </section>

      <section id="how">
        <HowItWorks />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="cta-bottom">
        <CTA />
      </section>

      <Footer />
    </>
  );
}

// export default function Landing() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       {/* <Features /> */}
//       <FeaturesApp />
//       <CTA />
//       <HowItWorks />
//       <Pricing />
//       <Testimonials />
//       <FAQ />
//       <CTA />
//       <Footer />
//       {/* <Benefits />
//       <HowItWorks />
//       <Pricing />
//       <CTA />
//       <FAQ />
//       <Footer /> */}
//     </>
//   );
// }
