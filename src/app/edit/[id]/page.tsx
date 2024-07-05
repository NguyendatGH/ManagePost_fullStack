"use client";

import BackButton from "@/components/backButton";
import FormPost from "@/components/FormPost";
import { FormInputPost } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { SubmitHandler } from "react-hook-form";

interface EditPostPageProps {
  params: {
    id: string;
  };
}

const EditPostPage: FC<EditPostPageProps> = ({ params }) => {
  const { id } = params;
  const router = useRouter();
  const { data : dataPost , isLoading : isLoadingPost} = useQuery({
    queryKey: ["posts", id],
    queryFn: async () => {
      const response = await axios.get(`/api/posts/${id}`);
      return response.data;
    },
  });

  const {mutate: updatePost} = useMutation({
    mutationFn: (newPost: FormInputPost) =>{
      return axios.patch(`/api/posts/${id}`, newPost)
    },
    onError: (error) =>{
      console.error(error);
    },

    onSuccess : () =>{
      router.push('/');
      router.refresh();
    }
  });
  console.log(dataPost);

  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    updatePost(data);
  };


  if(isLoadingPost){
    return (
      <div className="text-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  return (
    <div>
      <BackButton />
      <h1 className="text-2xl my-4 font-bold text-centennialValuer">Edit post</h1>
      <FormPost  submit={handleEditPost} initialValue={dataPost} isEditing  />
    </div>
  );
};

export default EditPostPage;
