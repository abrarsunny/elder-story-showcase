import { useEffect, useState } from "react";
import { Users, Award, Download, Heart, UserCheck } from "lucide-react";

const statistics = [
  { label: "Team Members", value: 200, suffix: "+", icon: Users },
  { label: "Achievements", value: 30, suffix: "+", icon: Award },
  { label: "Active Programs", value: 10, suffix: " M+", icon: Download },
  { label: "Lives Touched", value: 3.7, suffix: " M", icon: Heart },
  { label: "Years of Service", value: 160, suffix: "+", icon: UserCheck }
];

const StatisticsSection = () => {
  const [counters, setCounters] = useState(statistics.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => 
        prev.map((current, index) => {
          const target = statistics[index].value;
          const increment = Math.ceil(target / 100);
          return current < target ? Math.min(current + increment, target) : target;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num.toString();
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get to know the essence of our company—where cutting-edge solutions and a deep commitment to excellence come together
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-warmth/10 transition-colors">
                <stat.icon className="h-8 w-8 text-warmth" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {counters[index] === stat.value ? stat.value : formatNumber(counters[index])}
                {stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;