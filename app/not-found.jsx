import Link from "next/link";
import { Icon } from "@/components/Icon";

export const metadata = {
  title: "Page Not Found — Ear Guards",
};

export default function NotFound() {
  return (
    <div className="container-site flex flex-col items-center py-20 text-center md:py-28">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-bluelight text-brand-blue">
        <Icon name="ear" className="h-8 w-8" />
      </span>
      <p className="mt-6 font-display text-5xl font-extrabold text-brand-ink">
        404
      </p>
      <h1 className="mt-2 font-display text-2xl font-bold text-brand-ink">
        We couldn&apos;t find that page
      </h1>
      <p className="mt-2 max-w-md text-brand-slate">
        The page may have moved or never existed. Let&apos;s get you back to
        protecting your hearing.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
        <Link href="/blog" className="btn-outline">
          Browse the blog
        </Link>
      </div>
    </div>
  );
}
