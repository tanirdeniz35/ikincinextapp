"use client";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

const blog = () => {
  const [post, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <>
      <main className="container py-5">
        <h1 className="text-center mb-5">Blog Yazıları</h1>

        <div className="row g-4">
          {post.map((p) => (
            <div className="col-12 col-md-6 col-lg-4" key={p.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-primary">{p.title}</h5>
                  <p className="card-text">{p.body}</p>
                </div>
                <div className="card-footer d-flex justify-content-between text-muted">
                  <small>Kullanıcı:{p.userId}</small>
                  <small>Post ID:{p.id}</small>

                  <Link
                    href={`/blog/${p.id}`}
                    className="btn btn-sm btn-outline-primary"
                  >
                    Detay
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default blog;
