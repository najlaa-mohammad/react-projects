import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import PostDetails from "./PostDetails";

const PostLayout = () => {
  const [posts, setPosts] = useState([]);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsPending(true);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // محاكاة تأخير
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const data = await res.json();

      setPosts(data);
      setIsPending(false);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts Page</h2>
      {isPending && <p>Loading posts...</p>}

      {!isPending && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostLayout;
