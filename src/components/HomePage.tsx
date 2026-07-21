import Image from "next/image";
import type { ReactNode } from "react";
import { siteContent } from "@/content/siteContent";
import { ContactBubble } from "./ContactBubble";
import { Section } from "./Section";

type PhotoShape = "feature" | "landscape" | "portrait" | "wide";

function getPhotoLayout(shape?: string) {
  switch (shape as PhotoShape) {
    case "feature":
      return "md:col-span-6";
    case "portrait":
      return "md:col-span-2";
    case "landscape":
      return "md:col-span-4";
    case "wide":
    default:
      return "md:col-span-3";
  }
}

function getPhotoImageClass(shape?: string) {
  switch (shape as PhotoShape) {
    case "feature":
      return "aspect-[4/3]";
    case "portrait":
      return "aspect-[3/4]";
    case "landscape":
      return "aspect-[8/5]";
    case "wide":
    default:
      return "aspect-[4/3]";
  }
}

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const isExternal = !href.startsWith("mailto:") && !href.startsWith("#");

  return (
    <a
      className={className}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export function HomePage() {
  const mailHref = `mailto:${siteContent.email}`;
  const navLinks = [
    { label: "Demos", href: "#demos" },
    { label: "Videos", href: "#videos" },
    { label: "Photos", href: "#photos" },
    { label: "Gear", href: "#gear" },
  ];

  return (
    <main className="min-h-screen bg-[#efe7d7] text-[#303225]">
      <section className="border-b border-[#cfc0a6] bg-[#f6f0e4]">
        <div className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8">
          <header className="flex items-center justify-between gap-4">
            <p className="font-serif text-2xl font-medium text-[#314029]">
              {siteContent.siteName}
            </p>
          </header>

          <div className="grid gap-10 pb-8 pt-8 md:min-h-[calc(100vh-8.5rem)] md:grid-cols-[0.9fr_1.1fr] md:items-center md:pb-10 md:pt-6">
            <div className="max-w-2xl">
              <h1 className="font-serif text-4xl font-medium leading-tight text-[#26351f] sm:text-5xl lg:text-[3.05rem]">
                {siteContent.headline}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#5a4f3f] sm:text-lg">
                {siteContent.bio}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ContactBubble
                  email={siteContent.email}
                  className="inline-flex h-14 items-center justify-center rounded-full bg-[#536845] px-8 text-sm font-semibold text-[#fbf7ed] transition hover:bg-[#314029] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#536845]"
                />
                <a
                  href="#demos"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-[#9b8a68] px-8 text-sm font-semibold text-[#3f422f] transition hover:border-[#536845] hover:bg-[#536845] hover:text-[#fbf7ed] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#536845]"
                >
                  Hear demos
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:-mt-8 md:justify-self-end lg:flex-row lg:items-center">
              <figure>
                <div className="border border-[#b9a982] bg-[#e8dcc8] p-3">
                  <Image
                    src={siteContent.heroImage.src}
                    alt={siteContent.heroImage.alt}
                    width={1220}
                    height={1801}
                    priority
                    className="h-auto w-full max-w-full md:max-h-[640px] md:w-auto"
                  />
                </div>
              </figure>
              <nav
                aria-label="Page sections"
                className="flex flex-wrap gap-3 lg:w-28 lg:translate-x-20 lg:flex-col lg:gap-4 xl:translate-x-28"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#9b8a68] bg-[#efe7d7] px-5 text-base font-semibold text-[#4b4438] transition hover:border-[#536845] hover:bg-[#536845] hover:text-[#fbf7ed] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#536845] lg:w-36"
                  >
                    {link.label}
                  </a>
                ))}
                <ContactBubble
                  email={siteContent.email}
                  className="inline-flex min-h-12 min-w-36 items-center justify-center rounded-full border border-[#9b8a68] bg-[#efe7d7] px-5 text-base font-semibold text-[#4b4438] transition hover:border-[#536845] hover:bg-[#536845] hover:text-[#fbf7ed] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#536845]"
                />
              </nav>
            </div>
          </div>
        </div>
      </section>

      <Section id="demos" eyebrow="A short listening list" title="Featured demos">
        <div className="divide-y divide-[#cfc0a6] border-y border-[#cfc0a6]">
          {siteContent.demos.map((demo) => (
            <article
              key={demo.title}
              className="grid gap-4 py-6 md:grid-cols-[7rem_1fr_auto] md:items-center"
            >
              <p className="w-fit rounded-sm bg-[#d8c6a5] px-3 py-1 text-xs font-semibold text-[#3f422f]">
                {demo.tag}
              </p>
              <div>
                <h3 className="font-serif text-2xl font-medium text-[#303225]">
                  {demo.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5a4f3f]">
                  {demo.description}
                </p>
              </div>
              <ExternalLink
                href={demo.href}
                className="text-sm font-semibold text-[#536845] transition hover:text-[#26351f]"
              >
                Listen soon
              </ExternalLink>
            </article>
          ))}
        </div>
      </Section>

      <Section id="videos" eyebrow="Clips and takes" title="Videos">
        <div className="grid gap-5 sm:grid-cols-2">
          {siteContent.videos.map((video) => (
            <ExternalLink
              key={video.title}
              href={video.href}
              className="group block border border-[#c4b28d] bg-[#f6f0e4]"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/images/video-placeholder.svg"
                  alt=""
                  width={900}
                  height={506}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-[#c4b28d] p-4">
                <h3 className="font-serif text-xl font-medium text-[#303225]">
                  {video.title}
                </h3>
                <span className="text-sm font-semibold text-[#536845] transition group-hover:text-[#26351f]">
                  Open
                </span>
              </div>
            </ExternalLink>
          ))}
        </div>
      </Section>

      <Section id="photos" eyebrow="Room tone" title="Photos / studio">
        <div className="grid items-start gap-5 md:grid-cols-6">
          {siteContent.photos.map((photo) => (
            <div
              key={photo.src}
              className={`border border-[#c4b28d] bg-[#f6f0e4] p-2 ${getPhotoLayout(
                photo.shape,
              )}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1200}
                height={900}
                style={{ objectPosition: photo.position }}
                className={`w-full object-cover ${getPhotoImageClass(
                  photo.shape,
                )}`}
              />
            </div>
          ))}
        </div>
      </Section>

      <Section id="gear" eyebrow="Recording setup" title="Gear + Recording">
        <div className="max-w-4xl border-l-2 border-[#536845] pl-5">
          <p className="mb-5 leading-8 text-[#5a4f3f]">
            A simple remote session setup built around useful tones, clean stems,
            and parts that leave room for the song.
          </p>
          <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {siteContent.gear.map((item) => (
              <div key={item.label} className="border-t border-[#cfc0a6] pt-3">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6d5639]">
                  {item.label}
                </dt>
                <dd className="mt-2 text-sm leading-6 text-[#4b4438]">
                  {item.details}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section eyebrow="What I can add" title="Useful guitar parts for your track">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.services.map((service) => (
            <div
              key={service}
              className="border-b border-[#b9a982] pb-4 text-base leading-7 text-[#4b4438]"
            >
              {service}
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Send a song, reference, or rough idea">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <p className="max-w-2xl text-base leading-8 text-[#5a4f3f] sm:text-lg">
            Reach out with a track, a voice memo, or a reference playlist. Send
            whatever stage the song is in and the kind of guitar feeling you want.
          </p>
          <div className="flex flex-col gap-4">
            <ExternalLink
              href={mailHref}
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#303225] px-6 text-sm font-semibold text-[#fbf7ed] transition hover:bg-[#536845]"
            >
              {siteContent.email}
            </ExternalLink>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-[#5b4c35] md:justify-start">
              {siteContent.socialLinks.map((link) => (
                <ExternalLink
                  key={link.label}
                  href={link.href}
                  className="transition hover:text-[#314029]"
                >
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
