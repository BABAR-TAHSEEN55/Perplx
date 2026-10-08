import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import LogoCloud from "@/components/sections/logo-cloud";
import WhyPerplX from "@/components/sections/why";
import Features from "@/components/sections/features";

import BackgroundImage from "@/components/shared/background-image";
import Container from "@/components/shared/container";

import Testimonials from "@/components/sections/testimonials";
import Pricing from "@/components/sections/pricing";
import FAQs from "@/components/sections/faq";
import Footer from "@/components/sections/footer";

const Home = () => {
  return (
    <>
      <main className="min-h-screen bg-neutral-50">
        <section className="relative  min-h-screen overflow-hidden">
          <BackgroundImage />
          <div className="relative z-10 pt-42">
            <Container>
              <Hero />
              {/*<div className="pointer-events-none fixed inset-x-0 bottom-0 z-35 h-24 transition-opacity duration-200 in-data-overlay-open:opacity-8" />*/}
            </Container>
          </div>
        </section>
        <Container className="max-w-7xl">
          <LogoCloud />
          <WhyPerplX />
          <About />
          <Features />
          <Testimonials />
          <Pricing />
          <FAQs />
          {/*<UseCases />*/}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Home;
