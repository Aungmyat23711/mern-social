import mongoose from 'mongoose';
const postScheme = mongoose.Schema({
  creator: String,
  title: String,
  message: String,
  name: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
const PostMessage = mongoose.model('PostMessage', postScheme);
export default PostMessage;
