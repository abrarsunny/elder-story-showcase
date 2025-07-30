"use client";

import { motion } from "./MotionWrapper";

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
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recent Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our latest initiatives and projects that continue to improve the lives of our beloved residents.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {recentWork.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-background rounded-2xl overflow-hidden border border-border hover:shadow-elegant transition-all duration-300"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="h-48 bg-gradient-to-br from-warmth/10 to-care/10 flex items-center justify-center"
              >
                <div className="text-center">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-warmth/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <span className="text-2xl">🎯</span>
                  </motion.div>
                  <p className="text-muted-foreground">Project Image</p>
                </div>
              </motion.div>
              
              <div className="p-6">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3 mb-4"
                >
                  <span className="px-3 py-1 bg-warmth/10 text-warmth rounded-full text-xs font-medium">
                    {work.date}
                  </span>
                  <span className="px-3 py-1 bg-care/10 text-care-foreground rounded-full text-xs font-medium">
                    {work.impact}
                  </span>
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-warmth transition-colors">
                  {work.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {work.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="bg-warmth text-warmth-foreground px-8 py-3 rounded-full font-medium hover:bg-warmth/90 transition-colors">
            View All Projects →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentWorkSection;