import Image from "next/image";
import stateImage from "@/data/state-image";
import MyVidoe from "@/components/heroes/heroDetail/MyVideo";
import Ribbon from "@/components/heroes/heroDetail/Ribbon";
import ability from "@/public/filter/TestPowr.png";
import talents from "@/public/hero-details/talents.svg";
import innate from "@/public/hero-details/innate_icon.png";

interface Props {
  params: { hero: string };
}

const heroPage = ({ params }: Props) => {
  return (
    <>
      <div className="flex h-[52rem] flex-col overflow-hidden font-radiance md:flex-row">
        <div className="row absolute left-20 top-[45rem] inline-flex origin-bottom-left rotate-[270deg] items-center">
          <Image
            src={stateImage["universal"]}
            alt="hero state"
            width={22}
            height={22}
          />
          <span className="ml-3 font-reaver text-lg font-semibold uppercase tracking-widest">
            Abaddon
          </span>
          <div className="mb-1 ml-2 mr-2 h-[0.1rem] w-[45rem] bg-[#555]"></div>
        </div>
        <div className="ml-36 mt-40 flex w-full flex-col justify-start">
          <div className="flex">
            <Image
              src={stateImage["universal"]}
              alt="hero state"
              width={35}
              height={35}
            />
            <p className="ml-2 text-2xl font-thin uppercase tracking-widest">
              Universal
            </p>
          </div>
          <h1 className="mt-3 font-reaver text-6xl font-bold uppercase tracking-widest 2xl:text-7xl">
            Abaddon
          </h1>
          <p className="te mt-1 text-[18px] font-bold uppercase text-[#a5e0f3]">
            Shields his allies or himself from attacks
          </p>
          <p className="mt-3 text-2xl font-extralight tracking-normal">
            Able to transform enemy attacks into self-healing, Abaddon can
            survive almost any assault. Shielding allies and launching his
            double-edged coil at a friend or foe, he is always ready to ride
            into the thick of battle.
          </p>
          <div className="mt-2 cursor-pointer text-lg text-[#8a8a8a] underline hover:text-[#ddd]">
            Read Full History
          </div>
          <div>
            <p className="mt-8 text-lg font-bold uppercase tracking-widest text-[#959595]">
              Complexity
            </p>
            <div className="ml-1 mt-2 flex h-20 w-20 justify-between">
              <div className="h-4 w-4 rotate-45 border border-solid border-[#fff]"></div>
              <div className="h-4 w-4 rotate-45 border border-solid border-[#fff]"></div>
              <div className="h-4 w-4 rotate-45 border border-solid border-[#fff]"></div>
            </div>
          </div>
        </div>
        <div className="relative -right-14 top-14 flex w-[62%] items-center justify-center">
          <MyVidoe />
          <Ribbon />
          <div className="absolute left-20 top-[77%] flex flex-col items-center">
            <span className="mb-2 text-xl font-bold uppercase tracking-widest">
              Abilities
            </span>
            <div className="flex gap-4">
              <Image src={talents} alt="talents tree" width={72} height={72} />
              <Image src={innate} alt="innate icon" width={72} height={72} />
              <Image src={ability} alt="ability name" width={72} height={72} />
              <Image src={ability} alt="ability name" width={72} height={72} />
              <Image src={ability} alt="ability name" width={72} height={72} />
              <Image src={ability} alt="ability name" width={72} height={72} />
            </div>
          </div>
        </div>
      </div>
      <div className="h-52 w-[98vw] bg-[var(--background)]"></div>
    </>
  );
};

export default heroPage;
