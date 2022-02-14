import { useEffect, useRef, useState } from "react";
import { getPosts } from "./api";
import ModalWrapper from "./components/Modal";
import { PostForm } from "./components/PostForm";
import { Table } from "./components/Table";
import { Post, Posts } from "./model/Post";

export const ExerciseOne = () => {
  const [posts, setPosts] = useState<Posts | null>(null);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getPosts()
      .then((posts) => setPosts(posts.slice(0, 10)))
      .catch(() => setPosts([]));
  }, []);

  const handlePostFormModal = (post: Post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const handleAddPost = () => {
    handlePostFormModal({
      userId: null,
      id: null,
      title: "",
      body: "",
    });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setShowModal(false);
    }
  };

  if (!posts) return <div>Loading...</div>;

  if (!posts.length) return <div>Nessun risultato trovato</div>;

  return (
    <>
      {showModal && selectedPost && (
        <ModalWrapper ref={modalRef}>
          <PostForm
            userId={selectedPost.userId}
            id={selectedPost.id}
            body={selectedPost.body}
            title={selectedPost.title}
          />
        </ModalWrapper>
      )}
      <Table<Post>
        rows={posts}
        columnsTitles={["userId", "id", "title", "body"]}
        onClickRow={(post) => handlePostFormModal(post)}
      />
      <button onClick={handleAddPost}>Aggiungi post</button>
    </>
  );
};
