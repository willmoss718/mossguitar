export const siteContent = {
  siteName: "Moss Guitar",
  headline: "I record guitar parts over your songs.",
  bio: "Will Moss is a born-and-raised Brooklynite recording song-first guitar parts for artists, rappers, producers, and musicians who want something played with taste and intention.",
  location: "NYC",
  email: "willmoss718@gmail.com",
  heroImage: {
    alt: "Black-and-white photo of Will Moss standing on stage with guitar",
    src: "/images/hero-black-white-portrait.jpeg",
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
      alt: "Recording desk with guitar amp, monitors, pedals, and keyboard",
      src: "/images/recording-desk.jpg",
      position: "center",
      shape: "wide",
    },
    {
      alt: "Will Moss playing guitar close to the crowd",
      src: "/images/crowd-guitar-close.jpg",
      position: "center",
      shape: "wide",
    },
    {
      alt: "Will Moss playing guitar live under blue stage lights",
      src: "/images/will-live-hero.jpg",
      position: "center 35%",
      shape: "portrait",
    },
    {
      alt: "Black-and-white live show with guitarists and crowd",
      src: "/images/live-crowd-black-white.jpg",
      position: "center center",
      shape: "landscape",
    },
    {
      alt: "Black-and-white band performance with Will Moss playing guitar",
      src: "/images/band-live-black-white.jpg",
      position: "center top",
      shape: "feature",
    },
  ],
  gear: [
    {
      label: "Guitars",
      details:
        "Acoustics, bass, single-coil electrics, and humbucker electrics.",
    },
    {
      label: "Amps",
      details:
        "MIG 50, Fender Vibro Champ Reverb, Monoprice 15-watt, Epiphone Valve Junior, and a 2x12 cab.",
    },
    {
      label: "Outboard color",
      details:
        "A genuine rotating speaker, tube-powered spring reverb, and dozens of assorted pedals.",
    },
    {
      label: "Amp modelling",
      details: "Very familiar with amp modelling for flexible direct tones.",
    },
    {
      label: "Monitoring",
      details: "Mixing on LP-6 speakers.",
    },
    {
      label: "Mics",
      details: "Sennheiser e609, Warm Audio Fentone, and a stereo mic.",
    },
    {
      label: "DAWs",
      details:
        "Logic, Ableton, and Pro Tools; lighter familiarity with FL Studio.",
    },
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
