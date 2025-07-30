import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Margaret Thompson",
    age: 78,
    content: "This place has become my true home. The staff treats me like family, and I've made wonderful friends here. Every day is filled with love and care.",
    rating: 5
  },
  {
    name: "Robert Wilson",
    age: 82,
    content: "The activities and programs here keep me active and engaged. I never thought I'd enjoy painting, but now it's my favorite hobby!",
    rating: 5
  },
  {
    name: "Dorothy Chen",
    age: 75,
    content: "My family was worried about me living alone. Now they're so happy knowing I'm safe, well-cared for, and surrounded by wonderful people.",
    rating: 5
  }
];

const TestimonialsSection = () => {
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
            Stories from Our Family
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our residents about their experiences and the joy they've found in our community.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card p-8 rounded-2xl border border-border hover:shadow-elegant transition-all duration-300"
            >
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="flex items-center mb-4"
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Star className="h-5 w-5 text-care fill-current" />
                  </motion.div>
                ))}
              </motion.div>
              
              <blockquote className="text-muted-foreground text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-warmth/20 rounded-full flex items-center justify-center mr-4"
                >
                  <span className="text-xl">👤</span>
                </motion.div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Age {testimonial.age}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;