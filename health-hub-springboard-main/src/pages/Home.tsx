
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// News data for the cards
const newsArticles = [
  {
    id: 1,
    title: "New Study Shows Link Between Exercise and Mental Health",
    excerpt: "Regular physical activity can significantly reduce symptoms of depression and anxiety, according to a new comprehensive study.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Mental Health",
    date: "June 15, 2023"
  },
  {
    id: 2,
    title: "Heart Disease Prevention: 5 Lifestyle Changes That Work",
    excerpt: "Cardiologists recommend these five evidence-based lifestyle modifications to reduce your risk of heart disease.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Heart Health",
    date: "May 28, 2023"
  },
  {
    id: 3,
    title: "Understanding the Microbiome: How Gut Health Affects Overall Wellness",
    excerpt: "New research highlights the critical role of gut bacteria in immune function, mental health, and more.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Digestive Health",
    date: "April 12, 2023"
  },
  {
    id: 4,
    title: "Cancer Screening Guidelines: What You Need to Know in 2023",
    excerpt: "Updated recommendations for cancer screenings that could save lives through early detection.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cancer",
    date: "March 5, 2023"
  }
];

// Carousel images
const carouselImagesLeft = [
  "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", // Doctor with patient
  "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", // Fruits and vegetables
  "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", // Person running
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", // Meditation
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", // Workout
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"  // Healthy food
];

const carouselImagesRight = [
  "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", // Yoga
  "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", // Doctor with stethoscope
  "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", // Fruits
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", // Pregnant woman
  "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", // Healthy food
  "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"  // Pills
];

const Home = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  
  useEffect(() => {
    // Simulate visitor count
    const savedCount = localStorage.getItem('visitorCount');
    const initialCount = savedCount ? parseInt(savedCount) : 15789;
    
    // Increment count for this visit
    const newCount = initialCount + 1;
    localStorage.setItem('visitorCount', newCount.toString());
    
    // Animate count
    let current = 0;
    const increment = Math.ceil(newCount / 100);
    const timer = setInterval(() => {
      current += increment;
      if (current >= newCount) {
        current = newCount;
        clearInterval(timer);
      }
      setVisitorCount(current);
    }, 20);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-health-blue/70 to-health-green/70"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl" data-aos="fade-up">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-white/25 backdrop-blur-sm border border-white/30 text-white">
              Your health is your wealth
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Empowering Health Awareness for Everyone
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Discover the latest health information, tips, and resources to help you make informed decisions about your wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/tips" 
                className="px-6 py-3 bg-white text-health-blue font-medium rounded-full hover:shadow-lg transition-all duration-300 text-center"
              >
                Explore Health Tips
              </Link>
              <Link 
                to="/bmi" 
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 text-center"
              >
                Calculate Your BMI
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Visitor Count Section */}
      <section className="py-16 bg-health-blue-light">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="mb-8" data-aos="fade-up">
            <span className="px-3 py-1 rounded-full bg-health-green/20 text-health-green text-sm font-medium">
              Growing Community
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-8" data-aos="fade-up" data-aos-delay="100">
            Trusted by <span className="text-health-blue">{visitorCount.toLocaleString()}</span> Health-Conscious Visitors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Join our growing community of health-focused individuals seeking reliable information and guidance for better wellbeing.
          </p>
        </div>
      </section>
      
      {/* Infinite Carousel */}
      <section className="py-16 overflow-hidden bg-white">
        <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
          <div className="mb-8" data-aos="fade-up">
            <span className="px-3 py-1 rounded-full bg-health-blue/20 text-health-blue text-sm font-medium">
              Health Moments
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-8" data-aos="fade-up" data-aos-delay="100">
            Glimpses of Healthy Living
          </h2>
        </div>
        
        {/* Left to right carousel - FIXED */}
        <div className="mb-12 overflow-hidden" data-aos="fade-up" data-aos-delay="200">
          <div className="flex animate-carousel-left">
            <div className="flex gap-6 min-w-full">
              {carouselImagesLeft.map((img, index) => (
                <div key={`left-${index}`} className="w-72 h-60 flex-shrink-0 rounded-lg overflow-hidden">
                  <img 
                    src={img} 
                    alt={`Health moment ${index + 1}`} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-6 min-w-full">
              {carouselImagesLeft.map((img, index) => (
                <div key={`left-dup-${index}`} className="w-72 h-60 flex-shrink-0 rounded-lg overflow-hidden">
                  <img 
                    src={img} 
                    alt={`Health moment ${index + 1}`} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right to left carousel - FIXED */}
        <div className="overflow-hidden" data-aos="fade-up" data-aos-delay="300">
          <div className="flex animate-carousel-right">
            <div className="flex gap-6 min-w-full">
              {carouselImagesRight.map((img, index) => (
                <div key={`right-${index}`} className="w-72 h-60 flex-shrink-0 rounded-lg overflow-hidden">
                  <img 
                    src={img} 
                    alt={`Health moment ${index + 1}`} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-6 min-w-full">
              {carouselImagesRight.map((img, index) => (
                <div key={`right-dup-${index}`} className="w-72 h-60 flex-shrink-0 rounded-lg overflow-hidden">
                  <img 
                    src={img} 
                    alt={`Health moment ${index + 1}`} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* News Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 text-center" data-aos="fade-up">
            <span className="px-3 py-1 rounded-full bg-health-green/20 text-health-green text-sm font-medium">
              Stay Informed
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-12 text-center" data-aos="fade-up" data-aos-delay="100">
            Latest Health News
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newsArticles.map((article, index) => (
              <div 
                key={article.id} 
                className="hover-card glass-card rounded-xl overflow-hidden"
                data-aos="fade-up" 
                data-aos-delay={150 + (index * 50)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-health-blue">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  <a 
                    href="#" 
                    className="text-health-blue font-medium inline-flex items-center transition-colors hover:text-health-green"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-health-blue to-health-green text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">
            Take Control of Your Health Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Knowledge is the first step towards a healthier life. Explore our resources and start your journey to better health.
          </p>
          <div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <Link 
              to="/awareness/mental" 
              className="px-6 py-3 bg-white text-health-blue font-medium rounded-full hover:shadow-lg transition-all duration-300"
            >
              Explore Health Topics
            </Link>
            <Link 
              to="/tips" 
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Get Health Tips
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
