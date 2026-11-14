import Image from "next/image";
import { whatsappHref } from "@/lib/site";

const aboutImage = {
  src: "/images/simone-atendimento.webp",
  alt: "Simone Keisman realizando massagem terapêutica em Vila Nova de Gaia",
  width: 800,
  height: 600,
} as const;

const pillars = [
  "Atendimento exclusivo ao público feminino",
  "Protocolos personalizados para saúde e bem-estar",
  "Ambiente reservado e acolhedor em Vila Nova de Gaia",
] as const;

const ctaMessage =
  "Olá! Gostaria de saber sobre a disponibilidade para uma avaliação.";

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 size-5 shrink-0 text-salvia"
    >
      <path
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4L8.5 12.1l6.8-6.8a1 1 0 0 1 1.4 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function AboutSection() {
  return (
    <section aria-labelledby="sobre-profissional-heading">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <Image
            src={aboutImage.src}
            alt={aboutImage.alt}
            width={aboutImage.width}
            height={aboutImage.height}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="aspect-[4/3] w-full rounded-3xl object-cover object-top shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
          />
        </div>

        <div className="flex flex-col gap-6 lg:col-span-7">
          <div>
            <p className="text-xs font-semibold tracking-wider text-salvia uppercase">
              A Profissional
            </p>
            <h2
              id="sobre-profissional-heading"
              className="mt-3 font-serif text-3xl font-medium tracking-tight text-chumbo md:text-4xl"
            >
              Cuidado personalizado e 10 anos de experiência em saúde estética.
            </h2>
          </div>

          <div className="flex flex-col gap-4 text-base leading-relaxed text-chumbo/80">
            <p>
              Cada sessão é adaptada às necessidades reais de cada mulher —
              alívio de tensões, recuperação muscular, drenagem linfática e
              cuidados estéticos — com atenção clínica e um acompanhamento
              próximo do primeiro contacto ao final do tratamento.
            </p>
            <p>
              O atendimento decorre num espaço reservado no Edifício Porto Belo,
              em Vila Nova de Gaia, pensado para oferecer tranquilidade,
              privacidade e um ambiente acolhedor onde se sinta cuidada.
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            {pillars.map((pillar) => (
              <li key={pillar} className="flex items-start gap-3 text-chumbo">
                <CheckIcon />
                <span className="leading-relaxed">{pillar}</span>
              </li>
            ))}
          </ul>

          <div>
            <a
              href={whatsappHref(ctaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-verde bg-transparent px-6 text-sm font-medium text-verde hover:bg-verde hover:text-branco"
            >
              Agendar avaliação no WhatsApp
              <span className="sr-only"> (abre numa nova janela)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
