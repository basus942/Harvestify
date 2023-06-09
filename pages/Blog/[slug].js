import client from "@/lib/Contentful/client";
import Image from "next/image";

import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
const Details = ({ post }) => {
  const { title, longsummary, coverImage, summary, author } = post.fields;
  // const options = {
  //   renderMark: {},
  //   renderNode: {
  //     [BLOCKS.EMBEDDED_ASSET]: (node) => {
  //       const { file } = node.data.target.fields;
  //       const imageUrl = "https:" + file.url;
  //     },
  //   },
  // };
  const renderers = {
    image: ({ src, alt }) => {
      console.log(src);
      return <Image className="rounded-xl" src={src} alt={alt} />;
    },
  };

  const richTextField = longsummary;
  // const renderedContent = documentToReactComponents(richTextField, options);

  return (
    <div className="grid place-items-center">
      <Image
        src={"https:" + coverImage.fields.file.url}
        width={700}
        height={300}
        className="object-cover object-center rounded-2xl mt-5"
      />
      <div className="flex flex-col justify-center items-center">
        <span className="text-xl font-bold m-12">{title}</span>
        <ReactMarkdown components={renderers} className="px-[150px]">
          {summary}
        </ReactMarkdown>
        {/* <span className="px-[150px]">{renderedContent}</span> */}
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "post",
  });
  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  const res = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
  });
  return {
    props: {
      post: res.items[0],
    },
  };
};

export default Details;
