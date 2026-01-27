export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">
              Portofolio
            </span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Leading brands under the Jaxer Teknologi Indonesia umbrella
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* QRUPI */}
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 text-center h-full flex flex-col"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full ring-1 ring-gray-200 flex items-center justify-center">
              <img
                src="img/Qrupi.svg"
                alt="QRUPI"
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">QRUPI</h3>
            <div className="flex justify-center gap-2 mb-4">
              <span className="border border-blue-600 text-blue-600 px-2 py-0.5 rounded-full text-xs">
                FinTech
              </span>
              <span className="border border-blue-600 text-blue-600 px-2 py-0.5 rounded-full text-xs">
                Payments
              </span>
            </div>
            <p className="text-gray-600 mb-6 text-justify">
              QRUPI is a digital platform designed to enhance communication and collaboration between schools, teachers, and parents. The platform provides various features to support teaching and learning processes, reporting.
            </p>
            <div className="flex justify-center space-x-4 mb-6">
             
            </div>
            <a
              href="https://www.qrupi.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 inline-block mt-auto"
            >
              Visit Website
            </a>  
          </div>

          {/* MDN Tech */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 text-center h-full flex flex-col"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full ring-1 ring-gray-200 flex items-center justify-center">
              <img
                src="img/MDN.svg"
                alt="MDN Tech"
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">MDN Tech</h3>
            <div className="flex justify-center gap-2 mb-4">
              <span className="border border-blue-600 text-blue-600 px-2 py-0.5 rounded-full text-xs">
                Technology
              </span>
              <span className="border border-blue-600 text-blue-600 px-2 py-0.5 rounded-full text-xs">
                Hardware
              </span>
            </div>
            <p className="text-gray-600 mb-6 text-justify">
              Advanced technology solutions provider specializing in enterprise
              software and hardware integration.
            </p>
            <div className="flex justify-center space-x-4 mb-6">
             
            </div>
            <a
              href="https://mdnindonesia.co.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 inline-block mt-auto"
            >
              Visit Website
            </a>
          </div>

          {/* JAROLIVA */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 text-center h-full flex flex-col"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full ring-1 ring-gray-200 flex items-center justify-center">
              <img
                src="img/JAR.svg"
                alt="JAROLIVA"
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-blue mb-4">JAROLIVA</h3>
            <div className="flex justify-center gap-2 mb-4">
              <span className="border border-blue-600 text-blue-600 px-2 py-0.5 rounded-full text-xs">
                Food & Beverage
              </span>
              <span className="border border-blue-600 text-blue-600 px-2 py-0.5 rounded-full text-xs">
                Premium
              </span>
            </div>
            <p className="text-gray-600 mb-6 text-justify">
              Premium olive oil and gourmet food products bringing international
              quality to Indonesian markets.
            </p>
            <div className="flex justify-center space-x-4 mb-6">
             
            </div>
            <a
              href="https://jaxlab.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 inline-block mt-auto"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
