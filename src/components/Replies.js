import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteReply } from "../store/postSlice";
import EditReplies from "./EditReplies";

const Replies = ({ postID, commentId, id, text, author }) => {
  const [editToggle, setEditToggle] = useState(false);
  const dispatch = useDispatch();
  const deleteReplyHandler = () => {
    dispatch(
      deleteReply({ postID: postID, commentId: commentId, replyId: id })
    );
  };
  return (
    <div className="singleReply" id={id}>
      <span className="singleAuthor">{author} replied : </span>
      {editToggle ? (
        <EditReplies
          setReplyEditToggle={setEditToggle}
          postID={postID}
          commentId={commentId}
          id={id}
          text={text}
        ></EditReplies>
      ) : (
        <>
          <span className="commentText">{text}</span>
          <span className="commentbtn_container">
            <button
              onClick={() => setEditToggle(true)}
              className="btn"
              type="button"
            >
              Edit
            </button>
            <button onClick={deleteReplyHandler} className="btn">
              Delete
            </button>
          </span>
        </>
      )}
    </div>
  );
};

export default Replies;
