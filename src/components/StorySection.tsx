import { motion } from "framer-motion";
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
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stories of Hope & Connection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every resident has a unique story. Here are just a few that showcase the spirit and resilience of our community.
          </p>
        </motion.div>
        
        <div className="space-y-24">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${
                story.imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12`}
            >
              <motion.div 
                initial={{ opacity: 0, x: story.imagePosition === "right" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex-1 space-y-6"
              >
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-2xl md:text-3xl font-bold text-foreground"
                >
                  {story.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  {story.content}
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex items-center gap-4"
                >
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="h-1 bg-warmth rounded-full"
                  />
                  <span className="text-sm text-muted-foreground font-medium">
                    Real stories from our community
                  </span>
                </motion.div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: story.imagePosition === "right" ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex-1"
              >
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl shadow-elegant group"
                >
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={story.image}
                    alt={story.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;