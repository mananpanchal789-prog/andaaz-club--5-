import { Utensils, Calendar, Dumbbell, Trophy, Music, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Restaurant and Lounge",
      icon: Utensils,
      description: "Our restaurant and lounge offers a carefully curated menu featuring Indian, Chinese, Continental, Italian, and Fusion cuisines prepared by experienced chefs.",
      features: ["Indian Cuisine", "Chinese & Continental", "Italian & Fusion", "Expert Chefs"]
    },
    {
      title: "Banquet Services & Event Venue",
      icon: Calendar,
      description: "The perfect event venue for any occasion. Utilize our premium banquet services and professional management for a seamless experience.",
      features: ["Weddings & Anniversaries", "Birthday Parties", "Corporate Events", "Cultural Programs"]
    },
    {
      title: "Fitness Club & Wellness",
      icon: Dumbbell,
      description: "Stay healthy and active with our state-of-the-art fitness club and wellness facilities designed for everyone.",
      features: ["Modern Gym", "Personal Training", "Yoga & Zumba", "Swimming Lessons"]
    },
    {
      title: "Family Club & Sports Recreation",
      icon: Trophy,
      description: "Engage in competitive and recreational sports. Our family club ensures there are activities suitable for all ages.",
      features: ["Badminton & Tennis", "Table Tennis", "Swimming Pool", "Indoor & Outdoor Games"]
    },
    {
      title: "Club Facilities for Entertainment",
      icon: Music,
      description: "Experience vibrant social life with our world-class club facilities and regular entertainment events.",
      features: ["Live Music & DJ Nights", "Stand-up Comedy", "Karaoke Evenings", "Movie Screenings"]
    }
  ];

  const plans = [
    {
      name: "Silver Club Membership",
      price: "₹15,000/year",
      features: [
        "Access to club facilities",
        "Restaurant and lounge discounts",
        "Event invitations"
      ],
      popular: false
    },
    {
      name: "Gold Club Membership",
      price: "₹30,000/year",
      features: [
        "All Silver benefits",
        "Free fitness club classes",
        "Priority event venue booking",
        "Guest passes"
      ],
      popular: true
    },
    {
      name: "Platinum Club Membership",
      price: "₹50,000/year",
      features: [
        "Unlimited premium facility access",
        "VIP event access",
        "Personal fitness consultation",
        "Exclusive dining offers"
      ],
      popular: false
    }
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-primary py-16 lg:py-24 text-accent text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Services & Facilities</h1>
        <div className="w-24 h-1 bg-secondary mx-auto"></div>
      </div>

      {/* Services Grid */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-16">
            {services.map((service, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <div className="bg-gray-200 aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center">
                    <service.icon className="w-32 h-32 text-gray-400" />
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center rounded-2xl">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-primary">{service.title}</h2>
                  <p className="text-text-light text-lg">{service.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center space-x-2 text-text">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Club Membership Options</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-text-light max-w-2xl mx-auto">
              Choose the perfect club membership tier to elevate your lifestyle and gain access to our exclusive facilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col p-6 sm:p-8 rounded-2xl border ${
                  plan.popular 
                    ? 'border-secondary bg-primary text-accent shadow-xl transform lg:-translate-y-4' 
                    : 'border-gray-200 bg-white shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-primary text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <h3 className={`text-2xl font-serif font-bold text-center mb-2 ${plan.popular ? 'text-accent' : 'text-primary'}`}>
                  {plan.name}
                </h3>
                <div className={`text-3xl font-bold text-center mb-8 ${plan.popular ? 'text-secondary' : 'text-primary'}`}>
                  {plan.price}
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-3">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-secondary' : 'text-primary'}`} />
                      <span className={plan.popular ? 'text-gray-300' : 'text-text-light'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 rounded text-center font-bold uppercase tracking-wider text-sm transition-colors ${
                    plan.popular
                      ? 'bg-secondary text-primary hover:bg-secondary-light'
                      : 'bg-primary text-accent hover:bg-primary-dark'
                  }`}
                >
                  Choose Membership
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
