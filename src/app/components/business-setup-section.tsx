import { CheckCircle, Compass, FileCheck2, Handshake, Network, Scale, Workflow } from "lucide-react";

type BusinessSetupSectionProps = {
  language?: "en" | "zh";
};

const content = {
  en: {
    title: "UAE Business Setup Support for Overseas Clients",
    introduction:
      "For international entrepreneurs, investors, and trading businesses, Terramet Global provides practical coordination and commercial guidance to make entering the UAE market more straightforward. Support can be tailored to each client’s sector, operating model, ownership considerations, and intended markets.",
    setupTitle: "Business Setup & Entry Coordination",
    setupItems: [
      "Initial market-entry discussions and operating-model reviews",
      "Guidance on selecting an appropriate UAE jurisdiction and business-activity pathway",
      "Coordination of business setup with relevant service providers",
      "Practical support for banking readiness, documentation, and next operational steps",
      "Commercial orientation for regional trading and cross-border opportunities",
    ],
    taxTitle: "UAE Tax-Planning Advisory",
    taxDescription:
      "Terramet Global helps clients frame their UAE tax-planning questions early, including corporate tax exposure, VAT considerations, alignment between substance and operating model, and cross-border commercial implications. The objective is a commercially sensible structure that is informed, documented, and suited to the client’s business plan.",
    disclaimer:
      "Formal tax, legal, regulatory, accounting, and compliance opinions are provided only by suitably licensed and qualified UAE advisers. Terramet Global’s role is to provide practical commercial coordination and advisory support; final decisions should be validated by the client’s appointed professional advisers.",
    structuringTitle: "Market Entry & Commercial Structuring",
    structuringIntroduction:
      "Establishing a business in the UAE is not merely an incorporation exercise. Terramet Global brings a trading operator’s perspective to route-to-market planning, supplier and buyer engagement, documentation flows, delivery terms, and commercial readiness.",
    pillars: [
      {
        icon: Compass,
        title: "Market Positioning",
        description: "Clarify the opportunity, counterparties, and commercial role the UAE entity will play.",
      },
      {
        icon: Workflow,
        title: "Transaction Structure",
        description: "Consider practical terms for trading, brokerage, sourcing, and supply-chain execution.",
      },
      {
        icon: FileCheck2,
        title: "Operating Readiness",
        description: "Align setup, documentation, logistics, and commercial processes with the intended activity.",
      },
      {
        icon: Handshake,
        title: "Partner Connections",
        description: "Facilitate productive engagement with relevant providers and market participants where appropriate.",
      },
    ],
  },
  zh: {
    title: "面向海外客户的阿联酋企业设立支持",
    introduction:
      "面向国际创业者、投资者及贸易企业，Terramet Global 提供务实的协调与商业指导，帮助客户更顺畅地进入阿联酋市场。支持方案可根据客户所在行业、运营模式、所有权考量及目标市场进行定制。",
    setupTitle: "企业设立与市场准入协调",
    setupItems: [
      "开展初步市场准入沟通与运营模式评估",
      "就选择合适的阿联酋司法辖区及经营活动路径提供指导",
      "协调相关服务机构推进企业设立事宜",
      "为银行业务准备、文件整理及后续运营步骤提供务实支持",
      "就区域贸易及跨境商业机会提供商业导向建议",
    ],
    taxTitle: "阿联酋税务筹划咨询",
    taxDescription:
      "Terramet Global 帮助客户及早梳理阿联酋税务筹划问题，包括企业税风险、增值税考量、经济实质与运营模式的一致性，以及跨境商业影响。目标是建立符合客户商业计划、信息充分、记录完整且具备商业合理性的架构。",
    disclaimer:
      "正式的税务、法律、监管、会计及合规意见仅由具备相应许可和资质的阿联酋专业顾问提供。Terramet Global 的职责是提供务实的商业协调与咨询支持；最终决策应由客户委任的专业顾问审核确认。",
    structuringTitle: "市场准入与商业架构",
    structuringIntroduction:
      "在阿联酋开展业务并不仅仅是完成公司注册。Terramet Global 从贸易运营方的视角，协助客户考虑市场进入路径、供应商与买家对接、文件流程、交付条款及商业准备度。",
    pillars: [
      {
        icon: Compass,
        title: "市场定位",
        description: "明确市场机会、交易对手，以及阿联酋实体将承担的商业角色。",
      },
      {
        icon: Workflow,
        title: "交易架构",
        description: "综合考虑贸易、经纪、采购及供应链执行中的实务条款。",
      },
      {
        icon: FileCheck2,
        title: "运营准备",
        description: "使企业设立、文件、物流及商业流程与计划开展的业务保持一致。",
      },
      {
        icon: Handshake,
        title: "合作伙伴对接",
        description: "在适当情况下，促进客户与相关服务机构及市场参与者开展高效沟通。",
      },
    ],
  },
} as const;

export function BusinessSetupSection({ language = "en" }: BusinessSetupSectionProps) {
  const copy = content[language];

  return (
    <section id="uae-business-setup" className="scroll-mt-32 py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="uppercase tracking-[0.2em] mb-4 max-w-5xl mx-auto"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 900, color: "#2E2E2E", lineHeight: 1.2 }}
          >
            {copy.title}
          </h2>
          <div className="w-24 h-1 bg-[#F47A20] mx-auto" />
          <p className="mt-6 max-w-5xl mx-auto" style={{ fontSize: "1rem", color: "#8A8A8A", lineHeight: 1.7 }}>
            {copy.introduction}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="p-8 bg-[#F5F5F5] border border-[#D1D1D1]">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#F47A20] text-white"><Network size={26} strokeWidth={1.5} /></div>
              <h3 className="uppercase tracking-[0.15em]" style={{ fontSize: "1.125rem", fontWeight: 800, color: "#2E2E2E" }}>
                {copy.setupTitle}
              </h3>
            </div>
            <ul className="space-y-4">
              {copy.setupItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 shrink-0 text-[#F47A20]" size={19} />
                  <span style={{ fontSize: "0.925rem", color: "#5F5F5F", lineHeight: 1.6 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-[#2E2E2E] border border-[#3A3A3A]">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#F47A20] text-white"><Scale size={26} strokeWidth={1.5} /></div>
              <h3 className="uppercase tracking-[0.15em]" style={{ fontSize: "1.125rem", fontWeight: 800, color: "white" }}>
                {copy.taxTitle}
              </h3>
            </div>
            <p style={{ fontSize: "0.925rem", color: "#D1D1D1", lineHeight: 1.7 }}>{copy.taxDescription}</p>
            <div className="mt-6 pt-6 border-t border-[#8A8A8A]/50">
              <p className="italic" style={{ fontSize: "0.8125rem", color: "#AFAFAF", lineHeight: 1.65 }}>{copy.disclaimer}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h3 className="uppercase tracking-[0.18em] mb-4" style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)", fontWeight: 800, color: "#2E2E2E" }}>
              {copy.structuringTitle}
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#8A8A8A", lineHeight: 1.7 }}>{copy.structuringIntroduction}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {copy.pillars.map((pillar) => (
              <div key={pillar.title} className="p-6 border border-[#D1D1D1] transition-all hover:border-[#F47A20] hover:shadow-lg group">
                <pillar.icon className="mb-5 text-[#F47A20]" size={30} strokeWidth={1.5} />
                <h4 className="uppercase tracking-[0.12em] mb-3" style={{ fontSize: "0.875rem", fontWeight: 800, color: "#2E2E2E" }}>
                  {pillar.title}
                </h4>
                <p style={{ fontSize: "0.875rem", color: "#8A8A8A", lineHeight: 1.6 }}>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
