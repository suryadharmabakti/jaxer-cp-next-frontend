import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  const items = [
    { src: "img/demo.png", title: "Product Demo", tag: "Showcase" },
    { src: "img/integrations.png", title: "Integrations", tag: "Diagram" },
    { src: "img/pict.png", title: "Event Moment", tag: "Event" },
    { src: "img/Artboard 1.svg", title: "Brand Artwork", tag: "Brand" },
    { src: "img/calendar.svg", title: "Planning", tag: "Illustration" },
    { src: "img/congrat.svg", title: "Congratulations", tag: "Illustration" },
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
              Koleksi visual dari aktivitas, produk, dan karya desain kami.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <div
                key={item.src}
                className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
              >
                <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-contain"
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
      <Footer />
    </>
  );
}
