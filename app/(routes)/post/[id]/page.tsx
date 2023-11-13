import Link from "next/link";
import { TiArrowBackOutline } from "react-icons/ti";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-2/3 h-[90%]">
        <div className="back h-[15%] flex items-center px-2  text-4xl text-violet-700">
          <Link href="/">
            <div className="px-1 flex items-center space-x-4">
              <TiArrowBackOutline />
              <span className="text-xl text-white">Back</span>
            </div>
          </Link>
        </div>
        <div className="main w-full h-[85%] border-2 bg-green-700"></div>
      </div>
    </div>
  );
};

export default Page;
