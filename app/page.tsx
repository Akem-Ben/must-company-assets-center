import React from "react";
// import Image from "next/image";
import Navbar from "@/components/NavBar";
import Head from "next/head";
import HeroCarousel from "@/components/Hero";
import CultureSharingComponent from "@/components/CultureSharing";

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
      </main>
    </div>
  );
}
