import Image from "next/image";
import { hero, whatsappHref } from "@/lib/site";

const heroImage = {
  src: "/images/spa_room.png",
  alt: "Sala de atendimento premium para massoterapia clínica e bem-estar de Simone Keisman em Vila Nova de Gaia e Porto",
  width: 1536,
  height: 1024,
} as const;

export function Hero() {
  return (
    <section className="px-4 py-12 md:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-chumbo md:text-5xl">
            {hero.title}
          </h1>
          <p className="text-lg leading-relaxed text-chumbo/80">{hero.subtitle}</p>
          <div className="flex w-full flex-col items-center lg:items-start">
            <a
              href={whatsappHref(hero.ctaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pulse inline-flex min-h-12 w-full items-center justify-center rounded-full bg-verde px-6 font-medium text-branco motion-reduce:animate-none lg:w-auto"
            >
              {hero.ctaLabel}
              <span className="sr-only"> (abre numa nova janela)</span>
            </a>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500 lg:justify-start">
              <span aria-hidden="true">🌿</span>
              {hero.notice}
            </p>
          </div>
        </div>
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          width={heroImage.width}
          height={heroImage.height}
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="h-auto w-full rounded-3xl object-cover"
        />
      </div>
    </section>
  );
}
