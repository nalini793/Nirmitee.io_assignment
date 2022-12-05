import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editReply } from "../store/postSlice";

const EditReplies = ({ postID, commentId, id, text, setReplyEditToggle }) => {
  const [editBody, seteditBody] = useState(text);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      editReply({
        postID: postID,
        commentId: commentId,
        replyId: id,
        editedReply: editBody,
      })
    );
    setReplyEditToggle(false);
  };
  return (
    <form className="EditReplies">
      <div className="editCommmentWrapper">
        <label htmlFor="text"> </label>
        <input
          onChange={(e) => seteditBody(e.target.value)}
          type="text"
          id="text"
          defaultValue={text}
        ></input>
      </div>
      <span className="commentbtn_container">
        <button
          type="submit"
          onClick={(e) => {
            submitHandler(e);
          }}
          className="btn"
        >
          Done
        </button>
        <button
          className="btn"
          onClick={() => setReplyEditToggle(false)}
          onKeyDown={() => setReplyEditToggle(false)}
          tabIndex={0}
          type="button"
        >
          Cancel
        </button>
      </span>
    </form>
  );
};

export default EditReplies;
