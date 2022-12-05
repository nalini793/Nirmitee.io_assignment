import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  posts: [
    {
      id: 123456,
      title: "Hi, I am Nalini Mahajan",
      body: "I have submitted this application proto for the recruitment assignment of Nirmitee.io",
      author: " Nalini Mahajan",
      comments: [
        {
          text: "This comment section works",
          author: "Jeb",
          replies: [
            { replyText: "I agree", author: "Helen" },
            { replyText: "I dont agree", author: "Joe" },
          ],
        },
        {
          text: "Hey! Reply section also works",
          author: "Jacob",
          replies: [
            { replyText: "Try here to edit", author: "Peter" },
            { replyText: "or delete", author: "David" },
          ],
        },
      ],
    },
  ],
};

const postSlice = createSlice({
  name: "posts",
  initialState: initialValue,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
      // console.log(state);
      return state;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
    editPost: (state, action) => {
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.id) {
          post = {
            ...post,
            body: action.payload.body,
            title: action.payload.title,
            author: action.payload.author,
          };
        }
        return post;
      });
    },
    addComment: (state, action) => {
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.id) {
          post = {
            ...post,
            comments: [
              ...post.comments,
              {
                text: action.payload.text,
                author: action.payload.author,
                replies: action.payload.replies,
              },
            ],
          };
        }
        return post;
      });
    },
    deleteComment: (state, action) => {
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.id) {
          post = {
            ...post,
            comments: post.comments.filter((comment, index) => {
              return index !== action.payload.commentID;
            }),
          };
        }
        return post;
      });
    },
    editComment: (state, action) => {
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.postID) {
          post = {
            ...post,
            comments: post.comments.map((comment, index) => {
              if (index === action.payload.commentId) {
                comment = { ...comment, text: action.payload.text };
              }
              return comment;
            }),
          };
        }
        return post;
      });
    },
    newReply: (state, action) => {
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.postID) {
          post = {
            ...post,
            comments: post.comments.map((comment, index) => {
              if (index === action.payload.commentId) {
                comment = {
                  ...comment,
                  replies: [
                    ...comment.replies,
                    {
                      replyText: action.payload.reply,
                      author: action.payload.replyAuthor,
                    },
                  ],
                };
              }
              return comment;
            }),
          };
        }
        return post;
      });
    },
    editReply: (state, action) => {
      // console.log(action.payload);
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.postID) {
          post = {
            ...post,
            comments: post.comments.map((comment, index) => {
              if (index === action.payload.commentId) {
                comment = {
                  ...comment,
                  replies: comment.replies.map((reply, index) => {
                    if (index === action.payload.replyId) {
                      reply = {
                        ...reply,
                        replyText: action.payload.editedReply,
                      };
                    }
                    return reply;
                  }),
                };
              }
              return comment;
            }),
          };
        }
        return post;
      });
    },
    deleteReply: (state, action) => {
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.postID) {
          post = {
            ...post,
            comments: post.comments.map((comment, index) => {
              if (index === action.payload.commentId) {
                comment = {
                  ...comment,
                  replies: comment.replies.filter(
                    (reply, index) => index !== action.payload.replyId
                  ),
                };
              }
              return comment;
            }),
          };
        }
        return post;
      });
    },
  },
});
export const {
  addPost,
  deletePost,
  editPost,
  addComment,
  deleteComment,
  editComment,
  newReply,
  editReply,
  deleteReply,
} = postSlice.actions;

export default postSlice.reducer;
