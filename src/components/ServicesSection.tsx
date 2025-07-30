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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive care and support to ensure dignity, comfort, and happiness for every resident.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-warmth/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-warmth/20 transition-colors">
                <service.icon className="h-8 w-8 text-warmth" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;