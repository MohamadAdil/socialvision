'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navItems = [
  { id: 1, label: 'Home', href: '/' },
  { id: 2, label: 'About Us', href: '/about' },
  { id: 3, label: 'AI Services', href: '/services' },
  { id: 4, label: 'AI Insights', href: '/insights' },
  { id: 5, label: 'AI Portfolio', href: '/portfolio' },
  { id: 6, label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full fixed top-8 left-0 z-[999] bg-transparent transition-all duration-400 ease-in-out">
      <div className="max-w-[1686px] px-3 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src="/images/logo.svg" alt="Logo" width={98} height={102} className="object-contain"   priority />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4 items-center">
          {navItems.map(item => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`px-5 py-3 rounded-lg font-normal text-sm transition ${isActive
                  ? 'bg-yellow-500 text-black'
                  : 'bg-transparent text-black hover:bg-yellow-500'
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-[#FFAC33] text-white text-sm font-medium px-5 py-3 rounded-lg shadow-md hover:bg-[#ffb547] transition">
            Get an AI-Powered Consultation
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-3">
          {navItems.map(item => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg font-semibold text-sm transition ${isActive
                  ? 'bg-yellow-500 text-black'
                  : 'bg-transparent text-black hover:bg-yellow-400'
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
          <button className="w-full bg-[#FFAC33] text-white text-sm font-medium px-4 py-3 rounded-lg shadow-md hover:bg-[#ffb547] transition">
            Get an AI-Powered Consultation
          </button>
        </div>
      )}
    </header>
  );
}
