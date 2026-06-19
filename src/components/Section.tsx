import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  id?: string;
};

export function Section({ eyebrow, title, children, id }: SectionProps) {
  return (
    <section id={id} className="border-t border-[#cfc0a6] py-14 sm:py-18">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mb-8 max-w-2xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-medium text-[#6d5639]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-serif text-3xl font-medium leading-tight text-[#303225] sm:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
