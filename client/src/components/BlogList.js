// src/components/BlogList.js
import React from 'react';
import '../styles/BlogList.css';
import BlogCard from './BlogCard';

const BlogList = ({ blogs }) => {
  const firstSection = blogs.slice(0, 3);
  const otherBlogs = blogs.slice(3);

  return (
    <div>
      <div className="first-section">
        <div className="big-column">
          {firstSection[0] && <BlogCard blog={firstSection[0]} big />}
        </div>
        <div className="small-column">
          {firstSection.slice(1).map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
      <div className="other-blogs">
        {otherBlogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;