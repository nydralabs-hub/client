import Hero from "../components/hero";
import Benefits from "../components/benefits";
import HowItWorks from "../components/how-it-works";
import Pricing from "../components/pricing";
import CTA from "../components/cta";
import FAQ from "../components/faq";
import Footer from "../components/footer";

export default function Landing() {
  return (
    <>
      <Hero />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}
