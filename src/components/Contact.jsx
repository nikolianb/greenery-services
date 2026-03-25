import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-green-700 font-semibold text-sm tracking-wider uppercase mb-3">
            Get In Touch
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-green-900 mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Ready to transform your property? Give us a call for a free, no-obligation quote.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="space-y-6">
            <a
              href="tel:+447828900049"
              className="flex items-start gap-4 bg-green-50 rounded-xl p-6 hover:bg-green-100 transition-colors group"
            >
              <div className="bg-green-800 rounded-full p-3 shrink-0 group-hover:bg-green-700 transition-colors">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-green-900 text-lg">Call Us</h3>
                <p className="text-green-700 font-semibold text-xl mt-1">+44 7828 900049</p>
                <p className="text-gray-500 text-sm mt-1">Tap to call directly</p>
              </div>
            </a>

            <div className="flex items-start gap-4 bg-green-50 rounded-xl p-6">
              <div className="bg-green-800 rounded-full p-3 shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-green-900 text-lg">Working Hours</h3>
                <p className="text-gray-600 mt-1">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Sunday: By Appointment</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-green-50 rounded-xl p-6">
              <div className="bg-green-800 rounded-full p-3 shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-green-900 text-lg">Service Area</h3>
                <p className="text-gray-600 mt-1">Covering your local area and surroundings</p>
              </div>
            </div>
          </div>

          {/* Quick contact form */}
          <div className="bg-green-900 rounded-2xl p-8 shadow-xl">
            <h3 className="font-heading text-2xl font-bold text-white mb-6">
              Request a Free Quote
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = 'tel:+447828900049';
              }}
              className="space-y-4"
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                />
              </div>
              <div>
                <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-gray-400 focus:outline-none focus:border-green-400 transition-colors">
                  <option value="">Select a Service</option>
                  <option value="driveway">Driveway & Patio Cleaning</option>
                  <option value="lawn">Lawn Care & Mowing</option>
                  <option value="hedge">Hedge Trimming & Garden Maintenance</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-green-400 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-400 text-green-950 font-bold py-4 rounded-lg text-lg transition-colors"
              >
                Get Your Free Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
