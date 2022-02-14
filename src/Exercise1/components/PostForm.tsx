import { useState } from "react";
import { addOrUpdatePost } from "../api";
import { Post } from "../model/Post";

export const PostForm = ({ userId, id, title, body }: Post) => {
  const [newUserId, setNewUserId] = useState(userId || "");
  const [newId, setNewId] = useState(id || "");
  const [newTitle, setNewTitle] = useState(title);
  const [newBody, setNewBody] = useState(body);

  const [hasServerError, setHasServerError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState(false);

  const handleSubmit = () => {
    if (!newUserId && !newId && !newTitle && !newBody) {
      setValidationError(true);
      return;
    }
    setLoading(true);
    addOrUpdatePost({
      userId: Number(newUserId),
      id: Number(newId),
      title: newTitle,
      body: newBody,
    } as Post)
      .then(() => {})
      .catch(() => setHasServerError(true))
      .finally(() => setLoading(false));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {validationError && <p>Compila tutti i campi</p>}
      {hasServerError && <p>C'è stato un errore nel salvataggio del post</p>}
      <input
        value={newUserId}
        placeholder="userId"
        onChange={({ target }) => setNewUserId(target.value)}
      />
      <input
        value={newId}
        placeholder="id"
        onChange={({ target }) => setNewId(target.value)}
      />
      <input
        value={newTitle}
        placeholder="title"
        onChange={({ target }) => setNewTitle(target.value)}
      />
      <input
        value={newBody}
        placeholder="body"
        onChange={({ target }) => setNewBody(target.value)}
      />
      <button onClick={handleSubmit}>Aggiungi</button>
    </div>
  );
};
