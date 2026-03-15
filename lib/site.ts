export const siteConfig = {
  name: "LeadLoom",
  description:
    "LeadLoom helps local service businesses respond to new leads instantly with text messages so more inbound demand turns into booked customers.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ??
    "https://calendly.com/your-team/leadloom-demo",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@leadloom.example",
} as const;

export const legalConfig = {
  companyName: process.env.NEXT_PUBLIC_COMPANY_NAME ?? "LeadLoom",
  contactEmail: siteConfig.contactEmail,
} as const;
