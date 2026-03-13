import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
};

export default function Button({ children, href, className }: ButtonProps) {
  const baseStyles =
    "items-center justify-center rounded-full px-6 py-3 text-xs uppercase tracking-[0.18em] transition-colors duration-200";

  const variantStyles =
    "border border-accent text-accent hover:bg-accent hover:text-white";

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, variantStyles, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(baseStyles, variantStyles, className)}>
      {children}
    </button>
  );
}