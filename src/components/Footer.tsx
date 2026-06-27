import { Link } from "react-router-dom";
import { Wine, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-text text-accent pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
              <Wine className="h-8 w-8 text-secondary" />
              <span className="font-serif text-2xl font-bold tracking-wider uppercase">Andaaz Club</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Where Style Meets Celebration. A premium social club and lifestyle destination.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" title="Welcome to Andaaz Club" className="text-gray-400 hover:text-accent transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" title="Learn About Andaaz Club" className="text-gray-400 hover:text-accent transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" title="Explore Our Services" className="text-gray-400 hover:text-accent transition-colors text-sm">Services</Link></li>
              <li><Link to="/blog" title="Lifestyle & Events Blog" className="text-gray-400 hover:text-accent transition-colors text-sm">Blog</Link></li>
              <li><Link to="/contact" title="Contact Andaaz Club" className="text-gray-400 hover:text-accent transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-secondary">Facilities</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Restaurant & Lounge</li>
              <li className="text-gray-400 text-sm">Event Venue</li>
              <li className="text-gray-400 text-sm">Fitness Club</li>
              <li className="text-gray-400 text-sm">Swimming Pool</li>
              <li className="text-gray-400 text-sm">Sports Arena</li>
              <li className="text-gray-400 text-sm">Kids Zone</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-secondary">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with club news, upcoming events, and exclusive member offers.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 bg-gray-800 text-accent border border-gray-700 rounded focus:outline-none focus:border-secondary transition-colors text-sm"
              />
              <button
                type="submit"
                className="w-full bg-secondary text-primary font-semibold px-4 py-2 rounded hover:bg-secondary-light transition-colors uppercase tracking-wide text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:flex md:justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Andaaz Club. All rights reserved.
          </p>
          <div className="space-x-4 mt-4 md:mt-0 text-sm text-gray-500">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
