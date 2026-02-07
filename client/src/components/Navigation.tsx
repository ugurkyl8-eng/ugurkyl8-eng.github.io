import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/#premium", label: "Premium Access" },
    { href: "/privacy", label: "Gizlilik" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-white to-gray-400 flex items-center justify-center">
              <span className="text-black font-bold text-lg">D</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-none">PadresStudios</span>
              <span className="text-white/50 text-xs font-medium tracking-widest">DÖNER AI</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white",
                  location === link.href ? "text-white" : "text-white/60"
                )}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-full transition-colors border border-white/5"
            >
              Bize Ulaşın
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
