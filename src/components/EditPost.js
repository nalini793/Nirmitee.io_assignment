import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editPost } from "../store/postSlice";
// import { MdOutlineClose } from "react-icons/md";

const EditPost = ({ id, title, body, author, setEditToggle }) => {
  const [editTitle, seteditTitle] = useState(title);
  const [editBody, seteditBody] = useState(body);
  const [editAuthor, seteditAuthor] = useState(author);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (title && body && author) {
      dispatch(
        editPost({
          id: id,
          title: editTitle,
          body: editBody,
          author: editAuthor,
        })
      );
    }
    setEditToggle(false);
  };
  return (
    <div className="modal_wrapper">
      <div className="modal_container">
        <form className="formclass">
          <h3 className="formTitle">Edit Post</h3>
          <div className="labelWrapper">
            <label htmlFor="title">Title:</label>
            <input
              onChange={(e) => seteditTitle(e.target.value)}
              type="text"
              id="title"
              defaultValue={title}
            ></input>
          </div>
          <div className="labelWrapper">
            <label htmlFor="body">Body:</label>
            <input
              onChange={(e) => seteditBody(e.target.value)}
              type="text"
              id="body"
              defaultValue={body}
            ></input>
          </div>
          <div className="labelWrapper">
            <label htmlFor="author">Author:</label>
            <input
              onChange={(e) => seteditAuthor(e.target.value)}
              type="text"
              id="author"
              defaultValue={author}
            ></input>
          </div>
          <div className="btn_container">
            <button className="btn" type="submit" onClick={submitHandler}>
              Done
            </button>
            <button
              onClick={() => setEditToggle(false)}
              onKeyDown={() => setEditToggle(false)}
              tabIndex={0}
              type="button"
              className="btn"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
