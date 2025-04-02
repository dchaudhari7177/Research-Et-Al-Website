import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from "@/components/home/Navbar";
import blogsData from '@/data/blogs.json';

export default function BlogDetail() {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const blog = blogsData.blogs.find(b => b.id === blogId);

  useEffect(() => {
    if (!blog) {
      navigate('/blogs', { replace: true });
    }
  }, [blog, navigate]);

  if (!blog) {
    return null;
  }

  const renderSectionContent = (section) => {
    // Regular content rendering for sections with emphasized text
    if (section.emphasizedText) {
      return (
        <>
          {section.subheading && (
            <h3 className="text-2xl font-semibold text-indigo-200 mb-4">
              {section.subheading}
            </h3>
          )}
          {section.content.split('\n\n').map((paragraph, pIndex) => (
            <p key={pIndex} className="text-lg leading-relaxed text-gray-200 mb-4">
              {paragraph}
            </p>
          ))}
          {section.image && (
            <div className="mt-8">
              <img 
                src={section.image.url}
                alt={section.image.caption}
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <p className="text-sm text-gray-400 mt-2 text-center">
                {section.image.caption}
              </p>
            </div>
          )}
        </>
      );
    }
    
    // Split by Roman numerals if the section is Case Study
    if (section.title.includes("Case Study")) {
      const [first, ...rest] = section.content.split(/(?=^I\.\t)/m);
      return (
        <>
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-indigo-200 mb-2">
              {first.trim()}
            </h2>
            <div className="text-gray-200">
              {rest.map((content, pIndex) => (
                <p key={pIndex} className="mb-4 text-lg">
                  {content}
                </p>
              ))}
            </div>
          </div>
        </>
      );
    }
    
    // Handle sections with Roman numerals differently for Current Ongoing Research
    if (section.title === "Current Ongoing Research") {
      return (
        <>
          {section.content.map((item, index) => (
            <div key={index} className="mb-6">
              <div className="flex gap-4">
                <span className="text-lg font-semibold text-indigo-300 w-8">{item.number}.</span>
                <p className="text-lg text-gray-200">{item.text}</p>
              </div>
            </div>
          ))}
          {section.image && (
            <div className="mt-8">
              <img 
                src={section.image.url}
                alt={section.image.caption}
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <p className="text-sm text-gray-400 mt-2 text-center">
                {section.image.caption}
              </p>
            </div>
          )}
        </>
      );
    }
    
    // Handle numbered list sections differently
    if (section.content.includes('1. Advancements in AI')) {
      const points = section.content.split(/(?=\d\.\s)/).filter(Boolean);
      return (
        <>
          {points.map((point, index) => {
            const [title, ...description] = point.split('-');
            return (
              <div key={index} className="mb-6">
                <p className="text-lg text-gray-200">
                  <span className="font-normal">{title.trim()}</span>
                  {description.length > 0 && (
                    <>
                      {' - '}
                      <span className="font-normal">{description.join(' ').trim()}</span>
                    </>
                  )}
                </p>
              </div>
            );
          })}
        </>
      );
    }

    return (
      <>
        {/* Regular content rendering */}
        {section.content.match(/^\d+\./m) ? (
          section.content.split(/(?=\d+\.)/).map((point, index) => {
            if (!point.trim()) return null;
            
            const [title, ...description] = point.split('\n');
            return (
              <div key={index} className="mb-6">
                <h4 className="text-lg font-semibold text-indigo-200 mb-2">
                  {title.trim()}
                </h4>
                <p className="text-gray-200">
                  {description.join('\n').trim()}
                </p>
              </div>
            );
          })
        ) : section.content.match(/^[IV]+\./m) ? (
          section.content.split(/(?=[IV]+\.)/).map((subsection, index) => {
            if (!subsection.trim()) return null;
            
            const [title, ...content] = subsection.split('\n');
            return (
              <div key={index} className="mb-8">
                <h3 className="text-3xl font-bold text-indigo-300 mb-4">
                  {title.trim()}
                </h3>
                <div className="text-gray-200">  {/* Removed border-l-2 and pl-4 classes */}
                  {content.join('\n').trim().split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-200 mb-4 text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          section.content.split('\n\n').map((paragraph, pIndex) => (
            <p key={pIndex} className="text-lg leading-relaxed text-gray-200 mb-4">
              {paragraph}
            </p>
          ))
        )}

        {/* Section image if available */}
        {section.image && (
          <div className="mt-8">
            <img 
              src={section.image.url}
              alt={section.image.caption}
              className="w-full h-auto rounded-lg shadow-xl"
            />
            <p className="text-sm text-gray-400 mt-2 text-center">
              {section.image.caption}
            </p>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1c0f4a] to-[#3b2f7d]">
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-800 shadow-lg">
        <Navbar color="#c4c1f7" />
      </div>

      <div className="pt-[80px] px-4 pb-16">
        <article className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden mb-8">
            <div className="h-96 relative">
              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <img src={blog.authorImage} alt={blog.author} className="w-12 h-12 rounded-full" />
                  <div>
                    <h3 className="font-medium">{blog.author}</h3>
                    <p className="text-sm">{blog.authorRole}</p>
                  </div>
                </div>
                <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
                <div className="flex items-center space-x-4 text-sm">
                  <span>{blog.date}</span>
                  <span>·</span>
                  <span>{blog.readTime}</span>
                  <span>·</span>
                  <span className="bg-indigo-600 px-3 py-1 rounded-full">{blog.category}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white mb-8">
            <div className="prose prose-invert max-w-none">
              {/* Summary */}
              <p className="text-xl leading-relaxed mb-8">{}</p>
              
              {/* Introduction */}
              <div className="space-y-6">
                {blog.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed text-gray-200">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* First Image after introduction */}
              {blog.additionalImages && (
                <div className="my-12">
                  <img 
                    src={blog.additionalImages[0].url}
                    alt={blog.additionalImages[0].caption}
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                  <p className="text-sm text-gray-400 mt-2 text-center">
                    {blog.additionalImages[0].caption}
                  </p>
                </div>
              )}

              {/* All Sections */}
              {blog.sections?.map((section, index) => (
                <div key={index} className="mt-12">
                  {/* Add image before Limitations section */}
                  {section.title === "Limitations" && (
                    <div className="mb-12">
                      <img 
                        src="https://res.cloudinary.com/dqdrceoqd/image/upload/v1742479871/fourth_vb4fyq.jpg"
                        alt="AI and Prosthetics Limitations"
                        className="w-full h-auto rounded-lg shadow-xl"
                      />
                      <p className="text-sm text-gray-400 mt-2 text-center">
                      Figure 4: By mimicking the natural abilities of our skin, a team of researchers at Johns Hopkins University has enabled a prosthesis to perceive and transmit the feeling of pain.
source: https://assets.rbl.ms/25586053/origin.jpg

                      </p>
                    </div>
                  )}
                  {/* Display emphasized text before section title */}
                  {section.emphasizedText && (
                    <p className="text-lg leading-relaxed text-gray-200 mb-4 font-bold italic">
                      {section.emphasizedText}
                    </p>
                  )}
                  <h2 className={`text-4xl mb-8 text-indigo-300 ${section.isHeadingBold ? 'font-bold' : 'font-normal'}`}>
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {renderSectionContent(section)}
                  </div>
                </div>
              ))}

              {/* Second Image after mid-sections */}
              {blog.additionalImages && blog.additionalImages[1] && (
                <div className="my-12">
                  <img 
                    src={blog.additionalImages[1].url}
                    alt={blog.additionalImages[1].caption}
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                  <p className="text-sm text-gray-400 mt-2 text-center">
                    {blog.additionalImages[1].caption}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* References Section */}
          {blog.references && (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">References & Citations</h3>
              <div className="grid gap-4">
                {blog.references.map((reference, index) => (
                  <div 
                    key={index}
                    className="flex flex-col space-y-1 border-l-4 border-indigo-500 pl-4"
                  >
                    <h4 className="font-semibold text-indigo-300">
                      {reference.title}
                    </h4>
                    {reference.description && (
                      <p className="text-sm text-gray-300">
                        {reference.description}
                      </p>
                    )}
                    <a 
                      href={reference.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 hover:text-blue-300 transition-colors break-all"
                    >
                      {reference.url}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white mb-8">
            <h3 className="text-xl font-semibold mb-4">Related Topics</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="text-sm bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button 
              onClick={() => navigate('/blogs')}
              className="flex-1 bg-white/10 text-white py-3 px-6 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blogs
            </button>

            {/* Download Button */}
            <button 
              onClick={() => window.open(blog.downloadUrl, '_blank')}
              className="flex-1 bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Full Article
            </button>
            
            <button 
              onClick={() => window.open('mailto:feedback@example.com?subject=Feedback for ' + blog.title)}
              className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-full hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Provide Feedback
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
