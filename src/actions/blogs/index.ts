import { blogsApi } from "@/services";

export const fetchBlogs = async () => {
  try {
    const blogs = await blogsApi.getBlogs();
    return blogs?.data;
  } catch (error) {
    return error;
  }
};

export const fetchBlogById = async (id: string) => {
  try {
    const blog = await blogsApi.getBlogById(id);
    return blog?.data;
  } catch (error) {
    return error;
  }
};
