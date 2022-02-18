import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/postSlice";
import { RootState } from "../redux/store";

export const Posts = () => {
  const dispatch = useDispatch();
  const { posts, error, loading } = useSelector(
    ({ posts }: RootState) => posts
  );

  useEffect(() => {
    if (posts.length) return;
    dispatch(getAllPosts());
  });

  if (loading) return <div>loading...</div>;

  return (
    <div>
      {error ? (
        <p>Errore API</p>
      ) : (
        posts.map(({ title, id }) => <p key={id}>{title}</p>)
      )}
    </div>
  );
};
