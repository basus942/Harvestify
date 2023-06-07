import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar } from "@material-tailwind/react";

const PostCard = ({ post }) => {
  // using content causing issue
  const { title, slug, summary, contentdesc, coverImage, author } = post.fields;

  return (
    <div className="w-90 mx-auto sm:w-96 h-100  bg-black relative hover:ring-4 ring-yellow-400 rounded-2xl">
      <Link href={`/Blog/${slug}`} aria-label={title}>
        <div className=" aspect-w-1 aspect-h-1 h-full ">
          <Image
            src={"https:" + coverImage.fields.file.url}
            width={500}
            height={500}
            className="object-cover object-center rounded-2xl"
          />
        </div>
        <div className=" absolute w-full h-full top-0 flex flex-col">
          <div className="flex-1 "></div>
          <div className="flex-1 flex flex-col p-10 bg-gradient-to-t from-black rounded-2xl">
            <div className="flex-1"></div>
            <div>
              <div className="flex items-center justify-between text-gray-300">
                <div className="flex justify-center items-center gap-2">
                  <Avatar
                    src={"https:" + author.fields.image.fields.file.url}
                    className="m-2"
                  />

                  <h1>{author.fields.author}</h1>
                </div>
              </div>
              <h1 className="text-xl font-semibold text-white mt-5">{title}</h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
    // <Card sx={{ maxWidth: 270, maxHeight: 600 }}>
    //   <CardActionArea>
    //     <Image
    //       src={"https:" + coverImage.fields.file.url}
    //       width={400}
    //       height={200}
    //       className="object-cover"
    //     />
    //     <div className="flex flex-row items-center mx-3">
    //       <Avatar
    //         src={"https:" + author.fields.image.fields.file.url}
    //         className="m-2"
    //       />

    //       {author.fields.author}
    //     </div>
    //     <CardContent>
    //       <Typography component="div" className="font-semibold text-md">
    //         {title}
    //       </Typography>
    //       <Typography className="text-xs">{contentdesc}</Typography>
    //     </CardContent>
    //   </CardActionArea>

    //   <Button variant="text" className="flex items-center gap-2">
    //     <Link href={`/Blog/${slug}`} aria-label={title}>
    //       Learn More
    //     </Link>
    //   </Button>
    // </Card>
  );
};

export default PostCard;
