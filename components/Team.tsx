export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">
              Leadership
            </span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Meet the visionaries driving innovation at Jaxer Grup Indonesia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 justify-items-center">
          {/* Ansari Kadir */}
          <div data-aos="fade-up" data-aos-delay="0" className="text-center">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center bg-white border border-gray-200 shadow-md">
              <img
                src="img/ansari kadir.png"
                alt="Ansari Kadir"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Ansari Kadir
            </h3>
            <p className="text-blue-600 font-semibold mb-3">
              Chief Executive Officer
            </p>
            <p className="text-gray-600 text-sm">
              Leading strategic vision and company growth with 20+ years in
              technology
            </p>
            <div className="flex justify-center space-x-3 mt-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>

          {/* Fuad Pratama */}
          <div data-aos="fade-up" data-aos-delay="200" className="text-center">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center bg-white border border-gray-200 shadow-md">
              <img
                src="img/fuad pratama.png"
                alt="Fuad Pratama"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Fuad Pratama
            </h3>
            <p className="text-green-600 font-semibold mb-3">
              General Manager Business Development
            </p>
            <p className="text-gray-600 text-sm">
              Driving technical innovation and overseeing product development
              initiatives
            </p>
            <div className="flex justify-center space-x-3 mt-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>

          {/* Fatma Abdullah */}
          <div data-aos="fade-up" data-aos-delay="400" className="text-center">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center bg-white border border-gray-200 shadow-md">
              <img
                src="img/fuad pratama.png"
                alt="Fatma Abdullah"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Fatma Abdullah
            </h3>
            <p className="text-purple-600 font-semibold mb-3">
              Chief Financial Officer
            </p>
            <p className="text-gray-600 text-sm">
              Managing financial strategy and ensuring sustainable business
              growth
            </p>
            <div className="flex justify-center space-x-3 mt-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>
        
          {/* Surya Dharma Bakti RM 
          <div data-aos="fade-up" data-aos-delay="600" className="text-center">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600">
              <img
                src="img/ansari kadir.png"
                alt="Surya Dharma Bakti RM"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Surya Dharma Bakti RM
            </h3>
            <p className="text-yellow-600 font-semibold mb-3">
              Chief Operating Officer
            </p>
            <p className="text-gray-600 text-sm">
              Optimizing operations and ensuring excellence in service delivery
            </p>
            <div className="flex justify-center space-x-3 mt-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>*/}
        </div> 
      </div>
    </section>
  );
}
