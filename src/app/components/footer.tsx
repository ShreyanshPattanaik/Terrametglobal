import React from "react";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div
              className="tracking-[0.2em] uppercase mb-4"
              style={{ fontSize: '1.25rem', fontWeight: 700 }}
            >
              Terramet Global FZE LLC
            </div>
            <p
              className="max-w-md"
              style={{ fontSize: '0.875rem', fontWeight: 400, color: '#8A8A8A', lineHeight: 1.6 }}
            >
              Reliable Sourcing. Global Reach. Trusted Partnerships. UAE-based general trading and commercial brokerage with integrated minerals logistics execution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="uppercase tracking-[0.15em] mb-4"
              style={{ fontSize: '0.875rem', fontWeight: 700 }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#F47A20] transition-colors"
                  style={{ fontSize: '0.875rem', color: '#8A8A8A' }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-[#F47A20] transition-colors"
                  style={{ fontSize: '0.875rem', color: '#8A8A8A' }}
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#global"
                  className="hover:text-[#F47A20] transition-colors"
                  style={{ fontSize: '0.875rem', color: '#8A8A8A' }}
                >
                  FOB Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#F47A20] transition-colors"
                  style={{ fontSize: '0.875rem', color: '#8A8A8A' }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="uppercase tracking-[0.15em] mb-4" style={{ fontSize: "0.875rem", fontWeight: 700 }}>
              Markets
            </h3>
            <ul className="space-y-2">
              <li>
                <span style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>China</span>
              </li>
              <li>
                <span style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>India</span>
              </li>
              <li>
                <span style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>Oman & Far East Asia</span>
              </li>
              <li>
                <span style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>United Arab Emirates</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2E2E2E] flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            style={{ fontSize: '0.75rem', color: '#8A8A8A' }}
          >
            © 2026 Terramet Global FZE LLC. All rights reserved.
          </p>
          <p
            className="uppercase tracking-widest"
            style={{ fontSize: '0.75rem', color: '#8A8A8A' }}
          >
            SPC Free Zone, Sharjah, UAE
          </p>
        </div>
      </div>
    </footer>
  );
}
