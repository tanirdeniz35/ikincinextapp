"use client";
import React from "react";
import axios from "axios";
import { useEffect, useState , useRef} from "react";
import Link from "next/link";

const blog = () => {
  const [post, setPosts] = useState([]);

const [page,setPage]=useState(1)
const[loading,setLoading]=useState(false);
const [hasMore,setHasMore]=useState(true);

const observerRef = useRef(null);

  useEffect(() => {

    if (!hasMore) return;
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/posts",
      {
            params:
            {
              _page:page,
              _limit:5
            },
      }
    ).then((response) => {
if(response.data.length===0)
{
  setHasMore(false)
}
else
{
  setPosts((prevPosts)=>
  {
      const yeniPostlar=response.data.filter(
(newPost)=> !prevPosts.some ((oldPost)=>oldPost.id===newPost.id)

      );
 return [...prevPosts, ...yeniPostlar];
  });
setLoading(false);
 
}


    });
  }, [page]);



useEffect(()=>
{
const observer =new IntersectionObserver (
(entries)=>
{
  const target =entries[0];
if (target.isIntersecting&&!loading&&hasMore)
{
  setPage ((prevPage)=>prevPage+1);
}
},
{
  threshold:1,
}
);
const currentRef=observerRef.current;
if(currentRef)
{
  observer.observe(currentRef);
}
return ()=>
{
  if (currentRef)
  {
    observer.unobserve(currentRef);
  }
};
}
,[loading,hasMore]
);






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

<div ref={observerRef} className="text-center py-4">
{loading && <p>Yükleniyor </p>}
{!hasMore&& <p>Tüm blog yazıları yükelndi</p>}
</div>


      </main>
    </>
  );
};

export default blog;
