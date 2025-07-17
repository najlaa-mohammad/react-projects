import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./PostDetails.css";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  // جلب تفاصيل المنشور
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  const handleLoadComments = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setShowComments(true);
      });
  };

  if (!post) return <p>Loading post...</p>;

  return (
    <div className="post-container">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-body">{post.body}</p>

      <button className="load-btn" onClick={handleLoadComments}>
        Load Comments
      </button>

      {showComments && (
        <div className="comments-section">
          <h3>Comments</h3>
          <ul>
            {comments.map((comment) => (
              <li className="comment" key={comment.id}>
                <strong>{comment.name}</strong>
                {comment.body}
              </li>
            ))}
          </ul>
        </div>
      )}

      <br />
      <Link className="back-link" to="/posts">
        ⬅ Back to Posts
      </Link>
    </div>
  );
};

export default PostDetails;
