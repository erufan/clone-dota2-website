import stateImage from "@/data/state-image";
import Image from "next/image";

interface Props {
  state: keyof typeof stateImage;
  heroName: string;
  heroIntro: string;
  shortDescription: string;
}

const HeroProfile = ({
  state,
  heroName,
  heroIntro,
  shortDescription,
}: Props) => {
  return (
    <>
      <div className="flex">
        <Image
          src={stateImage[state]}
          alt="hero state"
          width={35}
          height={35}
        />
        <p className="ml-2 text-2xl font-thin uppercase tracking-widest">
          {state}
        </p>
      </div>
      <h1 className="mt-3 font-reaver text-6xl font-bold uppercase tracking-widest 2xl:text-7xl">
        {heroName}
      </h1>
      <p className="te mt-1 text-[18px] font-bold uppercase text-[#a5e0f3]">
        {heroIntro}
      </p>
      <p className="mt-3 text-2xl font-extralight tracking-normal">
        {shortDescription}
      </p>
      <div className="mt-2 cursor-pointer text-lg text-[#8a8a8a] underline hover:text-[#ddd]">
        Read Full History
      </div>
    </>
  );
};

export default HeroProfile;
