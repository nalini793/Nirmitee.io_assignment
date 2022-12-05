import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

import { useDispatch } from "react-redux";
import { addPost } from "../store/postSlice";
import { v4 as uuid } from "uuid";

const AddPostModal = ({ modalOpen, setModalOpen }) => {
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [author, setauthor] = useState("ananymous");
  // const titleRef = useRef("");
  // const bodyRef = useRef("");
  // const authorRef = useRef("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    // settitle(titleRef.current.value);
    // setbody(bodyRef.current.value);
    // setauthor(authorRef.current.value);
    // setTimeout(() => {
    // console.log(title, body, author);
    if (title && body && author) {
      dispatch(
        addPost({
          id: uuid(),
          title: title,
          body: body,
          author: author,
          comments: [],
        })
      );
    }
    settitle("");
    setauthor("");
    setbody("");
    setModalOpen(false);
    // }, 100);
  };
  return (
    modalOpen && (
      <div className="modal_wrapper">
        <div className="modal_container">
          <div
            onClick={() => setModalOpen(false)}
            onKeyDown={() => setModalOpen(false)}
            tabIndex={0}
            role="button"
            className="closebtn"
          >
            <MdOutlineClose></MdOutlineClose>
          </div>
          <form className="formclass">
            <h3 className="formTitle">Add Post</h3>
            <div className="labelWrapper">
              <label htmlFor="title">Title:</label>
              <input
                onChange={(e) => settitle(e.target.value)}
                type="text"
                id="title"
              ></input>
            </div>
            <div className="labelWrapper">
              <label htmlFor="body">Body:</label>
              <input
                onChange={(e) => setbody(e.target.value)}
                type="text"
                id="body"
              ></input>
            </div>
            <div className="labelWrapper">
              <label htmlFor="author">Author:</label>
              <input
                onChange={(e) => setauthor(e.target.value)}
                type="text"
                id="author"
              ></input>
            </div>
            <div className="btn_container">
              <button
                className="btn primary"
                type="submit"
                onClick={submitHandler}
              >
                Done
              </button>

              <button
                type="button"
                className="btn secondary"
                onClick={() => setModalOpen(false)}
                onKeyDown={() => setModalOpen(false)}
                tabIndex={0}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default AddPostModal;
