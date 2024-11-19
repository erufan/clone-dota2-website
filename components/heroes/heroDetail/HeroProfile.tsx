"use client";

import stateImage from "@/data/state-image";
import Image from "next/image";
import { useState } from "react";
import Complexity from "./Complexity";

interface Props {
  state: keyof typeof stateImage;
  heroName: string;
  heroIntro: string;
  shortDescription: string;
  complexity: number;
  history: string;
}

const HeroProfile = ({
  state,
  heroName,
  heroIntro,
  shortDescription,
  complexity,
  history,
}: Props) => {
  const [showFullStory, setShowFullStory] = useState(false);

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
      <div className="relative">
        <div
          className={`${showFullStory && "opacity-0"} z-30 mt-3 text-2xl font-extralight tracking-normal transition-opacity duration-500`}
        >
          <p>{shortDescription}</p>
          <span
            onClick={() => setShowFullStory((prveState) => !prveState)}
            className="mt-2 cursor-pointer self-start text-lg text-[#8a8a8a] underline hover:text-[#ddd]"
          >
            Read Full History
          </span>
          <Complexity complexityLevel={complexity} />
        </div>
        <div
          className={`${showFullStory && "z-30 opacity-100"} absolute top-0 -z-10 flex h-80 max-h-full w-full flex-col overflow-y-scroll pr-10 pt-5 font-radiance text-xl font-light text-[#ddd] opacity-0 transition-opacity duration-500 scrollbar`}
        >
          <p>{history}</p>
          <span
            onClick={() => setShowFullStory((prveState) => !prveState)}
            className="mt-2 cursor-pointer self-start text-lg text-[#8a8a8a] underline hover:text-[#ddd]"
          >
            Close History
          </span>
        </div>
      </div>
    </>
  );
};

export default HeroProfile;
