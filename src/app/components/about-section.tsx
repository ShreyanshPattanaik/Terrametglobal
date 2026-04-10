import { Shield, Globe, Handshake, Truck } from "lucide-react";
import uaeLogo from "../../../Logo/UAE.png";
import africaMapLogo from "../../../Logo/Africa-Map-Transparent-PNG.png";

const features = [
  {
    imageSrc: uaeLogo,
    title: "UAE-Based Trading Hub",
    description:
      "Incorporated in SPC Free Zone, Sharjah, serving clients across China, India, Oman, Far East Asia, and the United Arab Emirates.",
  },
  {
    imageSrc: africaMapLogo,
    title: "Southern Africa Network",
    description:
      "Strong sourcing partnerships across South Africa, Zimbabwe, and Zambia with direct access to mines and processing partners.",
  },
  {
    icon: Handshake,
    title: "Commercial Brokerage",
    description:
      "Strategic intermediary services that connect credible buyers and sellers through transparent, executable deal structures.",
  },
  {
    icon: Truck,
    title: "FOB Services (Full Scope)",
    description:
      "Complete trade and logistics support from sourcing and sampling to FOB handling, shipping coordination, and delivery.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="uppercase tracking-[0.3em] mb-4"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 900, color: '#2E2E2E' }}
          >
            About Us
          </h2>
          <div className="w-24 h-1 bg-[#F47A20] mx-auto"></div>
          <p
            className="mt-6 max-w-4xl mx-auto"
            style={{ fontSize: "1rem", fontWeight: 400, color: "#8A8A8A", lineHeight: 1.7 }}
          >
            Terramet Global FZE LLC is a UAE-based general trading and commercial brokerage company with
            core expertise in sourcing, trading, and supplying high-quality metal ores. We focus on
            consistency, transparency, and long-term value across every transaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 border border-[#D1D1D1] transition-all hover:border-[#F47A20] hover:shadow-lg group"
            >
              <div className="mb-6 inline-block p-4 bg-[#2E2E2E] group-hover:bg-[#F47A20] transition-colors">
                {feature.imageSrc ? (
                  <img
                    src={feature.imageSrc}
                    alt={`${feature.title} icon`}
                    className="h-8 w-8 object-contain"
                  />
                ) : (
                  <feature.icon size={32} color="white" strokeWidth={1.5} />
                )}
              </div>
              <h3
                className="uppercase tracking-[0.2em] mb-3"
                style={{ fontSize: '1rem', fontWeight: 700, color: '#2E2E2E' }}
              >
                {feature.title}
              </h3>
              <p
                style={{ fontSize: '0.875rem', fontWeight: 400, color: '#8A8A8A', lineHeight: 1.6 }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
