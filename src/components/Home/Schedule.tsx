import Image from "next/image";
import Link from "next/link";

export default function Schedule() {
  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-[#F9F9F9]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between overflow-hidden rounded-2xl sm:rounded-3xl bg-[#C1FF72] p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 min-h-[400px] md:min-h-[500px]">

          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-10 max-w-2xl w-full md:w-auto mb-6 md:mb-0">
            {/* Quotes + Heading */}
            <div className="relative mb-4 sm:mb-6">
              <div className="absolute -top-4 sm:-top-6 md:-top-8 left-0 z-20">
                <Image
                  src="/Home/Schedule/commas.svg"
                  alt="Quotation marks"
                  width={76}
                  height={60}
                  priority
                  className="opacity-60 w-10 h-8 sm:w-12 sm:h-9 md:w-16 md:h-12"
                />
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black relative z-10 pr-4 md:pr-0">
                Ready to Schedule Service?
              </h2>
            </div>

            {/* Description */}
            <p className="mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-black">
              Tell us about your kitchen and we&apos;ll provide a fast,
              no-obligation quote for cleaning or fire protection service.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
              <Link 
                href="/contact"
                className="rounded-4xl bg-black px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold text-white transition hover:text-black hover:bg-transparent hover:border-black border-2 border-black w-full sm:w-auto cursor-pointer text-center"
              >
                Request a Quote
              </Link>

              <Link 
                href="/contact"
                className="rounded-4xl bg-[#C1FF72] px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold text-black border-2 border-black transition hover:bg-white/20 hover:text-white w-full sm:w-auto cursor-pointer text-center"
              >
                Call Us
              </Link>
            </div>
          </div>

          {/* ================= RIGHT WATERMARK ================= */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-full sm:w-1/2 md:w-2/5 lg:w-2/5 xl:w-2/5 opacity-30 sm:opacity-50 md:opacity-70 lg:opacity-80 z-0 hidden sm:block">
            <div className="relative h-full w-full scale-100 sm:scale-110 md:scale-110">
              <Image
                src="/Home/Schedule/watermark.svg"
                alt="Watermark"
                fill
                className="object-contain object-right"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 40vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
