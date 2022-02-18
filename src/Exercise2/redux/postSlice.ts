import { Posts } from "./../model/Post";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../api";

export const getAllPosts = createAsyncThunk("posts/getPosts", () =>
  getPosts().then((res) => res)
);

const postSlice = createSlice({
  name: "posts",
  initialState: { posts: [] as Posts, loading: false, error: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    });
    builder.addCase(getAllPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllPosts.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export default postSlice.reducer;
