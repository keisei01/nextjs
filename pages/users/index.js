import axios from "axios";

export async function getServerSideProps() {
  const result = await axios.get("http://localhost:3000/api/users");
  return { props: { users: result.data } };
}

export default function Users({ users }) {
  console.log(process.env.NEXT_PUBLIC_JWT_SECRET);
  return <h1>{[users[0].name]}</h1>;
}
