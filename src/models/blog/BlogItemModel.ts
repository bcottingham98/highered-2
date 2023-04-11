// import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

/* JobSchema will correspond to a collection in your MongoDB database. */
const BlogItemSchema = new mongoose.Schema({
  title: {
    /* The title of this job */

    type: String,
    required: [false],
    unique: [false],
  },
  is_featured_article: {
    /* The title of this job */

    type: Boolean,
    required: [false],
  },
  body: {
    /* The title of this job */

    type: String,
    required: [false],
  },
  author: {
    /* The title of this job */

    type: String,
    required: [false],
  },
});

export default mongoose.model('BlogItem', BlogItemSchema);
