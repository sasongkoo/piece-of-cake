import { site, waLink } from "@/data/site";

export function Hero() {
  return (
    <section id="beranda" className="stage-grid relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-28">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-fuchsia-200">
            jasa titip tiket konser
          </p>
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            Mau nonton.
            <span className="block bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
              Tiketnya kami belikan.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">{site.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#order"
              className="rounded-full bg-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(217,70,239,0.45)] transition hover:bg-fuchsia-400"
            >
              Order sekarang
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5"
            >
              Tanya stok dulu
            </a>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-center md:text-left">
            <div>
              <dt className="text-2xl font-bold">500+</dt>
              <dd className="text-xs text-white/50">order selesai</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold">100%</dt>
              <dd className="text-xs text-white/50">e-ticket original</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold">1 jam</dt>
              <dd className="text-xs text-white/50">respon rata-rata</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="glow-ring relative rotate-3 rounded-3xl bg-gradient-to-br from-white/10 to-white/0 p-6 backdrop-blur-md">
            <div className="rounded-2xl border border-dashed border-white/25 bg-[#0d0b16] p-6">
              <div className="flex items-center justify-between text-xs text-white/50">
                <span>E-TICKET</span>
                <span>jastipisy PASS</span>
              </div>
              <p className="font-display mt-8 text-3xl font-bold">Your Name</p>
              <p className="mt-1 text-sm text-fuchsia-200">GATE A · SEAT 12</p>
              <div className="mt-8 h-16 rounded-xl bg-[repeating-linear-gradient(90deg,#22d3ee_0_4px,transparent_4px_10px)] opacity-80" />
              <div className="mt-6 flex justify-between text-xs text-white/60">
                <span>Scan at venue</span>
                <span>Original · Insured</span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-4 rounded-2xl border border-lime-300/30 bg-lime-300 px-4 py-3 text-sm font-semibold text-black shadow-[0_0_30px_rgba(190,242,100,0.35)]">
            Fee transparan, no markup gelap
          </div>
        </div>
      </div>
    </section>
  );
}
