import { 
  Code, 
  Heart, 
  TrendingUp, 
  Megaphone, 
  Palette, 
  GraduationCap, 
  Cog, 
  Users 
} from 'lucide-react';

const categories = [
  { icon: Code, name: 'Technology', jobs: 2453, color: 'from-blue-500 to-cyan-400' },
  { icon: Heart, name: 'Healthcare', jobs: 1832, color: 'from-pink-500 to-rose-400' },
  { icon: TrendingUp, name: 'Finance', jobs: 1567, color: 'from-green-500 to-emerald-400' },
  { icon: Megaphone, name: 'Marketing', jobs: 1245, color: 'from-orange-500 to-amber-400' },
  { icon: Palette, name: 'Design', jobs: 987, color: 'from-purple-500 to-violet-400' },
  { icon: GraduationCap, name: 'Education', jobs: 876, color: 'from-indigo-500 to-blue-400' },
  { icon: Cog, name: 'Engineering', jobs: 1654, color: 'from-slate-500 to-gray-400' },
  { icon: Users, name: 'Sales', jobs: 1123, color: 'from-red-500 to-pink-400' },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold mb-3 animate-fade-up">
            BROWSE BY CATEGORY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-up stagger-1">
            Explore <span className="gradient-text">Top Categories</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up stagger-2">
            Find opportunities across various industries and sectors. Your next career move is just a click away.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className={`group relative glass rounded-2xl p-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 gradient-border animate-fade-up stagger-${index + 1}`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {category.jobs.toLocaleString()} jobs available
              </p>

              {/* Hover Arrow */}
              <div className="absolute top-6 right-6 opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
