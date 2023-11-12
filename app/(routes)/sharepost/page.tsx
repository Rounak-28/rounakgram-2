"use client";

import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Oval } from "react-loader-spinner";

const Page = () => {
  const [selectedFile, setSelectedFile]: any = useState(null);
  const [fileBlobUrl, setFileBlobUrl]: any = useState(null);
  const [caption, setCaption] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const router = useRouter();

  const handleCancel = () => {
    setSelectedFile(null);
    setFileBlobUrl(null);
  };

  const generateRandomString = (length: number) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  };

  const handlePost = async () => {
    if (!selectedFile) {
      return;
      // TODO: show error that no image is selected
    }

    setIsPosting(true);
    const { data: uploadData, error } = await supabase.storage
      .from("posts")
      .upload(`posts/img${generateRandomString(10)}.png`, selectedFile, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.log(error);
      return;
    }
    if (uploadData) {
      const { data: imageURL } = supabase.storage
        .from("posts")
        .getPublicUrl(uploadData.path);

      const res = await fetch("/api/sharepost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          caption: caption,
          imageUrl: imageURL.publicUrl,
        }),
      });
      // setSelectedFile(null);
      // setFileBlobUrl(null);
      // setCaption("");
      // setIsPosting(false);
      router.push("/");
      router.refresh();
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
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Caption..."
        className="w-[700px] h-32 bg-[#1d1d21] rounded-md px-3"
      />
      <div className="w-[700px] h-[400px] rounded-md bg-[#1d1d21] flex justify-center items-center">
        <input
          type="file"
          name=""
          onChange={(e: any) => setSelectedFile(e.target.files[0])}
        />
        <img src={fileBlobUrl} alt="" />
      </div>
      <div className="space-x-8 flex">
        <button
          className="w-28 h-12 rounded-sm bg-[#1f1f22] hover:bg-[#2f2f33]"
          onClick={handleCancel}
        >
          Cancel
        </button>
        {isPosting ? (
          <Oval
            height={30}
            width={30}
            color="#877eff"
            wrapperStyle={{}}
            wrapperClass="w-28 h-12 rounded-sm bg-[#665de3] flex justify-center items-center"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#ffffff"
            strokeWidth={3}
            strokeWidthSecondary={3}
          />
        ) : (
          <button
            className="w-28 h-12 rounded-sm bg-[#877eff] hover:bg-[#665de3]"
            onClick={handlePost}
          >
            Post
          </button>
        )}
      </div>
    </div>
  );
};

export default Page;
