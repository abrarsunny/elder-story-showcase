const recentWork = [
  {
    title: "New Recreation Center",
    description: "Opened a state-of-the-art recreation center with modern facilities for physical therapy and entertainment.",
    date: "March 2024",
    impact: "50+ residents benefited"
  },
  {
    title: "Community Garden Project",
    description: "Established a beautiful garden where residents can grow their own vegetables and flowers, promoting physical activity and mental wellness.",
    date: "February 2024", 
    impact: "30+ participants"
  },
  {
    title: "Digital Literacy Program",
    description: "Launched a program to help elderly residents stay connected with their families through video calls and digital communication.",
    date: "January 2024",
    impact: "80+ seniors trained"
  }
];

const RecentWorkSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recent Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our latest initiatives and projects that continue to improve the lives of our beloved residents.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {recentWork.map((work, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl overflow-hidden border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-warmth/10 to-care/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-warmth/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <p className="text-muted-foreground">Project Image</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-warmth/10 text-warmth rounded-full text-xs font-medium">
                    {work.date}
                  </span>
                  <span className="px-3 py-1 bg-care/10 text-care-foreground rounded-full text-xs font-medium">
                    {work.impact}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-warmth transition-colors">
                  {work.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-warmth text-warmth-foreground px-8 py-3 rounded-full font-medium hover:bg-warmth/90 transition-colors">
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentWorkSection;