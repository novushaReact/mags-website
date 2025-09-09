"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AvailableSolution() {
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
            delay: i * 0.25,
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
      className="relative bg-neutral-950 text-neutral-100 py-24 px-6 md:px-16 lg:px-28"
    >
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Heading */}
        <div className="fade-up text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-amber-400">
            Available Market Solutions
          </h2>
          <p className="mt-6 text-lg text-neutral-400 max-w-3xl mx-auto">
            The construction industry is filled with options — from standard
            window systems to prefabricated facades. But while these solutions
            solve some needs, they rarely deliver on{" "}
            <span className="text-white font-semibold">
              beauty, performance, and durability
            </span>{" "}
            together.
          </p>
        </div>

        {/* Existing Solutions */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="fade-up bg-neutral-900 p-8 rounded-2xl shadow-xl border border-neutral-800">
            <h3 className="text-2xl font-semibold text-amber-300">
              Standard Windows & Doors
            </h3>
            <p className="mt-4 text-neutral-300 leading-relaxed">
              Affordable and easy to install, but they lack the structural
              strength, thermal efficiency, and seamless integration modern
              spaces demand.
            </p>
          </div>

          <div className="fade-up bg-neutral-900 p-8 rounded-2xl shadow-xl border border-neutral-800">
            <h3 className="text-2xl font-semibold text-amber-300">
              Prefabricated Facades
            </h3>
            <p className="mt-4 text-neutral-300 leading-relaxed">
              Efficient at scale but often rigid in design, limiting architects’
              creativity and failing to meet luxury expectations.
            </p>
          </div>
        </div>

        {/* What's Missing */}
        <div className="fade-up">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-amber-400">
            What’s Missing?
          </h3>
          <p className="mt-4 text-lg text-neutral-300 leading-relaxed">
            Current solutions force builders and designers to{" "}
            <span className="text-white font-semibold">
              choose between strength, aesthetics, or flexibility
            </span>
            . None deliver all three at once. This is where we step in.
          </p>
        </div>
      </div>
    </section>
  );
}
