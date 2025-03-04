
import { useState, useRef, useEffect } from 'react';

const ChatBot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your HealthAware AI assistant. How can I help you with your health questions today?", isBot: true },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      // Here we'll improve the chatbot's answer mechanism
      setTimeout(() => {
        const inputLower = input.toLowerCase();
        
        // More comprehensive health-related responses
        let responseText = "";
        
        // Mental health related queries
        if (inputLower.includes('depress') || inputLower.includes('anxiety') || inputLower.includes('mental') || inputLower.includes('stress')) {
          responseText = "Mental health concerns like depression and anxiety are common. It's important to seek professional help if you're experiencing persistent symptoms. Regular exercise, adequate sleep, and mindfulness practices can help manage symptoms. Remember that seeking help is a sign of strength, not weakness.";
        }
        // Heart health related queries
        else if (inputLower.includes('heart') || inputLower.includes('blood pressure') || inputLower.includes('cholesterol')) {
          responseText = "Heart health is vital. Maintain it through regular exercise, a balanced diet low in saturated fats and sodium, stress management, and regular check-ups. If you experience chest pain, shortness of breath, or irregular heartbeat, seek medical attention immediately.";
        }
        // Diet related queries
        else if (inputLower.includes('diet') || inputLower.includes('nutrition') || inputLower.includes('food') || inputLower.includes('eat')) {
          responseText = "A balanced diet should include fruits, vegetables, whole grains, lean proteins, and healthy fats. Try to limit processed foods, added sugars, and excessive salt. Stay hydrated by drinking plenty of water. Consider consulting a nutritionist for personalized advice.";
        }
        // Exercise related queries
        else if (inputLower.includes('exercise') || inputLower.includes('workout') || inputLower.includes('fitness')) {
          responseText = "Regular exercise is essential for good health. Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity weekly, plus muscle-strengthening activities twice a week. Start slowly if you're new to exercise and consult a doctor if you have existing health conditions.";
        }
        // Sleep related queries
        else if (inputLower.includes('sleep') || inputLower.includes('insomnia') || inputLower.includes('tired')) {
          responseText = "Quality sleep is crucial for health. Adults need 7-9 hours per night. Establish a regular sleep schedule, create a restful environment, limit screen time before bed, and avoid caffeine and large meals before sleeping. If sleep problems persist, consult a healthcare provider.";
        }
        // COVID related queries
        else if (inputLower.includes('covid') || inputLower.includes('coronavirus') || inputLower.includes('pandemic')) {
          responseText = "Common COVID-19 symptoms include fever, cough, fatigue, and loss of taste or smell. If you're experiencing these symptoms, consider getting tested and follow local health guidelines for isolation. Vaccination remains the most effective protection against severe illness.";
        }
        // Headache related queries
        else if (inputLower.includes('headache') || inputLower.includes('migraine')) {
          responseText = "Headaches can be caused by various factors including stress, dehydration, lack of sleep, or eye strain. Try drinking water, resting in a dark room, and if headaches persist for more than a few days, consult a healthcare professional.";
        }
        // Weight management
        else if (inputLower.includes('weight') || inputLower.includes('obesity') || inputLower.includes('bmi')) {
          responseText = "Healthy weight management involves balanced nutrition, regular physical activity, and lifestyle changes. Focus on sustainable habits rather than quick fixes. Our BMI calculator can help you determine if your weight is in a healthy range, but remember that BMI is just one indicator of health.";
        }
        // Diabetes
        else if (inputLower.includes('diabetes') || inputLower.includes('blood sugar')) {
          responseText = "Diabetes management involves monitoring blood sugar, taking prescribed medications, maintaining a healthy diet, regular exercise, and routine medical care. If you're experiencing symptoms like excessive thirst, frequent urination, or unexplained weight loss, consult a healthcare provider.";
        }
        // General health query
        else {
          responseText = "Thank you for your health question. While I aim to provide helpful information, remember that I'm an AI assistant and not a substitute for professional medical advice. If you're experiencing concerning symptoms or have specific health issues, please consult with a qualified healthcare provider for personalized guidance.";
        }
        
        // Add bot response
        const botResponse = { text: responseText, isBot: true };
        setMessages(prev => [...prev, botResponse]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error getting response:', error);
      setMessages(prev => [...prev, { 
        text: "I'm sorry, I had trouble processing your request. Please try again.", 
        isBot: true 
      }]);
      setIsLoading(false);
    }
  };
  
  return (
    <div className="fixed bottom-24 right-6 w-80 md:w-96 h-96 glass-card rounded-xl shadow-xl z-40 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-health-blue to-health-green p-3 text-white flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6H5M7 6H19M3 12H5M7 12H13M3 18H5M7 18H15"/>
          </svg>
          <span className="font-medium">HealthAware AI</span>
        </div>
        <button onClick={onClose} className="text-white hover:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
          </svg>
        </button>
      </div>
      
      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-3 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-[85%] p-3 rounded-lg ${
                message.isBot
                  ? 'bg-gray-100 text-gray-800'
                  : 'bg-health-blue text-white'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start mb-3">
            <div className="bg-gray-100 p-3 rounded-lg max-w-[85%]">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input */}
      <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            placeholder="Type your health question..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-health-blue"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-health-blue hover:bg-blue-600 text-white px-3 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatBot;
