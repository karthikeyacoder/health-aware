
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Cancer = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div data-aos="fade-up" className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-health-dark">Cancer Awareness</h1>
          <p className="text-xl text-gray-600">Understanding, prevention, and early detection</p>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="Cancer Awareness"
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />
          
          <p className="text-lg mb-6">
            Cancer is a large group of diseases characterized by the uncontrolled growth and spread of abnormal cells. If the spread is not controlled,
            it can result in serious health issues and may be fatal. Cancer is one of the leading causes of death worldwide, but survival rates are 
            improving for many types of cancer due to advancements in screening, early detection, and treatment.
          </p>
          
          <p className="text-lg mb-6">
            Understanding cancer, its risk factors, warning signs, and prevention strategies is crucial for public health. Early detection often 
            leads to better outcomes and more effective treatment.
          </p>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Common Types of Cancer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Breast Cancer</h3>
                <p>Cancer that forms in the cells of the breasts, most commonly in the ducts or lobules.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Lung Cancer</h3>
                <p>Cancer that begins in the lungs, most often in people who smoke, but also occurring in non-smokers.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Colorectal Cancer</h3>
                <p>Cancer that starts in the colon or rectum, often beginning as polyps that may become cancerous over time.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Prostate Cancer</h3>
                <p>Cancer in the prostate, a small walnut-shaped gland in men that produces seminal fluid.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Skin Cancer</h3>
                <p>The abnormal growth of skin cells, most often developing on skin exposed to the sun.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Leukemia</h3>
                <p>Cancer of blood-forming tissues, including bone marrow, hindering the body's ability to fight infection.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Risk Factors for Cancer</h2>
          
          <p className="text-lg mb-6">
            Many factors can increase your risk of developing cancer. Some cannot be changed, while others are related to lifestyle choices:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Non-modifiable Factors:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Age (risk increases with age)</li>
                <li>Family history and genetic factors</li>
                <li>Personal history of cancer</li>
                <li>Certain viruses and bacteria</li>
                <li>Hormonal factors</li>
                <li>Immune system conditions</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Lifestyle-related Factors:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tobacco use</li>
                <li>Excessive alcohol consumption</li>
                <li>Poor diet and lack of physical activity</li>
                <li>Obesity</li>
                <li>Excessive sun exposure</li>
                <li>Exposure to certain chemicals and substances</li>
                <li>Radiation exposure</li>
              </ul>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Warning Signs of Cancer</h2>
          
          <p className="text-lg mb-6">
            Cancer symptoms vary widely depending on the type and location of the cancer. General warning signs include:
          </p>
          
          <ul className="list-disc pl-6 space-y-3 mb-8">
            <li>Unexplained weight loss</li>
            <li>Fatigue that doesn't improve with rest</li>
            <li>Persistent pain</li>
            <li>Skin changes (new moles or changes to existing moles)</li>
            <li>Changes in bowel or bladder habits</li>
            <li>Unusual bleeding or discharge</li>
            <li>Persistent cough or hoarseness</li>
            <li>Difficulty swallowing</li>
            <li>Persistent indigestion or discomfort after eating</li>
            <li>Unexplained fevers or night sweats</li>
            <li>Lumps or thickening under the skin</li>
          </ul>
          
          <div className="bg-yellow-50 p-6 rounded-xl mb-8 border-l-4 border-yellow-500">
            <h3 className="text-xl font-semibold mb-2 text-yellow-700">Important Note</h3>
            <p>
              These symptoms can be caused by conditions other than cancer. However, if you notice any persistent, unexplained changes in your body, 
              it's important to consult a healthcare professional for proper evaluation.
            </p>
          </div>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Cancer Prevention Strategies</h2>
          
          <p className="text-lg mb-6">
            While not all cancers can be prevented, you can reduce your risk by making healthy lifestyle choices:
          </p>
          
          <div className="bg-blue-50 p-6 rounded-xl mb-8">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Don't use tobacco in any form</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Maintain a healthy weight through regular physical activity and balanced diet</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Eat a diet rich in fruits, vegetables, whole grains, and lean proteins</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Limit processed foods, red meat, and sugar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Protect yourself from the sun with sunscreen, protective clothing, and shade</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Get vaccinated against cancer-causing infections (HPV, Hepatitis B)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Limit alcohol consumption</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Practice safe sex and avoid risky behaviors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Get regular medical care and cancer screening tests</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Know your family history and discuss genetic counseling if appropriate</span>
              </li>
            </ul>
          </div>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Cancer Screenings</h2>
          
          <p className="text-lg mb-6">
            Regular screenings can help detect cancer before symptoms appear, when it may be easier to treat. Talk to your healthcare provider 
            about which screenings are appropriate for you based on your age, gender, family history, and risk factors.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Common Cancer Screenings</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mammograms for breast cancer</li>
                  <li>Colonoscopy for colorectal cancer</li>
                  <li>Pap tests for cervical cancer</li>
                  <li>PSA tests for prostate cancer</li>
                  <li>Skin exams for skin cancer</li>
                  <li>Low-dose CT scans for lung cancer in high-risk individuals</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Self-Exams</h3>
                <p className="mb-4">Regular self-exams can help you become familiar with your body and notice changes early:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Breast self-exams</li>
                  <li>Testicular self-exams</li>
                  <li>Skin self-exams</li>
                  <li>Oral self-exams</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div data-aos="fade-up" className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Cancer Support Resources</h2>
          
          <p className="text-lg mb-8">
            If you or a loved one has been diagnosed with cancer, remember that you're not alone. Many resources are available to provide 
            support, information, and assistance throughout the cancer journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-health-green hover:bg-health-blue">
              Find Cancer Support Resources
            </Button>
            <Button variant="outline">
              Learn About Clinical Trials
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

export default Cancer;
