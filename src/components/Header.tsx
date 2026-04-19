'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Portfolio', href: '/' },
    { name: 'Revenue', href: '/revenue' },
    { name: 'RWA Oracle', href: '/oracle' },
    { name: 'ESG Impact', href: '/esg' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Governance', href: '/governance' },
  ];

  return (
    <header className="border-b border-border bg-card/80 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              SD
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-card-foreground leading-none">
                SD Covenant
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                Community Center
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:text-primary relative py-2",
                  pathname === item.href 
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" 
                    : "text-slate-400 dark:text-slate-500"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:block">
            <span className="px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-primary border border-primary/20 rounded-full bg-primary/5">
              Institutional Preview
            </span>
          </div>
          <div className="h-6 w-px bg-border mx-2" />
          <ThemeToggle />
          <ConnectButton 
            accountStatus="address"
            showBalance={false}
            chainStatus="icon"
          />
        </div>
      </div>
    </header>
  );
}
