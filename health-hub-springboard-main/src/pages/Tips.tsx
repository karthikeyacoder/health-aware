
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const Tips = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div data-aos="fade-up" className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-health-dark">Health Tips & Advice</h1>
          <p className="text-xl text-gray-600">Practical guidance for a healthier lifestyle</p>
        </div>
        
        <Tabs defaultValue="nutrition" className="w-full mb-12">
          <div data-aos="fade-up" className="mb-6">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              <TabsTrigger value="fitness">Fitness</TabsTrigger>
              <TabsTrigger value="mental">Mental Wellbeing</TabsTrigger>
              <TabsTrigger value="sleep">Sleep</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="nutrition">
            <div data-aos="fade-up" className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Healthy Nutrition"
                className="w-full h-[300px] object-cover rounded-xl mb-8"
              />
              
              <h2 className="text-3xl font-bold mb-6 text-health-dark">Healthy Eating Habits</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Balanced Meals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Aim for a plate that's half vegetables, quarter protein, and quarter whole grains. Include healthy fats and a variety of colors.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Hydration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Drink plenty of water throughout the day. Aim for 8 glasses daily, more if you're active or in hot weather.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Mindful Eating</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Pay attention to hunger cues, eat slowly, and savor your food. Avoid distractions like TV or phones during meals.</p>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-health-dark">Food Groups to Emphasize</h3>
              
              <ul className="list-disc pl-6 space-y-3 mb-8">
                <li><strong>Vegetables and Fruits:</strong> Aim for 5+ servings daily, with emphasis on variety and color.</li>
                <li><strong>Whole Grains:</strong> Choose brown rice, whole wheat bread, oats, and quinoa over refined grains.</li>
                <li><strong>Lean Proteins:</strong> Include fish, poultry, beans, nuts, seeds, and limited amounts of lean meats.</li>
                <li><strong>Healthy Fats:</strong> Incorporate avocados, olive oil, nuts, and fatty fish like salmon.</li>
                <li><strong>Dairy or Alternatives:</strong> Choose low-fat or plant-based options for calcium and vitamin D.</li>
              </ul>
              
              <div className="bg-blue-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold mb-3 text-health-dark">Foods to Limit</h3>
                <ul className="space-y-2">
                  <li>Added sugars (sodas, candies, desserts)</li>
                  <li>Processed and ultra-processed foods</li>
                  <li>Refined carbohydrates</li>
                  <li>Excessive sodium (salt)</li>
                  <li>Trans fats and some saturated fats</li>
                  <li>Alcohol (if consumed, do so in moderation)</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="fitness">
            <div data-aos="fade-up" className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Fitness"
                className="w-full h-[300px] object-cover rounded-xl mb-8"
              />
              
              <h2 className="text-3xl font-bold mb-6 text-health-dark">Physical Activity Guidelines</h2>
              
              <p className="text-lg mb-6">
                Regular physical activity is one of the most important things you can do for your health. It can help control weight, 
                reduce risk of chronic diseases, strengthen bones and muscles, improve mental health, and increase longevity.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Weekly Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>150 minutes of moderate-intensity aerobic activity</li>
                      <li>OR 75 minutes of vigorous-intensity activity</li>
                      <li>PLUS muscle-strengthening activities on 2+ days</li>
                      <li>Balance and flexibility exercises are also beneficial</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Types of Exercise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Aerobic:</strong> Walking, running, cycling, swimming</li>
                      <li><strong>Strength:</strong> Weight training, resistance bands, bodyweight exercises</li>
                      <li><strong>Flexibility:</strong> Yoga, stretching routines</li>
                      <li><strong>Balance:</strong> Tai chi, yoga, specific balance exercises</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-health-dark">Getting Started with Exercise</h3>
              
              <ul className="list-disc pl-6 space-y-3 mb-8">
                <li>Start slowly and gradually increase intensity and duration</li>
                <li>Choose activities you enjoy to increase adherence</li>
                <li>Find an exercise buddy for motivation and accountability</li>
                <li>Set realistic, specific goals</li>
                <li>Schedule workouts as you would appointments</li>
                <li>Mix up your routine to prevent boredom</li>
                <li>Consider working with a fitness professional for guidance</li>
              </ul>
              
              <div className="bg-green-50 p-6 rounded-xl mb-8 border-l-4 border-health-green">
                <h3 className="text-xl font-semibold mb-3 text-health-dark">Everyday Activity Tips</h3>
                <p className="mb-4">Even outside of dedicated workout time, look for opportunities to be more active:</p>
                <ul className="space-y-2">
                  <li>Take the stairs instead of the elevator</li>
                  <li>Park farther away from entrances</li>
                  <li>Walk or cycle for short errands</li>
                  <li>Stand up and move every hour if you have a sedentary job</li>
                  <li>Do active chores like gardening, washing the car, or vigorous housecleaning</li>
                  <li>Walk while talking on the phone</li>
                  <li>Play actively with children or pets</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="mental">
            <div data-aos="fade-up" className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Mental Wellbeing"
                className="w-full h-[300px] object-cover rounded-xl mb-8"
              />
              
              <h2 className="text-3xl font-bold mb-6 text-health-dark">Mental Wellbeing Strategies</h2>
              
              <p className="text-lg mb-6">
                Mental wellbeing is just as important as physical health. Practicing good mental health habits can help you cope with life's challenges,
                build resilience, and enjoy a more fulfilling life.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Stress Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Practice deep breathing exercises</li>
                      <li>Use progressive muscle relaxation</li>
                      <li>Try meditation or mindfulness</li>
                      <li>Journal about your feelings</li>
                      <li>Listen to calming music</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Social Connection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Nurture close relationships</li>
                      <li>Schedule regular social activities</li>
                      <li>Join clubs or groups with shared interests</li>
                      <li>Volunteer in your community</li>
                      <li>Practice active listening</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Self-Care</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Set healthy boundaries</li>
                      <li>Make time for hobbies and activities you enjoy</li>
                      <li>Spend time in nature</li>
                      <li>Practice gratitude daily</li>
                      <li>Learn to say no when necessary</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-health-dark">Building Resilience</h3>
              
              <p className="text-lg mb-4">
                Resilience is the ability to adapt to difficult situations and recover from setbacks. Here are strategies to build resilience:
              </p>
              
              <ul className="list-disc pl-6 space-y-3 mb-8">
                <li>Develop a positive outlook and practice optimistic thinking</li>
                <li>Accept that change is part of life</li>
                <li>Set realistic goals and take decisive actions</li>
                <li>View challenges as opportunities for growth</li>
                <li>Learn from past experiences</li>
                <li>Practice self-compassion</li>
                <li>Maintain perspective during difficult times</li>
              </ul>
              
              <div className="bg-purple-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold mb-3 text-health-dark">When to Seek Help</h3>
                <p className="mb-4">It's important to recognize when you might need professional support. Consider seeking help if you experience:</p>
                <ul className="space-y-2">
                  <li>Persistent feelings of sadness or anxiety</li>
                  <li>Significant changes in eating or sleeping patterns</li>
                  <li>Withdrawal from activities you once enjoyed</li>
                  <li>Difficulty functioning in daily life</li>
                  <li>Thoughts of harming yourself or others</li>
                  <li>Substance use to cope with emotions</li>
                </ul>
                <p className="mt-4">Remember: Seeking help is a sign of strength, not weakness.</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="sleep">
            <div data-aos="fade-up" className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1455642305367-68834a1bf8b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Sleep Health"
                className="w-full h-[300px] object-cover rounded-xl mb-8"
              />
              
              <h2 className="text-3xl font-bold mb-6 text-health-dark">Healthy Sleep Habits</h2>
              
              <p className="text-lg mb-6">
                Quality sleep is essential for physical health, mental wellbeing, and daily functioning. Adults typically need 7-9 hours of sleep per night,
                while children and teenagers need even more.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-health-dark">Sleep Hygiene Tips</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Daytime Habits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Maintain a consistent wake-up time, even on weekends</li>
                      <li>Get regular exercise, but not too close to bedtime</li>
                      <li>Get natural sunlight exposure, especially in the morning</li>
                      <li>Limit caffeine in the afternoon and evening</li>
                      <li>Avoid large meals and excessive fluids close to bedtime</li>
                      <li>Manage stress through relaxation techniques</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Bedtime Routine</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Establish a relaxing pre-sleep routine</li>
                      <li>Go to bed at the same time each night</li>
                      <li>Limit exposure to screens 1-2 hours before bed</li>
                      <li>Keep your bedroom dark, quiet, and cool (65-68°F/18-20°C)</li>
                      <li>Use your bed only for sleep and intimacy</li>
                      <li>If you can't fall asleep after 20 minutes, get up and do something relaxing</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-health-dark">Common Sleep Disruptors</h3>
              
              <ul className="list-disc pl-6 space-y-3 mb-8">
                <li><strong>Electronic devices:</strong> Blue light exposure suppresses melatonin production</li>
                <li><strong>Inconsistent sleep schedule:</strong> Disrupts your body's internal clock</li>
                <li><strong>Alcohol:</strong> May help you fall asleep but reduces sleep quality</li>
                <li><strong>Caffeine:</strong> Can stay in your system for 6+ hours</li>
                <li><strong>Large meals before bed:</strong> Can cause discomfort and acid reflux</li>
                <li><strong>Stress and anxiety:</strong> Racing thoughts can make it difficult to fall asleep</li>
                <li><strong>Physical discomfort:</strong> Pain, allergies, or uncomfortable bedding</li>
              </ul>
              
              <div className="bg-indigo-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold mb-3 text-health-dark">When to Seek Help for Sleep Issues</h3>
                <p className="mb-4">Consider consulting a healthcare provider if you experience:</p>
                <ul className="space-y-2">
                  <li>Persistent trouble falling or staying asleep</li>
                  <li>Excessive daytime sleepiness despite adequate sleep time</li>
                  <li>Loud snoring, gasping, or stopping breathing during sleep</li>
                  <li>Uncomfortable sensations in your legs at night</li>
                  <li>Sleep problems affecting your daily functioning</li>
                  <li>Reliance on sleep aids for more than a few weeks</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-health-dark text-center">Seasonal Health Tips</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-t-lg">
                <CardTitle className="text-xl">Summer Health</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use sunscreen with SPF 30+ and reapply every 2 hours</li>
                  <li>Stay hydrated, especially during outdoor activities</li>
                  <li>Wear lightweight, light-colored clothing</li>
                  <li>Watch for signs of heat exhaustion and heat stroke</li>
                  <li>Be cautious about food safety at outdoor gatherings</li>
                  <li>Protect against insect bites with appropriate repellent</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-t-lg">
                <CardTitle className="text-xl">Winter Health</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Get your annual flu vaccine</li>
                  <li>Wash hands frequently to prevent cold and flu spread</li>
                  <li>Stay active despite colder weather</li>
                  <li>Moisturize skin to prevent dryness</li>
                  <li>Maintain vitamin D levels (consider supplements)</li>
                  <li>Practice winter safety to prevent falls on ice</li>
                  <li>Watch for signs of seasonal affective disorder</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div data-aos="fade-up" className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-health-dark">Health Resources</h2>
          
          <p className="text-lg mb-8">
            Looking for more specialized health information? Check out our awareness pages for detailed information on specific health topics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/awareness/mental">
              <Button className="bg-health-green hover:bg-health-blue w-full sm:w-auto">
                Mental Health Resources
              </Button>
            </Link>
            <Link to="/awareness/heart">
              <Button variant="outline" className="w-full sm:w-auto">
                Heart Health Resources
              </Button>
            </Link>
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

export default Tips;
