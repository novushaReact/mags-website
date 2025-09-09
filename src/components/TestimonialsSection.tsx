"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "Working with MAGS transformed our project. Their glazing systems combined elegance with structural performance — a rare balance in modern construction.",
    name: "Ar. Meera Desai",
    role: "Lead Architect, Horizon Designs",
    image: "/images/testimonials/architect.jpg",
  },
  {
    quote:
      "Their technical team was with us from concept through installation. It gave us the confidence to push design boundaries while staying on budget and schedule.",
    name: "Rajiv Menon",
    role: "Project Manager, Skyline Constructions",
    image: "/images/testimonials/pm.jpg",
  },
  {
    quote:
      "The precision and finish of their sliding systems exceeded expectations. Our luxury tower now offers seamless indoor-outdoor living for residents.",
    name: "Sophia Alvarez",
    role: "Developer, Alvarez Group",
    image: "/images/testimonials/developer.jpg",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".testimonial-card");

      cards.forEach((card: any, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: i * 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
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
      className="relative bg-neutral-50 text-neutral-900 py-24 px-6 md:px-16 lg:px-28"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            Trusted by architects, builders, and developers worldwide — here’s
            what our partners say about collaborating with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="testimonial-card bg-white rounded-2xl shadow-lg p-8 border border-neutral-200 hover:shadow-xl transition"
            >
              <p className="text-neutral-700 italic">“{t.quote}”</p>
              <div className="flex items-center mt-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border border-neutral-300"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-neutral-900">{t.name}</h4>
                  <p className="text-sm text-neutral-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
