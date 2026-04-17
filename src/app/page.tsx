"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Concept from "@/components/Concept";
import SignatureDishes from "@/components/SignatureDishes";
import MenuSection from "@/components/MenuSection";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import OrderCTA from "@/components/OrderCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Concept />
      <SignatureDishes />
      <MenuSection />
      <Gallery />
      <Reviews />
      <Location />
      <OrderCTA />
      <Footer />
    </main>
  );
}
