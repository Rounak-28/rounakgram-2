"use client";

import { useRouter } from "next/navigation";
import { TiArrowBackOutline } from "react-icons/ti";

const PostPageBackBtn = () => {
  const router = useRouter();

  return (
    <div
      className="px-1 flex items-center space-x-4 cursor-pointer"
      onClick={() => router.back()}
    >
      <TiArrowBackOutline />
      <span className="text-xl text-white">Back</span>
    </div>
  );
};

export default PostPageBackBtn;
