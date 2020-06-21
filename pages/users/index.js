import axios from "axios";

// export async function getServerSideProps() {
//   const result = await axios.get("http://localhost:3000/api/users");
//   return { props: { users: result.data } };
// }

export default function Users({ users }) {
  return <h1>users</h1>;
}
