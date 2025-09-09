"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MarketProblem() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".fade-up");

      items.forEach((item: any, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
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
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Who We Help */}
        <div className="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-amber-400">
            Who We Help
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-300">
            We partner with{" "}
            <span className="text-white font-semibold">
              architects, visionary builders, and developers
            </span>{" "}
            to bring ambitious projects to life.
          </p>
        </div>

        {/* Problem */}
        <div className="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-amber-400">
            The Problem We Solve
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-300">
            Modern construction demands more than just windows and doors. It
            demands{" "}
            <span className="text-white font-semibold">
              stunning, high-performance barriers
            </span>{" "}
            that disappear—connecting interior spaces with the outside world
            seamlessly, beautifully, and reliably.
          </p>
        </div>

        {/* What We Provide */}
        <div className="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-amber-400">
            What We Provide
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-300">
            We are the{" "}
            <span className="text-white font-semibold">
              craftsmen behind the glass
            </span>
            . We provide the invisible engineering: the elegant, ultra-strong,
            and thermally efficient aluminum systems that form the breathtaking
            facades of commercial buildings and the stunning window walls of
            luxury homes.
          </p>
        </div>

        {/* Our Promise */}
        <div className="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-amber-400">
            Our Promise
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-300">
            From initial concept to final installation, we deliver the{" "}
            <span className="text-white font-semibold">
              quality, technical support, and peace of mind
            </span>{" "}
            that allows your creativity to flourish, ensuring the final build is
            not only beautiful but built to last.
          </p>
        </div>
      </div>
    </section>
  );
}
