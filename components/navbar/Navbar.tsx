"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Patents", href: "#patents" },
  { name: "Publications", href: "#publications" },
  { name: "Awards", href: "#awards" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If at the very top (less than 10px scrolled), always show the navbar
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else {
        // If scrolling down, hide navbar. If scrolling up, show navbar.
        setIsVisible(currentScrollY < lastScrollY);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur-md transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="container-custom flex h-16 items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-wide gradient-text"
        >
          OM
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-4 lg:gap-5 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] lg:text-xs font-semibold text-slate-300 transition hover:text-blue-400 uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Trigger */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 hover:scale-[1.02] shadow-lg shadow-blue-500/20"
          >
            Hire Me
          </a>

          {/* Mobile Sheet Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger render={
                <button className="flex items-center justify-center p-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white cursor-pointer transition-colors" />
              }>
                <Menu size={20} />
              </SheetTrigger>
              <SheetContent side="right" className="w-72 bg-neutral-950/95 border-l border-white/10 p-6 flex flex-col gap-6 text-white backdrop-blur-xl z-50">
                <SheetHeader>
                  <SheetTitle className="text-left font-black tracking-wide text-2xl gradient-text">
                    Navigation
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-4">
                  {links.map((link) => (
                    <SheetClose key={link.name} render={
                      <a
                        href={link.href}
                        className="text-sm font-bold text-slate-300 hover:text-blue-400 py-2 border-b border-white/5 transition-colors uppercase tracking-wider"
                      />
                    }>
                      {link.name}
                    </SheetClose>
                  ))}
                </nav>
                
                <SheetClose render={
                  <a
                    href="#contact"
                    className="mt-auto w-full inline-flex items-center justify-center rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 shadow-lg shadow-blue-500/20"
                  />
                }>
                  Hire Me
                </SheetClose>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}