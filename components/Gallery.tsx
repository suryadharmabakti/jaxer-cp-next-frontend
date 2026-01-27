"use client";
import Navbar from "@/components/Navbar";
import { useEffect, useRef, useState } from "react";

type GalleryItem = {
  src: string;
  title: string;
  desc?: string;
  tag?: string;
};

export default function GalleryPage() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const items: GalleryItem[] = [
    { src: "/img/dir.jpeg", title: "Meeting dengan Direktorat Pendidikan", desc: "Pertemuan dengan Direktorat Pendidikan membahas kolaborasi strategis." },
    { src: "/img/puspeka.jpg", title: "Audiensi dengan Puspeka", desc: "Audiensi bersama PUSPEKA mengenai program dan dukungan." },
    { src: "/img/mal.jpeg", title: "Opening Qrupi Malang", desc: "Peluncuran Qrupi di Malang bersama para stakeholder." },
    { src: "/img/malang.jpg", title: "TOT Malang", desc: "Training of Trainers di Malang untuk peningkatan kapasitas." },
    { src: "/img/Artboard 1.svg", title: "Brand Artwork", desc: "Desain visual identitas brand Qrupi." },
    { src: "/img/calendar.svg", title: "Planning", desc: "Perencanaan program dan kegiatan tahunan." },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    resetAutoSlide();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [items.length]);

  const resetAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % items.length);
    }, 5000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    resetAutoSlide();
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + items.length) % items.length);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % items.length);
  };

  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelected(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selected]);

  return (
    <>
      <Navbar />

      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">
                Gallery
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dokumentasi Kegiatan.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative w-full">
            {/* Carousel wrapper */}
            <div className="relative h-56 md:h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-xl bg-gray-100">
              {items.map((item, idx) => (
                <div
                  key={`${item.src}-${idx}`}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    currentSlide === idx ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={encodeURI(item.src)}
                      alt={item.title}
                      className="w-full h-full object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
                      onClick={() => setSelected(item)}
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/img/pict.png';
                      }}
                    />
                  </div>
                  {/* Overlay with title */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 md:p-8 cursor-pointer"
                    onClick={() => setSelected(item)}
                  >
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    {item.desc && (
                      <p className="text-white/90 text-sm md:text-base line-clamp-2">
                        {item.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`h-3 rounded-full transition-all ${
                    currentSlide === idx
                      ? "bg-white w-8"
                      : "bg-white/50 hover:bg-white/80 w-3"
                  }`}
                  aria-current={currentSlide === idx}
                  aria-label={`Slide ${idx + 1}`}
                  onClick={() => goToSlide(idx)}
                />
              ))}
            </div>

            {/* Slider controls */}
            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={prevSlide}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none transition">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>

            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={nextSlide}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none transition">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Modal - Full Size Image */}
      {selected && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
          onClick={() => setSelected(null)}
        >
          {/* Header with title and close button */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: '1rem 1.5rem',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.25)',
            flexShrink: 0
          }}>
            <div style={{ flex: 1, marginRight: '1rem' }}>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 'bold', 
                color: 'white',
                marginBottom: '0.25rem'
              }}>
                {selected.title}
              </h3>
              {selected.desc && (
                <p style={{ 
                  fontSize: '0.875rem', 
                  color: 'rgba(255, 255, 255, 0.7)' 
                }}>
                  {selected.desc}
                </p>
              )}
            </div>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected(null);
              }}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '2.5rem',
                height: '2.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.28)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.29)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Image Container - FIX: Bagian yang hilang */}
          <div 
            style={{
              flex: 1,
              overflow: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={encodeURI(selected.src)}
              alt={selected.title}
              style={{
                display: 'block',
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '0.5rem',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
              onLoad={() => console.log('✅ Image loaded:', selected.src)}
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.src = '/img/pict.png'; // Fallback image
              }}
            />
          </div>

          {/* Footer */}
          <div style={{
            textAlign: 'center',
            padding: '0.75rem',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderTop: '1px solid rgba(255, 255, 255, 0.27)',
            flexShrink: 0
          }}>
            <p style={{ 
              color: 'rgba(156, 163, 175, 0.66)', 
              fontSize: '0.75rem' 
            }}>
              <span style={{ display: 'inline-block', margin: '0 0.5rem' }}>🖱️ Klik di luar untuk menutup</span>
              <span style={{ display: 'inline-block', margin: '0 0.5rem' }}>⌨️ Tekan ESC</span>
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Custom scrollbar for modal */
        div[style*="overflow: auto"]::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        div[style*="overflow: auto"]::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }

        div[style*="overflow: auto"]::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.23);
          border-radius: 4px;
        }

        div[style*="overflow: auto"]::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.35);
        }
      `}</style>
    </>
  );
}
