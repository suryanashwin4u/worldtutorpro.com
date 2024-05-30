// src/components/InfiniteScrollComponent.js
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import BlogList from './BlogList';

const InfiniteScrollComponent = () => {
  const [blogs, setBlogs] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchMoreBlogs();
  }, []);

  const fetchMoreBlogs = () => {
    // Fetch the next set of blogs from an API or use a static set for testing
    const newBlogs = [
      // Add your blogs data here
    ];
    setBlogs(prevBlogs => [...prevBlogs, ...newBlogs]);

    // If no more blogs to fetch, set hasMore to false
    if (newBlogs.length === 0) {
      setHasMore(false);
    }
  };

  return (
    <InfiniteScroll
      dataLength={blogs.length}
      next={fetchMoreBlogs}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      <BlogList blogs={blogs} />
    </InfiniteScroll>
  );
};

export default InfiniteScrollComponent;