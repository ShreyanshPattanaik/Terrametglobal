import React, { useState } from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Send,
  Shield,
  Globe,
  Handshake,
  Truck,
  Lock,
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Navbar } from "./components/navbar";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import uaeLogo from "../../Logo/UAE.png";
import africaMapLogo from "../../Logo/Africa-Map-Transparent-PNG.png";
import chromeOreImage from "../../Content/Chrome Ore.jpeg";
import chromeOreImage2 from "../../Content/Chrome Ore 2.jpeg";
import chromeConcentrate1 from "../../Content/Chrome Concentrate 1.jpeg";
import chromeConcentrate2 from "../../Content/Chrome Concentrate 2.jpeg";
import chromeConcentrate3 from "../../Content/Chrome Concentrate 3.jpeg";
import chromeConcentrate4 from "../../Content/Chrome Concentrate 4.jpeg";
import chromeConcentrateVideo from "../../Content/Chrome Concentrate 6.mp4";
import manganeseOre1 from "../../Content/Manganese Ore 1.jpeg";
import manganeseOre2 from "../../Content/Manganese Ore 2.jpeg";
import manganeseOre3 from "../../Content/Manganese Ore 3.jpeg";
import fobImage1 from "../../Content/FOB 1.jpg";
import fobImage2 from "../../Content/FOB 2.jpg";
import fobImage3 from "../../Content/FOB 3.jpg";
import fobImage4 from "../../Content/FOB 4.jpg";
import fobImage5 from "../../Content/FOB 5.jpg";
import fobImage6 from "../../Content/FOB 6.jpg";
import fobImage7 from "../../Content/FOB 7.jpg";

type ChinesePageProps = { onSwitchToEnglish: () => void };

const products = [
  { name: "铬矿石（原矿）", grade: "Cr2O3: 34-42%", description: "粒度 10-100 mm / 6-40 mm，SiO2 和 Al2O3 受控，Cr:Fe 比 1.3-2.0。" },
  { name: "铬精矿", grade: "Cr2O3: 38-50%", description: "粒度 0-1 mm / 0-2 mm，低杂质、回收稳定，Cr:Fe 比 1.4-2.0。" },
  { name: "锰矿石", grade: "Mn: 30-48%", description: "粒度 10-75 mm（可定制），低磷、控硅，适用于铁合金生产。" },
] as const;

const features = [
  { imageSrc: uaeLogo, title: "阿联酋贸易枢纽", description: "公司注册于沙迦 SPC 自由区，服务覆盖中国、印度、阿曼、远东亚洲及阿联酋市场。" },
  { imageSrc: africaMapLogo, title: "南部非洲网络", description: "在南非、津巴布韦和赞比亚建立稳定采购网络，直连矿山与加工合作方。" },
  { icon: Handshake, title: "商业经纪服务", description: "连接真实买家与可靠卖家，结构清晰、可执行、透明合规。" },
  { icon: Truck, title: "FOB 全流程服务", description: "从采购、采样到 FOB 操作、船务协调与交付执行的一体化支持。" },
] as const;

const reasons = [
  { icon: Lock, title: "非洲采购能力强", description: "在南非、津巴布韦、赞比亚拥有成熟的供应链布局" },
  { icon: Zap, title: "质量控制可靠", description: "联合采样、第三方检验与清晰质控标准" },
  { icon: Users, title: "FOB 执行完整", description: "提货、内陆运输、港口处理、报关与装船协调" },
  { icon: TrendingUp, title: "结构灵活", description: "可支持现货及长期合同的商业模式" },
  { icon: CheckCircle, title: "交易透明", description: "从合同到交付全流程沟通清晰、风险可控" },
  { icon: Clock, title: "长期合作导向", description: "强调执行效率与长期价值共创" },
] as const;

const chromeOreMedia = [chromeOreImage, chromeOreImage2] as const;
const chromeConcentrateMedia = [
  { type: "image", src: chromeConcentrate1 },
  { type: "image", src: chromeConcentrate2 },
  { type: "image", src: chromeConcentrate3 },
  { type: "image", src: chromeConcentrate4 },
  { type: "video", src: chromeConcentrateVideo },
] as const;
const manganeseOreMedia = [manganeseOre1, manganeseOre2, manganeseOre3] as const;
const fobImages = [fobImage1, fobImage2, fobImage3, fobImage4, fobImage5, fobImage6, fobImage7] as const;

