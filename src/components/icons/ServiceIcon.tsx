const paths: Record<string, React.ReactNode> = {
  automation: (
    <>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="3.5" />
    </>
  ),
  performance: (
    <>
      <path d="M3 17l5-5 4 4 8-9" />
      <path d="M14 7h6v6" />
    </>
  ),
  crm: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 4v0M8 14h5" />
    </>
  ),
  sales: (
    <>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </>
  ),
  leadgen: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6" />
      <path d="M16 4.5a3.2 3.2 0 0 1 0 6.2M21 20c0-3-2-5.3-4.5-5.9" />
    </>
  ),
  funnel: (
    <>
      <path d="M4 4h16l-6 8v6l-4 2v-8L4 4Z" />
    </>
  ),
  strategy: (
    <>
      <path d="M4 20V10l6-6 6 6v10" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  analytics: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 16v-4M12 16V8M16 16v-6" />
    </>
  ),
};

export function ServiceIcon({ name, className = "w-6 h-6" }: { name: string; className?: string }) {
  const path = paths[name] ?? paths.strategy;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}
