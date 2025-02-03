import { EntrySkeletonType } from "contentful";

export interface BlogPostFields extends EntrySkeletonType {
    title: string;
    body: Document;
    blogImage: string;
    blogId: number;
    description: string;
  }

    export interface BlogPostFields extends EntrySkeletonType{
      fields : BlogPostFields
    }

   export interface BlogsFields{
    blogId: number;
    title: string;
    description: string;
   }

   export interface BlogsFields extends EntrySkeletonType{
    fields:BlogsFields
   }

   