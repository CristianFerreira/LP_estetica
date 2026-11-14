import {
  brand,
  hero,
  instagramHandle,
  instagramUrl,
  location,
  phoneDisplay,
  phoneE164,
} from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-chumbo/10 bg-branco">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-chumbo md:px-6">
        <p>{hero.notice}</p>
        <p>{location}</p>
        <a
          href={`tel:${phoneE164}`}
          className="w-fit underline-offset-4 hover:underline"
        >
          {phoneDisplay}
        </a>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit underline-offset-4 hover:underline"
        >
          {instagramHandle}
          <span className="sr-only"> (abre numa nova janela)</span>
        </a>
        <p className="text-chumbo/70">
          © {year} {brand.name}
        </p>
      </div>
    </footer>
  );
}
