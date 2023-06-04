import axios from "axios";
import client from "@/lib/Contentful/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import PostCard from "@/components/posts/PostCard";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import React from "react";

const index = ({ posts }) => {
  // const [blogs, setBlogs] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://login-auth-d2384-default-rtdb.firebaseio.com/harvestify/Blogs.json"
  //     )
  //     .then((res) => {
  //       const data = res.data;
  //       console.log(data);

  //       // Convert the object of objects into an array of objects
  //       const blogsData = Object.keys(data).map((blog) => ({
  //         key: Math.random(),
  //         id: blog,
  //         ...data[blog],
  //       }));
  //       setBlogs(blogsData);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  console.log(posts);

  return (
    <div className="flex justify-center">
      <ul>
        {posts.map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
      </ul>
      {/* {blogs.map((e, i) => (
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
            <Button>
              <Link href={`/Blog/${i}`}>Read More</Link>
            </Button>
          </CardFooter>
        </Card>
      ))} */}
    </div>
  );
};

export default index;
export const getStaticProps = async () => {
  const res = await client.getEntries({ content_type: "post" });

  return {
    props: { posts: res.items, revalidate: 60 },
  };
};
