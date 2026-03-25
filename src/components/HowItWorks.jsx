import { CalendarCheck, ClipboardList, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: CalendarCheck,
    step: '01',
    title: 'Book',
    description:
      'Give us a call or fill out the contact form to schedule a convenient time. We\'ll discuss your needs and provide a free, no-obligation quote.',
  },
  {
    icon: ClipboardList,
    step: '02',
    title: 'We Visit',
    description:
      'Our professional team arrives on time with all the right equipment. We carry out the work efficiently and to the highest standard.',
  },
  {
    icon: Sparkles,
    step: '03',
    title: 'Enjoy',
    description:
      'Sit back and enjoy your beautifully maintained property. We leave your space spotless and looking its absolute best.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-green-700 font-semibold text-sm tracking-wider uppercase mb-3">
            Simple Process
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-green-900 mb-4">
            How It Works
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-green-200" />

          {steps.map((s) => (
            <div key={s.step} className="relative text-center group">
              {/* Step number + icon */}
              <div className="relative mx-auto w-32 h-32 mb-6">
                <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-green-100 group-hover:border-green-400 transition-colors duration-300">
                  <s.icon className="w-12 h-12 text-green-700 group-hover:text-green-600 transition-colors duration-300" />
                </div>
                <span className="absolute -top-2 -right-2 w-10 h-10 bg-green-800 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                  {s.step}
                </span>
              </div>

              {/* Text */}
              <h3 className="font-heading text-2xl font-bold text-green-900 mb-2">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
