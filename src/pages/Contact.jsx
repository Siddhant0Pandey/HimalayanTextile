/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const containerRef = useRef(null);
  const formRef = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [errors, setErrors] = useState({
    user_name: false,
    user_email: false,
    message: false,
  });

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");
    elements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 1s ease";

      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, index * 200);
    });
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }

    if (statusMessage) {
      setStatusMessage("");
    }
  };

  const validateForm = () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const newErrors = {
      user_name: !formData.user_name || !nameRegex.test(formData.user_name),
      user_email: !formData.user_email || !emailRegex.test(formData.user_email),
      message: !formData.message.trim(),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatusMessage("Please correct the highlighted fields.");
      return;
    }

    setStatusMessage("Sending...");
    console.log("Sending form data:", formData);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatusMessage("Message sent successfully!");
          setFormData({ user_name: "", user_email: "", message: "" });
          setErrors({ user_name: false, user_email: false, message: false });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatusMessage("Failed to send message. Please try again later.");
        }
      );
  };

  const getInputClassName = (fieldName) => {
    const baseClass =
      "w-full px-4 py-2 border rounded-md transition-all duration-200";
    const normalClass =
      "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-300";
    const errorClass =
      "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-300 bg-red-50";

    return `${baseClass} ${errors[fieldName] ? errorClass : normalClass}`;
  };

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
            <p>
              Liwang 02
              <br />
              Rolpa 22100
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-xl p-8 space-y-6"
        >
          <div className="fade-up">
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Your Name"
              className={getInputClassName("user_name")}
            />
            {errors.user_name && (
              <p className="text-red-500 text-sm mt-1">
                {!formData.user_name
                  ? "Name is required"
                  : "Name should only contain letters and spaces"}
              </p>
            )}
          </div>

          <div className="fade-up">
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={getInputClassName("user_email")}
            />
            {errors.user_email && (
              <p className="text-red-500 text-sm mt-1">
                {!formData.user_email
                  ? "Email is required"
                  : "Please enter a valid email address"}
              </p>
            )}
          </div>

          <div className="fade-up">
            <label className="block font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your message..."
              className={getInputClassName("message")}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">Message is required</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white cursor-pointer font-semibold py-3 rounded-md transition-all"
          >
            Send Message
          </button>

          {statusMessage && (
            <p
              className={`text-center text-sm fade-up ${
                statusMessage.includes("successfully")
                  ? "text-green-700"
                  : statusMessage.includes("correct")
                  ? "text-red-600"
                  : "text-blue-600"
              }`}
            >
              {statusMessage}
            </p>
          )}
        </form>
      </div>

      {/* Map */}
      <div className="mt-20 fade-up rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.7890008687627!2d82.63087324208507!3d28.30471515000736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3997ddf0c876d2e9%3A0xfd4b62bd9905fe44!2sHimalayan%20Textile%20Industries!5e0!3m2!1sen!2snp!4v1747030788211!5m2!1sen!2snp"
          className="w-full h-64 md:h-96 border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
