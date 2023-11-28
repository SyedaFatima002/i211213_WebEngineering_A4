import React from 'react';

const Home = () => {
  // Mock data (in a real app, fetch data from the server)
  const blogs = [
    { id: 1, title: 'Blog 1', content: 'This is the content of Blog 1.' },
    { id: 2, title: 'Blog 2', content: 'This is the content of Blog 2.' },
    // Add more blogs as needed
  ];

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <div className="blog-list">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-item">
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
