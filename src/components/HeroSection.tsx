"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Innovative Aluminum Glazing Solutions
      </h1>
      <p className="text-lg md:text-2xl mb-8">
        Commercial windows, doors, curtain walls, and facades engineered to
        perfection.
      </p>
      <div className="flex space-x-4">
        <a
          href="#products"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Explore Products
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50"
        >
          Request Quote
        </a>
      </div>
    </section>
  );
}
