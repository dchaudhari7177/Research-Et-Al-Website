import { useRouter } from 'next/router';
import Navbar from "@/components/home/Navbar";
import eventsData from '@/data/events.json';

export default function EventDetail() {
  const router = useRouter();
  const { eventId } = router.query;
  const event = eventsData.upcomingEvents.find(e => e.id === eventId);

  if (!event) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1c0f4a] to-[#3b2f7d]">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm">
        <Navbar color="#c4c1f7" />
      </div>

      <div className="pt-24 px-4 max-w-6xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
          <div className="h-96 relative">
            <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
              <p className="text-xl">{event.date}</p>
            </div>
          </div>

          <div className="p-8 text-white">
            <p className="text-lg mb-8">{event.fullDescription}</p>
            
            <h2 className="text-2xl font-bold mb-4">Schedule</h2>
            <ul className="mb-8 space-y-2">
              {event.schedule.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <div className="flex gap-4">
              <button onClick={() => window.open(event.registrationLink, '_blank')} 
                      className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors">
                Register Now
              </button>
              <button onClick={() => router.back()} 
                      className="bg-white/10 text-white px-8 py-3 rounded-full hover:bg-white/20 transition-colors">
                Back to Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
