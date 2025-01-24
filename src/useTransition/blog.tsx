import { useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  content: string;
}

interface BlogsPost extends Array<BlogPost> {}

const Blog = () => {
  const BlogPostArray: BlogPost[] = [];

  for (let i = 0; i < 2500; i++) {
      BlogPostArray.push({
        id: i,
        title: `Blog Post ${i}`,
        content: `This is the content of blog post ${i}`,
      });
  }

  const [blogs] = useState<BlogsPost>(BlogPostArray);

  return (
    <div>
      <h3>Blog</h3>
      <div className="d-flex flex-wrap">
        {blogs.map((blog) => (
          <div key={blog.id} className="card m-2" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>);
};

export default Blog;