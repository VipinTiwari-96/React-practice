import axios from "axios";
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?limit=10")
      .then((data) => setPosts(data.data));
  }, []);

  const handleBookMarkClick = (post: Post) => {
    const bookMarkedItems = JSON.parse(
      localStorage.getItem("bookmarks") as string
    );
    console.log(bookMarkedItems);
    let array = [...(bookMarkedItems ?? [])];

    array.push(post.id);
    localStorage.setItem("bookmarks", JSON.stringify(array));
  };

  return (
    <div className="flex flex-wrap gap-5 p-5">
      {posts?.map((item, key) => (
        <PostCard post={item} handleBookMarkClick={handleBookMarkClick} />
      ))}
    </div>
  );
}

export default App;
