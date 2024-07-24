import Link from "next/link";
import { BlogBoxProp, LatestFromBlogProp } from "../../types";

const BlogBox = ({ blog } : BlogBoxProp) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
      <p className="text-gray-700">{blog.cook}</p>
      <Link href={`/blog/${blog._id?.toString()}`} className="text-c06c84 mt-2 inline-block">
        Read more
      </Link>
    </div>
  );
};

const LatestFromBlog = ({ blogs } : LatestFromBlogProp) => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-chicago_makers mb-4">Latest from Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogs.slice(0, 3).map((blog) => (
            <BlogBox key={blog.title} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestFromBlog;
