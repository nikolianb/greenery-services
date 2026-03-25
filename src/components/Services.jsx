import { Phone } from 'lucide-react';

/* Custom SVG icons to match flyer */
function PressureWasherIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20 L4 14 L7 14 L7 10 L10 10 L10 7" />
      <path d="M10 7 L16 3" />
      <circle cx="17" cy="2.5" r="1" fill="currentColor" stroke="none" />
      <path d="M18 5 L21 3" />
      <path d="M19 7 L22 6" />
      <path d="M19.5 9.5 L22 9" />
      <path d="M7 14 L7 20" />
      <circle cx="4" cy="21" r="1" />
      <circle cx="7" cy="21" r="1" />
    </svg>
  );
}

function LawnMowerIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18 L6 12 L18 12 L20 18" />
      <rect x="6" y="9" width="8" height="3" rx="1" />
      <path d="M14 9 L16 5 L18 5" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <path d="M7 18 L17 18" />
    </svg>
  );
}

function GardenShearsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4 L12 12" />
      <path d="M19 4 L12 12" />
      <path d="M12 12 L8 20" />
      <path d="M12 12 L16 20" />
      <circle cx="4" cy="3" r="1.5" />
      <circle cx="20" cy="3" r="1.5" />
      <path d="M7 18 C6 21 10 21 9 18" />
      <path d="M15 18 C14 21 18 21 17 18" />
    </svg>
  );
}

const services = [
  {
    icon: PressureWasherIcon,
    title: 'Driveway & Patio Cleaning',
    description: 'Deep Pressure Washing For Stains & Grime',
    details:
      'We use professional-grade pressure washing equipment to restore your driveways, patios, and pathways to their original condition. Say goodbye to stubborn stains, moss, and grime.',
    image:
      'https://images.pexels.com/photos/5652626/pexels-photo-5652626.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: LawnMowerIcon,
    title: 'Lawn Care & Mowing',
    description: 'Grass Cutting & Lawn Treatment',
    details:
      'Regular mowing, edging, feeding, and weed control to keep your lawn lush, green, and healthy all year round. We tailor our approach to your garden\'s unique needs.',
    image:
      'https://images.pexels.com/photos/4162011/pexels-photo-4162011.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: GardenShearsIcon,
    title: 'Hedge Trimming & Garden Maintenance',
    description: 'Pruning & Weeding Services',
    details:
      'Expert hedge trimming, shrub pruning, and comprehensive garden maintenance to keep your outdoor spaces looking neat, tidy, and beautifully maintained.',
    image:
      'https://images.pexels.com/photos/24595771/pexels-photo-24595771.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-green-700 font-semibold text-sm tracking-wider uppercase mb-3">
            What We Do
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-green-900 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Professional property care services to keep your home looking its best,
            delivered with expertise and attention to detail.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-4 mb-3">
                  <div className="shrink-0 w-12 h-12 bg-green-800 rounded-full flex items-center justify-center shadow-md">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-green-900">
                      {service.title}
                    </h3>
                    <p className="text-gold-500 font-semibold text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="tel:+447828900049"
            className="inline-flex items-center gap-2 bg-green-800 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Get a Free Quote: +44 7828 900049
          </a>
        </div>
      </div>
    </section>
  );
}
