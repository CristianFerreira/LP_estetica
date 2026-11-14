import { planCtaLabel, plans, whatsappHref, type Plan } from "@/lib/site";

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article
      className={
        plan.featured
          ? "relative flex h-full flex-col justify-between gap-6 rounded-3xl border-2 border-salvia bg-salvia/10 p-6 shadow-[0_8px_30px_rgb(44,51,56,0.06)] lg:scale-105"
          : "relative flex h-full flex-col justify-between gap-6 rounded-3xl border border-transparent bg-branco p-6 shadow-[0_8px_30px_rgb(44,51,56,0.06)]"
      }
    >
      {plan.featured && plan.badge ? (
        <span className="absolute -top-3 right-4 z-10 rounded-full bg-salvia px-3 py-1 text-sm font-medium text-branco">
          {plan.badge}
        </span>
      ) : null}

      <div className="flex flex-1 flex-col gap-6">
        <div className="flex flex-col">
          {!plan.featured && plan.badge ? (
            <span className="mb-3 inline-block rounded-md bg-gray-100 px-2 py-1 text-xs font-semibold text-chumbo">
              {plan.badge}
            </span>
          ) : null}
          <h3 className="font-serif text-2xl font-medium text-chumbo">
            {plan.name}
          </h3>
          {plan.duration ? (
            <p className="mt-1 text-sm text-chumbo/70">{plan.duration}</p>
          ) : null}
          {plan.description ? (
            <p className="mt-2 text-sm leading-relaxed text-chumbo/80">
              {plan.description}
            </p>
          ) : null}
        </div>

        <div>
          {plan.originalPrice ? (
            <p className="text-sm text-gray-400 line-through">
              {plan.originalPrice}
            </p>
          ) : null}
          <div
            className={
              plan.originalPrice
                ? "mt-1 flex flex-wrap items-baseline gap-2"
                : "flex flex-wrap items-baseline gap-2"
            }
          >
            <p
              className={
                plan.featured
                  ? "text-3xl font-bold text-chumbo"
                  : "text-2xl font-bold text-chumbo"
              }
            >
              {plan.price}
            </p>
            {plan.savings ? (
              <span className="rounded-md bg-salvia/15 px-2 py-0.5 text-sm font-medium text-verde">
                {plan.savings}
              </span>
            ) : null}
          </div>
          {plan.pricePerSession ? (
            <p className="mt-1 text-sm text-gray-600">{plan.pricePerSession}</p>
          ) : null}
          {plan.validity ? (
            <p className="mt-2 text-sm text-gray-500">{plan.validity}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-3">
        {plan.extraPerk ? (
          <p className="text-sm italic text-verde">{plan.extraPerk}</p>
        ) : null}
        {plan.secondaryOption ? (
          <div className="mt-1 flex items-center justify-between border-t border-gray-100 bg-off-white px-3 py-3 text-sm">
            <span className="text-chumbo/80">{plan.secondaryOption.label}</span>
            <span className="font-semibold text-chumbo">
              {plan.secondaryOption.price}
            </span>
          </div>
        ) : null}
        <a
          href={whatsappHref(plan.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className={
            plan.featured
              ? "inline-flex min-h-12 items-center justify-center rounded-full border border-transparent bg-chumbo px-6 text-sm font-medium text-white hover:bg-chumbo/90"
              : "inline-flex min-h-12 items-center justify-center rounded-full border border-gray-300 bg-transparent px-6 text-sm font-medium text-chumbo hover:bg-gray-50"
          }
        >
          {planCtaLabel}
          <span className="sr-only"> (abre numa nova janela)</span>
        </a>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section id="servicos" className="px-4 pb-16 md:px-6 md:pb-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl font-medium tracking-tight text-chumbo md:text-4xl">
          Serviços
        </h2>
        <p className="mt-3 inline-block rounded-md bg-salvia/10 px-3 py-1.5 text-sm font-medium text-chumbo">
          Campanha Black November: Mais cuidado, mais continuidade e maior
          poupança. Válido até 30/11.
        </p>
        <ul className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <li key={plan.id} className="h-full pt-3">
              <PlanCard plan={plan} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
