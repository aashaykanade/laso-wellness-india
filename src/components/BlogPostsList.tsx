
import { FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "Understanding Energy Healing and Its Benefits",
    excerpt: "Energy healing is an ancient practice that has helped countless individuals overcome chronic conditions. Learn about the science behind energy healing and how it can benefit your health.",
    date: "April 5, 2025",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    slug: "understanding-energy-healing",
  },
  {
    id: 2,
    title: "Iatrogenic Conditions: Healing from Medical Treatment Side Effects",
    excerpt: "Medical treatments can sometimes cause unintended side effects. Discover how alternative healing approaches can help address and reverse these iatrogenic conditions.",
    date: "March 22, 2025",
    imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    slug: "iatrogenic-conditions-healing",
  },
  {
    id: 3,
    title: "The Mind-Body Connection in Chronic Disease",
    excerpt: "Research continues to validate the powerful connection between our mental and physical health. Learn how addressing psychological factors can lead to physical healing.",
    date: "March 10, 2025",
    imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    slug: "mind-body-connection",
  },
  {
    id: 4,
    title: "Case Study: Reversing Chronic Pain Through Energy Techniques",
    excerpt: "Follow the journey of a patient who found relief from debilitating chronic pain through our specialized energy healing protocols.",
    date: "February 28, 2025",
    imageUrl: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=800&q=80",
    slug: "case-study-chronic-pain",
  },
  {
    id: 5,
    title: "Ancient Healing Wisdom for Modern Health Challenges",
    excerpt: "Traditional healing systems have valuable wisdom to offer for today's health problems. Explore how ancient practices can address contemporary health challenges.",
    date: "February 15, 2025",
    imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
    slug: "ancient-healing-wisdom",
  },
  {
    id: 6,
    title: "Creating a Balanced Energy System for Optimal Health",
    excerpt: "Your body's energy system affects every aspect of your health. Learn practical techniques to balance your energy for improved wellness.",
    date: "February 3, 2025",
    imageUrl: "https://images.unsplash.com/photo-1476611317561-60117649dd94?auto=format&fit=crop&w=800&q=80",
    slug: "balanced-energy-system",
  },
];

const BlogPostCard = ({ post }: { post: typeof blogPosts[0] }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-sm text-gray-500 mb-2 flex items-center">
          <FileText size={16} className="mr-2" />
          {post.date}
        </div>
        <h3 className="text-xl font-serif font-bold mb-3">{post.title}</h3>
        <p className="text-gray-700 mb-4 flex-grow">{post.excerpt}</p>
        <Button 
          variant="outline" 
          className="border-laso-purple text-laso-purple hover:bg-laso-lightpurple hover:text-laso-purple w-full justify-center mt-auto"
          asChild
        >
          <a href={`/blog/${post.slug}`}>Read More</a>
        </Button>
      </div>
    </Card>
  );
};

const BlogPostsList = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogPostsList;
