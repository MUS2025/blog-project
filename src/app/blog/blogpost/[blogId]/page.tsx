import { getEntriesBlogPostFields} from "@/app/lib/contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {Document} from "@contentful/rich-text-types";

type ContentfulImage = {
    fields?: {
      file?: {
        url: string;
      };
    };
  };

export default async function BlogDetails({
    params, 
}:{
    params: Promise<{blogId: number }>;
})
{
    const blogID = (await params).blogId;


 const entries = await getEntriesBlogPostFields();

 const res = entries.filter((item)=> Number(item.fields.blogId)==blogID);
 const {blogId, title, body, blogImage, description } = res[0].fields;
 console.log(blogId);
 const imageUrl = (blogImage as ContentfulImage)?.fields?.file?.url as string;    
 const finalImageUrl = imageUrl ? `https:${imageUrl}`
 : '/placeholder.jpg'; 
    
 return(
    <div className="grid grid-cols-4 gap-3">   
       
    <div key={res[0].fields.blogId as unknown as number} className="col-span-1 row-span-1">
    <h2>{title as unknown as string}</h2>
                     {imageUrl && (
                  <Image
                  src={finalImageUrl}
                    alt={title as unknown as string || 'default image'}
                    width={400}
                    height={225}
                    priority
                  />
                )}
                   {documentToReactComponents(body as unknown as Document)}
                   {description as unknown as string}
    </div>       
    
        </div>  
 );  
}