export function ChinesePage({ onSwitchToEnglish }: ChinesePageProps) {
  const [chromeOreMediaIndex, setChromeOreMediaIndex] = useState(0);
  const [chromeConcentrateMediaIndex, setChromeConcentrateMediaIndex] = useState(0);
  const [manganeseOreMediaIndex, setManganeseOreMediaIndex] = useState(0);
  const [activeFobImageIndex, setActiveFobImageIndex] = useState(0);

  return (
    <div className="size-full">
      <Navbar
        languageButtonLabel="English"
        onLanguageToggle={onSwitchToEnglish}
        labels={{ about: "关于我们", products: "产品", global: "FOB服务", contact: "联系我们" }}
      />
      <main>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1693774557231-e2be6c3594e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBvcmUlMjBpbmR1c3RyaWFsJTIwZGFya3xlbnwxfHx8fDE3NzQ4Nzg0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-[#2E2E2E]/95 to-[#3A3A3A]/90"></div>
          </div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <h1 className="uppercase tracking-[0.3em] mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 900, color: "white", lineHeight: 1.2 }}>Terramet Global FZE LLC</h1>
            <p className="mb-8 max-w-2xl mx-auto" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", fontWeight: 300, color: "#D1D1D1", lineHeight: 1.6 }}>
              可靠采购 · 全球触达 · 值得信赖的合作伙伴关系
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F47A20] text-white uppercase tracking-[0.2em] transition-all hover:bg-[#d66a1a] hover:gap-4" style={{ fontSize: "0.875rem", fontWeight: 700 }}>
              联系我们
              <ArrowRight size={20} />
            </a>
          </div>
        </section>

        <section id="about" className="py-24 bg-[#F5F5F5]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="uppercase tracking-[0.3em] mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 900, color: "#2E2E2E" }}>关于我们</h2>
              <div className="w-24 h-1 bg-[#F47A20] mx-auto"></div>
              <p className="mt-6 max-w-4xl mx-auto" style={{ fontSize: "1rem", fontWeight: 400, color: "#8A8A8A", lineHeight: 1.7 }}>
                Terramet Global FZE LLC 是一家位于阿联酋的综合贸易与商业经纪公司，核心业务为高品质金属矿石的采购、贸易与供应，始终坚持稳定、透明与长期价值。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 border border-[#D1D1D1] transition-all hover:border-[#F47A20] hover:shadow-lg group">
                  <div className="mb-6 inline-block p-4 bg-[#2E2E2E] group-hover:bg-[#F47A20] transition-colors">
                    {"imageSrc" in feature ? (
                      <img src={feature.imageSrc} alt={`${feature.title} 图标`} className="h-8 w-8 object-contain" />
                    ) : (
                      <feature.icon size={32} color="white" strokeWidth={1.5} />
                    )}
                  </div>
                  <h3 className="uppercase tracking-[0.2em] mb-3" style={{ fontSize: "1rem", fontWeight: 700, color: "#2E2E2E" }}>{feature.title}</h3>
                  <p style={{ fontSize: "0.875rem", fontWeight: 400, color: "#8A8A8A", lineHeight: 1.6 }}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="uppercase tracking-[0.3em] mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 900, color: "#2E2E2E" }}>产品</h2>
              <div className="w-24 h-1 bg-[#F47A20] mx-auto"></div>
              <p className="mt-6 max-w-2xl mx-auto" style={{ fontSize: "1rem", fontWeight: 400, color: "#8A8A8A", lineHeight: 1.6 }}>
                铬矿（原矿与精矿）及锰矿，全部来自可信合作网络，并支持采样、检验与完整单证流程。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div key={index} className="bg-[#2E2E2E] border border-[#3A3A3A] overflow-hidden group cursor-pointer transition-transform hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    {product.name === "铬精矿" ? (
                      <>
                        {chromeConcentrateMedia[chromeConcentrateMediaIndex].type === "video" ? (
                          <video
                            src={chromeConcentrateMedia[chromeConcentrateMediaIndex].src}
                            className="absolute inset-0 w-full h-full object-cover"
                            controls
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        ) : (
                          <ImageWithFallback
                            src={chromeConcentrateMedia[chromeConcentrateMediaIndex].src}
                            alt={`${product.name} ${chromeConcentrateMediaIndex + 1}`}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        )}
                        <button type="button" onClick={() => setChromeConcentrateMediaIndex((i) => (i - 1 + chromeConcentrateMedia.length) % chromeConcentrateMedia.length)} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-[#F47A20] transition-colors" aria-label="上一张">
                          <ChevronLeft size={18} />
                        </button>
                        <button type="button" onClick={() => setChromeConcentrateMediaIndex((i) => (i + 1) % chromeConcentrateMedia.length)} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-[#F47A20] transition-colors" aria-label="下一张">
                          <ChevronRight size={18} />
                        </button>
                      </>
                    ) : product.name === "锰矿石" ? (
                      <>
                        <ImageWithFallback src={manganeseOreMedia[manganeseOreMediaIndex]} alt={`${product.name} ${manganeseOreMediaIndex + 1}`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <button type="button" onClick={() => setManganeseOreMediaIndex((i) => (i - 1 + manganeseOreMedia.length) % manganeseOreMedia.length)} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-[#F47A20] transition-colors" aria-label="上一张">
                          <ChevronLeft size={18} />
                        </button>
                        <button type="button" onClick={() => setManganeseOreMediaIndex((i) => (i + 1) % manganeseOreMedia.length)} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-[#F47A20] transition-colors" aria-label="下一张">
                          <ChevronRight size={18} />
                        </button>
                      </>
                    ) : (
                      <>
                        <ImageWithFallback src={chromeOreMedia[chromeOreMediaIndex]} alt={`${product.name} ${chromeOreMediaIndex + 1}`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <button type="button" onClick={() => setChromeOreMediaIndex((i) => (i - 1 + chromeOreMedia.length) % chromeOreMedia.length)} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-[#F47A20] transition-colors" aria-label="上一张">
                          <ChevronLeft size={18} />
                        </button>
                        <button type="button" onClick={() => setChromeOreMediaIndex((i) => (i + 1) % chromeOreMedia.length)} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-[#F47A20] transition-colors" aria-label="下一张">
                          <ChevronRight size={18} />
                        </button>
                      </>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2E2E2E] to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="uppercase tracking-[0.2em]" style={{ fontSize: "1.125rem", fontWeight: 700, color: "white" }}>{product.name}</h3>
                      <span className="text-[#F47A20] tracking-wider" style={{ fontSize: "0.75rem", fontWeight: 600 }}>{product.grade}</span>
                    </div>
                    <p style={{ fontSize: "0.875rem", fontWeight: 400, color: "#D1D1D1", lineHeight: 1.5 }}>{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="global" className="py-24 bg-[#2E2E2E] relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: `repeating-linear-gradient(0deg, #F47A20 0px, #F47A20 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #F47A20 0px, #F47A20 1px, transparent 1px, transparent 40px)` }}></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="uppercase tracking-[0.3em] mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 900, color: "white" }}>市场与采购网络</h2>
              <div className="w-24 h-1 bg-[#F47A20] mx-auto"></div>
              <p className="mt-6 max-w-4xl mx-auto" style={{ fontSize: "1rem", fontWeight: 400, color: "#D1D1D1", lineHeight: 1.7 }}>
                我们服务中国、印度、阿曼、远东亚洲及阿联酋市场，并在南非、津巴布韦、赞比亚保持稳定采购布局。
              </p>
            </div>
            <div className="relative max-w-6xl mx-auto">
              <div className="mb-12 border border-[#8A8A8A] bg-[#3A3A3A]/70 p-12 text-center">
                <h3 className="uppercase tracking-[0.2em]" style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)", fontWeight: 800, color: "white" }}>FOB 全流程服务</h3>
                <div className="mt-8 flex items-center justify-center">
                  <div className="relative mx-auto w-fit max-w-full overflow-visible">
                    <button type="button" onClick={() => setActiveFobImageIndex((i) => (i - 1 + fobImages.length) % fobImages.length)} aria-label="上一张 FOB 图片" className="absolute left-0 top-1/2 z-20 -translate-x-[115%] -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-[#F47A20] transition-colors">
                      <ChevronLeft size={20} />
                    </button>
                    <div className="relative overflow-hidden border border-[#8A8A8A]/60">
                      <ImageWithFallback src={fobImages[activeFobImageIndex]} alt={`FOB ${activeFobImageIndex + 1}`} className="block max-h-[420px] w-auto max-w-full object-contain bg-[#2E2E2E]" />
                    </div>
                    <button type="button" onClick={() => setActiveFobImageIndex((i) => (i + 1) % fobImages.length)} aria-label="下一张 FOB 图片" className="absolute right-0 top-1/2 z-20 translate-x-[115%] -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-[#F47A20] transition-colors">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div><div className="mb-2" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#F47A20" }}>5</div><div className="uppercase tracking-[0.15em]" style={{ fontSize: "0.875rem", fontWeight: 600, color: "#D1D1D1" }}>核心市场</div></div>
                <div><div className="mb-2" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#F47A20" }}>3</div><div className="uppercase tracking-[0.15em]" style={{ fontSize: "0.875rem", fontWeight: 600, color: "#D1D1D1" }}>采购国家</div></div>
                <div><div className="mb-2" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#F47A20" }}>FOB</div><div className="uppercase tracking-[0.15em]" style={{ fontSize: "0.875rem", fontWeight: 600, color: "#D1D1D1" }}>全流程处理</div></div>
                <div><div className="mb-2" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#F47A20" }}>24/7</div><div className="uppercase tracking-[0.15em]" style={{ fontSize: "0.875rem", fontWeight: 600, color: "#D1D1D1" }}>贸易协调</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#F5F5F5]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="uppercase tracking-[0.3em] mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 900, color: "#2E2E2E" }}>为何选择我们</h2>
              <div className="w-24 h-1 bg-[#F47A20] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {reasons.map((reason, index) => (
                <div key={index} className="p-6 bg-white border border-[#D1D1D1] transition-all hover:border-[#F47A20] hover:shadow-lg">
                  <div>
                    <h3 className="uppercase tracking-[0.15em] mb-2" style={{ fontSize: "0.875rem", fontWeight: 700, color: "#2E2E2E" }}>{reason.title}</h3>
                    <p style={{ fontSize: "0.875rem", fontWeight: 400, color: "#8A8A8A", lineHeight: 1.5 }}>{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-[#2E2E2E] relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="uppercase tracking-[0.3em] mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 900, color: "white" }}>联系我们</h2>
              <div className="w-24 h-1 bg-[#F47A20] mx-auto"></div>
              <p className="mt-6 max-w-2xl mx-auto" style={{ fontSize: "1rem", fontWeight: 400, color: "#D1D1D1", lineHeight: 1.6 }}>
                欢迎咨询铬矿和锰矿供应、综合贸易经纪及一体化物流执行服务。
              </p>
            </div>
            <div className="space-y-8 max-w-2xl mx-auto">
              <div>
                <h3 className="uppercase tracking-[0.2em] mb-6" style={{ fontSize: "1.25rem", fontWeight: 700, color: "white" }}>联系信息</h3>
                <div className="space-y-6">
                  <div className="flex gap-4"><div className="flex-shrink-0 p-3 bg-[#F47A20]"><Mail size={24} color="white" /></div><div><div className="uppercase tracking-[0.15em] mb-1" style={{ fontSize: "0.75rem", fontWeight: 600, color: "#8A8A8A" }}>邮箱</div><a href="mailto:soum@terrametglobal.com" className="text-white hover:text-[#F47A20] transition-colors" style={{ fontSize: "1rem", fontWeight: 400 }}>soum@terrametglobal.com</a></div></div>
                  <div className="flex gap-4"><div className="flex-shrink-0 p-3 bg-[#F47A20]"><Phone size={24} color="white" /></div><div><div className="uppercase tracking-[0.15em] mb-1" style={{ fontSize: "0.75rem", fontWeight: 600, color: "#8A8A8A" }}>电话与 WhatsApp</div><div className="space-y-1"><a href="tel:+971562895432" className="block text-white hover:text-[#F47A20] transition-colors" style={{ fontSize: "1rem", fontWeight: 400 }}>+971 56 289 5432</a><a href="tel:+27838949934" className="block text-white hover:text-[#F47A20] transition-colors" style={{ fontSize: "1rem", fontWeight: 400 }}>+27 83 894 9934</a></div></div></div>
                  <div className="flex gap-4"><div className="flex-shrink-0 p-3 bg-[#F47A20]"><MapPin size={24} color="white" /></div><div><div className="uppercase tracking-[0.15em] mb-1" style={{ fontSize: "0.75rem", fontWeight: 600, color: "#8A8A8A" }}>地址</div><div className="text-white" style={{ fontSize: "1rem", fontWeight: 400, lineHeight: 1.6 }}>Business Center, Sharjah Publishing City Free Zone, Sharjah,<br />United Arab Emirates</div></div></div>
                  <div className="flex gap-4"><div className="flex-shrink-0 p-3 bg-[#F47A20]"><Send size={24} color="white" /></div><div><div className="uppercase tracking-[0.15em] mb-1" style={{ fontSize: "0.75rem", fontWeight: 600, color: "#8A8A8A" }}>微信</div><div className="text-white" style={{ fontSize: "1rem", fontWeight: 400 }}>Kumarpatn</div></div></div>
                </div>
              </div>
              <div className="p-6 bg-[#3A3A3A] border border-[#8A8A8A]">
                <h4 className="uppercase tracking-[0.15em] mb-3" style={{ fontSize: "0.875rem", fontWeight: 700, color: "white" }}>服务时间</h4>
                <div className="space-y-2" style={{ fontSize: "0.875rem", color: "#D1D1D1" }}>
                  <div className="flex justify-between"><span>周一 - 周日:</span><span className="text-[#F47A20]">24/7</span></div>
                  <div className="flex justify-between"><span>执行覆盖:</span><span className="text-[#F47A20]">全球</span></div>
                </div>
                <p className="mt-4 text-[#8A8A8A]" style={{ fontSize: "0.75rem" }}>从采购、单证到装船和海运的全流程协同执行。</p>
              </div>
              
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="tracking-[0.2em] uppercase mb-4" style={{ fontSize: "1.25rem", fontWeight: 700 }}>Terramet Global FZE LLC</div>
              <p className="max-w-md" style={{ fontSize: "0.875rem", fontWeight: 400, color: "#8A8A8A", lineHeight: 1.6 }}>
                可靠采购 · 全球触达 · 值得信赖的合作伙伴关系。总部位于阿联酋，提供矿产贸易与一体化物流执行服务。
              </p>
            </div>
            <div>
              <h3 className="uppercase tracking-[0.15em] mb-4" style={{ fontSize: "0.875rem", fontWeight: 700 }}>快速链接</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-[#F47A20] transition-colors" style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>关于我们</a></li>
                <li><a href="#products" className="hover:text-[#F47A20] transition-colors" style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>产品</a></li>
                <li><a href="#global" className="hover:text-[#F47A20] transition-colors" style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>FOB服务</a></li>
                <li><a href="#contact" className="hover:text-[#F47A20] transition-colors" style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>联系我们</a></li>
              </ul>
            </div>
            <div>
              <h3 className="uppercase tracking-[0.15em] mb-4" style={{ fontSize: "0.875rem", fontWeight: 700 }}>市场覆盖</h3>
              <ul className="space-y-2">
                <li><span style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>中国</span></li>
                <li><span style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>印度</span></li>
                <li><span style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>阿曼与远东亚洲</span></li>
                <li><span style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>阿联酋</span></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#2E2E2E] flex flex-col md:flex-row justify-between items-center gap-4">
            <p style={{ fontSize: "0.75rem", color: "#8A8A8A" }}>© 2026 Terramet Global FZE LLC. 版权所有。</p>
            <p className="uppercase tracking-widest" style={{ fontSize: "0.75rem", color: "#8A8A8A" }}>SPC Free Zone, Sharjah, UAE</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
