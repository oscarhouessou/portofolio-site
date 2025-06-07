'use client';

import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            OH
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">
              À propos
            </Link>
            <Link href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400">
              Expérience
            </Link>
            <Link href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">
              Projets
            </Link>
            <Link href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
