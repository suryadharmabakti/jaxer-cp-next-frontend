import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-900 to-purple-800"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-bounce flex items-center justify-center duration-[3000ms]">
          <img
            src="img/jaxer.png"
            alt="Jaxer Grup Indonesia"
            className="h-20 w-20 object-contain"
          />
        </div>
        <div
          className="absolute top-40 right-20 w-20 h-20 bg-white rounded-full animate-bounce flex items-center justify-center"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        >
          <img
            src="img/jaxer.png"
            alt="Jaxer Grup Indonesia"
            className="h-12 w-12 object-contain"
          />
        </div>
        <div
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-full animate-bounce flex items-center justify-center"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        >
          <img
            src="img/jaxer.png"
            alt="Jaxer Grup Indonesia"
            className="h-10 w-10 object-contain"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
        <h1
          data-aos="fade-up"
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Jaxer Grup
          <span className="block text-yellow-400">Indonesia</span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90"
        >
          Leading innovation in technology, finance, and business solutions across
          Indonesia and Southeast Asia
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#about"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105"
          >
            Learn More About Us
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about">
          <i className="fas fa-chevron-down text-white text-2xl"></i>
        </a>
      </div>
    </section>
  );
}
