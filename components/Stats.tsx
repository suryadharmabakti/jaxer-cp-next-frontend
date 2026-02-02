"use client";

import { useEffect, useRef } from "react";

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animateCounters = () => {
      const counters = section.querySelectorAll<HTMLElement>(".stat-counter");
      counters.forEach((counter) => {
        const targetAttr = counter.getAttribute("data-target");
        if (!targetAttr) return;

        const target = parseInt(targetAttr, 10);
        const duration = 2000; // 2 seconds
        const frameRate = 60;
        const totalFrames = Math.round((duration / 1000) * frameRate);
        
        let currentFrame = 0;
        
        const updateCounter = () => {
          currentFrame++;
          const progress = currentFrame / totalFrames;
          const current = Math.round(target * progress); // Linear easing for simplicity, or use easing function
          
          if (currentFrame < totalFrames) {
            counter.textContent = `${current}+`;
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = `${target}+`;
          }
        };
        
        requestAnimationFrame(updateCounter);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div data-aos="fade-up" data-aos-delay="0">
            <div
              className="stat-counter bg-transparent text-4xl font-bold text-blue-600 mb-2"
              data-target="4"
            >
              0+
            </div>
            <p className="text-gray-600 font-medium">Years of Excellence</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <div
              className="stat-counter bg-transparent text-4xl font-bold text-blue-600 mb-2"
              data-target="99"
            >
              0+
            </div>
            <p className="text-gray-600 font-medium">Projects Completed</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <div
              className="stat-counter bg-transparent text-4xl font-bold text-blue-600 mb-2"
              data-target="10"
            >
              0+
            </div>
            <p className="text-gray-600 font-medium">Expert Team Members</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <div
              className="stat-counter bg-transparent text-4xl font-bold text-blue-600 mb-2"
              data-target="99"
            >
              0+
            </div>
            <p className="text-gray-600 font-medium">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
