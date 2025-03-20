import Navbar from "@/components/home/Navbar";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import eventsData from '@/data/events.json';
import { useNavigate } from 'react-router-dom';

const pastEvents = [
  {
    title: "Past Event 1 - Demo",
    date: "December 15, 2023",
    description: "Demo workshop on ML fundamentals and applications.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    outcome: "100+ Participants"
  },
  {
    title: "Past Event 2 - Demo",
    date: "November 20, 2023",
    description: "Demo insights into research methodologies.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    outcome: "80+ Attendees"
  }
];

export default function EventsPage() {
  const [color, setColor] = useState("#c4c1f7");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1c0f4a] to-[#3b2f7d]">
      {/* Updated Navbar positioning and styling */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm">
        <Navbar color={color} />
      </div>
      
      {/* Add padding-top to prevent content from going under navbar */}
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87')] bg-cover bg-center"></div>
          <div className="relative z-20 text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Research Et Al Events</h1>
            <p className="text-xl max-w-2xl mx-auto">Join us in our upcoming events and be part of the research community</p>
          </div>
        </div>

        {/* Events Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData.upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" alt={event.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-indigo-600 font-semibold mb-2">{event.date}</div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                  <div className="mt-4 flex gap-4">
                    <button 
                      onClick={() => navigate(`/events/detail/${event.id}`)} 
                      className="bg-indigo-100 text-indigo-600 px-6 py-2 rounded-full hover:bg-indigo-200 transition-colors"
                    >
                      Read More
                    </button>
                    <button 
                      onClick={() => window.open(event.registrationLink, '_blank')}
                      className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events Section */}
        <div className="max-w-7xl mx-auto px-4 py-16 border-t border-white/10">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/40 z-10"></div>
                  <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" alt={event.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 text-white">
                  <div className="text-sm text-indigo-300 font-semibold mb-2">{event.date}</div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-300">{event.description}</p>
                  <div className="mt-4 inline-block bg-indigo-600/20 text-indigo-300 px-4 py-1 rounded-full text-sm">
                    {event.outcome}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
    </div>
  );
}
