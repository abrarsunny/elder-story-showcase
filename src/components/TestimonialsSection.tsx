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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stories from Our Family
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our residents about their experiences and the joy they've found in our community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl border border-border hover:shadow-elegant transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-care fill-current" />
                ))}
              </div>
              
              <blockquote className="text-muted-foreground text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-warmth/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👤</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Age {testimonial.age}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;