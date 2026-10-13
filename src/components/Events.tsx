import { events } from "@/data/events";
import { waLink } from "@/data/site";

const badge = {
  open: "bg-lime-300/15 text-lime-200",
  limited: "bg-amber-300/15 text-amber-200",
  closed: "bg-white/10 text-white/40",
};

const label = {
  open: "Open order",
  limited: "Sisa sedikit",
  closed: "Closed",
};

export function Events() {
  return (
    <section id="event" className="mx-auto max-w-6xl px-5 py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-fuchsia-300">
            Katalog
          </p>
          <h2 className="font-display mt-3 text-4xl font-bold">
            Event yang lagi kami belikan.
          </h2>
        </div>
        <p className="max-w-sm text-sm text-white/50">
          Daftar contoh. Stok berubah cepat — konfirmasi via WhatsApp sebelum transfer.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <article
            key={event.id}
            className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d0b16]"
          >
            <div
              className={`h-28 bg-gradient-to-br ${event.accent} opacity-90`}
            />
            <div className="p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs text-white/50">
                  {event.city} · {event.date}
                </p>
                <span
                  className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${badge[event.status]}`}
                >
                  {label[event.status]}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-bold">{event.artist}</h3>
              <p className="text-sm text-white/60">{event.title}</p>
              <p className="mt-2 text-xs text-white/40">{event.venue}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {event.categories.map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full border border-white/10 px-2 py-0.5 text-[11px] text-white/70"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between">
                <p className="text-sm">
                  Fee dari <span className="font-semibold">{event.feeFrom}</span>
                </p>
                {event.status === "closed" ? (
                  <span className="text-xs text-white/40">Habis</span>
                ) : (
                  <a
                    href={waLink(
                      `Halo jastipisy, saya mau order tiket ${event.artist} — ${event.title} (${event.city}).`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-black hover:bg-lime-200"
                  >
                    Order
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
