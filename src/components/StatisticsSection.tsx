import { useEffect, useState } from "react";

const statistics = [
  { label: "Caring Volunteers", value: 150, suffix: "+" },
  { label: "Global Partners", value: 25, suffix: "+" },
  { label: "Donations Raised", value: 250000, prefix: "$", suffix: "+" },
  { label: "Program Costs", value: 180000, prefix: "$", suffix: "+" },
  { label: "Elderly Served", value: 320, suffix: "+" }
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
    <section className="py-20 bg-gradient-to-r from-warmth to-care">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Making a Difference Together
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Every number represents a life touched, a story honored, and hope restored.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.prefix}
                {formatNumber(counters[index])}
                {stat.suffix}
              </div>
              <div className="text-lg text-white/90 font-medium">
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