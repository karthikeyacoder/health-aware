
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Heart = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div data-aos="fade-up" className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-health-dark">Heart Health Awareness</h1>
          <p className="text-xl text-gray-600">Keeping your heart strong and healthy</p>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Heart Health"
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />
          
          <p className="text-lg mb-6">
            Your heart is a muscular organ about the size of your fist that pumps blood through your body. It beats about 100,000 times per day, 
            pumping approximately 2,000 gallons of blood. Maintaining a healthy heart is crucial for overall health and longevity.
          </p>
          
          <p className="text-lg mb-6">
            Cardiovascular disease is the leading cause of death globally. However, many heart conditions are preventable with 
            healthy lifestyle choices and regular medical check-ups.
          </p>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Common Heart Conditions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Coronary Artery Disease</h3>
                <p>The most common type of heart disease, caused by plaque buildup in the walls of the arteries that supply blood to the heart.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Heart Failure</h3>
                <p>A condition where the heart can't pump enough blood to meet the body's needs, often due to weakened heart muscles.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Arrhythmias</h3>
                <p>Abnormal heart rhythms that can cause the heart to beat too fast, too slow, or irregularly.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Heart Valve Disease</h3>
                <p>Occurs when one or more of your heart valves don't work properly, affecting blood flow through your heart.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Warning Signs of Heart Problems</h2>
          
          <ul className="list-disc pl-6 space-y-3 mb-8">
            <li>Chest pain, pressure, tightness, or discomfort</li>
            <li>Shortness of breath</li>
            <li>Pain, numbness, or weakness in the arms or legs</li>
            <li>Pain in the neck, jaw, throat, upper abdomen, or back</li>
            <li>Fluttering in your chest (palpitations)</li>
            <li>Racing heartbeat</li>
            <li>Slow or irregular heartbeat</li>
            <li>Dizziness, lightheadedness, or fainting</li>
            <li>Fatigue</li>
            <li>Swelling in the legs, ankles, or feet</li>
            <li>Lack of stamina during physical activities</li>
          </ul>
          
          <div className="bg-red-50 p-6 rounded-xl mb-8 border-l-4 border-red-500">
            <h3 className="text-xl font-semibold mb-2 text-red-700">Emergency Warning Signs</h3>
            <p className="mb-4">Call emergency services immediately if you experience these symptoms:</p>
            <ul className="space-y-2">
              <li>Chest pain lasting more than a few minutes</li>
              <li>Difficulty breathing along with chest discomfort</li>
              <li>Loss of consciousness</li>
              <li>Sudden severe weakness</li>
            </ul>
          </div>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Heart-Healthy Lifestyle</h2>
          
          <div className="bg-blue-50 p-6 rounded-xl mb-8">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Eat a healthy diet rich in fruits, vegetables, whole grains, and lean proteins</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Exercise regularly - aim for at least 150 minutes of moderate activity per week</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Maintain a healthy weight</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Quit smoking and avoid secondhand smoke</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Limit alcohol consumption</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Manage stress through relaxation techniques, meditation, or yoga</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Get regular check-ups to monitor blood pressure, cholesterol, and blood sugar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Get adequate sleep - aim for 7-9 hours per night</span>
              </li>
            </ul>
          </div>
        </div>

        <div data-aos="fade-up" className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Heart Health Screenings</h2>
          
          <p className="text-lg mb-8">
            Regular screenings can help detect heart problems before they become serious. Talk to your healthcare provider about which 
            screenings are appropriate for you based on your age, health, and risk factors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-health-green hover:bg-health-blue">
              Find Heart Health Resources
            </Button>
            <Button variant="outline">
              Schedule a Heart Screening
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

export default Heart;
