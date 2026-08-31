import Hero from "@/components/khmer/Hero";
import Intro from "@/components/khmer/Intro";
import SignatureDishes from "@/components/khmer/SignatureDishes";
import Ingredients from "@/components/khmer/Ingredients";
import LocalSourcing from "@/components/khmer/LocalSourcing";
import Culture from "@/components/khmer/Culture";
import HowItWorks from "@/components/khmer/HowItWorks";
import Testimonials from "@/components/khmer/Testimonials";
import Cta from "@/components/khmer/Cta";
import Contact from "@/components/khmer/Contact";

export default function Home() {
  return (
    <>
      <Hero/>
      <Intro/>
      <SignatureDishes/>
      <Ingredients/>
      <LocalSourcing/>
      <Culture/>
      <HowItWorks/>
      <Testimonials/>
      <Cta/>
      <Contact/>
    </>
  );
}