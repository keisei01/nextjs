import dbConnect from "../../../utils/dbConnect";
import Posts from "../../../models/Posts";

async function getUsers(req, res) {
  await dbConnect();
  switch (req.method) {
    case "GET":
      const posts = await Posts.find();
      res.json(posts);
      break;
    case "POST":
      const post = new Posts({
        title: req.body.title,
        body: req.body.body,
      });
      const result = await post.save();
      res.json(result);

      break;
    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
export default getUsers;
