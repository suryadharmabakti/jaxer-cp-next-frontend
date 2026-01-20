export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Services
            </span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive business and technology solutions tailored to drive your
            success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-laptop-code text-3xl text-blue-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Technology Solutions
            </h3>
            <p className="text-gray-600 mb-6">
              Custom software development, system integration, and digital
              transformation services.
            </p>
            <ul className="text-gray-500 space-y-2">
              <li>
                <i className="fas fa-check text-green-500 mr-2"></i>Web & Mobile
                Development
              </li>
              <li>
                <i className="fas fa-check text-green-500 mr-2"></i>Cloud
                Infrastructure
              </li>
              <li>
                <i className="fas fa-check text-green-500 mr-2"></i>AI & Machine
                Learning
              </li>
            </ul>
          </div>

          {/* Service 2 */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-credit-card text-3xl text-green-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Digital Payments
            </h3>
            <p className="text-gray-600 mb-6">
              Secure and efficient payment solutions through our QRUPI platform.
            </p>
            <ul className="text-gray-500 space-y-2">
              <li>
                <i className="fas fa-check text-green-500 mr-2"></i>QR Code
                Payments
              </li>
              <li>
                <i className="fas fa-check text-green-500 mr-2"></i>Digital
                Wallets
              </li>
              <li>
                <i className="fas fa-check text-green-500 mr-2"></i>Payment
                Gateway
              </li>
            </ul>
          </div>

          {/* Service 3 */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-chart-line text-3xl text-purple-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Business Consulting
            </h3>
            <p className="text-gray-600 mb-6">
              Strategic planning and business optimization to accelerate your
              growth.
            </p>
            <ul className="text-gray-500 space-y-2">
              <li>
                <i className="fas fa-check text-green-500 mr-2"></i>Digital
                Strategy
              </li>
              <li>
                <i className="fas fa-check text-green-500 mr-2"></i>Process
                Optimization
              </li>
              <li>
                <i className="fas fa-check text-green-500 mr-2"></i>Market
                Analysis
              </li>
            </ul>
          </div>

          {/* Service 4 */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-cogs text-3xl text-yellow-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              System Integration
            </h3>
            <p className="text-gray-600 mb-6">
              Seamless integration of various business systems and applications.
            </p>
            <ul className="text-gray-500 space-y-2">
              <li>
                <i className="fas fa-check text-green-500 mr-2"></i>ERP
                Integration
              </li>
              <li>
                <i className="fas fa-check text-green-500 mr-2"></i>API
                Development
              </li>
              <li>
                <i className="fas fa-check text-green-500 mr-2"></i>Data
                Migration
              </li>
            </ul>
          </div>

          {/* Service 5 */}
          <div
            data-aos="fade-up"
            data-aos-delay="800"
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-shield-alt text-3xl text-red-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Cybersecurity
            </h3>
            <p className="text-gray-600 mb-6">
              Comprehensive security solutions to protect your digital assets.
            </p>
            <ul className="text-gray-500 space-y-2">
              <li>
                <i className="fas fa-check text-green-500 mr-2"></i>Security
                Audits
              </li>
              <li>
                <i className="fas fa-check text-green-500 mr-2"></i>Threat
                Protection
              </li>
              <li>
                <i className="fas fa-check text-green-500 mr-2"></i>Compliance
                Management
              </li>
            </ul>
          </div>

          {/* Service 6 */}
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-graduation-cap text-3xl text-indigo-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Training & Support
            </h3>
            <p className="text-gray-600 mb-6">
              Professional training and ongoing support for your team.
            </p>
            <ul className="text-gray-500 space-y-2">
              <li>
                <i className="fas fa-check text-green-500 mr-2"></i>Technical
                Training
              </li>
              <li>
                <i className="fas fa-check text-green-500 mr-2"></i>24/7 Support
              </li>
              <li>
                <i className="fas fa-check text-green-500 mr-2"></i>Knowledge
                Transfer
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
