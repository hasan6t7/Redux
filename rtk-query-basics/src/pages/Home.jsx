import React from "react";
import { useGetAllPostsQuery } from "../redux/features/posts/postApi";
import { Link } from "react-router";

const Home = () => {
    const {data, isLoading, error} = useGetAllPostsQuery();
    console.log(data)
  
    if(error) return <div>Something Went Wrong!</div>
    if(isLoading) return <div>Loading...</div>
  
  return (
    <div>
      <ul className="p-5">
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
           <Link to={`/blogs/${post.id}`}> {post.id}. {post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
