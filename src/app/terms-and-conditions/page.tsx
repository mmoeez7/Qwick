import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import ServicesHeader from "@/components/Services/ServicesHeader";

export default function TermsAndConditionsPage() {
  return (
    <div className="relative h-auto">
      {/* Navbar */}
      <Navbar />
      
      {/* Header */}
      <ServicesHeader title="Terms and Conditions" />
      
      {/* Terms and Conditions Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12 sm:py-16 lg:py-20">
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-400 text-sm mb-8">Last Updated: January 4, 2026</p>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">AGREEMENT TO TERMS</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                These Terms and Conditions ("Terms") constitute a legally binding agreement between you and Qwick Services and Solutions LLC ("Company," "we," "our," or "us") regarding your use of our website and commercial kitchen hood cleaning and maintenance services. By accessing our website or engaging our services, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">SERVICES DESCRIPTION</h2>
              <p className="text-base sm:text-lg mb-4 leading-relaxed">
                Qwick Services and Solutions LLC provides professional commercial kitchen hood cleaning and maintenance services, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base sm:text-lg leading-relaxed">
                <li>Kitchen exhaust system cleaning and degreasing</li>
                <li>Hood, duct, and fan cleaning</li>
                <li>Filter replacement and maintenance</li>
                <li>Compliance inspection and documentation</li>
                <li>Fire safety and code compliance services</li>
              </ul>
              <p className="text-base sm:text-lg mt-4 leading-relaxed">
                Service availability may vary by location. We service commercial kitchens in restaurants, hospitals, schools, hotels, and other food service facilities throughout Virginia, Maryland, Washington DC, Pennsylvania, New Jersey, and North Carolina.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">BOOKING AND SCHEDULING</h2>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base sm:text-lg leading-relaxed">
                <li><strong className="text-white">Service Requests:</strong> Clients may request services through our website, phone, or email. All service requests are subject to availability and confirmation.</li>
                <li><strong className="text-white">Scheduling:</strong> Once a service request is confirmed, we will schedule an appointment time. We require reasonable notice for scheduling and will make every effort to accommodate your preferred timing.</li>
                <li><strong className="text-white">Access Requirements:</strong> Clients must provide safe and adequate access to all areas requiring service, including kitchen exhaust systems, rooftops, and electrical panels as needed.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">PAYMENT TERMS</h2>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base sm:text-lg leading-relaxed">
                <li><strong className="text-white">Pricing:</strong> Service pricing is provided via quote or estimate prior to service. Prices are subject to change based on the scope of work, equipment condition, and any additional services required. Our minimum service charge is $550.</li>
                <li><strong className="text-white">Payment Methods:</strong> We accept cash, check, credit cards, and ACH transfers for commercial accounts.</li>
                <li><strong className="text-white">Payment Due:</strong> Payment is due upon completion of services unless alternative payment terms have been agreed upon in writing. Commercial accounts may be eligible for Net 15 or Net 30 payment terms upon approval.</li>
                <li><strong className="text-white">Late Payments:</strong> Invoices not paid within agreed terms may be subject to late fees of 1.5% per month or the maximum allowed by law, whichever is less.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">CANCELLATION AND RESCHEDULING</h2>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base sm:text-lg leading-relaxed">
                <li><strong className="text-white">Cancellation Policy:</strong> Clients must provide at least 24 hours' notice to cancel or reschedule an appointment. Cancellations with less than 24 hours' notice may be subject to a cancellation fee.</li>
                <li><strong className="text-white">Rescheduling:</strong> We will make reasonable efforts to accommodate rescheduling requests based on availability.</li>
                <li><strong className="text-white">No-Show Policy:</strong> If our technicians arrive for a scheduled appointment and cannot access the premises or the client is unavailable, a service call fee may be charged.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">SERVICE GUARANTEE AND WARRANTIES</h2>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base sm:text-lg leading-relaxed">
                <li><strong className="text-white">Quality Guarantee:</strong> We guarantee that all services will be performed in a professional and workmanlike manner in accordance with industry standards and local fire safety codes.</li>
                <li><strong className="text-white">Compliance Documentation:</strong> Upon completion, we provide documentation of service for compliance with local fire and safety regulations.</li>
                <li><strong className="text-white">Equipment Warranty:</strong> We warrant that our work will not damage your equipment when performed on systems in reasonable working condition. We are not responsible for pre-existing damage, defects, or equipment failures unrelated to our services.</li>
                <li><strong className="text-white">Limitation:</strong> This guarantee does not cover damage resulting from client negligence, improper use, acts of nature, or conditions beyond our control.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">LIMITATION OF LIABILITY</h2>
              <p className="text-base sm:text-lg mb-4 leading-relaxed">
                To the maximum extent permitted by law, Qwick Services and Solutions LLC shall not be liable for any indirect, incidental, consequential, or punitive damages arising from the use of our services or website. Our total liability for any claim shall not exceed the amount paid for the specific service giving rise to the claim.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                We maintain appropriate liability insurance coverage for our operations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">CLIENT RESPONSIBILITIES</h2>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base sm:text-lg leading-relaxed">
                <li><strong className="text-white">Safe Access:</strong> Clients must provide a safe working environment and disclose any known hazards, including but not limited to asbestos, electrical issues, structural concerns, or other dangerous conditions.</li>
                <li><strong className="text-white">Equipment Disclosure:</strong> Clients must inform us of any special equipment considerations, previous modifications, or known issues with exhaust systems.</li>
                <li><strong className="text-white">Compliance:</strong> Clients are responsible for maintaining overall compliance with applicable health, safety, and fire codes beyond the scope of our services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">INSURANCE AND LICENSING</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Qwick Services and Solutions LLC maintains appropriate general liability insurance and workers' compensation coverage. We operate with all required business licenses and permits as mandated by state and local authorities in all jurisdictions where we provide services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">INTELLECTUAL PROPERTY</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                All content on our website, including text, graphics, logos, images, and software, is the property of Qwick Services and Solutions LLC and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">CONFIDENTIALITY</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                We respect the confidential nature of your business operations. Any proprietary information or trade secrets observed during service will be kept confidential and not disclosed to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">INDEMNIFICATION</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                You agree to indemnify and hold harmless Qwick Services and Solutions LLC, its officers, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorney fees) arising from your breach of these Terms, your use of our services, or your violation of any law or rights of a third party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">DISPUTE RESOLUTION</h2>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base sm:text-lg leading-relaxed">
                <li><strong className="text-white">Governing Law:</strong> These Terms are governed by the laws of the Commonwealth of Virginia without regard to conflict of law provisions.</li>
                <li><strong className="text-white">Jurisdiction:</strong> Any legal action or proceeding arising under these Terms shall be brought exclusively in the state or federal courts located in Virginia, and both parties consent to the jurisdiction of such courts.</li>
                <li><strong className="text-white">Mediation:</strong> Prior to initiating litigation, parties agree to attempt to resolve disputes through good-faith mediation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">TERMINATION</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                We reserve the right to refuse service or terminate our relationship with any client who violates these Terms, engages in abusive behavior toward our employees, provides unsafe working conditions, or fails to pay for services rendered.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">FORCE MAJEURE</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, labor disputes, government actions, or pandemics.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">SEVERABILITY</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">ENTIRE AGREEMENT</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Qwick Services and Solutions LLC regarding the use of our services and supersede any prior agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">MODIFICATIONS</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website with an updated "Last Updated" date. Continued use of our services after modifications constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">CONTACT INFORMATION</h2>
              <p className="text-base sm:text-lg mb-4 leading-relaxed">
                For questions regarding these Terms and Conditions, please contact:
              </p>
              <div className="bg-gray-900 rounded-lg p-6 space-y-3 text-base sm:text-lg">
                <p className="text-white font-semibold">Qwick Services and Solutions LLC</p>
                <p className="text-gray-300">Location: Sterling, Virginia</p>
                <p className="text-gray-300">Service Areas: Virginia, Maryland, Washington DC, Pennsylvania, New Jersey, and North Carolina</p>
                <p className="text-gray-300">
                  Email: <a href="mailto:info@qwicksolutions.com" className="text-[#C1FF72] hover:underline">info@qwicksolutions.com</a>
                </p>
                <p className="text-gray-300">
                  Phone: <a href="tel:+12026438113" className="text-[#C1FF72] hover:underline">+1 (202) 643-8113</a>
                </p>
                <p className="text-gray-300">
                  Website: <a href="https://qwicksolutions.com" className="text-[#C1FF72] hover:underline" target="_blank" rel="noopener noreferrer">qwicksolutions.com</a>
                </p>
              </div>
              <p className="text-base sm:text-lg mt-6 leading-relaxed">
                By using our services or website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

