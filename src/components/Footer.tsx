import { site, waLink } from "@/data/site";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:justify-between">
        <div>
          <p className="font-display text-2xl font-bold">{site.name}</p>
          <p className="mt-2 max-w-sm text-sm text-white/50">{site.tagline}</p>
        </div>
        <div className="space-y-2 text-sm text-white/70">
          
          {/* Location */}
          <div className="flex items-center gap-2">
            <FaLocationDot size={18} />
            <span>{site.city}</span>  
          </div>
          

          {/* WhatsApp */}
          <a
            className="flex items-center gap-2 transition hover:text-white"
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={20} />
            <span>WhatsApp</span>
          </a>

          {/* Instagram */}
          <a
            className="flex items-center gap-2 transition hover:text-white"
            href={`https://instagram.com/${site.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={20} />
            <span>@{site.instagram}</span>
          </a>

          {/* Email */}
          <a
            className="flex items-center gap-2 transition hover:text-white"
            href={`mailto:${site.email}`}
          >
            <MdEmail size={21} />
            <span>{site.email}</span>
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-white/35">
        © 2026 {site.name}. Bukan official promoter.
        Nomor WhatsApp & Instagram di file src/data/site.ts bisa diganti ke akun
        bisnis kamu.
      </p>
    </footer>
  );
}
