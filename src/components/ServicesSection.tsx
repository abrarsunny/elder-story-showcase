import { Heart, Users, Stethoscope, Home, Utensils, GamepadIcon } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "24/7 Care",
    description: "Round-the-clock medical attention and emotional support for all residents."
  },
  {
    icon: Users,
    title: "Social Activities",
    description: "Engaging group activities, events, and programs to keep spirits high."
  },
  {
    icon: Stethoscope,
    title: "Medical Support",
    description: "Professional healthcare services with regular health monitoring."
  },
  {
    icon: Home,
    title: "Comfortable Living",
    description: "Safe, clean, and comfortable accommodation with home-like atmosphere."
  },
  {
    icon: Utensils,
    title: "Nutritious Meals",
    description: "Healthy, balanced meals prepared with love and dietary considerations."
  },
  {
    icon: GamepadIcon,
    title: "Recreation",
    description: "Games, entertainment, and recreational activities for mental wellness."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our mission is to drive progress and enhance the lives of our residents by delivering superior care and services that exceed expectations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-warmth/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-warmth/20 transition-colors">
                <service.icon className="h-6 w-6 text-warmth" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <button className="text-warmth text-sm font-medium hover:text-warmth/80 transition-colors flex items-center justify-center mx-auto gap-1">
                Read more →
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-warmth text-warmth-foreground px-8 py-3 rounded-full font-medium hover:bg-warmth/90 transition-colors">
            Hire Us Today →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;