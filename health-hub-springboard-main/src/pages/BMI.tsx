
import { useState, useRef, useEffect } from 'react';

const BMI = () => {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const resultRef = useRef<HTMLDivElement>(null);
  
  const calculateBMI = () => {
    if (!height || !weight) return;
    
    let bmiValue: number;
    
    if (unit === 'metric') {
      // Metric: weight (kg) / height (m)^2
      const heightInMeters = parseFloat(height) / 100;
      bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
    } else {
      // Imperial: (weight (lbs) * 703) / height (inches)^2
      bmiValue = (parseFloat(weight) * 703) / (parseFloat(height) * parseFloat(height));
    }
    
    setBmi(parseFloat(bmiValue.toFixed(1)));
    
    // Determine BMI category
    if (bmiValue < 18.5) {
      setCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setCategory('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setCategory('Overweight');
    } else {
      setCategory('Obesity');
    }
    
    // Scroll to result after calculation
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  
  const resetForm = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
    setCategory('');
  };
  
  const getCategoryColor = () => {
    switch (category) {
      case 'Underweight':
        return 'text-blue-500';
      case 'Normal weight':
        return 'text-green-500';
      case 'Overweight':
        return 'text-orange-500';
      case 'Obesity':
        return 'text-red-500';
      default:
        return '';
    }
  };
  
  // Handle unit change
  const handleUnitChange = (newUnit: 'metric' | 'imperial') => {
    setUnit(newUnit);
    setHeight('');
    setWeight('');
    setBmi(null);
    setCategory('');
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-health-green/20 text-health-green text-sm font-medium">
            Health Tools
          </div>
          <h1 className="text-4xl font-bold mb-6" data-aos="fade-up">
            BMI Calculator
          </h1>
          <p className="text-lg text-gray-600" data-aos="fade-up" data-aos-delay="100">
            Body Mass Index (BMI) is a person's weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness. Track your BMI to help gauge your level of fitness.
          </p>
        </div>
        
        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-xl shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-gradient-to-r from-health-blue to-health-green p-6 text-white">
              <h2 className="text-2xl font-bold">Calculate Your BMI</h2>
              <p className="opacity-90">Enter your details below to calculate your Body Mass Index</p>
            </div>
            
            <div className="p-6 md:p-8">
              {/* Unit Selector */}
              <div className="mb-6">
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => handleUnitChange('metric')}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      unit === 'metric'
                        ? 'bg-health-blue text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Metric (kg/cm)
                  </button>
                  <button
                    onClick={() => handleUnitChange('imperial')}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      unit === 'imperial'
                        ? 'bg-health-blue text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Imperial (lb/in)
                  </button>
                </div>
              </div>
              
              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-2">
                    Height ({unit === 'metric' ? 'cm' : 'inches'})
                  </label>
                  <input
                    type="number"
                    id="height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder={unit === 'metric' ? 'e.g., 170' : 'e.g., 67'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-health-blue focus:border-health-blue transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">
                    Weight ({unit === 'metric' ? 'kg' : 'lbs'})
                  </label>
                  <input
                    type="number"
                    id="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder={unit === 'metric' ? 'e.g., 70' : 'e.g., 160'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-health-blue focus:border-health-blue transition-colors"
                  />
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:justify-center gap-4 mb-8">
                <button
                  onClick={calculateBMI}
                  disabled={!height || !weight}
                  className="px-6 py-3 bg-health-green text-white font-medium rounded-md hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Calculate BMI
                </button>
                <button
                  onClick={resetForm}
                  className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-md hover:bg-gray-200 transition-colors"
                >
                  Reset
                </button>
              </div>
              
              {/* Result */}
              {bmi !== null && (
                <div 
                  ref={resultRef} 
                  className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200 text-center animate-fade-in"
                >
                  <div className="mb-4">
                    <span className="text-gray-600">Your BMI is</span>
                    <h3 className="text-4xl font-bold">{bmi}</h3>
                  </div>
                  <div className="mb-2">
                    <span className="text-gray-600">You are in the</span>
                    <h4 className={`text-2xl font-bold ${getCategoryColor()}`}>
                      {category}
                    </h4>
                    <span className="text-gray-600">category</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* BMI Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 rounded-xl" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-bold mb-4">What is BMI?</h3>
              <p className="text-gray-600 mb-4">
                Body Mass Index (BMI) is a numerical value of your weight in relation to your height. It is a widely used method to gauge whether a person has a healthy body weight.
              </p>
              <p className="text-gray-600">
                While BMI can be a useful indicator, it does have limitations. It does not account for factors like muscle mass, bone density, or overall body composition.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-bold mb-4">BMI Categories</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                  <span className="text-gray-700">Under 18.5: <span className="font-medium">Underweight</span></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  <span className="text-gray-700">18.5 to 24.9: <span className="font-medium">Normal weight</span></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                  <span className="text-gray-700">25 to 29.9: <span className="font-medium">Overweight</span></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="text-gray-700">30 and above: <span className="font-medium">Obesity</span></span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg" data-aos="fade-up" data-aos-delay="300">
            <p className="text-sm text-blue-800">
              <strong>Disclaimer:</strong> This BMI calculator is for informational purposes only and is not a substitute for medical advice. Consult with a healthcare professional for a proper assessment of your health and weight.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMI;
