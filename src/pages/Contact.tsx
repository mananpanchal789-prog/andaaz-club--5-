import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-primary py-16 lg:py-24 text-accent text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Andaaz Club</h1>
        <div className="w-24 h-1 bg-secondary mx-auto"></div>
      </div>

      <section className="py-12 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Get in Touch</h2>
            <p className="text-text-light text-lg">
              We would love to hear from you! If you wish to contact Andaaz Club about club membership, reserving our event venue, or utilizing our banquet services, our team is here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Contact Info & FAQ */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Contact Information</h3>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-full flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Address</h4>
                    <p className="text-text-light">
                      Andaaz Club<br />
                      Sunrise Business Park, MG Road<br />
                      Ahmedabad, Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-full flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Phone</h4>
                    <p className="text-text-light">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-full flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Email</h4>
                    <p className="text-text-light">
                      <a href="mailto:info@andaazclub.com" className="hover:text-secondary transition-colors">
                        info@andaazclub.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-full flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Business Hours</h4>
                    <p className="text-text-light">Monday – Friday: <strong>9:00 AM – 10:00 PM</strong></p>
                    <p className="text-text-light">Saturday – Sunday: <strong>8:00 AM – 11:00 PM</strong></p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-serif font-bold text-primary mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-text mb-2">Can non-members visit the club?</h4>
                    <p className="text-text-light text-sm">Yes, guests are welcome for selected events and dining services at our restaurant and lounge, subject to club policies.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-text mb-2">Do you host private events?</h4>
                    <p className="text-text-light text-sm">Yes, we provide extensive banquet services for weddings, birthdays, corporate meetings, and other private celebrations.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-text mb-2">Are fitness club facilities included in membership?</h4>
                    <p className="text-text-light text-sm">Yes, depending on your club membership plan, you can access the gym, swimming pool, and wellness programs.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-text mb-2">How can I become a member?</h4>
                    <p className="text-text-light text-sm">Simply contact Andaaz Club by filling out the form on this page or visiting our reception for assistance.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-gray-100 h-fit">
              <h3 className="text-2xl font-serif font-bold text-primary mb-8">Send Us a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text mb-1">Subject</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all bg-white"
                  >
                    <option>Club Membership Inquiry</option>
                    <option>Event Venue / Banquet Services</option>
                    <option>General Support</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-accent font-bold rounded-md hover:bg-primary-dark transition-colors uppercase tracking-wider text-sm shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>

          {/* Map Section */}
          <div className="mt-12 lg:mt-20 bg-gray-200 rounded-2xl overflow-hidden h-64 sm:h-80 md:h-[400px] shadow-sm border border-gray-100 relative">
            <iframe
              src="https://maps.google.com/maps?q=MG%20Road,%20Ahmedabad,%20Gujarat,%20India&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Andaaz Club Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
