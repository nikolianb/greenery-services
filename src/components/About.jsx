import { CheckCircle, Award, Clock, Users } from 'lucide-react';

const highlights = [
  { icon: Award, label: 'Professional Service' },
  { icon: Clock, label: 'Reliable & Punctual' },
  { icon: Users, label: 'Customer Focused' },
  { icon: CheckCircle, label: 'Satisfaction Guaranteed' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80"
                alt="Professional gardener at work"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Accent card */}
            <div className="absolute -bottom-6 -right-6 bg-green-800 text-white rounded-2xl p-6 shadow-xl hidden sm:block">
              <div className="text-4xl font-bold font-heading">100%</div>
              <div className="text-green-200 text-sm">Customer Satisfaction</div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="inline-block text-green-700 font-semibold text-sm tracking-wider uppercase mb-3">
              About Us
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-green-900 mb-4">
              Your Trusted Property Care Partner
            </h2>
            <div className="w-20 h-1 bg-gold-500 rounded-full mb-6" />

            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              At Greenery Services, we are passionate about transforming outdoor spaces.
              Whether it's a pristine lawn, a spotless driveway, or beautifully trimmed hedges,
              we bring professional care and dedication to every project.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our experienced team uses top-quality equipment and eco-friendly methods to deliver
              results that exceed expectations. We take pride in helping homeowners and businesses
              maintain beautiful, welcoming properties.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-3 bg-green-50 rounded-xl p-4">
                  <h.icon className="w-5 h-5 text-green-700 shrink-0" />
                  <span className="text-green-900 font-medium text-sm">{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
