import React from "react";

const PostItem = (props) => {
  //   console.log(props);
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}.{props.post.title}
        </strong>
        <div>{props.post.body}</div>
        <div className="post__btns">
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};
// export const PostMsg = (props) => {
//   console.log(props);
//   return <div>{props.message.message}</div>;
// };

export default PostItem;
