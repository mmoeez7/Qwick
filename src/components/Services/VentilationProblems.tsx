import Image from 'next/image';

interface Problem {
  title: string;
  description: string;
}

interface VentilationProblemsProps {
  imageSrc?: string;
}

export default function VentilationProblems({ imageSrc = "/Services/ventilation.jpg" }: VentilationProblemsProps) {
  const problems: Problem[] = [
    {
      title: "The kitchen is smoky",
      description: "Usually a broken belt or clogged filters."
    },
    {
      title: "Front door slams shut / hard to open",
      description: "Negative pressure issue (Make-Up Air unit needs service)"
    },
    {
      title: "Fan is vibrating/noisy",
      description: "Worn bearings or unbalanced blade"
    },
    {
      title: "Fan won't start:",
      description: "Blown fuse, tripped breaker, or VFD fault."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F5F5F5] w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Heading */}
        <h2 
          data-animate
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 sm:mb-10 md:mb-12"
        >
          <span className="bg-gradient-to-r from-[#A9FF3E] to-black bg-clip-text text-transparent">
            Common Ventilation Problems We Fix:
          </span>
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Problems List */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                data-animate
                className="bg-white rounded-lg p-4 sm:p-5 md:p-6 border-l-4 border-[#A9FF3E] shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-[16px] sm:text-[20px] md:text-[24px] font-bold text-[#292929] mb-1 sm:mb-2">
                  {problem.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div 
            data-animate
            className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden"
          >
            <Image
              src={imageSrc}
              alt="Ventilation service"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

