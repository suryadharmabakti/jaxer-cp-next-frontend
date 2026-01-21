"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClientBehaviors() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });

    // Animate Counters - Logic moved to Stats.tsx component

    // Scroll to Top Logic
    const scrollToTopBtn = document.getElementById("scrollToTop");
    const updateScrollTop = () => {
      const y = window.pageYOffset;
      if (scrollToTopBtn) {
        if (y > 300) {
          scrollToTopBtn.style.opacity = "1";
          scrollToTopBtn.style.pointerEvents = "auto";
        } else {
          scrollToTopBtn.style.opacity = "0";
          scrollToTopBtn.style.pointerEvents = "none";
        }
      }
    };
    window.addEventListener("scroll", updateScrollTop);
    if (scrollToTopBtn) {
      scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // Smooth Scrolling for Anchors
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const targetSelector =
          (anchor as HTMLAnchorElement).getAttribute("href") || "";
        const target = document.querySelector(targetSelector);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    // Intersection Observer for Counters - logic now handled inside Stats.tsx

    return () => {
      window.removeEventListener("scroll", updateScrollTop);
    };
  }, []);

  return null;
}
