import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./every.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Every() {
    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext);
  
    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("posts/allpost");
        setPosts(
          res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        );
      };
      fetchPosts();
    }, []);
  
    return (
      <div className="feed">
        <div className="feedWrapper">
          {posts.map((p) => (
            <Post key={p._id} post={p} />
          ))}
        </div>
      </div>
    );
  }