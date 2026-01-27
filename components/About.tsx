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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">
              Jaxer Teknologi Indonesia
            </span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            
            PT Jaxer Teknologi Indonesia is a company in the
            field of Information and Communication
            Technology (ICT) that focuses on IT hardware
            production and the development of digital
            education systems.
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
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Welcome to PT Jaxer Teknologi Indonesia</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are proud to be part of Indonesia's digital transformation by delivering
              innovative, reliable, and affordable technology solutions. Driven by the
              vision to Empower Indonesia's Digital Future, we are committed to
              supporting society and the education sector through high-quality
              products designed domestically.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe that with the right technology, we can build a future generation
              that is more advanced and ready to face global challenges. Thank you for
              trusting PT Jaxer Group Indonesia. Together, let us create a better future!
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
  {/* Our Mission */}
  <div
    data-aos="fade-up"
    data-aos-delay="0"
    className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
  >
    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>

<ul className="text-gray-600 leading-relaxed space-y-2 text-justify">
  <li>
    Providing innovative, reliable, and affordable IT solutions.
  </li>
  <li>
    Supporting Indonesia&apos;s digital transformation through
    high-quality local technology.
  </li>
  <li>
    Contributing to improving the quality of education with innovative
    technology and learning systems.
  </li>
</ul>



  </div>

  {/* Our Vision */}
  <div
    data-aos="fade-up"
    data-aos-delay="200"
    className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
  >
    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 12s4.5-7.5 10.5-7.5S22.5 12 22.5 12 18 19.5 12 19.5 1.5 12 1.5 12z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
    <ul className="text-gray-600 leading-relaxed  pl-5 space-y-2 text-justify">

    </ul>
    <p className="text-gray-600 leading-relaxed">
      Empowering Indonesia's Digital Future
    </p>
  </div>

  {/* Our Values */}
  <div
    data-aos="fade-up"
    data-aos-delay="400"
    className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
  >
    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-4.5-7-10a4 4 0 017-2 4 4 0 017 2c0 5.5-7 10-7 10z"/>
      </svg>
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
    <ul className="text-gray-600 leading-relaxed list-disc pl-5 space-y-2 text-justify">

    </ul>
    <p className="text-gray-600 leading-relaxed">
      Inovation, Sustainability, Collaboration, Dedication to Education.
    </p>
  </div>
</div>

      </div>
    </section>
  );
}
