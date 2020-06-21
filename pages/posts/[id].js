import axios from "axios";

export async function getStaticPaths() {
  const result = await axios.get("http://localhost:3000/api/posts");
  const paths = result.data.map((post) => `/posts/${post._id}`);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const result = await axios.get(
    `http://localhost:3000/api/posts/${params.id}`
  );

  return { props: { post: result.data } };
}

export default function Post({ post }) {
  return <h1>{post.title}</h1>;
}
