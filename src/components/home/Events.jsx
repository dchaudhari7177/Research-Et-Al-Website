import { useNavigate } from 'react-router-dom';

export default function Events() {
  const navigate = useNavigate();
  
  const featuredEvents = [
    {
      title: "Lorem Ipsum Event",
      date: "20 Dec 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://picsum.photos/seed/event1/800/600"
    },
    {
      title: "Dolor Sit Conference",
      date: "15 Jan 2024",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://picsum.photos/seed/event2/800/600"
    },
    {
      title: "Consectetur Workshop",
      date: "10 Feb 2024",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "https://picsum.photos/seed/event3/800/600"
    }
  ];

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
