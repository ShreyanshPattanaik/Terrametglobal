import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#2E2E2E] relative overflow-hidden">
      {/* Orange accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F47A20] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F47A20] to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="uppercase tracking-[0.3em] mb-4"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 900, color: 'white' }}
          >
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-[#F47A20] mx-auto"></div>
          <p
            className="mt-6 max-w-2xl mx-auto"
            style={{ fontSize: '1rem', fontWeight: 400, color: '#D1D1D1', lineHeight: 1.6 }}
          >
            Discuss chrome ore and manganese supply, general trading, brokerage, and integrated logistics execution.
          </p>
        </div>

        

          {/* Contact Information */}
          <div className="space-y-8 max-w-2xl mx-auto">
            <div>
              <h3
                className="uppercase tracking-[0.2em] mb-6"
                style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white' }}
              >
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 p-3 bg-[#F47A20]">
                    <Mail size={24} color="white" />
                  </div>
                  <div>
                    <div
                      className="uppercase tracking-[0.15em] mb-1"
                      style={{ fontSize: '0.75rem', fontWeight: 600, color: '#8A8A8A' }}
                    >
                      Email
                    </div>
                    <a
                      href="mailto:soum@terrametglobal.com"
                      className="text-white hover:text-[#F47A20] transition-colors"
                      style={{ fontSize: '1rem', fontWeight: 400 }}
                    >
                      soum@terrametglobal.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 p-3 bg-[#F47A20]">
                    <Phone size={24} color="white" />
                  </div>
                  <div>
                    <div
                      className="uppercase tracking-[0.15em] mb-1"
                      style={{ fontSize: '0.75rem', fontWeight: 600, color: '#8A8A8A' }}
                    >
                      Phone & WhatsApp
                    </div>
                    <div className="space-y-1">
                      <a
                        href="tel:+971562895432"
                        className="block text-white hover:text-[#F47A20] transition-colors"
                        style={{ fontSize: "1rem", fontWeight: 400 }}
                      >
                        +971 56 289 5432
                      </a>
                      <a
                        href="tel:+27838949934"
                        className="block text-white hover:text-[#F47A20] transition-colors"
                        style={{ fontSize: "1rem", fontWeight: 400 }}
                      >
                        +27 83 894 9934
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 p-3 bg-[#F47A20]">
                    <MapPin size={24} color="white" />
                  </div>
                  <div>
                    <div
                      className="uppercase tracking-[0.15em] mb-1"
                      style={{ fontSize: '0.75rem', fontWeight: 600, color: '#8A8A8A' }}
                    >
                      Address
                    </div>
                    <div
                      className="text-white"
                      style={{ fontSize: '1rem', fontWeight: 400, lineHeight: 1.6 }}
                    >
                      Business Center, Sharjah Publishing City Free Zone, Sharjah,<br />
                      United Arab Emirates
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 p-3 bg-[#F47A20]">
                    <Send size={24} color="white" />
                  </div>
                  <div>
                    <div
                      className="uppercase tracking-[0.15em] mb-1"
                      style={{ fontSize: "0.75rem", fontWeight: 600, color: "#8A8A8A" }}
                    >
                      WeChat
                    </div>
                    <div className="text-white" style={{ fontSize: "1rem", fontWeight: 400 }}>
                      Kumarpatn
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#3A3A3A] border border-[#8A8A8A]">
              <h4
                className="uppercase tracking-[0.15em] mb-3"
                style={{ fontSize: '0.875rem', fontWeight: 700, color: 'white' }}
              >
                Office Hours
              </h4>
              <div className="space-y-2" style={{ fontSize: '0.875rem', color: '#D1D1D1' }}>
                <div className="flex justify-between">
                  <span>Monday - Saturday:</span>
                  <span className="text-[#F47A20]">7:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Execution Coverage:</span>
                  <span className="text-[#F47A20]">Global</span>
                </div>
              </div>
              <p className="mt-4 text-[#8A8A8A]" style={{ fontSize: '0.75rem' }}>
                End-to-end coordination from sourcing and documentation to vessel loading and freight.
              </p>
            </div>
          </div>
        </div>
      
    </section>
  );
}
