import { Phone, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1920&q=80"
          alt="Beautiful garden"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/70 via-green-900/50 to-green-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-green-200 text-sm font-medium">Professional Garden & Property Care</span>
        </div>

        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Revitalize Your{' '}
          <span className="text-green-400">Property</span>{' '}
          Today!
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          From pristine lawns to sparkling driveways, we bring life back to your outdoor spaces
          with expert care and attention to detail.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+447828900049"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-green-900/30"
          >
            <Phone className="w-5 h-5" />
            +44 7828 900049
          </a>
          <a
            href="#services"
            className="flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:bg-white/10"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
