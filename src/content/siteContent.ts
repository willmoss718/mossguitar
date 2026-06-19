export const siteContent = {
  siteName: "Will Moss Guitar",
  headline: "Session guitar, loops, and texture for artists building songs in NYC and beyond.",
  bio: "Will Moss is a guitarist based in New York City, creating tasteful guitar parts for musicians, rappers, producers, and collaborators who need the right feeling on a track.",
  location: "NYC",
  email: "hello@willmossguitar.com",
  socialLinks: [
    {
      label: "Instagram",
      href: "https://instagram.com/willmossguitar",
    },
    {
      label: "SoundCloud",
      href: "https://soundcloud.com/",
    },
    {
      label: "YouTube",
      href: "https://youtube.com/",
    },
  ],
  demos: [
    {
      title: "Late night R&B loop",
      description: "Clean chords, muted pocket, and a melodic hook idea for topliners.",
      href: "#",
      tag: "Loop",
    },
    {
      title: "Indie soul guitar pass",
      description: "Warm double-tracked rhythm guitars with a simple lead response.",
      href: "#",
      tag: "Session",
    },
    {
      title: "Rap hook texture",
      description: "Sparse tremolo lines and vinyl-ready ear candy for an open verse.",
      href: "#",
      tag: "Texture",
    },
  ],
  videos: [
    {
      title: "Studio clip",
      href: "https://youtube.com/",
    },
    {
      title: "Live idea",
      href: "https://instagram.com/",
    },
  ],
  photos: [
    {
      alt: "Studio guitar setup placeholder",
      src: "/images/studio-placeholder.svg",
    },
    {
      alt: "Guitar pedals placeholder",
      src: "/images/pedals-placeholder.svg",
    },
  ],
  gear: [
    "Fender-style single coils",
    "Humbucker rhythm tones",
    "Pedals for chorus, delay, reverb, fuzz, and modulation",
    "Direct recording chain for fast remote sessions",
    "Clean DI stems plus printed effects when useful",
  ],
  services: [
    "Guitar loops and starter ideas",
    "Lead lines, hooks, and counter-melodies",
    "Rhythm guitar parts that support the vocal",
    "Textural layers, swells, and transitions",
    "Remote session work with organized stems",
  ],
  seo: {
    title: "Will Moss Guitar | NYC Session Guitarist",
    description:
      "Personal portfolio for Will Moss, an NYC guitarist offering session guitar parts, loops, textures, and collaboration for artists and producers.",
    ogImage: "/images/og-placeholder.svg",
  },
};

export type SiteContent = typeof siteContent;
