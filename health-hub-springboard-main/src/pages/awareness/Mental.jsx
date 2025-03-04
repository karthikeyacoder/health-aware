
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Mental = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div data-aos="fade-up" className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-health-dark">Mental Health Awareness</h1>
          <p className="text-xl text-gray-600">Understanding and caring for your mental wellbeing</p>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Mental Health"
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />
          
          <p className="text-lg mb-6">
            Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. 
            It also helps determine how we handle stress, relate to others, and make choices.
          </p>
          
          <p className="text-lg mb-6">
            Mental health is important at every stage of life, from childhood and adolescence through adulthood.
            Many factors contribute to mental health problems, including biological factors, life experiences, and family history.
          </p>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Common Mental Health Conditions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Depression</h3>
                <p>A mental health disorder characterized by persistently depressed mood or loss of interest in activities, causing significant impairment in daily life.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Anxiety Disorders</h3>
                <p>A group of mental health disorders characterized by significant feelings of anxiety and fear.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Bipolar Disorder</h3>
                <p>A mental disorder that causes unusual shifts in mood, energy, activity levels, concentration, and the ability to carry out day-to-day tasks.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">PTSD</h3>
                <p>A mental health condition triggered by experiencing or witnessing a terrifying event, causing flashbacks, nightmares and severe anxiety.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Warning Signs</h2>
          
          <ul className="list-disc pl-6 space-y-3 mb-8">
            <li>Eating or sleeping too much or too little</li>
            <li>Pulling away from people and usual activities</li>
            <li>Having low or no energy</li>
            <li>Feeling numb or like nothing matters</li>
            <li>Having unexplained aches and pains</li>
            <li>Feeling helpless or hopeless</li>
            <li>Smoking, drinking, or using drugs more than usual</li>
            <li>Feeling unusually confused, forgetful, on edge, angry, upset, worried, or scared</li>
            <li>Yelling or fighting with family and friends</li>
            <li>Experiencing severe mood swings that cause problems in relationships</li>
            <li>Having persistent thoughts and memories you can't get out of your head</li>
            <li>Hearing voices or believing things that are not true</li>
            <li>Thinking of harming yourself or others</li>
            <li>Inability to perform daily tasks like taking care of your kids or getting to work or school</li>
          </ul>
        </div>

        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Maintaining Good Mental Health</h2>
          
          <div className="bg-blue-50 p-6 rounded-xl mb-8">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Connect with others and maintain healthy relationships</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Stay physically active and exercise regularly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Get enough sleep and maintain a healthy diet</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Develop coping skills for managing stress</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Set realistic goals and prioritize tasks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Practice mindfulness and relaxation techniques</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Avoid alcohol and drugs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-health-blue text-white p-1 rounded-full mt-1">✓</span>
                <span>Take breaks when needed and practice self-care</span>
              </li>
            </ul>
          </div>
        </div>

        <div data-aos="fade-up" className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Seeking Help</h2>
          
          <p className="text-lg mb-8">
            If you or someone you know is struggling with mental health issues, it's important to seek professional help.
            Talk to a healthcare provider about mental health concerns. They can provide guidance and connect you with appropriate resources.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-health-green hover:bg-health-blue">
              Find Mental Health Resources
            </Button>
            <Button variant="outline">
              Take a Mental Health Screening
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

export default Mental;
