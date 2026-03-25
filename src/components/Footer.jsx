import { Phone } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-green-950 text-white">
      {/* CTA band */}
      <div className="bg-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl font-bold">Ready to Get Started?</h3>
            <p className="text-green-200 mt-1">Contact us today for a free quote on any of our services.</p>
          </div>
          <a
            href="tel:+447828900049"
            className="flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-green-950 px-8 py-4 rounded-full font-bold text-lg transition-colors shrink-0"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo variant="dark" size="sm" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional garden and property care services. Revitalizing properties with expert
              care and dedication.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Services', href: '#services' },
                { label: 'About', href: '#about' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Contact', href: '#contact' },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Driveway & Patio Cleaning</li>
              <li>Lawn Care & Mowing</li>
              <li>Hedge Trimming & Maintenance</li>
            </ul>
            <div className="mt-4 flex items-center gap-2 text-green-400 font-semibold">
              <Phone className="w-4 h-4" />
              +44 7828 900049
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-500">
          &copy; {year} Greenery Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
