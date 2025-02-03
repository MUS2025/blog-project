
import { getEntriesBlogPostFields } from "@/app/lib/contentful";
//import { BlogPostFields } from "@/app/types/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";

// interface BlogProps {
//   posts: BlogPostFields[];
// }

type ContentfulImage = {
  fields?: {
    file?: {
      url: string;
    };
  };
};

export default async function Page() {
    const entries = await getEntriesBlogPostFields(); // Fetch data from Contentful
    <h1>Blog Posts</h1>
    return (
        <div className="grid grid-cols-4 gap-3">          
            {entries.map((entry) =>  {    
    const {blogId, title, body, blogImage, description } = entry.fields;
    
    const imageUrl = (blogImage as ContentfulImage)?.fields?.file?.url as string;    
     const finalImageUrl = imageUrl ? `https:${imageUrl}`
     : '/placeholder.jpg';  
              return (
               <div key={blogId as unknown as number} className="col-span-1 row-span-1">
                <p className="font-bold">Title:</p><h1> {title as unknown as string}</h1>              
                <Link href= {'/blog/blogpost/'+ [blogId as unknown as number]}>
           <Image
              src={finalImageUrl}
                alt={title as unknown as string || 'default image'}
                width={400}
                height={225}
                priority />

              <p className="font-bold">Body: </p> 
              {documentToReactComponents(body as unknown as Document)}
              
              <p className="font-bold">Description: </p> 
              {description as unknown as string}
              </Link>
            </div>                
              );
            })}          
        </div>
      );
  }