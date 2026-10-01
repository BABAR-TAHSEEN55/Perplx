import Hero from "@/components/sections/hero";
import Container from "@/components/shared/container";

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-neutral-50">
      <Container>
        <Hero />
      </Container>
    </div>
  );
};

export default Home;
