import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
};

const styles = {
  primary:
    "bg-ink text-white hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
  secondary:
    "border border-line bg-white text-ink hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold shadow-sm ${styles[variant]}`}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}
