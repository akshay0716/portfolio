"use client";

import { navItems } from "@/data";
import React,{useEffect} from "react";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Script from 'next/script';


declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Declare gtag outside of useEffect
const gtag = (...args: any[]) => {
  window.dataLayer.push(args);
};


const Home = () => {

useEffect(() => {
    // Ensure dataLayer is initialized
    window.dataLayer = window.dataLayer || [];
    
    // Load Google Analytics
    gtag('js', new Date());
    gtag('config', 'G-YP97XZ8DJT'); // Replace with your actual Measurement ID
  }, []);


  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
         <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-YP97XZ8DJT`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YP97XZ8DJT');
          `,
        }}
      />
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
