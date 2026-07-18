export type HostCity = {
  slug: string;
  name: string;
  title: string; // <title> tag
  description: string; // meta description
  heroSub: string; // hero paragraph
  demand: { title: string; desc: string }[]; // "what travelers need here"
};

export const HOST_CITIES: HostCity[] = [
  {
    slug: "toronto",
    name: "Toronto",
    title: "Become a Corneroom Host in Toronto — List Your Space",
    description:
      "List a spare room, desk, shower & more in Toronto. Verified guests, you set the price — founding hosts keep 100% of their earnings for 12 months.",
    heroSub:
      "Toronto never has enough affordable space. Your spare room, quiet desk or backyard can help a traveler land softly — and earn, on your terms. Corneroom is Toronto-built, and founding hosts here open the map for everyone else.",
    demand: [
      {
        title: "Spare rooms & guest beds",
        desc: "Travelers, newcomers and visiting students priced out of downtown hotels are looking for a welcoming, affordable night.",
      },
      {
        title: "Desks & home offices",
        desc: "Remote workers across the GTA want a quiet, bookable desk closer than a commute and warmer than a chain café.",
      },
      {
        title: "Social spaces",
        desc: "Rooftops, backyards and living rooms for meetups and hangouts — space for people to actually get together.",
      },
    ],
  },
  {
    slug: "nyc",
    name: "New York",
    title: "Become a Corneroom Host in New York — List Your Space",
    description:
      "List a spare room, desk, shower & more in NYC. Verified guests, you set the price — founding hosts keep 100% of their earnings for 12 months.",
    heroSub:
      "In a city where every square foot counts, yours can count for more. A spare room, a desk that's empty all day, even a shower between flights — New Yorkers can share it, on their terms, with verified guests.",
    demand: [
      {
        title: "Spare rooms & guest beds",
        desc: "Visitors squeezed by hotel prices want a real, affordable place to sleep — hosted by a real New Yorker.",
      },
      {
        title: "Day-use & showers",
        desc: "Red-eye arrivals and layover travelers need a shower and a reset hours before any check-in time.",
      },
      {
        title: "Desks & workspaces",
        desc: "Freelancers and traveling professionals want a bookable desk that isn't a $600/month coworking commitment.",
      },
    ],
  },
  {
    slug: "bangkok",
    name: "Bangkok",
    title: "Become a Corneroom Host in Bangkok — List Your Space",
    description:
      "List a spare room, desk, shower & more in Bangkok. Verified guests, you set the price — founding hosts keep 100% of their earnings for 12 months.",
    heroSub:
      "Bangkok is one of the most visited cities on earth — and one of the hardest to rest in between a landing and a check-in. A spare room, a shower, a quiet desk: whatever space you have, travelers are already looking for it.",
    demand: [
      {
        title: "Showers & day-use",
        desc: "Layover and overnight-bus travelers arrive hours before check-in anywhere — a hot shower and a reset is exactly what they need.",
      },
      {
        title: "Spare rooms & guest beds",
        desc: "Budget travelers and digital nomads want an affordable, verified stay with a local — not another anonymous hostel bunk.",
      },
      {
        title: "Desks & workspaces",
        desc: "Remote workers passing through want a bookable desk with good wifi, by the hour or the day.",
      },
    ],
  },
  {
    slug: "chiang-mai",
    name: "Chiang Mai",
    title: "Become a Corneroom Host in Chiang Mai — List Your Space",
    description:
      "List a spare room, desk, shower & more in Chiang Mai. Verified guests, you set the price — founding hosts keep 100% of their earnings for 12 months.",
    heroSub:
      "Chiang Mai is the digital-nomad capital of the world — thousands of remote workers arrive every month looking for a desk, a room, a community. Founding hosts here will be first on the map when they land.",
    demand: [
      {
        title: "Desks & workspaces",
        desc: "Nomads want a quiet, bookable desk — a real alternative to café-hopping and crowded coworking spaces.",
      },
      {
        title: "Spare rooms & guest beds",
        desc: "New arrivals want an affordable first landing with a local before they commit to a monthly rental.",
      },
      {
        title: "Social spaces",
        desc: "The nomad community runs on meetups — gardens, rooftops and living rooms that can host one are in demand.",
      },
    ],
  },
  {
    slug: "hanoi",
    name: "Hanoi",
    title: "Become a Corneroom Host in Hanoi — List Your Space",
    description:
      "List a spare room, desk, shower & more in Hanoi. Verified guests, you set the price — founding hosts keep 100% of their earnings for 12 months.",
    heroSub:
      "Hanoi's mix of travelers, students and remote workers means real demand for real spaces — a spare room in the Old Quarter, a quiet desk in Ba Đình, a place to shower after an overnight train. Your space can be first.",
    demand: [
      {
        title: "Spare rooms & guest beds",
        desc: "Backpackers and long-stay travelers want an affordable, verified stay with a local host.",
      },
      {
        title: "Desks & workspaces",
        desc: "A growing remote-work scene is looking for bookable desks with reliable wifi.",
      },
      {
        title: "Showers & day-use",
        desc: "Overnight trains and buses from Sapa and beyond arrive at dawn — hours before any check-in.",
      },
    ],
  },
];

export function getCity(slug: string): HostCity | undefined {
  return HOST_CITIES.find((c) => c.slug === slug);
}
