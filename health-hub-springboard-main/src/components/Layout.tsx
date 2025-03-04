
import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatBot from './ChatBot';

const Layout = () => {
  const location = useLocation();
  const [showChatBot, setShowChatBot] = useState(false);
  
  useEffect(() => {
    // Dispatch a custom event for route change to refresh AOS
    document.dispatchEvent(new CustomEvent('routeChanged'));
    
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        <Outlet />
      </main>
      
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => setShowChatBot(!showChatBot)}
          className="animated-border flex items-center justify-center w-14 h-14 rounded-full bg-health-green text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {showChatBot ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          )}
        </button>
      </div>
      
      {showChatBot && <ChatBot onClose={() => setShowChatBot(false)} />}
      
      <Footer />
    </div>
  );
};

export default Layout;
