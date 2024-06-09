const Blog = () => {
  const blogData = [
    {
      title: "Understanding React Hooks",
      date: "January 10, 2024",
      excerpt:
        "An introduction to React Hooks and how they can be used to manage state and lifecycle methods in functional components.",
      link: "#",
    },
    {
      title: "Getting Started with Tailwind CSS",
      date: "February 15, 2024",
      excerpt:
        "A beginner-friendly guide to using Tailwind CSS for building responsive and customizable web interfaces.",
      link: "#",
    },
    {
      title: "Building a Full-Stack Application with Node.js and React",
      date: "March 20, 2024",
      excerpt:
        "Step-by-step tutorial on how to build a full-stack application using Node.js for the backend and React for the frontend.",
      link: "#",
    },
    // Add more blog posts as needed
  ];
  return (
    <div id="blog" className=" my-4 font-mono" data-aos="fade-left">
      <div className="p-8" id="blog">
        <h2 className="text-4xl text-center font-bold  mb-8">Blog</h2>
        <div className="space-y-8">
          {blogData.map((post, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 shadow-lg rounded-lg overflow-hidden text-white hover:scale-105 duration-75"
            >
              <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
              <p className=" mb-4">{post.date}</p>
              <p className=" mb-4">{post.excerpt}</p>
              <a
                href={post.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
