import dbConnect from "../../../utils/dbConnect";
import Posts from "../../../models/Posts";

async function getUsers(req, res) {
  await dbConnect();
  switch (req.method) {
    case "GET":
      const post = await Posts.findById(req.query.id);

      res.json(post);
      break;
    case "DELETE":
      await Posts.findByIdAndDelete(req.query.id);
      res.json({ message: "WTF" });
      break;

    case "PUT":
      const updatedPost = await Posts.findByIdAndUpdate(
        { _id: req.query.id },
        req.body,
        { new: true }
      );
      res.json(updatedPost);
      break;
    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
export default getUsers;
