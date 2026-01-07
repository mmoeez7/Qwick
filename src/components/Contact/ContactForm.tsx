"use client";

import { useState } from "react";

interface ContactFormProps {
  onSubmit?: (formData: any) => Promise<void>;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    phoneCountryCode: "US",
    city: "",
    state: "",
    message: "",
    businessName: "",
    serviceUrgency: "Routine / next available",
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

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!res.ok) {
          throw new Error("Failed to send");
        }
      }
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        phoneCountryCode: "US",
        city: "",
        state: "",
        message: "",
        businessName: "",
        serviceUrgency: "Routine / next available",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <p 
        data-animate
        className="text-base sm:text-lg text-gray-700 leading-relaxed"
      >
        Use the form below to tell us about your kitchen, or reach out by phone or email if you prefer to talk directly with a member of our team.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div data-animate>
          <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#A9FF3E] focus:ring-1 focus:ring-[#A9FF3E] transition-colors"
            placeholder="John Doe"
          />
        </div>

        {/* Email and Phone Number in a row */}
        <div data-animate className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#A9FF3E] focus:ring-1 focus:ring-[#A9FF3E] transition-colors"
              placeholder="john@example.com"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
              Phone number
            </label>
            <div className="relative">
              <select
                id="phoneCountryCode"
                name="phoneCountryCode"
                value={formData.phoneCountryCode}
                onChange={handleChange}
                className="absolute left-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-transparent border-0 text-gray-900 focus:outline-none z-10 appearance-none cursor-pointer font-medium"
              >
                <option value="US">US</option>
                <option value="CA">CA</option>
                <option value="UK">UK</option>
              </select>
              <div className="absolute left-12 top-1/2 -translate-y-1/2 w-px h-6 bg-gray-300 z-10"></div>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 pl-20 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#A9FF3E] focus:ring-1 focus:ring-[#A9FF3E] transition-colors"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>
        </div>

        {/* Location - City and State in a row */}
        <div data-animate className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Location - City */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-900 mb-2">
              Location - city
            </label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-[#A9FF3E] focus:ring-1 focus:ring-[#A9FF3E] transition-colors"
            >
              <option value="">Select city</option>
              <option value="Sterling">Sterling</option>
              <option value="Washington">Washington</option>
              <option value="Baltimore">Baltimore</option>
              <option value="Philadelphia">Philadelphia</option>
              <option value="Newark">Newark</option>
              <option value="Charlotte">Charlotte</option>
            </select>
          </div>

          {/* Location - State */}
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-900 mb-2">
              Location - state
            </label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-[#A9FF3E] focus:ring-1 focus:ring-[#A9FF3E] transition-colors"
            >
              <option value="">Select state</option>
              <option value="VA">Virginia</option>
              <option value="MD">Maryland</option>
              <option value="DC">Washington DC</option>
              <option value="PA">Pennsylvania</option>
              <option value="NJ">New Jersey</option>
              <option value="NC">North Carolina</option>
            </select>
          </div>
        </div>

        {/* How can we help? */}
        <div data-animate>
          <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#A9FF3E] focus:ring-1 focus:ring-[#A9FF3E] transition-colors resize-none"
            placeholder="Tell us about your service needs..."
          />
        </div>

        {/* Business / Organization Name */}
        <div data-animate>
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-900 mb-2">
            Business / Organization Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#A9FF3E] focus:ring-1 focus:ring-[#A9FF3E] transition-colors"
              placeholder="Your Business Name"
            />
          </div>
        </div>

        {/* How soon do you need service? */}
        <div data-animate>
          <label htmlFor="serviceUrgency" className="block text-sm font-medium text-gray-900 mb-2">
            How soon do you need service?
          </label>
          <select
            id="serviceUrgency"
            name="serviceUrgency"
            value={formData.serviceUrgency}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-[#A9FF3E] focus:ring-1 focus:ring-[#A9FF3E] transition-colors"
          >
            <option value="Routine / next available">Routine / next available</option>
            <option value="Within a week">Within a week</option>
            <option value="Within 2-3 days">Within 2-3 days</option>
            <option value="Emergency / ASAP">Emergency / ASAP</option>
          </select>
        </div>

        {/* Submit Button */}
        <div data-animate className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#A9FF3E] text-black px-8 py-3 rounded-4xl border-2 border-black font-semibold hover:bg-black hover:text-white transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div 
            data-animate
            className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
          >
            Thank you! Your message has been sent successfully. We'll get back to you soon.
          </div>
        )}
        {submitStatus === "error" && (
          <div 
            data-animate
            className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
          >
            Something went wrong. Please try again or contact us directly.
          </div>
        )}
      </form>
    </div>
  );
}

