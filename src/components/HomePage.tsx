import Image from "next/image";
import type { ReactNode } from "react";
import { siteContent } from "@/content/siteContent";
import { Section } from "./Section";

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

  return (
    <main className="min-h-screen overflow-hidden bg-[#08090b] text-stone-100">
      <section className="relative min-h-[88vh] border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(8,9,11,0.95),rgba(8,9,11,0.76)),url('/images/studio-placeholder.svg')] bg-cover bg-center" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#08090b] to-transparent" />
        <div className="relative mx-auto flex min-h-[88vh] w-full max-w-6xl flex-col justify-between px-5 py-6 sm:px-8 sm:py-8">
          <header className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-stone-100">
              {siteContent.siteName}
            </p>
            <nav className="hidden items-center gap-5 text-sm text-stone-300 sm:flex">
              <a href="#demos" className="transition hover:text-cyan-200">
                Demos
              </a>
              <a href="#videos" className="transition hover:text-cyan-200">
                Videos
              </a>
              <a href="#contact" className="transition hover:text-cyan-200">
                Contact
              </a>
            </nav>
          </header>

          <div className="max-w-4xl pb-12 pt-28 sm:pb-16 sm:pt-36">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-cyan-200">
              Guitar parts / loops / collaboration / {siteContent.location}
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] text-stone-50 sm:text-6xl lg:text-7xl">
              {siteContent.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
              {siteContent.bio}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ExternalLink
                href={mailHref}
                className="inline-flex h-12 items-center justify-center rounded-full bg-cyan-200 px-6 text-sm font-semibold text-zinc-950 transition hover:bg-stone-50"
              >
                Send a track
              </ExternalLink>
              <a
                href="#demos"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-stone-100 transition hover:border-cyan-200 hover:text-cyan-200"
              >
                Hear demos
              </a>
            </div>
          </div>
        </div>
      </section>

      <Section id="demos" eyebrow="Selected ideas" title="Featured demos">
        <div className="grid gap-4 md:grid-cols-3">
          {siteContent.demos.map((demo) => (
            <article
              key={demo.title}
              className="rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/20"
            >
              <p className="mb-5 inline-flex rounded-full bg-rose-300/10 px-3 py-1 text-xs font-semibold text-rose-100">
                {demo.tag}
              </p>
              <h3 className="text-xl font-semibold text-stone-50">{demo.title}</h3>
              <p className="mt-3 min-h-20 text-sm leading-6 text-stone-300">
                {demo.description}
              </p>
              <ExternalLink
                href={demo.href}
                className="mt-6 inline-flex text-sm font-semibold text-cyan-200 transition hover:text-stone-50"
              >
                Listen soon
              </ExternalLink>
            </article>
          ))}
        </div>
      </Section>

      <Section id="videos" eyebrow="Motion" title="Videos">
        <div className="grid gap-4 sm:grid-cols-2">
          {siteContent.videos.map((video) => (
            <ExternalLink
              key={video.title}
              href={video.href}
              className="group block overflow-hidden rounded-lg border border-white/10 bg-[#111317]"
            >
              <div className="aspect-video bg-[radial-gradient(circle_at_30%_30%,rgba(103,232,249,0.22),transparent_34%),linear-gradient(135deg,#161a20,#090a0d_64%,#27151d)]" />
              <div className="flex items-center justify-between gap-4 p-4">
                <h3 className="font-semibold text-stone-100">{video.title}</h3>
                <span className="text-sm text-cyan-200 transition group-hover:text-stone-50">
                  Open
                </span>
              </div>
            </ExternalLink>
          ))}
        </div>
      </Section>

      <Section eyebrow="Room tone" title="Photos / studio">
        <div className="grid gap-4 md:grid-cols-2">
          {siteContent.photos.map((photo) => (
            <div
              key={photo.src}
              className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={900}
                height={640}
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Recording setup" title="Gear / recording setup">
        <ul className="grid gap-3 sm:grid-cols-2">
          {siteContent.gear.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-white/10 bg-white/[0.035] px-4 py-4 text-sm leading-6 text-stone-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="What I can add" title="Useful guitar parts for your track">
        <div className="grid gap-3 md:grid-cols-5">
          {siteContent.services.map((service) => (
            <div
              key={service}
              className="rounded-lg border border-white/10 bg-[#111317] p-4 text-sm font-medium leading-6 text-stone-200"
            >
              {service}
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Send a song, reference, or rough idea">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <p className="max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
            Reach out with a track, a voice memo, or a reference playlist. Send
            whatever stage the song is in and the kind of guitar feeling you want.
          </p>
          <div className="flex flex-col gap-3">
            <ExternalLink
              href={mailHref}
              className="inline-flex h-12 items-center justify-center rounded-full bg-stone-50 px-6 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-200"
            >
              {siteContent.email}
            </ExternalLink>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-stone-300 md:justify-start">
              {siteContent.socialLinks.map((link) => (
                <ExternalLink
                  key={link.label}
                  href={link.href}
                  className="transition hover:text-cyan-200"
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
