export type EventItem = {
  id: string;
  artist: string;
  title: string;
  venue: string;
  city: string;
  date: string;
  status: "open" | "limited" | "closed";
  categories: string[];
  feeFrom: string;
  accent: string;
};

export const events: EventItem[] = [
  {
    id: "coldplay-jakarta",
    artist: "Coldplay",
    title: "Music of the Spheres",
    venue: "GBK Main Stadium",
    city: "Jakarta",
    date: "15 Nov 2026",
    status: "limited",
    categories: ["Festival", "Cat 1", "Cat 2"],
    feeFrom: "Rp 75.000",
    accent: "from-cyan-400 to-violet-500",
  },
  {
    id: "tulus-bandung",
    artist: "Tulus",
    title: "Tur Manusia",
    venue: "Sabuga",
    city: "Bandung",
    date: "22 Nov 2026",
    status: "open",
    categories: ["VIP", "Regular"],
    feeFrom: "Rp 50.000",
    accent: "from-amber-300 to-rose-500",
  },
  {
    id: "nct-surabaya",
    artist: "NCT 127",
    title: "Neo City Tour",
    venue: "Jatim Expo",
    city: "Surabaya",
    date: "6 Des 2026",
    status: "open",
    categories: ["Soundcheck", "VIP", "Cat A"],
    feeFrom: "Rp 85.000",
    accent: "from-fuchsia-400 to-indigo-500",
  },
  {
    id: "raise-bali",
    artist: "Raise A Suilen",
    title: "Asia Tour Night",
    venue: "Beach City International",
    city: "Bali",
    date: "13 Des 2026",
    status: "open",
    categories: ["Standing", "Seated"],
    feeFrom: "Rp 60.000",
    accent: "from-lime-300 to-emerald-500",
  },
  {
    id: "blackpink-jakarta",
    artist: "BLACKPINK",
    title: "Deadline World Tour",
    venue: "ICE BSD",
    city: "Tangerang",
    date: "20 Des 2026",
    status: "limited",
    categories: ["VIP", "Cat 1", "Cat 2"],
    feeFrom: "Rp 95.000",
    accent: "from-pink-400 to-rose-600",
  },
  {
    id: "iwak-semarang",
    artist: "Iwak Band",
    title: "Malam Indie Raya",
    venue: "Sam Po Kong",
    city: "Semarang",
    date: "10 Jan 2027",
    status: "open",
    categories: ["Early Bird", "Presale"],
    feeFrom: "Rp 35.000",
    accent: "from-orange-400 to-yellow-300",
  },
];
