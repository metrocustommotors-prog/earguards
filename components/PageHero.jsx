import { Icon } from "./Icon";

export default function PageHero({ eyebrow, title, description, icon = "shield" }) {
  return (
    <section className="relative overflow-hidden border-b border-brand-line bg-brand-mist">
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 90% 10%, rgba(242,106,27,0.08), transparent 40%), radial-gradient(circle at 5% 90%, rgba(21,89,181,0.08), transparent 40%)",
        }}
      />
      <div className="container-site relative py-14 sm:py-16">
        <div className="max-w-2xl">
          {eyebrow && (
            <span className="eyebrow">
              <Icon name={icon} className="h-4 w-4" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-brand-slate sm:text-lg">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
