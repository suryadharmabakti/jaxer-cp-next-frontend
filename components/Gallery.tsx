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
    { src: "/img/Sosialisasi.jpeg", title: "TOT Malang", desc: "Training of Trainers di Malang untuk peningkatan kapasitas." },
    { src: "/img/dar.jpeg", title: "Audiensi dengan Puspeka", desc: "Audiensi bersama PUSPEKA mengenai program dan dukungan." },
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
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
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
          <div className="relative w-full mb-16">
            {/* Carousel wrapper */}
            <div className="relative h-56 md:h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-xl bg-gray-100">
              {items.map((item, idx) => (
                <div
                  key={`carousel-${item.src}-${idx}`}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    currentSlide === idx ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={encodeURI(item.src)}
                      alt={item.title}
                      className="gallery-image w-full h-full object-contain cursor-pointer"
                      onClick={() => setSelected(item)}
                      loading="lazy"
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

          {/* Grid Gallery - All Photos */}
        </div>
      </section>

      {/* The Modal */}
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          {/* The Close Button */}
          <span className="close" onClick={() => setSelected(null)}>&times;</span>
          
          {/* Modal Content (The Image) */}
          <img 
            className="modal-content" 
            src={encodeURI(selected.src)} 
            alt={selected.title}
            onClick={(e) => e.stopPropagation()}
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/img/pict.png';
            }}
          />
          
          {/* Modal Caption (Image Text) */}
          <div id="caption">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              {selected.title}
            </h3>
            {selected.desc && <p>{selected.desc}</p>}
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

        /* Gallery Image Hover Effect */
        .gallery-image {
          transition: 0.3s;
        }

        .gallery-image:hover {
          opacity: 0.7;
        }

        /* Gallery Card */
        .gallery-card {
          transition: all 0.3s ease;
        }

        .gallery-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        /* The Modal (background) */
        .modal {
          display: block;
          position: fixed;
          z-index: 9999;
          padding-top: 100px;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgb(0,0,0);
          background-color: rgba(0,0,0,0.9);
        }

        /* Modal Content (image) */
        .modal-content {
          margin: auto;
          display: block;
          width: 80%;
          max-width: 700px;
          -webkit-animation-name: zoom;
          -webkit-animation-duration: 0.6s;
          animation-name: zoom;
          animation-duration: 0.6s;
        }

        /* Caption of Modal Image */
        #caption {
          margin: auto;
          display: block;
          width: 80%;
          max-width: 700px;
          text-align: center;
          color: #ccc;
          padding: 10px 0;
          min-height: 150px;
          -webkit-animation-name: zoom;
          -webkit-animation-duration: 0.6s;
          animation-name: zoom;
          animation-duration: 0.6s;
        }

        /* Add Animation */
        @-webkit-keyframes zoom {
          from {-webkit-transform:scale(0)} 
          to {-webkit-transform:scale(1)}
        }

        @keyframes zoom {
          from {transform:scale(0)} 
          to {transform:scale(1)}
        }

        /* The Close Button */
        .close {
          position: absolute;
          top: 15px;
          right: 35px;
          color: #f1f1f1;
          font-size: 40px;
          font-weight: bold;
          transition: 0.3s;
          cursor: pointer;
          z-index: 10000;
        }

        .close:hover,
        .close:focus {
          color: #bbb;
          text-decoration: none;
          cursor: pointer;
        }

        /* 100% Image Width on Smaller Screens */
        @media only screen and (max-width: 700px) {
          .modal {
            padding-top: 50px;
          }

          .modal-content {
            width: 100%;
          }

          .close {
            top: 10px;
            right: 20px;
            font-size: 30px;
          }

          #caption {
            font-size: 0.875rem;
            padding: 8px;
          }
        }
      `}</style>
    </>
  );
}