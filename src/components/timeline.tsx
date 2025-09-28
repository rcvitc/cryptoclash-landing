"use client";
import React, { useState, useEffect, useRef } from "react";

type TimelineItemType = {
  date: string;
  desc: string;
};

const useOnScreen = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const currentRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);
  return [ref, isVisible] as const;
};

const timelineData: TimelineItemType[] = [
  { date: "<REDACTED>", desc: "Registration Opens" },
  { date: "<REDACTED>", desc: "Workshops Begin" },
  { date: "<REDACTED>", desc: "Preliminary Round" },
  { date: "<REDACTED>", desc: "Grand Finale" },
  { date: "<REDACTED>", desc: "Awards & Closing Ceremony" },
];


const EventBox = ({ item }: { item: TimelineItemType }) => (
  <div className="bg-[#111] border-2 border-[#fead51] rounded-2xl p-6 shadow-[0_0_25px_#fead51] text-center transform transition-all duration-300 ease-in-out relative group hover:scale-105 hover:p-8">
    <h3 className="font-bold text-white text-xl transition-all duration-300 group-hover:mb-4">
      {item.desc}
    </h3>
    <p className="text-[#fead51] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 left-1/2 -translate-x-1/2">
      Date: {item.date}
    </p>
  </div>
);

const TimelineItem = ({ item, index }: { item: TimelineItemType; index: number }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
  const isOdd = index % 2 !== 0;
  const transitionClass = "transition-all duration-700 ease-in-out";
  const visibilityClass = isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";

  return (
    <div ref={ref} className={`relative w-full mb-8 ${transitionClass} ${visibilityClass}`}>
      <div className="md:hidden">
        <div className="absolute top-5 left-4 transform -translate-x-1/2 w-5 h-5 bg-[#fead51] rounded-full shadow-[0_0_20px_#fead51] z-10"></div>
        <div className="ml-12">
          <EventBox item={item} />
        </div>
      </div>

      <div className="hidden md:flex justify-between items-center w-full">
        <div className="w-1/2 pr-8 text-right">
          {!isOdd && <EventBox item={item} />}
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#fead51] rounded-full shadow-[0_0_20px_#fead51] z-10"></div>
        <div className="w-1/2 pl-8 text-left">
          {isOdd && <EventBox item={item} />}
        </div>
      </div>
    </div>
  );
};

const TimelineSection = () => {
  return (
    <section id="timeline" className="bg-black py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-[#fead51]">Event Timeline</h2>
        <div className="relative flex flex-col">
          {/* Vertical Line */}
          <div className="absolute top-0 h-full w-1 bg-[#fead51]/50 shadow-[0_0_15px_#fead51] z-0 left-4 -translate-x-1/2 md:left-1/2"></div>

          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
