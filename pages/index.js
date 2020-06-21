import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Homepage({ posts }) {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   const getPosts = async () => {
  //     const result = await axios.get("http://localhost:3000/api/posts");
  //     setPosts(result.data);
  //   };

  //   getPosts();
  // }, []);

  return (
    <>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
      <h1>Posts</h1>
    </>
  );
}
// export async function getStaticProps() {
//   const result = await axios.get("http://localhost:3000/api/posts");
//   return { props: { posts: result.data } };
// }
