// import Image from "next/image";
import Header from "@/sections/header";
import Hero from "@/sections/hero";
import LogoTicker from "@/sections/logoTicker";
import Features from "@/sections/features";
import Testimonials from "@/sections/testimonials";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
    </>
  );
}
