import { Link } from 'react-router-dom';
import Navbar from "@/components/home/Navbar";
import blogsData from '@/data/blogs.json';

export default function Blogs() {
  const { featuredBlog } = blogsData;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1c0f4a] to-[#3b2f7d]">
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-800 shadow-lg">
        <Navbar color="#c4c1f7" />
      </div>

      <div className="pt-[80px]"> {/* Add padding-top to account for fixed navbar */}
        {/* Hero Section */}
        <div className="relative h-[500px] w-full">
          <div className="absolute inset-0">
            <img 
              src={featuredBlog.image} 
              alt="Blog Header" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          </div>
          
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-5xl font-bold mb-6">{featuredBlog.title}</h1>
            <p className="text-xl max-w-2xl mb-8">{featuredBlog.description}</p>
            
            
          </div>
        </div>

        <div className="px-4 py-16 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsData.blogs.map((blog) => (
              <Link 
                key={blog.id} 
                to={`/blogs/${blog.id}`}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="h-48 relative">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white text-sm px-3 py-1 rounded-full">
                    {blog.category}
                  </div>
                </div>
                
                <div className="p-6 text-white">
                  <div className="flex items-center space-x-4 mb-4">
                    <img 
                      src={blog.authorImage} 
                      alt={blog.author} 
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-medium">{blog.author}</h3>
                      <p className="text-sm text-gray-300">{blog.date} · {blog.readTime}</p>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                  <p className="text-gray-300 mb-4">{blog.summary}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="text-sm bg-white/5 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
