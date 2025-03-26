import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from "@/components/home/Navbar";
import eventsData from '@/data/events.json';

export default function EventDetail() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const event = eventsData.upcomingEvents.find(e => e.id === eventId);

  useEffect(() => {
    if (!event) {
      navigate('/events', { replace: true });
    }
  }, [event, navigate]);

  if (!event) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1c0f4a] to-[#3b2f7d]">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm">
        <Navbar color="#c4c1f7" />
      </div>

      <div className="pt-24 px-4 pb-16">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden mb-8">
          <div className="h-96 relative">
            <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" alt={event.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
              <p className="text-xl">{event.date}</p>
            </div>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <div className="text-4xl mb-2">📍</div>
            <h3 className="text-xl font-semibold mb-2">Venue</h3>
            <p>{event.venue}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <div className="text-4xl mb-2">⏰</div>
            <h3 className="text-xl font-semibold mb-2">Date & Time</h3>
            <p>{event.date}</p>
            <p>9:00 AM - 5:00 PM</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <div className="text-4xl mb-2">👥</div>
            <h3 className="text-xl font-semibold mb-2">Capacity</h3>
            <p>Limited to 200 seats</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">About This Event</h2>
              <p className="text-lg mb-6">{event.fullDescription}</p>
              <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                {event.learningPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Schedule</h2>
              <div className="space-y-4">
                {event.schedule.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-2 h-2 mt-2 rounded-full bg-indigo-400" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white sticky top-24">
              <h2 className="text-2xl font-bold mb-4">Registration</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Regular Ticket</span>
                  <span>Rs.{event.pricing.regular}</span>
                </div>
                <div className="flex justify-between">
                  <span>Student Discount</span>
                  <span>-30%</span>
                </div>
                <div className="h-px bg-white/20" />
                <div className="flex justify-between font-bold">
                  <span>Student Price</span>
                  <span>Rs.{event.pricing.student}</span>
                </div>
              </div>
              <button 
                onClick={() => window.open(event.registrationLink, '_blank')}
                className="w-full bg-indigo-600 text-white py-3 rounded-full hover:bg-indigo-700 transition-colors mb-3"
              >
                Register Now
              </button>
              <button 
                onClick={() => navigate(-1)}
                className="w-full bg-white/10 text-white py-3 rounded-full hover:bg-white/20 transition-colors"
              >
                Back to Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}