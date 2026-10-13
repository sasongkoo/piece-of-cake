const steps = [
  {
    n: "01",
    title: "Kasih tau event-nya",
    body: "Isi form atau chat WA: nama event, kategori, jumlah tiket.",
  },
  {
    n: "02",
    title: "Kami cek stok & fee",
    body: "Kamu dapat rincian harga tiket + jasa. Tidak ada biaya tersembunyi.",
  },
  {
    n: "03",
    title: "DP / pelunasan",
    body: "Transfer ke rekening atas nama jastipisy. Bukti dikirim ke admin.",
  },
  {
    n: "04",
    title: "Tiket masuk inbox",
    body: "E-ticket original dikirim. Kalau gagal beli, dana dikembalikan.",
  },
];

export function HowItWorks() {
  return (
    <section id="cara-kerja" className="border-y border-white/10 bg-white/[0.03] py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs uppercase tracking-[0.22em] text-lime-300">
          Cara kerja
        </p>
        <h2 className="font-display mt-3 text-4xl font-bold">
          Empat langkah, tiket di tangan.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map((step) => (
            <article key={step.n} className="relative">
              <p className="font-display text-4xl text-fuchsia-400/70">{step.n}</p>
              <h3 className="mt-3 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
