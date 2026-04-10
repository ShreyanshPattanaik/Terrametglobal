import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import fobImage1 from "../../../Content/FOB 1.jpg";
import fobImage2 from "../../../Content/FOB 2.jpg";
import fobImage3 from "../../../Content/FOB 3.jpg";
import fobImage4 from "../../../Content/FOB 4.jpg";
import fobImage5 from "../../../Content/FOB 5.jpg";
import fobImage6 from "../../../Content/FOB 6.jpg";
import fobImage7 from "../../../Content/FOB 7.jpg";

const fobImages = [
  fobImage1,
  fobImage2,
  fobImage3,
  fobImage4,
  fobImage5,
  fobImage6,
  fobImage7,
];

export function GlobalSection() {
  const [activeFobImageIndex, setActiveFobImageIndex] = useState(0);

  const showPreviousFobImage = () => {
    setActiveFobImageIndex(
      (prevIndex) => (prevIndex - 1 + fobImages.length) % fobImages.length,
    );
  };

  const showNextFobImage = () => {
    setActiveFobImageIndex((prevIndex) => (prevIndex + 1) % fobImages.length);
  };

  return (
    <section id="global" className="py-24 bg-[#2E2E2E] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #F47A20 0px, #F47A20 1px, transparent 1px, transparent 40px),
                           repeating-linear-gradient(90deg, #F47A20 0px, #F47A20 1px, transparent 1px, transparent 40px)`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="uppercase tracking-[0.3em] mb-4"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 900, color: 'white' }}
          >
            Markets & Sourcing Network
          </h2>
          <div className="w-24 h-1 bg-[#F47A20] mx-auto"></div>
          <p
            className="mt-6 max-w-4xl mx-auto"
            style={{ fontSize: "1rem", fontWeight: 400, color: "#D1D1D1", lineHeight: 1.7 }}
          >
            We serve China, India, Oman, Far East Asia, and the United Arab Emirates while maintaining
            a strong sourcing footprint in South Africa, Zimbabwe, and Zambia.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="mb-12 border border-[#8A8A8A] bg-[#3A3A3A]/70 p-12 text-center">
            <h3
              className="uppercase tracking-[0.2em]"
              style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)", fontWeight: 800, color: "white" }}
            >
              FOB Services (Full Scope)
            </h3>
            <div className="mt-8 flex items-center justify-center">
              <div className="relative mx-auto w-fit max-w-full overflow-visible">
                <button
                  type="button"
                  onClick={showPreviousFobImage}
                  aria-label="Previous FOB image"
                  className="absolute left-0 top-1/2 z-20 -translate-x-[115%] -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-[#F47A20] transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="relative overflow-hidden border border-[#8A8A8A]/60">
              <ImageWithFallback
                src={fobImages[activeFobImageIndex]}
                alt={`FOB service ${activeFobImageIndex + 1}`}
                className="block max-h-[420px] w-auto max-w-full object-contain bg-[#2E2E2E]"
              />
                </div>

                <button
                  type="button"
                  onClick={showNextFobImage}
                  aria-label="Next FOB image"
                  className="absolute right-0 top-1/2 z-20 translate-x-[115%] -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-[#F47A20] transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div
                className="mb-2"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#F47A20' }}
              >
                5
              </div>
              <div
                className="uppercase tracking-[0.15em]"
                style={{ fontSize: '0.875rem', fontWeight: 600, color: '#D1D1D1' }}
              >
                Core Markets
              </div>
            </div>
            <div>
              <div
                className="mb-2"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#F47A20' }}
              >
                3
              </div>
              <div
                className="uppercase tracking-[0.15em]"
                style={{ fontSize: '0.875rem', fontWeight: 600, color: '#D1D1D1' }}
              >
                Sourcing Countries
              </div>
            </div>
            <div>
              <div
                className="mb-2"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#F47A20' }}
              >
                FOB
              </div>
              <div
                className="uppercase tracking-[0.15em]"
                style={{ fontSize: '0.875rem', fontWeight: 600, color: '#D1D1D1' }}
              >
                Full-Scope Handling
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
