import stateImage from "@/data/state-image";
import Image from "next/image";

interface Props {
  heroName: string;
  state: keyof typeof stateImage;
}

const VerticalLine = ({ heroName, state }: Props) => {
  return (
    <div className="row absolute left-20 top-[45rem] inline-flex origin-bottom-left rotate-[270deg] items-center">
      <Image src={stateImage[state]} alt="hero state" width={22} height={22} />
      <span className="ml-3 font-reaver text-lg font-semibold uppercase tracking-widest">
        {heroName}
      </span>
      <div className="mb-1 ml-2 mr-2 h-[0.1rem] w-[45rem] bg-[#555]"></div>
    </div>
  );
};

export default VerticalLine;
