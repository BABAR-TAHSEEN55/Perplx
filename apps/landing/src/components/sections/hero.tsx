"use client";
import Container from "../shared/container";
import FlipButtonText from "../shared/flip-button-text";
import Heading from "../shared/heading";
import HeroChat from "../shared/hero-chat";
import SmolText from "../shared/smol-text";
import SubHeading from "../shared/sub-heading";
import { motion } from "framer-motion";
//TODO: Remvoe this motion and make it better for optimization
const Hero = () => {
  return (
    <div>
      <Container className="flex flex-col gap-6">
        <SmolText text="AI writing on Steroids" />

        <Heading className="text-center">
          Write better content.
          <br />
          Faster. <span className="text-backy w-fit">with AI</span>
        </Heading>
        <SubHeading className="max-w-2xl  mx-auto   text-center">
          Verseo helps teams, founders, and marketers generate high-quality
          content in seconds —
          <span className="inline">without overthinking every word</span>
        </SubHeading>
        <motion.div
          initial={{ opacity: 0, scale: 1.25 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-4  mt-auto max-w-2xl mx-auto"
        >
          <FlipButtonText
            text="Try Demo"
            className="flex-1"
            size="lg"

            variant="orange"
          />
          <FlipButtonText
            text="Get Started"

            className="flex-1"
            size="lg"
          />
        </motion.div>
        <HeroChat />
      </Container>
    </div>
  );
};

export default Hero;
