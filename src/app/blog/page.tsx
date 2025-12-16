import Breadcrumb from "@/components/Common/Breadcrumb";
import BlogIndex from "@/components/Blog";

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Blog"
        description="Discover expert insights, industry trends, and actionable tips to elevate your digital marketing strategy."
      />
      <BlogIndex />
    </>
  );
};

export default Blog;
