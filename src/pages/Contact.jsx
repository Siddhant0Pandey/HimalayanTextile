import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-light text-gray-900 px-6 py-12 md:px-16 lg:px-32 lg:pt-38   ">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 animate-fadeInUp delay-200">
          We'd love to hear from you. Whether you have a question about features, pricing, or anything else.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid md:grid-cols-2 gap-10 animate-fadeInUp delay-300">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
            <p className="text-gray-600">Feel free to reach out to us via any method below.</p>
          </div>
          <div>
            <h4 className="font-medium">Email</h4>
            <p className="text-[#1fa951]">himalayan@info.com</p>
          </div>
          <div>
            <h4 className="font-medium">Phone</h4>
            <p className="text-[#1fa951]">+1 (123) 456-7890</p>
          </div>
          <div>
            <h4 className="font-medium">Address</h4>
            <p>Bhagwan Pau<br />Kathmandu, Nepal</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-md rounded-lg p-8 space-y-6">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md
              focus:border-[#1fa951] transition-all"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#1fa951] transition-all"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#1fa951] transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1fa951] hover:bg-[#158f3c] text-white font-semibold py-3 rounded-md transition-all"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Optional Map */}
      <div className="mt-16 rounded-lg overflow-hidden shadow-lg animate-fadeInUp delay-500">
        <iframe
          title="Our Location"
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
