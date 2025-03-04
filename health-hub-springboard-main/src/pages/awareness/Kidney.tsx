
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Kidney = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div data-aos="fade-up" className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-health-dark">Kidney Health Awareness</h1>
          <p className="text-xl text-gray-600">Understanding and protecting your vital filters</p>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1628771065518-0d82f1938462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Kidney Health"
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />
          
          <p className="text-lg mb-6">
            Your kidneys are two bean-shaped organs located just below your rib cage on either side of your spine. Each about the size of a fist, 
            these powerful organs filter waste products, excess water, and other impurities from your blood.
          </p>
          
          <p className="text-lg mb-6">
            Kidneys also regulate pH, salt, and potassium levels in your body. They produce hormones that regulate blood pressure, 
            make red blood cells, and keep your bones healthy and strong. Kidney disease can often go undetected until it's advanced, 
            making awareness and prevention crucial.
          </p>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Common Kidney Conditions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Chronic Kidney Disease (CKD)</h3>
                <p>A condition characterized by a gradual loss of kidney function over time, often due to diabetes or high blood pressure.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Kidney Stones</h3>
                <p>Hard deposits made of minerals and salts that form inside your kidneys and can cause severe pain when passing through the urinary tract.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Urinary Tract Infections (UTIs)</h3>
                <p>Infections that can affect any part of the urinary system, including kidneys, bladder, ureters, and urethra.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Polycystic Kidney Disease</h3>
                <p>An inherited disorder where clusters of cysts develop primarily within your kidneys, causing them to enlarge and lose function over time.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Risk Factors for Kidney Disease</h2>
          
          <ul className="list-disc pl-6 space-y-3 mb-8">
            <li>Diabetes</li>
            <li>High blood pressure</li>
            <li>Heart disease</li>
            <li>Family history of kidney failure</li>
            <li>Obesity</li>
            <li>Age over 60</li>
            <li>Smoking</li>
            <li>Frequent use of certain medications (like NSAIDs)</li>
            <li>Chronic urinary tract infections</li>
            <li>Kidney stones</li>
          </ul>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Warning Signs of Kidney Problems</h2>
          
          <p className="text-lg mb-6">
            Kidney disease often has no symptoms in its early stages, but as it progresses, you might notice these signs:
          </p>
          
          <ul className="list-disc pl-6 space-y-3 mb-8">
            <li>Fatigue and weakness</li>
            <li>Difficult or painful urination</li>
            <li>Blood in the urine</li>
            <li>Foamy urine</li>
            <li>Persistent puffiness around the eyes</li>
            <li>Swollen feet and ankles</li>
            <li>Increased thirst</li>
            <li>Frequent urination, especially at night</li>
            <li>Dry, itchy skin</li>
            <li>Nausea and vomiting</li>
            <li>Shortness of breath</li>
            <li>Pain in the back or side</li>
          </ul>
          
          <div className="bg-red-50 p-6 rounded-xl mb-8 border-l-4 border-red-500">
            <h3 className="text-xl font-semibold mb-2 text-red-700">When to Seek Medical Attention</h3>
            <p>See your doctor immediately if you experience:</p>
            <ul className="space-y-2 mt-2">
              <li>Blood in your urine</li>
              <li>Severe pain in your back or side that doesn't go away</li>
              <li>Difficulty urinating</li>
              <li>Unexplained swelling of hands and feet</li>
              <li>Persistent high blood pressure</li>
            </ul>
          </div>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Protecting Your Kidneys</h2>
          
          <div className="bg-blue-50 p-6 rounded-xl mb-8">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Stay hydrated by drinking plenty of water daily</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Eat a balanced diet low in sodium, processed foods, and red meat</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Exercise regularly to maintain a healthy weight</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Monitor and control blood pressure and blood sugar levels</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Don't smoke, or quit if you do</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Limit alcohol consumption</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Get regular check-ups that include kidney function tests</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Use over-the-counter pain medications only as directed</span>
              </li>
            </ul>
          </div>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Kidney Health Testing</h2>
          
          <p className="text-lg mb-6">
            Regular testing is important, especially if you have risk factors for kidney disease. Common kidney tests include:
          </p>
          
          <ul className="list-disc pl-6 space-y-3 mb-8">
            <li><strong>Blood tests:</strong> These measure creatinine and BUN (blood urea nitrogen) levels to calculate your GFR (glomerular filtration rate), which indicates how well your kidneys are filtering.</li>
            <li><strong>Urine tests:</strong> These check for protein (albumin) in your urine, an early sign of kidney damage.</li>
            <li><strong>Blood pressure:</strong> High blood pressure can damage kidneys and is also a result of kidney problems.</li>
            <li><strong>Imaging tests:</strong> Ultrasounds, CT scans, or MRIs can show kidney structure and detect cysts, tumors, or blockages.</li>
          </ul>
        </div>

        <div data-aos="fade-up" className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Kidney Health Resources</h2>
          
          <p className="text-lg mb-8">
            Early detection and treatment can slow or prevent the progression of kidney disease. Talk to your healthcare provider 
            about your kidney health, especially if you have risk factors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-health-green hover:bg-health-blue">
              Find Kidney Health Resources
            </Button>
            <Button variant="outline">
              Learn About Kidney Screenings
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

export default Kidney;
