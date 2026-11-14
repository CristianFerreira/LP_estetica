import {
  googleReviewsUrl,
  testimonials,
  testimonialsHeading,
} from "@/lib/site";

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="size-3.5 shrink-0"
    >
      <path
        d="M8 4H4.5A1.5 1.5 0 0 0 3 5.5v10A1.5 1.5 0 0 0 4.5 17h10a1.5 1.5 0 0 0 1.5-1.5V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11 3h6v6M17 3l-8 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section className="px-4 pb-16 md:px-6 md:pb-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl font-medium tracking-tight text-chumbo md:text-4xl">
          {testimonialsHeading}
        </h2>
        <ul className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className="h-full">
              <article className="flex h-full flex-col gap-4 rounded-3xl bg-branco p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <p
                  className="text-sm tracking-wide"
                  aria-label="5 de 5 estrelas"
                >
                  <span aria-hidden="true">⭐️⭐️⭐️⭐️⭐️</span>
                </p>
                <p className="leading-relaxed text-chumbo/80">
                  {testimonial.quote}
                </p>
                <p className="mt-auto text-sm font-medium text-chumbo">
                  {testimonial.name}
                </p>
              </article>
            </li>
          ))}
        </ul>
        <div className="pt-8 text-center">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-salvia underline-offset-4 transition-colors hover:text-verde hover:underline"
          >
            Ler mais avaliações no Google
            <ExternalLinkIcon />
            <span className="sr-only"> (abre numa nova janela)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
