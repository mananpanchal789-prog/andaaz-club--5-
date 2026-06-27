import { Link } from "react-router-dom";
import { Utensils, Coffee, Waves, Dumbbell, Music, PartyPopper, Trophy, Baby, Star, ShieldCheck, Users, Calendar, MapPin, Smile } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1543884877-3eecb08f8638?q=80&w=2674&auto=format&fit=crop"
          alt="Premium Lifestyle Club in Ahmedabad"
          loading="lazy"
          className="absolute inset-0 z-0 w-full h-full object-cover" 
        />
        
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-serif text-accent font-bold mb-6 leading-tight">
            Welcome to Andaaz Club
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl leading-relaxed">
            As a premium social club and premier lifestyle club, we offer fine dining, a state-of-the-art fitness club, live entertainment, and exclusive member benefits—all under one roof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-secondary text-primary font-semibold rounded shadow-lg hover:bg-secondary-light transition-all uppercase tracking-wider text-sm text-center"
            >
              Join Now
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-3 bg-accent/10 backdrop-blur-sm border border-accent/30 text-accent font-semibold rounded shadow-lg hover:bg-accent/20 transition-all uppercase tracking-wider text-sm text-center"
            >
              Book an Event
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Experience Premium Lifestyle</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg text-text-light leading-relaxed">
            At Andaaz Club, we believe every visit should be memorable. Our premium social club combines modern amenities with warm hospitality, creating the ideal destination for families, professionals, and social gatherings. From an exciting event venue to premium dining and wellness experiences, we are your ultimate family club.
          </p>
        </div>
      </section>

      {/* Featured Facilities */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Premium Facilities</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Utensils, label: "Fine Dining Restaurant", link: "/services" },
              { icon: Coffee, label: "Café & Lounge", link: "/services" },
              { icon: Waves, label: "Swimming Pool", link: "/services" },
              { icon: Dumbbell, label: "Modern Fitness Club", link: "/services" },
              { icon: Music, label: "Live Music & DJ Nights", link: "/services" },
              { icon: PartyPopper, label: "Banquet & Event Venue", link: "/services" },
              { icon: Trophy, label: "Indoor & Outdoor Sports", link: "/services" },
              { icon: Baby, label: "Children's Play Area", link: "/services" }
            ].map((facility, index) => (
              <Link to={facility.link} key={index} className="flex flex-col items-center p-6 text-center group hover:bg-gray-50 rounded-xl transition-colors border border-transparent hover:border-gray-100 shadow-sm cursor-pointer">
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors group-hover:scale-110 duration-300">
                  <facility.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-text">{facility.label}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Highlights */}
      <section className="py-12 lg:py-20 bg-primary text-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Why Choose Andaaz Club</h2>
              <ul className="space-y-4">
                {[
                  { text: "Premium Lifestyle Club Experience", icon: Star },
                  { text: "Exclusive Member Benefits", icon: ShieldCheck },
                  { text: "Safe & Family-Friendly Environment", icon: Smile },
                  { text: "Professional Event Management", icon: Calendar },
                  { text: "Delicious Multi-Cuisine Dining", icon: Utensils },
                  { text: "Modern Sports & Fitness Facilities", icon: Trophy },
                  { text: "Convenient Location", icon: MapPin },
                  { text: "Exceptional Customer Service", icon: Users }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-gray-200">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-primary-dark p-6 sm:p-8 md:p-12 rounded-2xl flex flex-col justify-center border border-white/10">
              <h2 className="text-3xl font-serif font-bold mb-10 text-center">Club Highlights</h2>
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">10,000+</div>
                  <div className="text-sm uppercase tracking-wider text-gray-300">Happy Members</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">250+</div>
                  <div className="text-sm uppercase tracking-wider text-gray-300">Events Hosted Yearly</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">20+</div>
                  <div className="text-sm uppercase tracking-wider text-gray-300">Premium Facilities</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">15</div>
                  <div className="text-sm uppercase tracking-wider text-gray-300">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-12 lg:py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Membership Benefits</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-10"></div>
          
          <div className="bg-primary/5 rounded-2xl p-6 sm:p-10 md:p-16 border border-primary/10 shadow-sm max-w-4xl mx-auto">
             <h3 className="text-2xl font-serif font-bold text-primary mb-6">Exclusive Club Facilities</h3>
             <p className="text-lg text-text-light leading-relaxed mb-8">
               As a member, you gain access to our premium social club amenities, priority event venue booking, and personalized services. Join Andaaz Club to unlock a world of luxury, fitness, and exceptional dining.
             </p>
             <Link 
              to="/services" 
              className="inline-block px-8 py-3 bg-secondary text-primary font-semibold rounded shadow-lg hover:bg-secondary-light transition-all uppercase tracking-wider text-sm"
            >
              View Membership Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">What Our Members Say</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                review: "Andaaz Club is our favorite weekend destination. Great food, friendly staff, and amazing events! Truly the best lifestyle club in town.",
                rating: 5
              },
              {
                name: "Rohit Mehta",
                review: "The fitness center and swimming pool are outstanding. Highly recommended for families looking for a premium social club.",
                rating: 5
              },
              {
                name: "Sneha Kapoor",
                review: "We hosted our wedding reception at their beautiful event venue, and everything was perfectly organized.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col">
                <div className="flex text-secondary mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-text-light italic mb-6 flex-grow">"{testimonial.review}"</p>
                <div className="font-semibold text-primary">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
