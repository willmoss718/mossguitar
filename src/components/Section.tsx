import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  id?: string;
};

export function Section({ eyebrow, title, children, id }: SectionProps) {
  return (
    <section id={id} className="border-t border-white/10 py-14 sm:py-18">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mb-8 max-w-2xl">
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-2xl font-semibold text-stone-50 sm:text-3xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
