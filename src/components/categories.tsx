import React from 'react';
import { Binary, CircuitBoard, Earth, Key, Layers, Puzzle, Search } from 'lucide-react';

const categoriesData = [
  { name: "Web Exploitation", icon: <Earth /> },
  { name: "Binary Exploitation", icon: <Binary /> },
  { name: "Hardware Hacking", icon: <CircuitBoard /> },
  { name: "Forensics", icon: <Search /> },
  { name: "Reverse Engineering", icon: <Puzzle /> },
  { name: "Cryptography", icon: <Key /> },
  { name: "And Much More...", icon: <Layers /> },
];


const CategoriesSection = () => {
  return (
    <section id="features" className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-white">
          Challenge Categories
        </h2>
        <p className="text-lg text-gray-400 mb-12 text-center">
          Test your skills across a diverse range of domains.
        </p>

        <div className="md:hidden flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
          {categoriesData.map((category, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 bg-[#111] border-2 border-[#fead51] rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-[0_0_20px_#fead51] transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="text-[#fead51]">{category.icon}</div>
              <h3 className="font-bold text-white text-xl">{category.name}</h3>
            </div>
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {categoriesData.map((category, index) => {
            const isLastOdd =
              categoriesData.length % 3 === 1 &&
              index === categoriesData.length - 1;
            const isLastEven =
              categoriesData.length % 2 === 1 &&
              index === categoriesData.length - 1

            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-center text-center bg-[#111] border-2 border-[#fead51] rounded-2xl p-8 shadow-[0_0_20px_#fead51] transform hover:scale-105 transition-transform duration-300 ease-in-out
                  ${isLastOdd ? "lg:col-start-2" : ""} 
                  ${isLastEven ? "md:col-start-2" : ""}
                `}
              >
                <div className="text-[#fead51]">{category.icon}</div>
                <h3 className="font-bold text-white text-xl mt-5">{category.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
