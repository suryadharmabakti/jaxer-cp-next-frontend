"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
      _captcha: "false",
      _template: "table",
      _subject: String(formData.get("subject") || "New Message from Website"),
    };
    try {
      const res = await fetch("https://formsubmit.co/ajax/itsupport@jaxergrup.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">
              Touch
            </span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Have a question or want to work together? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div data-aos="fade-right" className="space-y-8">
  <div className="bg-white p-8 rounded-2xl shadow-lg">
    <h3 className="text-2xl font-bold text-gray-800 mb-6">
      Contact Information
    </h3>

    <div className="space-y-6">
      {/* Phone */}
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
          <svg
            className="w-6 h-6 text-blue-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3l2 5-2 1a11 11 0 005 5l1-2 5 2v3a2 2 0 01-2 2A16 16 0 013 5z"
            />
          </svg>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
          <p className="text-gray-600">+62 21 21390317</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
          <svg
            className="w-6 h-6 text-blue-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l9 6 9-6M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
            />
          </svg>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800">Email</h4>
          <p className="text-gray-600">itsupport@jaxergrup.com</p>
        </div>
      </div>

      {/* Office */}
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
          <svg
            className="w-6 h-6 text-blue-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 11c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21s7-4.5 7-10a7 7 0 10-14 0c0 5.5 7 10 7 10z"
            />
          </svg>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800">Office</h4>
          <p className="text-gray-600">
            Jl. Cempaka Putih Tengah XVII No.F33.
            <br />
            Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10510
          </p>
        </div>
      </div>
    </div>
    </div>

            <div className="bg-white p-2 rounded-2xl shadow-lg overflow-hidden h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4896.365745857295!2d106.86554557585326!3d-6.174107993813293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f53c7c13a50d%3A0x325b1492c9f2bda5!2sJaxer%20Indonesia!5e1!3m2!1sen!2sid!4v1768980448643!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div
            data-aos="fade-left"
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send us a Message
            </h3>
            {status === "success" && (
              <div className="mb-4 rounded-lg bg-green-100 text-green-700 px-4 py-3">
                Message sent successfully
              </div>
            )}
            {status === "error" && (
              <div className="mb-4 rounded-lg bg-red-100 text-red-700 px-4 py-3">
                Failed to send message. Please try again.
              </div>
            )}
            <form
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition duration-300"
                    placeholder="Ringgo"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition duration-300"
                    placeholder="Ringgo@contoh.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition duration-300"
                  placeholder="Pelaporan"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  name="message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition duration-300"
                  placeholder="Pesan Kamu di sini yaw..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
