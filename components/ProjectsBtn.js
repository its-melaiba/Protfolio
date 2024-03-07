import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 mb-9">
      <Link
        href={"/work"}
        className="relative w-[160px] h-[160px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={"/rounded-text.png"}
          width={148}
          height={141}
          alt=""
          className="animate-spin-slow w-full h-[98%] max-w-[141px] max-h-[148px]
          "
        />
        <HiArrowRight
          className="absolute text-4xl group-hover:translate-x-2
        transiton-all duration-300 "
        />
      </Link>
    </div>
  );
};
export default ProjectsBtn;
