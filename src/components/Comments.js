import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteComment, newReply } from "../store/postSlice";
import EditComment from "./EditComment";
import Replies from "./Replies";

const Comments = ({ comment, postId, index }) => {
  const commentId = index;
  const postID = postId;
  const [editToggle, setEditToggle] = useState(false);
  const [replyToggle, setReplyToggle] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replyAuthor, setReplyAuthor] = useState("");
  const dispatch = useDispatch();
  const newReplyHandler = (e) => {
    e.preventDefault();
    if (replyText && replyAuthor) {
      dispatch(
        newReply({
          postID: postId,
          commentId: index,
          reply: replyText,
          replyAuthor: replyAuthor,
        })
      );
    }
    setReplyAuthor("");
    setReplyText("");
    setReplyToggle(false);
  };

  return (
    <div key={index} className="singleComment">
      <span className="singleAuthor">Comment by {comment.author} : </span>
      {editToggle ? (
        <EditComment
          postID={postID}
          id={index}
          text={comment.text}
          setEditToggle={setEditToggle}
        ></EditComment>
      ) : (
        <>
          <span className="commentText">{comment.text}</span>
          <span className="commentbtn_container">
            <button className="btn" onClick={() => setReplyToggle(true)}>
              Reply
            </button>
            <button
              onClick={() => setEditToggle(true)}
              className="btn"
              type="button"
            >
              Edit
            </button>
            <button
              className="btn"
              onClick={() =>
                dispatch(deleteComment({ id: postID, commentID: index }))
              }
            >
              Delete
            </button>
          </span>
          {replyToggle && (
            <div>
              <form className="editComment">
                <div className="editCommmentWrapper">
                  <label htmlFor="text"> </label>
                  <input
                    onChange={(e) => setReplyText(e.target.value)}
                    type="text"
                    id="text"
                  ></input>
                </div>
                <span>By :</span>
                <div className="editCommmentWrapper small">
                  <label htmlFor="author"> </label>
                  <input
                    onChange={(e) => setReplyAuthor(e.target.value)}
                    type="text"
                    id="author"
                  ></input>
                </div>
                <span className="commentbtn_container">
                  <button
                    type="submit"
                    onClick={(e) => newReplyHandler(e)}
                    className="btn"
                  >
                    Done
                  </button>
                  <button
                    className="btn"
                    onClick={() => setReplyToggle(false)}
                    onKeyDown={() => setReplyToggle(false)}
                    tabIndex={0}
                    type="button"
                  >
                    Cancel
                  </button>
                </span>
              </form>
            </div>
          )}
        </>
      )}

      {comment.replies.length > 0 && (
        <div className="replies">
          {comment.replies.map((reply, index) => {
            return (
              <Replies
                key={index}
                postID={postID}
                commentId={commentId}
                id={index}
                text={reply.replyText}
                author={reply.author}
              ></Replies>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Comments;
