import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImage from "../../../Logo/Logo-2.png";

type NavbarProps = {
  languageButtonLabel?: string;
  onLanguageToggle?: () => void;
  labels?: {
    about: string;
    products: string;
    global: string;
    contact: string;
  };
};

export function Navbar({ languageButtonLabel, onLanguageToggle, labels }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLabels = labels ?? {
    about: "About",
    products: "Products",
    global: "FOB Services",
    contact: "Contact",
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#2E2E2E] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" aria-label="Terramet Global FZE LLC" className="inline-flex items-center">
            <img
              src={logoImage}
              alt="Terramet Global FZE LLC logo"
              className="h-24 w-auto sm:h-28 object-contain object-left"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="uppercase tracking-widest transition-colors hover:text-[#F47A20]"
              style={{ fontSize: '0.875rem', fontWeight: 500, color: isScrolled ? 'white' : 'white' }}
            >
              {navLabels.about}
            </a>
            <a
              href="#products"
              className="uppercase tracking-widest transition-colors hover:text-[#F47A20]"
              style={{ fontSize: '0.875rem', fontWeight: 500, color: isScrolled ? 'white' : 'white' }}
            >
              {navLabels.products}
            </a>
            <a
              href="#global"
              className="uppercase tracking-widest transition-colors hover:text-[#F47A20]"
              style={{ fontSize: '0.875rem', fontWeight: 500, color: isScrolled ? 'white' : 'white' }}
            >
              {navLabels.global}
            </a>
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="px-6 py-2 bg-[#F47A20] text-white uppercase tracking-widest transition-all hover:bg-[#d66a1a]"
                style={{ fontSize: '0.875rem', fontWeight: 600 }}
              >
                {navLabels.contact}
              </a>
              {languageButtonLabel && onLanguageToggle && (
                <button
                  type="button"
                  onClick={onLanguageToggle}
                  className="px-6 py-2 border border-white text-white uppercase tracking-widest transition-all hover:bg-white hover:text-[#2E2E2E]"
                  style={{ fontSize: "0.875rem", fontWeight: 600 }}
                >
                  {languageButtonLabel}
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a
              href="#about"
              className="uppercase tracking-widest text-white hover:text-[#F47A20]"
              style={{ fontSize: '0.875rem', fontWeight: 500 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {navLabels.about}
            </a>
            <a
              href="#products"
              className="uppercase tracking-widest text-white hover:text-[#F47A20]"
              style={{ fontSize: '0.875rem', fontWeight: 500 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {navLabels.products}
            </a>
            <a
              href="#global"
              className="uppercase tracking-widest text-white hover:text-[#F47A20]"
              style={{ fontSize: '0.875rem', fontWeight: 500 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {navLabels.global}
            </a>
            <a
              href="#contact"
              className="px-6 py-2 bg-[#F47A20] text-white uppercase tracking-widest text-center"
              style={{ fontSize: '0.875rem', fontWeight: 600 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {navLabels.contact}
            </a>
            {languageButtonLabel && onLanguageToggle && (
              <button
                type="button"
                className="px-6 py-2 border border-white text-white uppercase tracking-widest text-center transition-all hover:bg-white hover:text-[#2E2E2E]"
                style={{ fontSize: "0.875rem", fontWeight: 600 }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onLanguageToggle();
                }}
              >
                {languageButtonLabel}
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
