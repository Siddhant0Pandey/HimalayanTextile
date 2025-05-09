import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Contact() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 text-gray-800 px-6 py-16 md:px-20 lg:px-40"
    >
      {/* Header */}
      <div className="text-center mb-14 fade-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Contact Us</h1>
        <p className="text-lg text-gray-600">
          We'd love to hear from you. Send us a message below.
        </p>
      </div>

      {/* Grid */}
      <div className="grid lg:grid-cols-2 gap-12 fade-up">
        {/* Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Contact Info</h3>
            <p className="text-gray-600">
              Reach out to us through any of the following channels:
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Email</h4>
            <p className="text-green-600">info@hti-com-np</p>
          </div>

          <div>
            <h4 className="font-semibold">Phone</h4>
            <p className="text-green-600">+977 98413351</p>
          </div>

          <div>
            <h4 className="font-semibold">Address</h4>
            <p>Liwang 02<br />Rolpa 22100</p>
          </div>
        </div>

        {/* Form */}
        <form className="bg-white shadow-xl rounded-xl p-8 space-y-6">
          <div className="fade-up">
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-green-500 focus:ring-1 focus:ring-green-300"
            />
          </div>

          <div className="fade-up">
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-green-500 focus:ring-1 focus:ring-green-300"
            />
          </div>

          <div className="fade-up">
            <label className="block font-medium mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-green-500 focus:ring-1 focus:ring-green-300 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition-all fade-up"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map */}
      <div className="mt-20 fade-up rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0861348480793!2d-122.41941548468114!3d37.7749297797594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c13c3aef1%3A0x9e3c3bc3b2bb5f25!2sTextile%20HQ!5e0!3m2!1sen!2sus!4v1616174202123!5m2!1sen!2sus"
          className="w-full h-64 md:h-96 border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
