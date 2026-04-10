import { Lock, Zap, Users, TrendingUp, CheckCircle, Clock } from "lucide-react";

const reasons = [
  {
    icon: Lock,
    title: "Strong African Sourcing",
    description: "Established supply network across South Africa, Zimbabwe, and Zambia",
  },
  {
    icon: Zap,
    title: "Reliable Quality Control",
    description: "Joint sampling, third-party inspection, and clear quality verification",
  },
  {
    icon: Users,
    title: "Full FOB Capability",
    description: "Collection, inland transport, port handling, customs, and loading coordination",
  },
  {
    icon: TrendingUp,
    title: "Flexible Structures",
    description: "Commercially sound spot and long-term contract frameworks",
  },
  {
    icon: CheckCircle,
    title: "Transparent Deal Execution",
    description: "Clear communication and risk-aware structuring from contract to delivery",
  },
  {
    icon: Clock,
    title: "Partnership-First Approach",
    description: "Practical, performance-driven execution focused on long-term value",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="uppercase tracking-[0.3em] mb-4"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 900, color: '#2E2E2E' }}
          >
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-[#F47A20] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-[#D1D1D1] transition-all hover:border-[#F47A20] hover:shadow-lg"
            >
              <div>
                <h3
                  className="uppercase tracking-[0.15em] mb-2"
                  style={{ fontSize: '0.875rem', fontWeight: 700, color: '#2E2E2E' }}
                >
                  {reason.title}
                </h3>
                <p
                  style={{ fontSize: '0.875rem', fontWeight: 400, color: '#8A8A8A', lineHeight: 1.5 }}
                >
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
