import Image from "next/image";

export default function Customers() {
  const testimonials = [
    {
      name: "Scott K.",
      role: "Restaurant General Manager, Sterling, VA",
      testimonial: "The single most impressive thing about Qwick Services and Solutions is how quickly they respond. When our hood system failed during dinner rush, they arrived the same night, cleaned the entire system, and had us back in full operation before opening the next day.",
      avatar: "/Home/Customers/Testimonial.svg"
    },
    {
      name: "Maya P.",
      role: "Multi-Unit Franchise Owner, Northern Virginia",
      testimonial: "Qwick onboarded 8 of our locations in less than 2 weeks, set up a clear cleaning schedule, and provided detailed after-service reports for every visit. Our health and fire inspections have been smoother than ever since partnering with them.",
      avatar: "/Home/Customers/Maya.png"    
    },
    {
      name: "Alex R.",
      role: "Facilities Director, Hotel Group – DC Metro",
      testimonial: "Qwick manages our hood, duct, and rooftop fan cleaning across multiple kitchens, plus hinge kits and grease containment. Their team understands NFPA 96 requirements, so we stay compliant without chasing paperwork or follow-ups.",
      avatar: "/Home/Customers/Alex.png"
    },
    {
      name: "Alena O.",
      role: "Property Manager, Shared Commercial Kitchens",
      testimonial: "What stands out about Qwick is their professionalism and documentation. The technicians take thorough before-and-after photos, label every system, and send reports that make it easy to show ownership exactly what was done each visit.",
      avatar: "/Home/Customers/Alena.png"
    },
    {
      name: "David K.",
      role: "Executive Chef, Casual Dining Brand",
      testimonial: "Since switching to Qwick, grease buildup in our hoods and on the roof has dropped dramatically. They schedule around our prep and closing times, clean up after themselves, and our kitchen staff trusts their crew in the building.",
      avatar: "/Home/Customers/David.png"
    },
    {
      name: "Elena S.",
      role: "Operations Manager, Regional Fast-Food Chain",
      testimonial: "Qwick handles emergency cleanings, fan belt changes, and regular exhaust maintenance for all our busiest stores. Having one vendor that can respond 24/7 and keep every location on a predictable maintenance plan has been a game changer for our operations.",
      avatar: "/Home/Customers/Elena.jpg"
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
                {testimonial.testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

