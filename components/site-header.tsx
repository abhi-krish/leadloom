import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { siteConfig } from "@/lib/site";

type SiteHeaderProps = {
  currentPath?: "/" | "/pricing" | "/privacy" | "/terms" | "/sms-consent";
};

const navItems = [
  { label: "How it works", href: "/#how-it-works", match: "/" },
  { label: "Industries", href: "/#industries", match: "/" },
  { label: "Pricing", href: "/pricing", match: "/pricing" },
  { label: "Why LeadLoom", href: "/#why-leadloom", match: "/" },
] as const;

export function SiteHeader({ currentPath = "/" }: SiteHeaderProps) {
  return (
    <header className="border-b border-line/70 bg-white">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-6 py-5 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link className="text-lg font-semibold tracking-tight text-ink" href="/">
            {siteConfig.name}
          </Link>
          <ButtonLink href={siteConfig.calendlyUrl} external>
            Book a Demo
          </ButtonLink>
        </div>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link
            className={`text-sm ${
              currentPath === "/" ? "text-ink" : "text-slate hover:text-ink"
            }`}
            href="/"
          >
            {siteConfig.name}
          </Link>
          {navItems.map((item) => {
            const isActive =
              item.match === currentPath ||
              (currentPath !== "/" && item.href === currentPath);

            return (
              <Link
                key={item.label}
                className={`text-sm ${
                  isActive ? "text-ink" : "text-slate hover:text-ink"
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
