import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editComment } from "../store/postSlice";

const EditComment = ({ postID, id, text, setEditToggle }) => {
  const [editBody, seteditBody] = useState(text);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(editComment({ postID: postID, commentId: id, text: editBody }));
    setEditToggle(false);
  };
  return (
    <form className="editComment">
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
        <button type="submit" onClick={submitHandler} className="btn">
          Done
        </button>
        <button
          className="btn"
          onClick={() => setEditToggle(false)}
          onKeyDown={() => setEditToggle(false)}
          tabIndex={0}
          type="button"
        >
          Cancel
        </button>
      </span>
    </form>
  );
};

export default EditComment;
