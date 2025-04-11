
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPostsList from "@/components/BlogPostsList";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="section-padding bg-laso-cream/10">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6">Healing Insights Blog</h1>
            <div className="w-20 h-1 bg-laso-purple mx-auto mb-6"></div>
            <p className="text-lg">
              Discover our latest insights on energy healing, holistic wellness, and 
              success stories from our healing practice.
            </p>
          </div>
          
          <BlogPostsList />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
