import { createClient, Entry} from 'contentful';
import { BlogPostFields, BlogsFields } from '../types/contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,  
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string  
});

  export async function getEntriesBlogPostFields(): Promise<Entry<BlogPostFields>[]> {
      const entries = await client.getEntries<BlogPostFields>({ content_type: 'blogPost' });
      return entries.items; // Ensures the returned data matches the type
    }      

   export async function getEntriesBlogsFields(): Promise<Entry<BlogsFields>[]> {
    const entries = await client.getEntries<BlogsFields>({ content_type: 'blogs' });
    return entries.items; // Ensures the returned data matches the type
  }

  //Fetch a single entry by ID
  export async function getEntry(blogId: number) {    
    const res = await client.getEntries<BlogPostFields>({content_type:'blogPost'});    
    const entry = res.items.find((item)=>item.fields.blogId===blogId);
    return entry;
  }

export default client;