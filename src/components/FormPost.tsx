"use client";

import { FormInputPost } from "@/types";
import React , { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormPostProps{
  submit: SubmitHandler<FormInputPost>
  isEditing : boolean;
}


const FormPost: FC<FormPostProps> = ({ submit , isEditing}) => {
  const { register, handleSubmit } = useForm<FormInputPost>();

 
  return (
    <form
      className="flex flex-col items-center justify-center gap-5 mt-10"
      onSubmit={handleSubmit(submit)}
    >
      <input
        type="text"
        {...register("title",{required: true})}
        placeholder="Post title"
        className="input input-bordered w-full max-w-lg"
      />

      <textarea
        {...register("content",{required: true})}
        className="textarea textarea-bordered w-full max-w-lg"
        placeholder="Post content..."
      ></textarea>

      <select
        className="select select-bordered w-full max-w-lg"
        {...register("tag",{required: true})}
        defaultValue={''}
      >
        <option disabled value=''>
          Who shot first?
        </option>
        <option>JavaScript</option>
        <option>Php</option>
        <option>Python</option>
      </select>

      <button type= 'submit' className="btn btn-primary w-full max-w-lg">{
        isEditing?'Update':'Create'
        }</button>
    </form>
  );
};

export default FormPost;
