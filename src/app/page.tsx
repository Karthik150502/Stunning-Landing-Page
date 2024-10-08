// import Image from "next/image";
import Header from "@/sections/header";
import Hero from "@/sections/hero";
import LogoTicker from "@/sections/logoTicker";
import Features from "@/sections/features";
import Testimonials from "@/sections/testimonials";
import CalltoAction from "@/sections/callToAction";
import Footer from "@/sections/footer";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CalltoAction />
      <Footer />
    </>
  );
}
