"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero";
import AboutSection from "@/components/about";
import TimelineSection from "@/components/timeline";
import CategoriesSection from "@/components/categories";
import Footer from "@/components/footer";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(checkMobile);
  }, []);

  return (
    <main className="min-h-screen bg-black text-[#fead51] font-sans" style={{ scrollBehavior: "smooth" }}>
      <Navbar isMobile={isMobile} />
      <HeroSection isMobile={isMobile} />
      <AboutSection />
      <CategoriesSection />
      <TimelineSection />
      <Footer />
    </main>
  );
};

export default Home;
