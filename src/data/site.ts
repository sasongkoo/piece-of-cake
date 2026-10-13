export const site = {
  name: "Jastipisy",
  tagline: "Jasa beli tiket konser. Aman, transparan, tanpa drama.",
  description:
    "Jastipisy membantu kamu dapat tiket konser original lewat jasa titip. Kami cek stok, belikan, dan kirim e-ticket — kamu tinggal nonton.",
  whatsapp: "6287808182199",
  instagram: "jastipisy",
  email: "halo@jastipisy.id",
  city: "Jakarta & Yogyakarta",
};

export function waLink(text?: string) {
  const encoded = encodeURIComponent(
    text ?? "Halo jastipisy, saya mau tanya jasa beli tiket konser.",
  );
  return `https://wa.me/${site.whatsapp}?text=${encoded}`;
}
