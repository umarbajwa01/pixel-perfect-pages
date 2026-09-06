import { Link } from "@tanstack/react-router";

export function Logo({ variant = "solid" }: { variant?: "solid" | "plain" }) {
  return (
    <Link
      to="/"
      aria-label="The Global Estimating home"
      className={
        variant === "solid"
          ? "clip-tag inline-flex items-center gap-3 bg-primary py-4 pr-10 pl-5 text-primary-foreground"
          : "inline-flex items-center gap-3 text-ink-foreground"
      }
    >
      <span
        aria-hidden
        className={
          variant === "solid"
            ? "flex size-9 items-center justify-center border-2 border-primary-foreground font-display text-xl leading-none font-black"
            : "flex size-9 items-center justify-center border-2 border-primary font-display text-xl leading-none font-black text-primary"
        }
      >
        G
      </span>
      <span className="font-display text-lg leading-[0.95] font-extrabold tracking-tight uppercase">
        The Global
        <br />
        Estimating
      </span>
    </Link>
  );
}
