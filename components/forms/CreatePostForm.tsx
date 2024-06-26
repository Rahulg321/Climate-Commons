"use client";

import React from "react";
import { Input } from "../ui/input";
import { createPost } from "@/app/actions";
import { Button } from "../ui/button";
import { useToast } from "@/components/ui/use-toast";

const CreatePostForm = () => {
  const { toast } = useToast();
  return (
    <form
      action={async (formdata) => {
        const response = await createPost(formdata);
        if (response.success) {
          console.log("Post created successfully");
          toast({
            title: "Success: Post created successfully",
            description: "Your post has been created successfully.",
          });
        } else {
          console.log("Error creating post");

          toast({
            title: "Error: Post not created",
            description: "Error creating your post. Please try again later.",
            variant: "destructive",
          });
        }
      }}
      className="space-y-4"
    >
      <Input placeholder="title" name="title" />
      <Input placeholder="content" name="content" />
      <Button type="submit" className="w-full">
        Create Post
      </Button>
    </form>
  );
};

export default CreatePostForm;
