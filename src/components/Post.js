import React, { useState } from "react";
import Comments from "./Comments";
import { useDispatch } from "react-redux";
import { deletePost, addComment } from "../store/postSlice";
import EditPost from "./EditPost";

const Post = ({ id, title, body, author, comments }) => {
  const [viewComments, setViewComments] = useState(false);
  const [editToggle, setEditToggle] = useState(false);
  const [text, settext] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  const dispatch = useDispatch();
  const newCommentSubmit = (e) => {
    e.preventDefault();
    if (text && newAuthor) {
      dispatch(
        addComment({ id: id, text: text, author: newAuthor, replies: [] })
      );
    }
    settext("");
    setNewAuthor("");
  };

  return (
    <div className="withComments">
      <div className="singlePost">
        <div className="editPostWrap">
          {editToggle ? (
            <EditPost
              setEditToggle={setEditToggle}
              id={id}
              title={title}
              body={body}
              author={author}
            ></EditPost>
          ) : (
            <div>
              <div className="singlePostWrap">
                <h3 className="singleTitle">{title}</h3>
                <p className="singleBody">{body}</p>

                <p className="singleAuthor">
                  <span className="bySpace">By : </span>
                  {author}
                </p>
                {viewComments ? (
                  <div
                    onClick={() => setViewComments(false)}
                    className="commentToggle"
                  >
                    Hide comments
                  </div>
                ) : (
                  <div
                    onClick={() => setViewComments(true)}
                    className="commentToggle"
                  >
                    View Comments
                  </div>
                )}
              </div>
              <div
                onClick={() => {
                  setEditToggle(true);
                }}
                className="postbtn_container"
              >
                <button className="btn" type="button">
                  Edit
                </button>

                <button
                  className="btn"
                  onClick={() => dispatch(deletePost({ id: id }))}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {viewComments && (
        <>
          <div className="commentsWrapper">
            <div className="commentWrapper">
              {comments.map((comment, index) => (
                <Comments
                  key={index}
                  comment={comment}
                  postId={id}
                  index={index}
                ></Comments>
              ))}
            </div>
            <div className="newComment">
              <div className="labelWrapper">
                <label htmlFor="text">Create comment:</label>
                <input
                  onChange={(e) => settext(e.target.value)}
                  type="text"
                  id="text"
                ></input>
              </div>
              <div className="labelWrapper by">
                <label htmlFor="author">By:</label>
                <input
                  onChange={(e) => setNewAuthor(e.target.value)}
                  type="text"
                  id="author"
                ></input>
              </div>

              <button
                type="submit"
                onClick={newCommentSubmit}
                className="btn commentBtn"
              >
                Done
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
