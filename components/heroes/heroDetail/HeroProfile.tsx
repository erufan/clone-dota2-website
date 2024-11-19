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
}

const HeroProfile = ({
  state,
  heroName,
  heroIntro,
  shortDescription,
  complexity,
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
          className={`${showFullStory && "z-30 opacity-100"} scrollbar absolute top-0 -z-10 flex h-80 max-h-full w-full flex-col overflow-y-scroll pr-10 pt-5 font-radiance text-xl font-light text-[#ddd] opacity-0 transition-opacity duration-500`}
        >
          <p>
            It's an easy thing to offend a troll. A prickly and contentious
            race, trolls thrive on argument and strife, missing no excuse to
            raise their voices in dispute. Males grow to maturity in
            subterranean chambers beneath their matriarch's domicile, feeding
            and amusing themselves while contributing nothing. Often they stay
            for years beyond the age of maturity, while the matriarch provides
            them with sustenance. When young trolls are finally pushed from
            their sub-chamber, they gather with others of their kind, forming
            roving gangs of malcontents who complain loudly about all manner of
            vexation. As much as trolls love to argue, imagine how rare it is
            for a troll to be driven from his own kind for being too difficult
            to get along with. Such was Jah'rakal's fate, a monger troll from
            deep in the Hoven. So deluded was he, so bitter and abrasive, that
            even other trolls found his company intolerable. After one
            particularly vitriolic outburst in which he claimed the lion's share
            of loot from their latest raid, his cohorts finally snapped. They
            turned on him, beat him with clubs, and drove him from the
            encampment. Enraged at his banishment, he returned the next day,
            armed with steel, and slew them all, one by one. He then swore a
            blood oath: he would ever after be a fighting force unto himself.
            Now he roams the world as the Troll Warlord, bitter and angry, the
            Imperial high commander of an army of one.
          </p>
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
