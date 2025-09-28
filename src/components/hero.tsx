"use client";
import dynamic from "next/dynamic";
import { Montserrat } from "next/font/google";
import Magnet from "@/components/reactbits/Magnet";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["900"] });

const FaultyTerminal = dynamic(() => import("@/components/reactbits/FaultyTerminal"), { ssr: false });

const HeroSection = ({ isMobile }: { isMobile: boolean }) => (
  <section id="hero" className="relative h-screen w-screen overflow-hidden">
    <FaultyTerminal
      scale={!isMobile ? 2 : 1}
      gridMul={isMobile ? [1, 1] : [2, 2]}
      digitSize={1.5}
      timeScale={!isMobile ? 0.5 : 0.1}
      scanlineIntensity={0}
      glitchAmount={!isMobile ? 1 : 0}
      flickerAmount={!isMobile ? 1 : 0}
      noiseAmp={!isMobile ? 3 : 2}
      dither={1}
      curvature={0.1}
      tint="#fead53"
      mouseReact={!isMobile}
      mouseStrength={isMobile ? 0 : 0.5}
      pageLoadAnimation={!isMobile}
      brightness={1}
      className="absolute inset-0 z-0"
    />
    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
    <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 pointer-events-none">
      <h1 className={`${montserrat.className} text-4xl sm:text-7xl md:text-8xl font-bold tracking-wider text-white [text-shadow:0_4px_8px_rgba(0,0,0,0.9)]`}>
        CRYPTOCLASH 2.0
      </h1>
      <div className="relative mt-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent rounded-lg pointer-events-none"></div>
        <p className="relative max-w-3xl text-lg sm:text-xl md:text-2xl font-medium text-gray-200 [text-shadow:0_2px_4px_rgba(0,0,0,0.8)]">
          Be the first. Be the fastest. Be the{" "}
          <strong className="text-xl sm:text-2xl md:text-3xl text-[#fead51]">
            hacker
          </strong>{" "}
          they remember.
        </p>
      </div>
      <Magnet wrapperClassName="inline-block" innerClassName="inline-block">
        <button
          onClick={() => {
            const el = document.getElementById("register");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="pointer-events-auto mt-8 px-8 py-3 bg-[#fead51] text-black font-bold rounded-lg shadow-[0_0_15px_#fead51] hover:scale-105 hover:bg-white transition-all duration-300"
        >
          Register Now
        </button>
      </Magnet>
    </div>
  </section>
);

export default HeroSection;
