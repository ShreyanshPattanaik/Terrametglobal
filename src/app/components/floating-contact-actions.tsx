import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Phone } from "lucide-react";

const uaePhoneNumber = "+971562895432";
const whatsappNumber = "971562895432";

export function FloatingContactActions() {
  return (
    <div className="fixed bottom-6 right-5 z-[60] flex flex-col gap-3 sm:bottom-8 sm:right-8">
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message Terramet Global on WhatsApp"
        title="Message us on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#20bd5a] hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        <WhatsAppIcon sx={{ fontSize: 31 }} />
      </a>

      <a
        href={`tel:${uaePhoneNumber}`}
        aria-label="Call Terramet Global on the UAE number"
        title="Call our UAE number"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F47A20] text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#d66a1a] hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F47A20]/40"
      >
        <Phone size={27} strokeWidth={2} />
      </a>
    </div>
  );
}
