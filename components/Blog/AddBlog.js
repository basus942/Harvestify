import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const AddBlog = () => {
  const blogData = {
    title: "",
    imageUrl: "",
    content: "",
    author: "",
    authorImage: "",
  };

  const [enteredData, setEnteredData] = useState(blogData);
  const [blogs, setBlogs] = useState([]);
  const handleData = (e) => {
    setEnteredData({ ...enteredData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const a = enteredData;
    const configRDFirebase = {
      url: "https://login-auth-d2384-default-rtdb.firebaseio.com/harvestify/Blogs.json",
      method: "post",
      data: a,
    };
    axios(configRDFirebase)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios
      .get(
        "https://login-auth-d2384-default-rtdb.firebaseio.com/harvestify/Blogs.json"
      )
      .then((res) => {
        const data = res.data;
        // Convert the object of objects into an array of objects
        const blogsData = Object.keys(data).map((blogId) => ({
          key: Math.random(),
          id: blogId,
          ...data[blogId],
        }));
        setBlogs(blogsData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(blogs);
  return (
    <div>
      <div className="flex justify-center">
        {blogs.map((e) => (
          <Card className="mt-6 w-96 m-8">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={e.imageUrl}
                alt="img-blur-shadow"
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {e.title}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="my-20 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
        <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700 ">
          <h2 className="mb-8 p-3 text-xl font-semibold text-gray-100 dark:text-gray-200">
            Add Product
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm mb-2  font-bold"
                  >
                    Blog Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={enteredData.title}
                    onChange={handleData}
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    placeholder="Blog Title"
                  />
                </div>

                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm mb-2  font-bold"
                  >
                    ImageUrl
                  </label>
                  <input
                    type="url"
                    name="imageUrl"
                    value={enteredData.imageUrl}
                    onChange={handleData}
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    placeholder="Image Url"
                  />
                </div>
              </div>
              {/* End Grid */}

              <div>
                <label
                  htmlFor="title"
                  className="block text-sm mb-2  font-bold"
                >
                  Content
                </label>
                <input
                  type="text"
                  name="content"
                  value={enteredData.content}
                  onChange={handleData}
                  placeholder="Content"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
              </div>

              <div>
                <label
                  htmlFor="title"
                  className="block text-sm mb-2  font-bold"
                >
                  Author
                </label>
                <input
                  type="text"
                  name="author"
                  value={enteredData.author}
                  onChange={handleData}
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder="Author "
                />
              </div>

              <div>
                <label
                  htmlFor="title"
                  className="block text-sm mb-2  font-bold"
                >
                  AuthorImage
                </label>
                <input
                  name="authorImage"
                  value={enteredData.authorImage}
                  onChange={handleData}
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder="Author Image"
                />
              </div>
            </div>

            <div className="mt-6">
              <Button
                type="submit"
                size="lg"
                className="bg-green-800 text-gray-300 ripple={true}"
              >
                Post Blog
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
