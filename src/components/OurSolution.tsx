"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OurSolution() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".fade-up");

      items.forEach((item: any, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay: i * 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-neutral-900 text-neutral-100 py-24 px-6 md:px-16 lg:px-28"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Heading */}
        <div className="fade-up text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-amber-400">
            Our Solution
          </h2>
          <p className="mt-6 text-lg text-neutral-400 max-w-3xl mx-auto">
            We bridge the gap by providing **high-performance aluminum glazing
            systems** that combine beauty, strength, and technical precision —
            enabling architects and builders to create spaces without
            compromise.
          </p>
        </div>

        {/* Three pillars of solution */}
        <div className="grid md:grid-cols-3 gap-10">
          <div className="fade-up bg-neutral-800 p-8 rounded-2xl shadow-xl border border-neutral-700 flex flex-col">
            <div className="h-48 mb-6 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1620374645498-af6bd681a0bd?q=80&w=600&auto=format&fit=crop"
                alt="Strength and Elegance"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-amber-300">
              Strength + Elegance
            </h3>
            <p className="mt-4 text-neutral-300 leading-relaxed flex-grow">
              Ultra-slim frames engineered for maximum glass area, while
              delivering structural reliability for projects of any scale.
            </p>
          </div>

          <div className="fade-up bg-neutral-800 p-8 rounded-2xl shadow-xl border border-neutral-700 flex flex-col">
            <div className="h-48 mb-6 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1588850790165-5d517ead7871?q=80&w=600&auto=format&fit=crop"
                alt="Thermal Performance"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-amber-300">
              Thermal Performance
            </h3>
            <p className="mt-4 text-neutral-300 leading-relaxed flex-grow">
              Advanced insulation and energy-efficient engineering that ensures
              comfort and sustainability without sacrificing aesthetics.
            </p>
          </div>

          <div className="fade-up bg-neutral-800 p-8 rounded-2xl shadow-xl border border-neutral-700 flex flex-col">
            <div className="h-48 mb-6 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=600&auto=format&fit=crop"
                alt="Design Freedom"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-amber-300">
              Design Freedom
            </h3>
            <p className="mt-4 text-neutral-300 leading-relaxed flex-grow">
              From curtain walls to bespoke sliding systems, our solutions adapt
              seamlessly to your creative vision — no compromises.
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="fade-up text-center">
          <p className="text-lg text-neutral-300">
            From **concept to completion**, we stand beside architects,
            builders, and developers — delivering systems that inspire, perform,
            and last.
          </p>
          <button className="mt-8 inline-block bg-amber-400 text-neutral-900 font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-amber-300 transition">
            Explore Our Products →
          </button>
        </div>
      </div>
    </section>
  );
}
