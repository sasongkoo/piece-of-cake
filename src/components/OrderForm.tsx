"use client";

import { FormEvent, useMemo, useState } from "react";
import { events } from "@/data/events";
import { waLink } from "@/data/site";

export function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [eventId, setEventId] = useState(events[0]?.id ?? "");
  const [category, setCategory] = useState("");
  const [qty, setQty] = useState("1");
  const [notes, setNotes] = useState("");

  const selected = useMemo(
    () => events.find((e) => e.id === eventId),
    [eventId],
  );

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const eventLabel = selected
      ? `${selected.artist} — ${selected.title}`
      : eventId;
    const message = [
      "Halo Jastipsy, saya mau order tiket.",
      `Nama: ${name}`,
      `WA: ${phone}`,
      `Event: ${eventLabel}`,
      `Kategori: ${category || "-"}`,
      `Jumlah: ${qty}`,
      notes ? `Catatan: ${notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="order" className="border-y border-white/10 bg-white/[0.03] py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">
            Order
          </p>
          <h2 className="font-display mt-3 text-4xl font-bold">
            Isi form, lanjut chat admin.
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/60">
            Form ini tidak memotong pembayaran. Setelah submit, WhatsApp terbuka
            dengan detail order. Admin akan konfirmasi stok dan total bayar.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-white/70">
            <li>• Harga tiket mengikuti official / sumber resmi</li>
            <li>• Fee jasa disepakati dulu sebelum transfer</li>
            <li>• Gagal dapat tiket? DP dikembalikan</li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="glow-ring rounded-3xl bg-[#0d0b16] p-6"
        >
          <label className="block text-sm">
            Nama lengkap
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none ring-fuchsia-400 focus:ring-2"
            />
          </label>
          <label className="mt-4 block text-sm">
            Nomor WhatsApp
            <input
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="08xxxxxxxxxx"
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none ring-fuchsia-400 focus:ring-2"
            />
          </label>
          <label className="mt-4 block text-sm">
            Event
            <select
              value={eventId}
              onChange={(e) => {
                setEventId(e.target.value);
                setCategory("");
              }}
              className="mt-1 w-full rounded-xl border border-white/10 bg-[#0d0b16] px-3 py-2 outline-none ring-fuchsia-400 focus:ring-2"
            >
              {events.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.artist} — {event.city}
                </option>
              ))}
            </select>
          </label>
          <label className="mt-4 block text-sm">
            Kategori tiket
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-[#0d0b16] px-3 py-2 outline-none ring-fuchsia-400 focus:ring-2"
            >
              <option value="">Pilih kategori</option>
              {selected?.categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </label>
          <label className="mt-4 block text-sm">
            Jumlah tiket
            <input
              type="number"
              min={1}
              max={8}
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none ring-fuchsia-400 focus:ring-2"
            />
          </label>
          <label className="mt-4 block text-sm">
            Catatan
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder="Misal: mau seat berdekatan, budget max, dll."
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none ring-fuchsia-400 focus:ring-2"
            />
          </label>
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-lime-300 py-3 text-sm font-semibold text-black hover:bg-lime-200"
          >
            Kirim ke WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
