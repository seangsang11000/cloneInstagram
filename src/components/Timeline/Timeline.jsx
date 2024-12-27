import React, { useState } from "react";
import "../Timeline/timeline.css";
import Sugesstion from "./Sugesstions";
import Post from "../Timeline/posts/Post";
const Timeline = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Lisarey_12",
      postImage:
        "https://i.pinimg.com/736x/26/b5/9c/26b59cb6887c6d6a061d327ed32b8c0a.jpg",
      likes: 100,
      timeram: "5d",
    },
    {
      id: 2,
      user: "Jonheaso_23",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBu0Qci4XpOynaH98Bt1q_n-5d2hJ3eOTa2Q&s",
      likes: 10,
      timeram: "1h",
    },
    {
      id: 3,
      user: "Alecedo_11",
      postImage:
        "https://burst.shopifycdn.com/photos/phone-taking-photo-of-museum.jpg?width=1000&format=pjpg&exif=0&iptc=0",
      likes: 50,
      timeram: "3h",
    },
    {
      id: 4,
      user: "Bjohech_21",
      postImage:
        "https://st2.depositphotos.com/4317479/7411/i/450/depositphotos_74114631-stock-photo-early-morning-in-laseshina.jpg",
      likes: 105,
      timeram: "1h",
    },
    {
      id: 5,
      user: "Presine_32",
      postImage:
        "https://img.freepik.com/free-photo/red-deer-nature-habitat-deer-rut-european-wildlife_475641-941.jpg?semt=ais_hybrid",
      likes: 120,
      timeram: "1h",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline_left">
        <div className="timeline_posts">
          {posts.map((post) => (
            <Post
              key={post.id}
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timeram={post.timeram}
            />
          ))}
        </div>
      </div>
      <div className="timeline_right">
        <Sugesstion />
      </div>
    </div>
  );
};

export default Timeline;
