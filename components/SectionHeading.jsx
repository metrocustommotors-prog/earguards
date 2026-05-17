import { Icon } from "./Icon";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  icon,
  align = "left",
}) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span className={`eyebrow ${center ? "justify-center" : ""}`}>
          {icon && <Icon name={icon} className="h-4 w-4" />}
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2.5 font-display text-2xl font-extrabold leading-tight text-brand-ink sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2.5 text-base leading-relaxed text-brand-slate">
          {description}
        </p>
      )}
    </div>
  );
}
