import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div>
      <h2>Recent Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
