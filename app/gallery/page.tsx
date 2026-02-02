"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const items = [
    { src: "img/demo.png", title: "Product Demo", tag: "Showcase" },
    { src: "img/integrations.png", title: "Integrations", tag: "Diagram" },
    { src: "img/pict.png", title: "Event Moment", tag: "Event" },
    { src: "img/Artboard 1.svg", title: "Brand Artwork", tag: "Brand" },
    { src: "img/calendar.svg", title: "Planning", tag: "Illustration" },
    { src: "img/congrat.svg", title: "Congratulations", tag: "Illustration" },
  ];

  const handleOpen = (index: number) => {
    setSelectedIndex(index);
    setIsAnimating(false);
    setTimeout(() => setIsAnimating(true), 10);
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setSelectedIndex(null), 250);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (selectedIndex !== null) {
      window.addEventListener("keydown", onKey);
    }
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  return (
    <>
      <Navbar />
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            >
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">
                Gallery
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Koleksi visual dari aktivitas, produk, dan karya desain kami.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div
                key={item.src}
                role="button"
                tabIndex={0}
                onClick={() => handleOpen(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleOpen(index);
                  }
                }}
                className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
                  <img
                    src={encodeURI(item.src)}
                    alt={item.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/img/pict.png';
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mt-6">
                  {item.title}
                </h3>
                <div className="flex justify-start space-x-3 mt-4">
                  <span className="bg-blue-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          >
            <div
              className={`relative max-w-5xl w-full mx-4 overflow-hidden transform transition duration-300 ${isAnimating ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-3 right-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-label="Close image viewer"
              >
                <span className="text-xl leading-none">&times;</span>
              </button>

              <div className="bg-gray-900 rounded-2xl shadow-2xl flex items-center justify-center">
                <img
                  src={encodeURI(items[selectedIndex].src)}
                  alt={items[selectedIndex].title}
                  className="max-h-[80vh] w-auto object-contain"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/img/pict.png';
                  }}
                />
              </div>

              <div className="px-6 py-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {items[selectedIndex].title}
                  </h3>
                  <p className="mt-1 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                    {items[selectedIndex].tag}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}
