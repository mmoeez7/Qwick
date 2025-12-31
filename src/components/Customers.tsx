import Image from "next/image";

export default function Customers() {
  const testimonials = [
    {
      name: "Scott K.",
      role: "Project Manager, Security",
      testimonial: "The single most impressive thing about Qwick is how fast they respond. At times we've reported an issue or service request and they fixed it within 10-15 minutes.",
      avatar: "/customers/Testimonial.svg" // You'll need to add actual avatar images
    },
    {
      name: "Scott K.",
      role: "Cloud Kitchen Operator, Dubai",
      testimonial: "It's like having a professional service team that understands our needs perfectly, but better tailored for our region.",
      avatar: "/customers/Testimonial.svg"
    },
    {
      name: "Maya Patel",
      role: "Franchise Group, Qatar",
      testimonial: "We onboarded 12 branches in under 3 weeks with full control and excellent service quality throughout.",
      avatar: "/customers/Testimonial.svg"    
    },
    {
      name: "Alena Oliver",
      role: "Engineering Manager, Replit",
      testimonial: "The single most impressive thing about Qwick is how fast they respond. At times we've reported an issue or service request and they fixed it within 10-15 minutes.",
      avatar: "/customers/Testimonial.svg"
    },
    {
      name: "Alex Rivera",
      role: "Cyber Security Expert",
      testimonial: "The single most impressive thing about Qwick is how fast they respond. At times we've reported an issue or service request and they fixed it within 10-15 minutes.",
      avatar: "/customers/Testimonial.svg"
    },
    {
      name: "David Kim",
      role: "HR Director at Catalyst Industries",
      testimonial: "The single most impressive thing about Qwick is how fast they respond. At times we've reported an issue or service request and they fixed it within 10-15 minutes.",
      avatar: "/customers/Testimonial.svg"
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#A9FF3E] to-black bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          
          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-5 font-semibold">
            Most Valued Feedbacks from our top notch clients / customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Avatar and Info */}
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                    {testimonial.avatar ? (
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#C1FF72] to-gray-300 flex items-center justify-center text-gray-600 font-bold text-lg sm:text-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-sm md:text-base font-bold text-gray-800 mb-0.5 sm:mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-xs sm:text-sm md:text-md text-gray-700 leading-relaxed flex-1">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

