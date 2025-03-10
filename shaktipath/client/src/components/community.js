import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faEllipsis, faUpLong, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";
import { getFirestore, addDoc, getDocs, collection } from "firebase/firestore";

const Post = () => {
  const [post, setPost] = useState({ incident: "", description: "" });
  const [allposts, setAllposts] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const usersPosts = async () => {
      const toastLoad = toast.loading("Loading Posts...");
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsData = querySnapshot.docs.map((doc) => doc.data());
      setAllposts(postsData);
      toast.dismiss(toastLoad);
    };
    usersPosts();
  }, [db]);

  const handlePost = async () => {
    if (post.incident === "" || post.description === "") {
      return toast.error(`Inputs can't be empty`);
    }
    const newPost = {
      author: localStorage.getItem("name"),
      incident: post.incident,
      description: post.description,
      position: "ShaktiPath User",
      upvotes: Math.floor(Math.random() * 20) + 1,
      time: Math.floor(Math.random() * 10) + 1,
      emojis: Math.floor(Math.random() * 50) + 1,
    };
    await addDoc(collection(db, "posts"), newPost);
    toast.success("Post uploaded");
    setAllposts((prevPosts) => [...prevPosts, newPost]);
    setPost({ incident: "", description: "" });
  };

  return (
    <main className="bg-gray-100">
      <div className="max-w-xl mx-auto px-4 md:px-0">
        <p className="pt-5 text-2xl">
          <a href="/">
            <FontAwesomeIcon icon={faChevronLeft} />
          </a>
          <span className="px-5">Community</span>
        </p>
        <div className="p-6 m-4 bg-blue-100 rounded-lg">
          <div className="flex items-center mb-4">
            <img src="/img/square.jpg" alt="user" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{localStorage.getItem("name")}</h3>
              <p className="text-sm text-gray-500">@{localStorage.getItem("name").toLowerCase()}</p>
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Your incident here"
              className="text-base font-semibold text-gray-800 border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
              value={post.incident}
              onChange={(e) => setPost({ ...post, incident: e.target.value })}
            />
            <input
              type="text"
              placeholder="Type down what you feel"
              className="text-base text-gray-800 border border-gray-300 rounded-md px-3 py-2 mb-2 w-full h-16"
              value={post.description}
              onChange={(e) => setPost({ ...post, description: e.target.value })}
            />
          </div>
          <button
            className="bg-blue-500 text-white p-2 px-4 m-1 rounded-md hover:bg-blue-600"
            onClick={handlePost}
          >
            Post
          </button>
        </div>
        {allposts.map((post, index) => (
          <div className="p-6" key={index}>
            <div className="flex justify-between items-center">
              <div className="flex items-center mb-4">
                <img
                  src={encodeURI(`https://source.unsplash.com/200x200/?woman?${index}`)}
                  alt="profile"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{post.author}</h3>
                  <p className="text-sm text-gray-500">{post.position}</p>
                </div>
              </div>
              <div className="p-2">
                <FontAwesomeIcon icon={faShare} className="p-2" />
                <FontAwesomeIcon icon={faEllipsis} className="p-2" />
              </div>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg">
              <div className="mb-4">
                <p className="text-lg text-gray-600">Recently posted an incident near you</p>
              </div>
              <div className="mb-4 flex justify-center items-center">
                <img
                  src={encodeURI(`https://source.unsplash.com/640x360/?${post.incident}?${index}`)}
                  alt="post"
                  className="h-64 rounded-lg"
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">{post.incident}</h4>
                <p className="text-gray-600 line-clamp-2">{post.description}</p>
                <div className="flex justify-between">
                  <button className="text-gray-500 font-bold mt-2 bg-white rounded-full shadow-md max-w-max p-1 px-3">
                    Upvote <FontAwesomeIcon icon={faUpLong} /> {post.upvotes}
                  </button>
                  <p className="text-white mt-2 bg-blue-500 rounded-full shadow-md max-w-max p-1 px-3">
                    {post.emojis} 👍🤔💯
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">{post.time} hours ago</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Post;
