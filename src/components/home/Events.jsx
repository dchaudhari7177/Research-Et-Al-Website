import eventsData from '@/data/events.json';
import { useNavigate } from 'react-router-dom';

export default function Events() {
  const navigate = useNavigate();
  const featuredEvents = eventsData.upcomingEvents.slice(0, 3); // Show only 3 events on home page

  return (
    <div className="w-full px-4">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {featuredEvents.map((event, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="h-48 overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="text-sm text-indigo-600 font-semibold mb-2">{event.date}</div>
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-600 line-clamp-2">{event.description}</p>
              <button 
                onClick={() => navigate('/events')}
                className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
              >
                View All Events
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
