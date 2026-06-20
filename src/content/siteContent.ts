export const siteContent = {
  siteName: "Moss Guitar",
  headline: "Guitar parts, loops, and texture for songs that need a human feel.",
  bio: "Will Moss is a guitarist based in New York City, making warm, song-first guitar parts for artists, rappers, producers, and musicians who want something played with taste and intention.",
  location: "NYC",
  email: "hello@willmossguitar.com",
  heroImage: {
    alt: "Will Moss playing guitar live under blue stage lights",
    src: "/images/will-live-hero.jpg",
    position: "center 35%",
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
      label: "Spotify",
      href: "https://open.spotify.com/",
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
      alt: "Warm studio amp and pedal setup by a window",
      src: "/images/studio-amp-room.jpg",
      position: "center",
    },
    {
      alt: "Recording desk with guitar amp, monitors, pedals, and keyboard",
      src: "/images/recording-desk.jpg",
      position: "center",
    },
    {
      alt: "Will Moss playing guitar close to the crowd",
      src: "/images/crowd-guitar-close.jpg",
      position: "center 35%",
    },
    {
      alt: "Black-and-white live show with guitarists and crowd",
      src: "/images/live-crowd-black-white.jpg",
      position: "center",
    },
    {
      alt: "Black-and-white portrait of Will Moss playing guitar on stage",
      src: "/images/live-portrait-black-white.jpeg",
      position: "center 40%",
    },
    {
      alt: "Black-and-white band performance with Will Moss playing guitar",
      src: "/images/band-live-black-white.jpg",
      position: "center",
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
    ogImage: "/images/live-crowd-black-white.jpg",
  },
};

export type SiteContent = typeof siteContent;
