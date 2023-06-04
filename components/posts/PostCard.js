import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";

const PostCard = ({ post }) => {
  // using content causing issue
  const { title, slug, summary, content, coverImage, author } = post.fields;

  return (
    <Card className="flex-row w-full max-w-[48rem] relative">
      <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0">
        <Image
          src={"https:" + coverImage.fields.file.url}
          fill
          className="p-3 rounded-xl w-10"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="blue" className="uppercase mb-4">
          Fruits
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography color="gray" className="font-normal my-6">
          <Avatar
            src={"https:" + author.fields.image.fields.file.url}
            className="mr-3"
          />
          {author.fields.author}
        </Typography>

        <Button variant="text" className="flex items-center gap-2">
          <Link href={`/Blog/${slug}`} aria-label={title}>
            Learn More
          </Link>
        </Button>
      </CardBody>
    </Card>
  );
};

export default PostCard;
