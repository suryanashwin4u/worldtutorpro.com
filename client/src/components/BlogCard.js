// src/components/BlogCard.js
import React from 'react';
import '../styles/BlogCard.css';

const BlogCard = ({ blog, big }) => {
  return (
    <div className={`blog-card ${big ? 'big' : 'small'}`}>
      <img src={blog.photo} alt={blog.title} />
      <div className="blog-details">
        <h2>{blog.title}</h2>
        <p>Category: {blog.category}</p>
        <p>Author: {blog.author}</p>
        <p>Date: {new Date(blog.date).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default BlogCard;