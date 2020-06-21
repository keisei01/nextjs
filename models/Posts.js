import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const PostsSchema = new mongoose.Schema({
  title: {
    /* The name of this pet */

    type: String,
  },
  body: {
    /* The name of this pet */

    type: String,
  },
});

export default mongoose.models.Posts || mongoose.model("Posts", PostsSchema);
