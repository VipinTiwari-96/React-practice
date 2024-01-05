import React from "react";
import { Post } from "./App";

interface PostCardProps {
  post: Post;
  handleBookMarkClick: (post: Post) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, handleBookMarkClick }) => {
  return (
    <div className="border w-60 h-60 bg-gray-200 px-1 space-y-2">
      <div className=" flex justify-between items-start gap-5">
        <span className="font-semibold text-sm">{post.title}</span>
        <button
          className="text-xs p-1 rounded-md bg-gray-400"
          onClick={() => handleBookMarkClick(post)}
        >
          bookmark
        </button>
      </div>
      <div className="text-sm text-gray-700">{post.body}</div>
    </div>
  );
};

export default PostCard;
