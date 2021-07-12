import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p className="blog-date"> {blog.date.slice(0, 10)} </p>
            <p className="blog-author">Written by {blog.author} </p>
            <p>{blog.body.slice(0, 150)}...</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
