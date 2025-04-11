import React from "react";
// import Image from "next/image";
import Navbar from "@/components/NavBar";
import Head from "next/head";
import HeroCarousel from "@/components/Hero";
import CultureSharingComponent from "@/components/CultureSharing";
import ChairmanGreetings from "@/components/ChairmanGreeting";
import { ActivitiesPage } from "@/components/ActivitiesSection";
import CarouselSection from "@/components/BodyCarousel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Landing Page | Panda App</title>
        <meta name="description" content="Landing page for Panda App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white">
        <section>
          <Navbar />
        </section>
        <section className="bg-white px-[60px]">
          <HeroCarousel />
        </section>
        <section>
          <CultureSharingComponent />
        </section>
        <section>
          <ChairmanGreetings />
        </section>
        <section>
          <ActivitiesPage />
        </section>
        <section>
          <CarouselSection />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </div>
  );
}
