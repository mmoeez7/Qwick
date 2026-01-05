import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import ServicesHeader from "@/components/Services/ServicesHeader";

export default function PrivacyPolicyPage() {
  return (
    <div className="relative h-auto">
      {/* Navbar */}
      <Navbar />
      
      {/* Header */}
      <ServicesHeader title="Privacy Policy" />
      
      {/* Privacy Policy Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12 sm:py-16 lg:py-20">
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-400 text-sm mb-8">Last Updated: January 4, 2026</p>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <p className="text-base sm:text-lg leading-relaxed">
                Qwick Services and Solutions LLC ("we," "our," or "us") operates this website and provides commercial kitchen hood cleaning and maintenance services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">INFORMATION WE COLLECT</h2>
              <p className="text-base sm:text-lg mb-4 leading-relaxed">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base sm:text-lg leading-relaxed">
                <li><strong className="text-white">Personal Information:</strong> Name, business name, email address, phone number, billing address, service location address, and payment information when you request a quote or book our services.</li>
                <li><strong className="text-white">Automatically Collected Information:</strong> IP address, browser type, operating system, referring URLs, pages viewed, and access times through cookies and similar technologies.</li>
                <li><strong className="text-white">Business Information:</strong> Information about your commercial kitchen operations, equipment specifications, and service history to provide customized cleaning solutions.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">HOW WE USE YOUR INFORMATION</h2>
              <p className="text-base sm:text-lg mb-4 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base sm:text-lg leading-relaxed">
                <li>Provide, maintain, and improve our commercial kitchen hood cleaning services</li>
                <li>Schedule appointments and dispatch service technicians</li>
                <li>Process payments and maintain billing records</li>
                <li>Send service reminders, appointment confirmations, and maintenance notifications</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Comply with legal obligations and industry regulations</li>
                <li>Improve our website functionality and user experience</li>
                <li>Send marketing communications about our services (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">HOW WE SHARE YOUR INFORMATION</h2>
              <p className="text-base sm:text-lg mb-4 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base sm:text-lg leading-relaxed">
                <li><strong className="text-white">Service Providers:</strong> Third-party vendors who assist with payment processing, scheduling software (such as CRM systems), and business operations, who are contractually obligated to protect your information.</li>
                <li><strong className="text-white">Legal Requirements:</strong> When required by law, court order, or government regulation, or to protect our rights and safety.</li>
                <li><strong className="text-white">Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition, your information may be transferred to the new entity.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">COOKIES AND TRACKING TECHNOLOGIES</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user behavior. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">DATA SECURITY</h2>
              <p className="text-base sm:text-lg mb-4 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base sm:text-lg leading-relaxed">
                <li>Secure Socket Layer (SSL) encryption for data transmission</li>
                <li>Secure servers and encrypted databases</li>
                <li>Restricted employee access to personal information</li>
                <li>Regular security assessments and updates</li>
              </ul>
              <p className="text-base sm:text-lg mt-4 leading-relaxed">
                However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">YOUR PRIVACY RIGHTS</h2>
              <p className="text-base sm:text-lg mb-4 leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base sm:text-lg leading-relaxed">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your personal information (subject to legal obligations)</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing where applicable</li>
              </ul>
              <p className="text-base sm:text-lg mt-4 leading-relaxed">
                To exercise these rights, please contact us using the information below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">DATA RETENTION</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Service records may be retained for regulatory compliance purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">CHILDREN'S PRIVACY</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Our services are directed to businesses and commercial entities. We do not knowingly collect personal information from individuals under 18 years of age.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">THIRD-PARTY LINKS</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">CHANGES TO THIS PRIVACY POLICY</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">CONTACT INFORMATION</h2>
              <p className="text-base sm:text-lg mb-4 leading-relaxed">
                For questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-900 rounded-lg p-6 space-y-3 text-base sm:text-lg">
                <p className="text-white font-semibold">Qwick Services and Solutions LLC</p>
                <p className="text-gray-300">Location: Sterling, Virginia</p>
                <p className="text-gray-300">Service Areas: Virginia, Maryland, Washington DC, Pennsylvania, New Jersey, and North Carolina</p>
                <p className="text-gray-300">
                  Email: <a href="mailto:contact@qwicksolutions.com" className="text-[#C1FF72] hover:underline">contact@qwicksolutions.com</a>
                </p>
                <p className="text-gray-300">
                  Phone: <a href="tel:+12026438113" className="text-[#C1FF72] hover:underline">+1 (202) 643-8113</a>
                </p>
                <p className="text-gray-300">
                  Website: <a href="https://qwicksolutions.com" className="text-[#C1FF72] hover:underline" target="_blank" rel="noopener noreferrer">qwicksolutions.com</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

