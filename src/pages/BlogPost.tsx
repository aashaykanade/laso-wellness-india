
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// This would typically come from a CMS or database
const getBlogPostData = (slug: string) => {
  // For demonstration purposes, return sample data
  return {
    title: "Understanding Energy Healing and Its Benefits",
    date: "April 5, 2025",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    content: `
      <p class="mb-4">Energy healing is an ancient practice that has been used for thousands of years to promote physical, emotional, and spiritual well-being. At its core, energy healing is based on the principle that everything in the universe is made up of energy, including our bodies. When this energy becomes blocked or imbalanced, it can lead to physical or emotional issues.</p>
      
      <p class="mb-4">Modern science is beginning to validate what ancient healers have known for millennia. Quantum physics has shown us that at our most fundamental level, we are all energy beings. The human body emits electromagnetic fields, and our hearts generate the strongest electromagnetic field in the body, which can be measured several feet away.</p>
      
      <h2 class="text-2xl font-serif font-bold my-6">The Science Behind Energy Healing</h2>
      
      <p class="mb-4">Research into biofield therapies has shown promising results. Studies have indicated that energy healing techniques can help reduce pain, anxiety, and fatigue, while improving overall quality of life. These effects are not just psychological—they have been measured using various scientific instruments and methodologies.</p>
      
      <p class="mb-4">For example, studies using functional MRI (fMRI) scans have shown changes in brain activity during energy healing sessions. Other research has demonstrated effects on heart rate variability, immune function, and even cellular activity.</p>
      
      <h2 class="text-2xl font-serif font-bold my-6">Benefits of Energy Healing</h2>
      
      <p class="mb-4">Energy healing offers a wide range of benefits for both physical and emotional health:</p>
      
      <ul class="list-disc pl-8 mb-6">
        <li class="mb-2">Reduction in pain and inflammation</li>
        <li class="mb-2">Improved immune function</li>
        <li class="mb-2">Enhanced mental clarity and focus</li>
        <li class="mb-2">Decreased stress and anxiety</li>
        <li class="mb-2">Better sleep quality</li>
        <li class="mb-2">Accelerated recovery from illness or surgery</li>
        <li class="mb-2">Greater emotional balance and well-being</li>
      </ul>
      
      <p class="mb-4">One of the most significant advantages of energy healing is that it works on multiple levels—physical, emotional, and spiritual—simultaneously. This holistic approach addresses not just symptoms but the root causes of health issues.</p>
      
      <h2 class="text-2xl font-serif font-bold my-6">Integration with Conventional Medicine</h2>
      
      <p class="mb-4">Energy healing works well as a complementary approach alongside conventional medical treatments. In fact, many hospitals now offer energy healing modalities as part of their integrative medicine programs.</p>
      
      <p class="mb-4">At Laso Wellness, we believe in a collaborative approach to health care. We work with medical professionals and always encourage clients to maintain their conventional medical care while receiving energy healing treatments.</p>
      
      <h2 class="text-2xl font-serif font-bold my-6">Conclusion</h2>
      
      <p class="mb-4">Energy healing offers a powerful, non-invasive approach to addressing many health challenges. As research continues to validate its effectiveness, more people are discovering the benefits of this ancient healing art.</p>
      
      <p>If you're struggling with a chronic condition or simply want to enhance your overall well-being, we invite you to explore how energy healing might help. Contact Laso Wellness today to learn more about our clinic services.</p>
    `,
    tags: ["Energy Healing", "Holistic Health", "Wellness", "Alternative Medicine"],
    author: "Dr. Samantha Patel",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
  };
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostData(slug || "");

  return (
    <div className="min-h-screen">
      <Navbar />
      <article className="section-padding pt-10">
        <div className="container mx-auto max-w-4xl">
          <Button variant="ghost" className="mb-8" asChild>
            <a href="/blog">
              <ArrowLeft className="mr-2" size={18} />
              Back to Blog
            </a>
          </Button>
          
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-gray-600 mb-6">
              <Calendar size={16} className="mr-2" />
              <span>{post.date}</span>
            </div>
          </div>
          
          <div className="mb-10 rounded-lg overflow-hidden">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="prose prose-lg max-w-none"
               dangerouslySetInnerHTML={{ __html: post.content }}>
          </div>
          
          <div className="mt-12 border-t border-gray-200 pt-8">
            <div className="flex items-center">
              <img 
                src={post.authorImage} 
                alt={post.author} 
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <div>
                <p className="font-medium">Written by</p>
                <h3 className="text-xl font-serif">{post.author}</h3>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="bg-laso-lightpurple text-laso-purple px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;
