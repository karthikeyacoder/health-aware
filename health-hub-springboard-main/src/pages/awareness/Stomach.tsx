
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Stomach = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div data-aos="fade-up" className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-health-dark">Stomach Health Awareness</h1>
          <p className="text-xl text-gray-600">Understanding and maintaining digestive wellness</p>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1562548190-2a98641dcb7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Stomach Health"
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />
          
          <p className="text-lg mb-6">
            Your digestive system breaks down food and liquid into smaller parts so that your body can absorb them to build and nourish cells and provide energy.
            The digestive tract is a series of hollow organs joined in a long, twisting tube from the mouth to the anus.
          </p>
          
          <p className="text-lg mb-6">
            Digestive disorders affect millions of people worldwide and can significantly impact quality of life. Understanding common digestive conditions
            and maintaining good stomach health is essential for overall wellbeing.
          </p>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Common Digestive Conditions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Gastroesophageal Reflux Disease (GERD)</h3>
                <p>A chronic digestive disease where stomach acid flows back into the food pipe, causing heartburn and other symptoms.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Irritable Bowel Syndrome (IBS)</h3>
                <p>A common disorder affecting the large intestine, causing cramping, abdominal pain, bloating, gas, and diarrhea or constipation.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Peptic Ulcers</h3>
                <p>Open sores that develop on the inside lining of the stomach, upper small intestine, or esophagus.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Inflammatory Bowel Disease (IBD)</h3>
                <p>Includes Crohn's disease and ulcerative colitis, characterized by chronic inflammation of the digestive tract.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Warning Signs of Digestive Problems</h2>
          
          <ul className="list-disc pl-6 space-y-3 mb-8">
            <li>Persistent abdominal pain or discomfort</li>
            <li>Frequent heartburn or acid reflux</li>
            <li>Bloating and gas</li>
            <li>Changes in bowel habits (diarrhea, constipation, or alternating between both)</li>
            <li>Blood in stool</li>
            <li>Unintentional weight loss</li>
            <li>Persistent nausea or vomiting</li>
            <li>Difficulty swallowing</li>
            <li>Fatigue</li>
            <li>Jaundice (yellowing of the skin and eyes)</li>
          </ul>
          
          <div className="bg-yellow-50 p-6 rounded-xl mb-8 border-l-4 border-yellow-500">
            <h3 className="text-xl font-semibold mb-2 text-yellow-700">When to Seek Medical Attention</h3>
            <p>Contact your healthcare provider if you experience:</p>
            <ul className="space-y-2 mt-2">
              <li>Severe abdominal pain that doesn't go away</li>
              <li>Blood in vomit or stool</li>
              <li>Black, tarry stools</li>
              <li>Uncontrolled vomiting</li>
              <li>Difficulty swallowing or painful swallowing</li>
              <li>Unexplained weight loss</li>
              <li>Persistent symptoms that don't respond to over-the-counter medications</li>
            </ul>
          </div>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Maintaining Good Digestive Health</h2>
          
          <div className="bg-blue-50 p-6 rounded-xl mb-8">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Eat a fiber-rich diet including plenty of fruits, vegetables, and whole grains</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Stay hydrated by drinking plenty of water throughout the day</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Exercise regularly to promote healthy digestion</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Eat smaller, more frequent meals and avoid overeating</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Limit fatty, fried foods, and spicy foods if they cause discomfort</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Manage stress through relaxation techniques</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Limit alcohol consumption and avoid smoking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Consider probiotics to support healthy gut bacteria</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Eat slowly and chew food thoroughly</span>
              </li>
            </ul>
          </div>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">The Gut-Brain Connection</h2>
          
          <p className="text-lg mb-6">
            Research increasingly shows a strong connection between gut health and brain function, often called the "gut-brain axis." 
            Your digestive system contains millions of neurons and produces many of the same neurotransmitters found in the brain.
          </p>
          
          <p className="text-lg mb-6">
            This connection explains why digestive disorders can affect mood and why psychological factors like stress can affect digestive function.
            Maintaining a healthy gut can positively impact your mental health and overall well-being.
          </p>
        </div>

        <div data-aos="fade-up" className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Digestive Health Resources</h2>
          
          <p className="text-lg mb-8">
            If you're experiencing digestive problems, consider speaking with a healthcare provider who specializes in gastroenterology.
            Regular check-ups and screenings can help detect and treat digestive issues early.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-health-green hover:bg-health-blue">
              Find Digestive Health Resources
            </Button>
            <Button variant="outline">
              Learn About Digestive Screenings
            </Button>
          </div>
        </div>

        <div data-aos="fade-up" className="border-t pt-8">
          <p className="text-gray-500 italic text-sm mb-4">
            Disclaimer: This information is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
            Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
          
          <div className="flex justify-center">
            <Link to="/" className="text-health-blue hover:text-health-green transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stomach;
