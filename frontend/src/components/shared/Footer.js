import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex text-sm bg-white">
      <div className="flex justify-center py-4 w-full">
        <h1 className="flex items-center">
          Copyright@2023 Techverse, Design with{" "}
          <AiFillHeart className="text-red-400 mx-1" /> by
          <span className="font-semibold mx-1"> techverse Team</span>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
