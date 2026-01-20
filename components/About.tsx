export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Jaxer Grup
            </span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Founded in 2008, Jaxer Grup Indonesia has emerged as a leading
            technology and business solutions provider, transforming industries
            through innovation and excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div data-aos="fade-right">
            <img
              src="img/jaxer.png"
              alt="About Jaxer"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div data-aos="fade-left">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Jaxer Grup Indonesia began as a vision to bridge the gap between
              technology and business needs in the Indonesian market. What
              started as a small technology consultancy has evolved into a
              comprehensive business solutions provider.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Today, we operate multiple subsidiaries including QRUPI (digital
              payments), MDN Tech (technology solutions), and JAR (premium
              products), each leading their respective markets with innovative
              solutions.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <i className="fas fa-rocket text-3xl text-blue-600 mb-2"></i>
                <h4 className="font-semibold text-gray-800">Innovation</h4>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <i className="fas fa-handshake text-3xl text-green-600 mb-2"></i>
                <h4 className="font-semibold text-gray-800">Partnership</h4>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <i className="fas fa-award text-3xl text-purple-600 mb-2"></i>
                <h4 className="font-semibold text-gray-800">Excellence</h4>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <i className="fas fa-users text-3xl text-yellow-600 mb-2"></i>
                <h4 className="font-semibold text-gray-800">Community</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-bullseye text-3xl text-blue-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses and individuals through innovative
              technology solutions that drive growth, efficiency, and
              sustainable success in the digital age.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-eye text-3xl text-purple-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be the most trusted and innovative technology partner in
              Southeast Asia, shaping the future of business through
              cutting-edge solutions.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-heart text-3xl text-green-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Values
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Integrity, Innovation, Excellence, Collaboration, and
              Customer-centricity guide every decision we make and every
              solution we deliver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
