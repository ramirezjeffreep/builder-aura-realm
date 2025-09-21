import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clapperboard, Camera, UsersRound } from "lucide-react";
import { useEffect } from "react";

const nav = [
  { to: "/rent", label: "Rent Gear" },
  { to: "/buy", label: "Buy & Sell" },
  { to: "/crew", label: "Find Crew" },
];

export default function Header() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-black/40">
      <div className="container flex h-16 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-extrabold tracking-tight"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground shadow">
            <Clapperboard className="h-5 w-5" />
          </span>
          <span className="text-xl">Film Stock</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors hover:text-foreground ${isActive ? "text-foreground" : "text-muted-foreground"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Sign in
          </Button>
          <Button size="sm" className="hidden md:inline-flex">
            <Camera className="mr-1.5" /> List your gear
          </Button>
          <Button asChild size="icon" className="md:hidden">
            <UsersRound />
          </Button>
        </div>
      </div>
    </header>
  );
}
