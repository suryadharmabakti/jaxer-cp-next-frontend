"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function GalleryPage() {
  const [selected, setSelected] = useState<{ src: string; title: string; desc?: string; tag?: string } | null>(null);
  const items: { src: string; title: string; desc?: string; tag?: string }[] = [
    { src: "img/dir.jpeg", title: "Meeting dengan Direkotrat Pendidikan", desc: "Pertemuan dengan Direktorat Pendidikan membahas kolaborasi strategis." },
    { src: "img/puspeka.jpg", title: "Audiensi dengan Puspeka", desc: "Audiensi bersama PUSPEKA mengenai program dan dukungan." },
    { src: "img/mal.jpeg", title: "Opening Qrupi Malang", desc: "Peluncuran Qrupi di Malang bersama para stakeholder." },
    { src: "img/Artboard 1.svg", title: "Brand Artwork", desc: "Karya visual brand sebagai identitas perusahaan." },
    { src: "img/calendar.svg", title: "Planning", desc: "Ilustrasi perencanaan kegiatan dan timeline." },
    { src: "img/malang.jpg", title: "TOT Malang", desc: "Training of Trainers di Malang untuk memberdayakan tim." },
  ];

  return (
    <>
      <Navbar />
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Dokumentasi Kegiatan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <div
                key={item.src}
                className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelected({ src: item.src, title: item.title, desc: item.desc, tag: item.tag })}
              >
                <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
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
      </section>
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.src}
              alt={selected.title}
              className="w-full h-full max-h-[70vh] object-contain rounded-xl border border-gray-200"
            />
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-900">{selected.title}</h4>
              {selected.desc && (
                <p className="text-gray-700 mt-2">{selected.desc}</p>
              )}
              {selected.tag && (
                <div className="mt-3">
                  <span className="inline-block bg-blue-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {selected.tag}
                  </span>
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute -top-3 -right-3 bg-white text-gray-900 rounded-full shadow px-3 py-1"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
