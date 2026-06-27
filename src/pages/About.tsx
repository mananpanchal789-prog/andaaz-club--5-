import { Target, Eye, Heart, Users, MapPin, Award } from "lucide-react";

export default function About() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-primary py-16 lg:py-24 text-accent text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Andaaz Club</h1>
        <div className="w-24 h-1 bg-secondary mx-auto"></div>
      </div>

      {/* Who We Are */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Club Profile</h2>
          <p className="text-lg text-text-light leading-relaxed mb-12">
            Want to learn more about Andaaz Club? We are a modern lifestyle club committed to providing exceptional recreational, dining, fitness, and entertainment experiences. Since our establishment, our comprehensive club profile has grown as we've become a preferred destination for individuals, families, and businesses seeking premium hospitality and memorable moments.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 lg:py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">
            <div className="bg-primary/5 p-8 lg:p-10 rounded-2xl border border-primary/10">
              <div className="w-12 h-12 bg-primary text-accent rounded-full flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-text-light leading-relaxed">
                To create a vibrant community where members can relax, celebrate, stay active, and build meaningful connections through world-class facilities and personalized service.
              </p>
            </div>
            
            <div className="bg-secondary/10 p-8 lg:p-10 rounded-2xl border border-secondary/20">
              <div className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-text-light leading-relaxed">
                To be recognized as one of the leading lifestyle clubs by continuously delivering outstanding experiences, innovative services, and a welcoming environment for all.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { label: "Excellence", icon: Award },
              { label: "Hospitality", icon: Heart },
              { label: "Community", icon: Users },
              { label: "Innovation", icon: Target },
              { label: "Integrity", icon: MapPin },
              { label: "Satisfaction", icon: Heart }
            ].map((val, idx) => (
              <div key={idx} className="flex flex-col items-center p-6 bg-gray-50 rounded-xl text-center shadow-sm">
                <val.icon className="w-8 h-8 text-secondary mb-4" />
                <h4 className="font-semibold text-primary">{val.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Meet Our Team</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Arjun Malhotra", role: "Founder & Managing Director" },
              { name: "Neha Verma", role: "Operations Manager" },
              { name: "Karan Singh", role: "Head of Events" },
              { name: "Riya Patel", role: "Fitness & Wellness Manager" }
            ].map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-primary/10 flex flex-col items-center justify-center text-primary/30 group-hover:scale-105 transition-transform duration-500">
                    <Users className="w-16 h-16 mb-2" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg text-primary">{member.name}</h3>
                  <p className="text-secondary font-medium text-sm mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-12 lg:py-20 bg-primary text-accent text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-6">Our Journey</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg leading-relaxed text-gray-200">
            Founded in <strong className="text-secondary text-xl">2011</strong>, Andaaz Club started with the vision of offering a premium lifestyle experience under one roof. Over the years, we have expanded our facilities, introduced exciting events, and built a strong community of members who trust us for quality entertainment and hospitality.
          </p>
        </div>
      </section>
    </div>
  );
}
