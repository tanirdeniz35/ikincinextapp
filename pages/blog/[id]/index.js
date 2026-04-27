import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
const BlogDetail = () => {
  const [post, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return; // id henüz mevcut değilse, fetch işlemini yapma
      try {
        setLoading(true);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={() => router.push("/blog")}>Geri Dön</button>
    </div>
  );
};

export default BlogDetail;
