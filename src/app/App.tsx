import React from "react";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { ProductsSection } from "./components/products-section";
import { GlobalSection } from "./components/global-section";
import { WhyChooseSection } from "./components/why-choose-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { ChinesePage } from "./ChinesePage.tsx";

export default function App() {
  const [language, setLanguage] = React.useState<"en" | "zh">("en");

  if (language === "zh") {
    return (
      <ChinesePage onSwitchToEnglish={() => setLanguage("en")} />
    );
  }

  return (
    <div className="size-full">
      <Navbar
        languageButtonLabel="中文"
        onLanguageToggle={() => setLanguage("zh")}
      />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <GlobalSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}