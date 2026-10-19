import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Blog() {
  const articles = [
    {
      title: "Top 10 Benefits of Joining a Lifestyle Club",
      excerpt: "Learn how club memberships improve health, networking, and work-life balance.",
      category: "Lifestyle Blog",
      date: "Oct 15, 2023",
      author: "Admin"
    },
    {
      title: "Event Planning Tips for the Perfect Family Celebration",
      excerpt: "Follow our event planning tips to easily organize birthdays, anniversaries, and memorable family events.",
      category: "Event Planning",
      date: "Oct 12, 2023",
      author: "Event Team"
    },
    {
      title: "Healthy Living: Expert Fitness Tips",
      excerpt: "Discover essential fitness tips to ensure your regular physical activity contributes to a healthier lifestyle.",
      category: "Fitness Tips",
      date: "Oct 08, 2023",
      author: "Wellness Team"
    },
    {
      title: "Hosting Corporate Events Successfully",
      excerpt: "More event planning tips and best practices for planning engaging and professional business events at our banquet hall.",
      category: "Event Planning",
      date: "Oct 05, 2023",
      author: "Corporate Relations"
    },
    {
      title: "The Importance of Community and Social Connections",
      excerpt: "Read our lifestyle blog to explore how social clubs help build friendships, reduce stress, and create lasting memories.",
      category: "Lifestyle Blog",
      date: "Oct 01, 2023",
      author: "Admin"
    }
  ];

  const categories = [
    "Lifestyle Blog",
    "Fitness Tips",
    "Event Planning Tips",
    "Food & Dining",
    "Wellness",
    "Entertainment",
    "Travel",
    "Community"
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-primary py-16 lg:py-24 text-accent text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Lifestyle Blog</h1>
        <div className="w-24 h-1 bg-secondary mx-auto"></div>
      </div>

      <section className="py-12 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content */}
            <div className="lg:w-2/3 space-y-12">
              <div className="mb-10">
                <h2 className="text-3xl font-serif font-bold text-primary mb-2">Latest Articles & Insights</h2>
                <div className="w-16 h-1 bg-secondary"></div>
              </div>

              <div className="space-y-10">
                {articles.map((article, idx) => (
                  <article key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col sm:flex-row">
                    <div className="sm:w-1/3 bg-gray-200 min-h-[200px] flex items-center justify-center">
                       {/* Placeholder for image */}
                       <div className="text-gray-400">Hello</div>
                    </div>
                    <div className="p-6 sm:p-8 flex flex-col justify-center sm:w-2/3">
                      <div className="flex items-center space-x-4 text-xs text-text-light mb-3">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
                          {article.category}
                        </span>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {article.date}
                        </div>
                        <div className="flex items-center hidden sm:flex">
                          <User className="w-3 h-3 mr-1" />
                          {article.author}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-serif font-bold text-primary mb-3 hover:text-secondary transition-colors cursor-pointer">
                        {article.title}
                      </h3>
                      <p className="text-text-light mb-5 line-clamp-2">
                        {article.excerpt}
                      </p>
                      
                      <div className="mt-auto">
                        <Link to="#" className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors group">
                          Read More 
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-8">
              {/* Categories */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-serif font-bold text-primary mb-6">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((cat, idx) => (
                    <li key={idx}>
                      <Link 
                        to="#" 
                        className="flex items-center justify-between py-2 border-b border-gray-50 text-text-light hover:text-secondary transition-colors"
                      >
                        <span>{cat}</span>
                        <ArrowRight className="w-4 h-4 text-gray-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter CTA */}
              <div className="bg-primary text-accent p-6 sm:p-8 rounded-2xl border border-primary/20 text-center">
                <h3 className="text-2xl font-serif font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-gray-300 text-sm mb-6">
                  Get the latest lifestyle blog updates, event planning tips, and fitness tips delivered to your inbox.
                </p>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Your Email Address" 
                    className="w-full px-4 py-3 bg-white text-text rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                  <button className="w-full bg-secondary text-primary font-bold py-3 rounded uppercase tracking-wider text-sm hover:bg-secondary-light transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>
            </aside>
            
          </div>
        </div>
      </section>
    </div>
  );
}
