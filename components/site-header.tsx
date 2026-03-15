import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { siteConfig } from "@/lib/site";

type SiteHeaderProps = {
  currentPath?: "/" | "/pricing" | "/privacy" | "/terms";
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
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5 lg:px-8">
        <Link className="text-lg font-semibold tracking-tight text-ink" href="/">
          {siteConfig.name}
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
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
        <ButtonLink href={siteConfig.calendlyUrl} external>
          Book a Demo
        </ButtonLink>
      </div>
    </header>
  );
}
