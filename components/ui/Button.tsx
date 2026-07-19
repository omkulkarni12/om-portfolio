import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-8 py-4 font-semibold transition-all duration-300";

  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-lg shadow-blue-500/30"
      : "border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:scale-105";

  return (
    <Link
      href={href}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}