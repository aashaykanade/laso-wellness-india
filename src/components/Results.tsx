
import { Award, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ResultCard = ({ condition, improvement, details }: { condition: string; improvement: string; details: string }) => {
  return (
    <Card className="p-6 premium-glass hover:border-purple-400/30 hover:shadow-[0_20px_60px_-20px_rgba(139,92,246,0.5)] transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="bg-purple-500/15 border border-purple-400/20 p-3 rounded-full h-fit">
          <Award className="text-purple-300" size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-foreground">{condition}</h3>
          <div className="bg-white/10 h-2 rounded-full mb-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-purple-400 to-emerald-400 h-2 rounded-full shadow-[0_0_12px_rgba(139,92,246,0.6)]"
              style={{ width: improvement }}
            ></div>
          </div>
          <p className="text-sm text-purple-200 mb-2">{improvement} improvement observed</p>
          <p className="text-muted-foreground">{details}</p>
        </div>
      </div>
    </Card>
  );
};

const Results = () => {
  return (
    <section id="results" className="section-padding premium-section">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Documented Results</h2>
          <div className="w-20 h-1 bg-laso-purple mx-auto mb-6"></div>
          <p className="text-lg">
            Our energy healing methodologies have produced remarkable improvements in various chronic conditions. 
            These results have been documented and verified through medical reports.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ResultCard 
            condition="Parkinson's Disease"
            improvement="78%"
            details="Significant reduction in tremors, improved mobility, and enhanced quality of life in patients with 5+ years of diagnosis."
          />
          
          <ResultCard 
            condition="Type 2 Diabetes"
            improvement="67%"
            details="Lowered blood sugar levels, reduced medication dependence, and improved insulin sensitivity in chronic cases."
          />
          
          <ResultCard 
            condition="Chronic Pain"
            improvement="85%"
            details="Substantial pain reduction, increased range of motion, and decreased reliance on pain management medications."
          />
          
          <ResultCard 
            condition="Autoimmune Conditions"
            improvement="72%"
            details="Normalized inflammatory markers, reduced flare-ups, and improved overall immune system function."
          />
          
          <ResultCard 
            condition="Anxiety & Depression"
            improvement="81%"
            details="Enhanced mood stability, reduced anxiety symptoms, and improved sleep quality within 8-12 weeks."
          />
          
          <ResultCard 
            condition="Digestive Disorders"
            improvement="76%"
            details="Resolved chronic digestive issues, restored normal function, and eliminated recurring symptoms."
          />
          
          <ResultCard 
            condition="And many more..."
            improvement="70%+"
            details="Our energy healing methods have been successful in treating a wide range of conditions not listed here. Contact us to learn if we can help with your specific health concern."
          />
        </div>

        <div className="mt-16 premium-glass p-8 rounded-2xl max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-emerald-300 mb-4">Our Research & Documentation</h3>
          <p className="mb-4">
            At Laso Wellness, we maintain detailed records of all client progress. Our results have been 
            documented through:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2 flex-shrink-0 shadow-[0_0_8px_rgba(192,132,252,0.8)]"></div>
              <span>Before and after medical assessments</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2 flex-shrink-0 shadow-[0_0_8px_rgba(192,132,252,0.8)]"></div>
              <span>Clinical measurements of physiological markers</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2 flex-shrink-0 shadow-[0_0_8px_rgba(192,132,252,0.8)]"></div>
              <span>Client symptom tracking and quality of life assessments</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2 flex-shrink-0 shadow-[0_0_8px_rgba(192,132,252,0.8)]"></div>
              <span>Follow-up consultations at 3, 6, and 12-month intervals</span>
            </li>
          </ul>
          <div className="text-center">
            <a href="#testimonials">
              <Button className="bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-400 hover:to-fuchsia-400 text-white px-5 py-2 text-md flex items-center gap-2 shadow-[0_0_30px_rgba(192,132,252,0.3)]">
                <Users size={18} />
                View Patient Experiences
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
