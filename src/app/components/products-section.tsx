import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import chromeOreImage from "../../../Content/Chrome Ore.jpeg";
import chromeOreImage2 from "../../../Content/Chrome Ore 2.jpeg";
import chromeConcentrate1 from "../../../Content/Chrome Concentrate 1.jpeg";
import chromeConcentrate2 from "../../../Content/Chrome Concentrate 2.jpeg";
import chromeConcentrate3 from "../../../Content/Chrome Concentrate 3.jpeg";
import chromeConcentrate4 from "../../../Content/Chrome Concentrate 4.jpeg";
import chromeConcentrateVideo from "../../../Content/Chrome Concentrate 6.mp4";
import manganeseOre1 from "../../../Content/Manganese Ore 1.jpeg";
import manganeseOre2 from "../../../Content/Manganese Ore 2.jpeg";
import manganeseOre3 from "../../../Content/Manganese Ore 3.jpeg";

const chromeConcentrateMedia = [
  { type: "image", src: chromeConcentrate1 },
  { type: "image", src: chromeConcentrate2 },
  { type: "image", src: chromeConcentrate3 },
  { type: "image", src: chromeConcentrate4 },
  { type: "video", src: chromeConcentrateVideo },
] as const;

const manganeseOreMedia = [manganeseOre1, manganeseOre2, manganeseOre3] as const;
const chromeOreMedia = [chromeOreImage, chromeOreImage2] as const;

const products = [
  {
    name: "Chrome Ore (ROM)",
    grade: "Cr2O3: 34-42%",
    image: chromeOreImage,
    description: "ROM size 10-100 mm / 6-40 mm, controlled SiO2 and Al2O3, Cr:Fe ratio 1.3-2.0.",
  },
  {
    name: "Chrome Concentrate",
    grade: "Cr2O3: 38-50%",
    image: "https://images.unsplash.com/photo-1647153980948-489442cd45b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3BwZXIlMjBvcmUlMjBtaW5pbmd8ZW58MXx8fHwxNzc0ODc4NDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Size 0-1 mm / 0-2 mm, low impurities, stable recovery, Cr:Fe ratio 1.4-2.0.",
  },
  {
    name: "Manganese Ore",
    grade: "Mn: 30-48%",
    image: "https://images.unsplash.com/photo-1632517306067-b54ab4d1f98d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzc0ODc4NDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "10-75 mm (customizable), low phosphorus, controlled silica, ferroalloy-grade quality.",
  },
];

export function ProductsSection() {
  const [chromeOreMediaIndex, setChromeOreMediaIndex] = useState(0);
  const [chromeConcentrateMediaIndex, setChromeConcentrateMediaIndex] = useState(0);
  const [manganeseOreMediaIndex, setManganeseOreMediaIndex] = useState(0);
  const currentChromeOreMedia = chromeOreMedia[chromeOreMediaIndex];
  const currentChromeConcentrateMedia = chromeConcentrateMedia[chromeConcentrateMediaIndex];
  const currentManganeseOreMedia = manganeseOreMedia[manganeseOreMediaIndex];

  const showNextChromeConcentrateMedia = () => {
    setChromeConcentrateMediaIndex(
      (prevIndex) => (prevIndex + 1) % chromeConcentrateMedia.length,
    );
  };

  const showPreviousChromeConcentrateMedia = () => {
    setChromeConcentrateMediaIndex(
      (prevIndex) =>
        (prevIndex - 1 + chromeConcentrateMedia.length) %
        chromeConcentrateMedia.length,
    );
  };

  const showNextManganeseOreMedia = () => {
    setManganeseOreMediaIndex(
      (prevIndex) => (prevIndex + 1) % manganeseOreMedia.length,
    );
  };

  const showPreviousManganeseOreMedia = () => {
    setManganeseOreMediaIndex(
      (prevIndex) =>
        (prevIndex - 1 + manganeseOreMedia.length) % manganeseOreMedia.length,
    );
  };

  const showNextChromeOreMedia = () => {
    setChromeOreMediaIndex((prevIndex) => (prevIndex + 1) % chromeOreMedia.length);
  };

  const showPreviousChromeOreMedia = () => {
    setChromeOreMediaIndex(
      (prevIndex) => (prevIndex - 1 + chromeOreMedia.length) % chromeOreMedia.length,
    );
  };

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="uppercase tracking-[0.3em] mb-4"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 900, color: '#2E2E2E' }}
          >
            Products
          </h2>
          <div className="w-24 h-1 bg-[#F47A20] mx-auto"></div>
          <p
            className="mt-6 max-w-2xl mx-auto"
            style={{ fontSize: '1rem', fontWeight: 400, color: '#8A8A8A', lineHeight: 1.6 }}
          >
            Chrome ore (ROM & concentrate) and manganese ore sourced through trusted partners with sampling, inspection, and full documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-[#2E2E2E] border border-[#3A3A3A] overflow-hidden group cursor-pointer transition-transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                {product.name === "Chrome Concentrate" ? (
                  <>
                    {currentChromeConcentrateMedia.type === "video" ? (
                      <video
                        src={currentChromeConcentrateMedia.src}
                        className="absolute inset-0 w-full h-full object-cover"
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                        onClick={(event) => {
                          event.currentTarget.play();
                        }}
                      />
                    ) : (
                      <ImageWithFallback
                        src={currentChromeConcentrateMedia.src}
                        alt={`${product.name} ${chromeConcentrateMediaIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}

                    <button
                      type="button"
                      onClick={showPreviousChromeConcentrateMedia}
                      aria-label="Previous chrome concentrate media"
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-[#F47A20] transition-colors"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={showNextChromeConcentrateMedia}
                      aria-label="Next chrome concentrate media"
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-[#F47A20] transition-colors"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                ) : product.name === "Manganese Ore" ? (
                  <>
                    <ImageWithFallback
                      src={currentManganeseOreMedia}
                      alt={`${product.name} ${manganeseOreMediaIndex + 1}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <button
                      type="button"
                      onClick={showPreviousManganeseOreMedia}
                      aria-label="Previous manganese ore image"
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-[#F47A20] transition-colors"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={showNextManganeseOreMedia}
                      aria-label="Next manganese ore image"
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-[#F47A20] transition-colors"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                ) : product.name === "Chrome Ore (ROM)" ? (
                  <>
                    <ImageWithFallback
                      src={currentChromeOreMedia}
                      alt={`${product.name} ${chromeOreMediaIndex + 1}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <button
                      type="button"
                      onClick={showPreviousChromeOreMedia}
                      aria-label="Previous chrome ore image"
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-[#F47A20] transition-colors"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={showNextChromeOreMedia}
                      aria-label="Next chrome ore image"
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-[#F47A20] transition-colors"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                ) : (
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E2E2E] to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3
                    className="uppercase tracking-[0.2em]"
                    style={{ fontSize: '1.125rem', fontWeight: 700, color: 'white' }}
                  >
                    {product.name}
                  </h3>
                  <span
                    className="text-[#F47A20] tracking-wider"
                    style={{ fontSize: '0.75rem', fontWeight: 600 }}
                  >
                    {product.grade}
                  </span>
                </div>
                <p
                  style={{ fontSize: '0.875rem', fontWeight: 400, color: '#D1D1D1', lineHeight: 1.5 }}
                >
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
