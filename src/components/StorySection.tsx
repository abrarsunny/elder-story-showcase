import story1Image from "@/assets/story-1.jpg";
import story2Image from "@/assets/story-2.jpg";

const stories = [
  {
    title: "Finding Joy in Simple Moments",
    content: "Eleanor, 84, discovered her love for reading again in our quiet library corner. After losing her sight partially, she thought her reading days were over. Our volunteer program introduced her to large-print books and audio stories. Now, she leads our weekly book club, sharing stories that span decades of wisdom and wonder. Her infectious laughter fills the room as she discusses her favorite characters with fellow residents.",
    image: story1Image,
    imagePosition: "right"
  },
  {
    title: "Passing on a Legacy",
    content: "Master craftsman Henry, 79, spent 50 years as a woodworker. When he joined our community, he felt his skills were no longer needed. We created a workshop space where he now teaches young volunteers the art of woodworking. His weathered hands guide theirs as they learn to shape wood into beautiful creations. Every piece they make together carries forward generations of knowledge and the irreplaceable value of human connection.",
    image: story2Image,
    imagePosition: "left"
  }
];

const StorySection = () => {
  return (
    <section id="story" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stories of Hope & Connection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every resident has a unique story. Here are just a few that showcase the spirit and resilience of our community.
          </p>
        </div>
        
        <div className="space-y-24">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                story.imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12`}
            >
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {story.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {story.content}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-warmth rounded-full" />
                  <span className="text-sm text-muted-foreground font-medium">
                    Real stories from our community
                  </span>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="relative overflow-hidden rounded-2xl shadow-elegant group">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;