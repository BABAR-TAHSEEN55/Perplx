import Hero from "@/components/sections/hero";
import BackgroundImage from "@/components/shared/background-image";
import Container from "@/components/shared/container";

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-neutral-50">
      <BackgroundImage />
      <div className="pt-42">
        <Container>
          <div className="relative">
            <Hero />
            <div style={{ height: "100vh" }} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
