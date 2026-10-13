const faqs = [
  {
    q: "Jastipsy official ticket vendor?",
    a: "Bukan. Kami jasa titip (jastip): belikan tiket resmi atas permintaan kamu, plus fee yang transparan.",
  },
  {
    q: "Kalau sale gagal / sold out?",
    a: "Dana dikembalikan. Kalau kamu mau, kami bisa cari opsi lain sesuai budget.",
  },
  {
    q: "Bisa bayar di tempat?",
    a: "Untuk presale biasanya DP dulu. Pelunasan sebelum e-ticket dikirim.",
  },
  {
    q: "Event di luar daftar website?",
    a: "Bisa. Tulis nama event di form atau chat WhatsApp — kami cek dulu apakah masih bisa dibelikan.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-5 py-20">
      <p className="text-xs uppercase tracking-[0.22em] text-amber-200">FAQ</p>
      <h2 className="font-display mt-3 text-4xl font-bold">Yang sering ditanya.</h2>
      <div className="mt-8 divide-y divide-white/10 rounded-3xl border border-white/10">
        {faqs.map((item) => (
          <details key={item.q} className="group px-5 py-4">
            <summary className="cursor-pointer list-none font-medium marker:content-none">
              <span className="flex items-center justify-between gap-4">
                {item.q}
                <span className="text-white/40 group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-2 text-sm leading-6 text-white/60">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
