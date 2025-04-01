import { CgShapeCircle } from "react-icons/cg";
import { FaArrowUp } from "react-icons/fa6";
import av1 from "../../assets/Av2.png";
import av2 from "../../assets/Av1.png";
import { Link } from "react-router-dom";

const commentsData = [
  {
    id: 1,
    name: "Paul James",
    avatar: av1,
    comment: "I like how beautiful and easy to use this product is. Will definitely recommend it for others",
    link: "https://www.baulifull.com/about/about.html#p1"
  },
  {
    id: 2,
    name: "Paul James",
    avatar: av2,
    comment: "I like how beautiful and easy to use this product is. Will definitely recommend it for others",
    link: "https://www.baulifull.com/about/about.html#p2"
  }
];

const Comment = () => {
  return (
    <div className="my-16 px-10 py-4 bg-[#fff] rounded-lg">
      <div className="my-10 space-y-6">
        {commentsData.map((comment) => (
          <div key={comment.id} className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <img 
                src={comment.avatar} 
                alt={comment.name}
                className="h-10 w-10 rounded-full object-cover"
              />
            </div>
            <div>
              <Link href={comment.link} className="font-semibold hover:underline">
                {comment.name}
              </Link>
              <p className="text-gray-700 mt-1">{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Comment Input */}
      <div className="">
        <div className="flex items-center gap-2 relative">
          <div className="h-[50px] md:h-[70px] w-full">
            <input
              className="w-full h-full pr-16 md:pr-0 px-4 py-2 border border-gray-300 rounded-[28px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your comment here"
            />
          </div>
          <div>
            <button className="hidden md:flex items-center justify-center md:h-[70px] px-6 py-2 bg-blue-600 text-white font-[500] text-[17px] md:text-[23px] rounded-[28px] hover:bg-blue-700 transition-colors">
              Comment
            </button>
            <button className="absolute top-2 right-5 h-[35px] flex items-center justify-center md:hidden px-2.5 py-2 bg-blue-600 md:text-[23px] rounded-[10px] hover:bg-blue-700 transition-colors">
              <FaArrowUp className="text-white font-[600] text-[20px]"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;






export const Safetytips = () => {
  return (
    <div className="my-16 p-10 bg-[#F0F0F0] rounded-lg">
        <h3 className="font-bold text-[26px] md:text-[32px] mb-3 text-[#333333]">Safety tips!</h3>
        <ul className="space-y-2 text-sm text-yellow-700">
            <li className="flex items-center gap-1 text-[#4F4F4F]">
            <CgShapeCircle className="text-[#4F4F4F] text-[2rem]"/>
            <span className="text-[18px] md:text-[24px]">Don't pay in advance, including for delivery</span>
            </li>
            <li className="flex items-center gap-1 text-[#4F4F4F]">
            <CgShapeCircle className="text-[#4F4F4F] text-[2rem]"/>
            <span className="text-[18px] md:text-[24px]">Meet the seller at a safe public place</span>
            </li>
            <li className="flex items-center gap-1 text-[#4F4F4F]">
            <CgShapeCircle className="text-[#4F4F4F] text-[2rem]"/>
            <span className="text-[18px] md:text-[24px]">Inspect the goods thoroughly to ensure you are satisfied</span>
            </li>
            <li className="flex items-center gap-1 text-[#4F4F4F]">
            <CgShapeCircle className="text-[#4F4F4F] text-[2rem]"/>
            <span className="text-[18px] md:text-[24px]">Only pay when you are satisfied</span>
            </li>
        </ul>
    </div>
  )
}
