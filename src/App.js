import React, { useState } from 'react';
import Header from './components/Header';
import PostList from './components/PostList';
import CreatePostForm from './components/CreatePostForm';

const App = () => {
  const [posts, setPosts] = useState([]);

  const handleCreatePost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <Header />
      <main>
        <PostList posts={posts} />
        <CreatePostForm onSubmit={handleCreatePost} />
      </main>
    </div>
  );
};

export default App;
