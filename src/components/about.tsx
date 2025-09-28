"use client";
import { BrainCircuit, Crown, Terminal, Trophy } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const benefitsData = [
  {
    icon: <BrainCircuit size={28} className="text-[#fead51]" />,
    title: "Sharpen Your Skills",
    description: "Tackle real-world challenges designed by experts and push your abilities to the limit.",
  },
  {
    icon: <Trophy size={28} className="text-[#fead51]" />,
    title: "Compete for Glory",
    description: "Battle it out on a live leaderboard for prizes, recognition, and ultimate bragging rights.",
  },
  {
    icon: <Crown size={28} className="text-[#fead51]" />,
    title: "Join the Elite",
    description: "Prove your talent and earn a place among the best hackers and problem-solvers in the community.",
  },
];

const useOnScreen = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, isVisible] as const;
};

const lines = [
  { text: "> Initializing Cryptoclash v2.0...", color: "gray" },
  { text: "> Loading challenge modules...", color: "gray" },
  { text: "> [Challenges]: Ready", color: "green" },
  { text: "> Awaiting participants...", color: "gray" },
];

const TerminalTyping = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    if (currentLine >= lines.length) return;
    const fullText = lines[currentLine].text;
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      setCurrentText((prev) => prev + fullText[charIndex]);
      charIndex++;
      if (charIndex === fullText.length) {
        clearInterval(typeInterval);
        setVisibleLines((prev) => [...prev, fullText]);
        setCurrentText("");
        setCurrentLine((prev) => prev + 1);
      }
    }, 75);
    return () => clearInterval(typeInterval);
  }, [currentLine]);

  return (
    <div className="font-mono text-sm">
      {visibleLines.map((line, i) => (
        <p
          key={i}
          className={
            lines[i].color === "green" ? "text-green-400" : "text-gray-400"
          }
        >
          {line}
        </p>
      ))}
      {currentLine < lines.length && (
        <p
          className={
            lines[currentLine].color === "green"
              ? "text-green-400"
              : "text-gray-400"
          }
        >
          {currentText}
          {lines[currentLine].color === "green" && <span className="animate-pulse">_</span>}
        </p>
      )}
    </div>
  );
};
const AboutSection = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

  return (
    <section id="about" className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div
          ref={ref}
          className="hidden md:block w-full h-96 bg-[#111] border-2 border-[#fead51]/50 rounded-2xl p-6 shadow-[0_0_25px_rgba(254,173,81,0.15)] overflow-y-auto"
        >
          <TerminalTyping />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Why Join <span className="text-[#fead51]">Cryptoclash 2.0?</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Get ready to dive into the ultimate battlefield of brainpower. Cryptoclash 2.0 is not just an event—it's a challenge that separates the best from the rest. Crack codes, break ciphers, and earn your place among the elite.
          </p>

          <div className="space-y-6">
            {benefitsData.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#111] rounded-full flex items-center justify-center border-2 border-[#fead51]/50">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
