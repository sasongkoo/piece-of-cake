import { site, waLink } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:justify-between">
        <div>
          <p className="font-display text-2xl font-bold">{site.name}</p>
          <p className="mt-2 max-w-sm text-sm text-white/50">{site.tagline}</p>
        </div>
        <div className="space-y-2 text-sm text-white/70">
          <p>{site.city}</p>
          <a className="block hover:text-white" href={waLink()}>
            WhatsApp
          </a>
          <a
            className="block hover:text-white"
            href={`https://instagram.com/${site.instagram}`}
            target="_blank"
            rel="noreferrer"
          >
            @{site.instagram}
          </a>
          <a className="block hover:text-white" href={`mailto:${site.email}`}>
            {site.email}
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
