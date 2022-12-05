import React, { useState } from "react";
import AddPostModal from "./AddPostModal";

const NewPost = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        className="btn primary"
        onClick={() => setModalOpen(true)}
      >
        New Post
      </button>
      <AddPostModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      ></AddPostModal>
    </div>
  );
};

export default NewPost;
