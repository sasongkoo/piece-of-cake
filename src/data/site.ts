export const site = {
  name: "Jastipsy",
  tagline: "Jasa beli tiket konser. Aman, transparan, tanpa drama.",
  description:
    "Jastipsy membantu kamu dapat tiket konser original lewat jasa titip. Kami cek stok, belikan, dan kirim e-ticket — kamu tinggal nonton.",
  whatsapp: "6281234567890",
  instagram: "jastipsy",
  email: "halo@jastipsy.id",
  city: "Jakarta & seluruh Indonesia",
};

export function waLink(text?: string) {
  const encoded = encodeURIComponent(
    text ?? "Halo Jastipsy, saya mau tanya jasa beli tiket konser.",
  );
  return `https://wa.me/${site.whatsapp}?text=${encoded}`;
}
