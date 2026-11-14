import { brand, instagramHandle, instagramUrl } from "@/lib/site";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-chumbo/10 bg-branco/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <p className="text-base font-semibold tracking-tight text-chumbo">
          {brand.name}
        </p>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm text-chumbo underline-offset-4 hover:underline"
        >
          {instagramHandle}
          <span className="sr-only"> (abre numa nova janela)</span>
        </a>
      </div>
    </header>
  );
}
