import { portfolio } from "@/data/portfolio";
import { Card } from "@/components/ui";
import { Phone, MessageSquare } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function ContactCard() {
  const cleanPhone = portfolio.phone.replace(/\s+/g, "");

  const actionLinks = [
    {
      name: "Call",
      url: `tel:${cleanPhone}`,
      icon: <Phone size={18} />,
      color: "hover:bg-blue-600 hover:text-white border-blue-500/20 text-blue-400 bg-blue-500/5",
    },
    {
      name: "SMS",
      url: `sms:${cleanPhone}`,
      icon: <MessageSquare size={18} />,
      color: "hover:bg-indigo-600 hover:text-white border-indigo-500/20 text-indigo-400 bg-indigo-500/5",
    },
    {
      name: "WhatsApp",
      url: `https://wa.me/${cleanPhone.replace("+", "")}`,
      icon: <FaWhatsapp size={18} />,
      color: "hover:bg-emerald-600 hover:text-white border-emerald-500/20 text-emerald-400 bg-emerald-500/5",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/omkulkarni_12",
      icon: <FaInstagram size={18} />,
      color: "hover:bg-pink-600 hover:text-white border-pink-500/20 text-pink-400 bg-pink-500/5",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/omkulkarni_12",
      icon: <FaXTwitter size={18} />,
      color: "hover:bg-slate-700 hover:text-white border-white/10 text-slate-300 bg-white/5",
    },
  ];

  return (
    <Card className="space-y-6">
      <h3 className="text-3xl font-bold">
        Contact Information
      </h3>

      <div>
        <p className="text-slate-400">Email</p>
        <p>{portfolio.email}</p>
      </div>

      <div>
        <p className="text-slate-400">Phone</p>
        <p>{portfolio.phone}</p>
      </div>

      <div>
        <p className="text-slate-400">Location</p>
        <p>{portfolio.location}</p>
      </div>

      <div className="pt-4 border-t border-white/10">
        <p className="text-slate-400 mb-3">Quick Connections</p>
        <div className="flex flex-wrap gap-3">
          {actionLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.name === "Call" || link.name === "SMS" ? undefined : "_blank"}
              rel={link.name === "Call" || link.name === "SMS" ? undefined : "noopener noreferrer"}
              title={link.name}
              className={`flex items-center justify-center w-11 h-11 rounded-full border transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${link.color}`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
}