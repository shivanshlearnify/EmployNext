import React from 'react'

const Blog = () => {
    const blogPosts = [
        {
          id: 1,
          title: "Top 10 Tips for Job Seekers in 2024",
          date: "August 15, 2024",
          summary: "Discover the top strategies to boost your job search in 2024, including resume tips, networking advice, and more.",
          link: "#"
        },
        {
          id: 2,
          title: "How to Attract Top Talent to Your Company",
          date: "July 30, 2024",
          summary: "Learn the key steps to making your company stand out to top candidates, from branding to the interview process.",
          link: "#"
        },
        {
          id: 3,
          title: "The Future of Remote Work: What Employers and Employees Need to Know",
          date: "July 15, 2024",
          summary: "Explore the trends shaping remote work and how both employers and employees can adapt to the changing landscape.",
          link: "#"
        }
      ];
    
      return (
        <section className="py-10 px-5 md:px-20  mt-24 md:mt-36 sm:mt-36">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-pink-500 mb-8 text-center">Our Blog</h2>
            
            <div className="space-y-8">
              {blogPosts.map(post => (
                <div key={post.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-pink-500 mb-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{post.date}</p>
                  <p className="text-lg text-gray-300 mb-4">{post.summary}</p>
                  <a 
                    href={post.link} 
                    className="text-pink-500 hover:underline text-sm"
                  >
                    Read More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

export default Blog