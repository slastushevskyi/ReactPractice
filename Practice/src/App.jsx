import React, { useState, useRef } from "react";
// import Counter from "./Components/Counter";
// import ClassCounter from "./Components/ClassCounter";
import "./Styles/App.css";
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";
// import { PostMsg } from "./Components/PostItem";

function App() {
  // const [value, setValue] = useState("Enter your text here");
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Node.js", body: "Description" },
    { id: 3, title: "React", body: "Description" },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [post, setPost] = useState({ title: "", body: "" });
  // const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    // console.log(newPost);
    setPost({ title: "", body: "" });
  };

  // const [messages, setMessages] = useState([
  //   { id: 1, text: "Hi" },
  //   { id: 2, text: "Hello" },
  //   { id: 3, text: "Bye" },
  // ]);

  return (
    // <>
    //   <h1>Hello React!</h1>
    //   <h2>{value}</h2>
    //   <input
    //     type="text"
    //     value={value}
    //     onChange={(event) => setValue(event.target.value)}
    //   />
    //   <ClassCounter />
    //   {/* <Counter />
    //   <Counter />
    //   <Counter /> */}
    // </>
    <div className="App">
      <form>
        {/* //Controlled Input */}
        <MyInput
          type="text"
          placeholder="Name"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        {/* //Uncontrolled Input */}
        {/* <MyInput ref={bodyInputRef} type="text" placeholder="Description" /> */}
        <MyInput
          type="text"
          placeholder="Description"
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />

        <MyButton onClick={addNewPost}>Create Post</MyButton>
      </form>
      <PostList posts={posts} title={"Language List"} />
      {/* <div>
        {messages.map((item) => (
          <PostMsg message={item} />
        ))}
      </div> */}
    </div>
  );
}

export default App;
