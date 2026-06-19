export const siteContent = {
  siteName: "Moss Guitar",
  headline: "Guitar parts, loops, and texture for songs that need a human feel.",
  bio: "Will Moss is a guitarist based in New York City, making warm, song-first guitar parts for artists, rappers, producers, and musicians who want something played with taste and intention.",
  location: "NYC",
  email: "hello@willmossguitar.com",
  heroImage: {
    alt: "Portrait or studio photo placeholder for Moss Guitar",
    src: "/images/studio-photo-placeholder.svg",
  },
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
      alt: "Studio room photo placeholder",
      src: "/images/studio-photo-placeholder.svg",
    },
    {
      alt: "Guitar detail photo placeholder",
      src: "/images/guitar-photo-placeholder.svg",
    },
    {
      alt: "Amp or recording setup photo placeholder",
      src: "/images/room-photo-placeholder.svg",
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
    title: "Moss Guitar | Will Moss NYC Session Guitarist",
    description:
      "Personal portfolio for Will Moss, an NYC guitarist offering session guitar parts, loops, textures, and collaboration for artists and producers.",
    ogImage: "/images/og-image-placeholder.svg",
  },
};

export type SiteContent = typeof siteContent;
