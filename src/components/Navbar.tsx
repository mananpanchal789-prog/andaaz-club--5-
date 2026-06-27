import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { Menu, X, Wine } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { name: "Home", path: "/", title: "Welcome to Andaaz Club" },
  { name: "About", path: "/about", title: "Learn About Andaaz Club" },
  { name: "Services", path: "/services", title: "Explore Our Services" },
  { name: "Blog", path: "/blog", title: "Lifestyle & Events Blog" },
  { name: "Contact", path: "/contact", title: "Contact Andaaz Club" },
];

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-accent sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <Wine className="h-8 w-8 text-secondary" />
            <span className="font-serif text-2xl font-bold tracking-wider uppercase">Andaaz Club</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                title={link.title}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-secondary uppercase tracking-wide",
                  location.pathname === link.path ? "text-secondary" : "text-accent"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="bg-secondary text-primary font-semibold px-5 py-2 rounded shadow hover:bg-secondary-light transition-colors uppercase tracking-wide text-sm"
            >
              Join the Club
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-accent hover:text-secondary focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary-dark">
          <div className="px-4 pt-2 pb-4 space-y-2 sm:px-3 flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                title={link.title}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-md text-base font-medium uppercase tracking-wide",
                  location.pathname === link.path ? "text-secondary bg-primary" : "text-accent hover:text-secondary hover:bg-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-4 text-center bg-secondary text-primary font-semibold px-5 py-3 rounded shadow uppercase tracking-wide text-sm"
            >
              Join the Club
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
