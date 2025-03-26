import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages';
import EventsPage from './pages/events';
import EventDetail from './pages/events/EventDetail';
import Blogs from './pages/blogs/Blogs';
import BlogDetail from './pages/blogs/BlogDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/detail/:eventId" element={<EventDetail />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:blogId" element={<BlogDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}