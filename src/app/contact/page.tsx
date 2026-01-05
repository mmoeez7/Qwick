"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import ServicesHeader from "@/components/Services/ServicesHeader";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    serviceLocation: "",
    serviceType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission (replace with actual API call)
    try {
      // TODO: Replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        businessName: "",
        email: "",
        phone: "",
        serviceLocation: "",
        serviceType: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative h-auto">
      {/* Navbar */}
      <Navbar />
      
      {/* Header */}
      <ServicesHeader title="Contact Us" />
      
      {/* Contact Form Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
                Have questions about our commercial kitchen hood cleaning services? We're here to help. Reach out to us and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C1FF72]/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#C1FF72]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                  <p className="text-gray-300">Sterling, Virginia</p>
                  <p className="text-sm text-gray-400 mt-1">Service Areas: Virginia, Maryland, Washington DC, Pennsylvania, New Jersey, and North Carolina</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C1FF72]/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#C1FF72]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <a
                    href="mailto:contact@qwicksolutions.com"
                    className="text-[#C1FF72] hover:underline"
                  >
                    contact@qwicksolutions.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C1FF72]/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#C1FF72]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                  <a
                    href="tel:+12026438113"
                    className="text-[#C1FF72] hover:underline"
                  >
                    +1 (202) 643-8113
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Request a Quote</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name <span className="text-[#C1FF72]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C1FF72] transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Business Name */}
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-300 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C1FF72] transition-colors"
                  placeholder="Your Business Name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address <span className="text-[#C1FF72]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C1FF72] transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number <span className="text-[#C1FF72]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C1FF72] transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Service Location */}
              <div>
                <label htmlFor="serviceLocation" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Location <span className="text-[#C1FF72]">*</span>
                </label>
                <input
                  type="text"
                  id="serviceLocation"
                  name="serviceLocation"
                  required
                  value={formData.serviceLocation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C1FF72] transition-colors"
                  placeholder="City, State"
                />
              </div>

              {/* Service Type */}
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Type
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#C1FF72] transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="commercial-hood-cleaning">Commercial Hood Cleaning</option>
                  <option value="grease-trap-line-jetting">Grease Trap & Line Jetting</option>
                  <option value="fire-suppression">Fire Suppression Service</option>
                  <option value="hvac-makeup-air">HVAC & Make-Up Air</option>
                  <option value="pollution-control-unit">Pollution Control Unit (PCU) Service</option>
                  <option value="mechanical-preventive-maintenance">Mechanical Preventive Maintenance</option>
                  <option value="emergency-service">Emergency Service</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message <span className="text-[#C1FF72]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C1FF72] transition-colors resize-none"
                  placeholder="Tell us about your service needs..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C1FF72] text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-900/30 border border-green-700 rounded-lg text-green-300">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-300">
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

