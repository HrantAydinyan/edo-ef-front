import instance from "../baseRequest";

export const blogsApi = {
  getBlogs: async () => await instance.get("/blogs"),
  getBlogById: async (id: string) => await instance.get(`/blogs/${id}`),
};
