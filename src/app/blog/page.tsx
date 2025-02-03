//import { GetServerSideProps, GetStaticProps } from "next";
import { getEntriesBlogsFields } from "../lib/contentful";
//import { BlogPostFields } from "../types/contentful";
//import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
//import { Document } from "@contentful/rich-text-types";
//import Image from "next/image";

// interface BlogProps {
//   posts: BlogPostFields[];
// }

// type ContentfulImage = {
//   fields?: {
//     file?: {
//       url: string;
//     };
//   };
// };

export default async function Page() {
    const entries = await getEntriesBlogsFields(); // Fetch data from Contentful
    <h1>Blog Posts</h1>
    return (
        <div className="grid grid-cols-4 gap-3">  
            {entries.map((entry) =>  {
    const {title, description } = entry.fields; // Extract fields properly
              return (                
               <div key={entry.fields.blogId as unknown as number} className="col-span-1 row-span-1">
                       <h2>{title as unknown as string}</h2>
                       <h3>{description as unknown as string}</h3>                
                   </div>
              );
            })}          
        </div>
      );
  }