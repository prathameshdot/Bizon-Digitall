import BlogSlider from "./BlogSlider";
import ForYou from "./ForYou";

const Blog = () => {
  return (
    <>
      <div className="bg-white">
        <BlogSlider />
      </div>
      <div className="bg-white">
        <ForYou />
      </div>
    </>
  );
};

export default Blog;
