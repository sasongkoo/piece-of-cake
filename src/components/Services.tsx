const services = [
  {
    title: "Beli tiket presale",
    body: "Kami antri saat sale dibuka. Kamu bayar harga resmi plus fee yang sudah disepakati.",
  },
  {
    title: "Cari tiket last minute",
    body: "Event sudah sold out? Kami bantu cek opsi resmi / reseller terpercaya sesuai budget.",
  },
  {
    title: "Paket group & VIP",
    body: "Untuk nonton bareng teman atau klien. Bisa request seat berdekatan.",
  },
  {
    title: "Kirim e-ticket",
    body: "Setelah lunas, e-ticket dikirim via WhatsApp/email. Ada bukti pembelian.",
  },
];

export function Services() {
  return (
    <section id="layanan" className="mx-auto max-w-6xl px-5 py-20">
      <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">Layanan</p>
      <h2 className="font-display mt-3 max-w-xl text-4xl font-bold">
        Semua urusan tiket, satu admin.
      </h2>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {services.map((item, i) => (
          <article
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-fuchsia-400/40"
          >
            <span className="text-xs text-white/40">0{i + 1}</span>
            <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/65">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
