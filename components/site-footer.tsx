import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-8 text-sm text-slate sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-ink">{siteConfig.name}</p>
          <a
            className="mt-1 inline-block hover:text-ink"
            href={`mailto:${siteConfig.contactEmail}`}
          >
            {siteConfig.contactEmail}
          </a>
        </div>
        <nav aria-label="Footer" className="flex gap-6">
          <Link className="hover:text-ink" href="/pricing">
            Pricing
          </Link>
          <Link className="hover:text-ink" href="/privacy">
            Privacy
          </Link>
          <Link className="hover:text-ink" href="/terms">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
