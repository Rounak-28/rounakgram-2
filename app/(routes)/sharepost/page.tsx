"use client";

import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

const Page = () => {
  const [selectedFile, setSelectedFile]: any = useState(null);
  const [fileBlobUrl, setFileBlobUrl]: any = useState(null);

  const handleFileInput = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCancel = () => {
    setSelectedFile(null);
    setFileBlobUrl(null);
  };

  const handlePost = async () => {
    const { data, error } = await supabase.storage
      .from("posts")
      .upload("posts/img2.png", selectedFile, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.log(error);
      return;
    }
    if (data) {
      // console.log(data);
      setSelectedFile(null);
      setFileBlobUrl(null);
    }
  };

  useEffect(() => {
    // create the preview
    const objectUrl = URL.createObjectURL(new Blob([selectedFile]));

    setFileBlobUrl(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center space-y-8">
      <p className="text-2xl">Create Post</p>
      <input
        type="text"
        placeholder="Caption..."
        className="w-[700px] h-32 bg-[#1d1d21] rounded-md px-3"
      />
      <div className="w-[700px] h-[400px] rounded-md bg-[#1d1d21] flex justify-center items-center">
        <input type="file" name="" id="" onChange={handleFileInput} />
        <img src={fileBlobUrl} alt="" />
      </div>
      <div className="space-x-8">
        <button
          className="w-28 h-12 rounded-sm bg-[#1f1f22] hover:bg-[#2f2f33]"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="w-28 h-12 rounded-sm bg-[#877eff] hover:bg-[#665de3]"
          onClick={handlePost}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default Page;
