import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home">
            <Logo />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-700 hover:text-green-700 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+447828900049"
              className="flex items-center gap-2 bg-green-800 hover:bg-green-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-green-900 p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-gray-700 hover:text-green-700 font-medium py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+447828900049"
              className="flex items-center justify-center gap-2 bg-green-800 text-white px-5 py-3 rounded-full font-semibold mt-2"
            >
              <Phone className="w-4 h-4" />
              +44 7828 900049
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
