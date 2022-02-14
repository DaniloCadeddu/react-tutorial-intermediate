export interface Post {
  userId: number | null;
  id: number | null;
  title: string;
  body: string;
}

export type Posts = Post[];
