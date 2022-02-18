import { Posts, Post } from "./model/Post";
import { Api } from "./constants/apiEndpoints";

export const getPosts = () =>
  fetch(Api.POSTS)
    .then((res) => res.json())
    .then((posts) => posts as Posts);

export const addOrUpdatePost = (post: Post) =>
  fetch(Api.POSTS, { method: "POST", body: post ? JSON.stringify(post) : null })
    .then((res) => res.json())
    .then((res) => res.status as number); // only for exercies purposes
