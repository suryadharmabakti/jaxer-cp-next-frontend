export default function Stats() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div data-aos="fade-up" data-aos-delay="0">
            <div className="stat-counter text-4xl font-bold text-blue-600 mb-2">
              4+
            </div>
            <p className="text-gray-600 font-medium">Years of Excellence</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="stat-counter text-4xl font-bold text-blue-600 mb-2">
              99+
            </div>
            <p className="text-gray-600 font-medium">Projects Completed</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="stat-counter text-4xl font-bold text-blue-600 mb-2">
              10+
            </div>
            <p className="text-gray-600 font-medium">Expert Team Members</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <div className="stat-counter text-4xl font-bold text-blue-600 mb-2">
              99+
            </div>
            <p className="text-gray-600 font-medium">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
