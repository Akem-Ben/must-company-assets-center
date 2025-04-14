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
import DonationSection from "@/components/DonationSection";
import BetterWorld from "@/components/BetterWorld";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Landing Page | Panda App</title>
        <meta name="description" content="Landing page for Panda App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex-1 flex flex-col bg-white">
        <Navbar />
        <div className="relative w-full bg-white px-[60px]">
          <HeroCarousel />
        </div>
        <CultureSharingComponent />
        <ChairmanGreetings />
        <ActivitiesPage />
        <DonationSection />
        <BetterWorld />
        <CarouselSection />
        <Footer />
      </main>
    </div>
  );
}