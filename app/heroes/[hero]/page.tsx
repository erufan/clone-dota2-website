import Image from "next/image";
import stateImage from "@/data/state-image";
import MyVidoe from "@/components/heroes/heroDetail/MyVideo";
import Ribbon from "@/components/heroes/heroDetail/Ribbon";
import talents from "@/public/hero-details/talents.svg";
import innate from "@/public/hero-details/innate_icon.png";
import heroesDetails from "@/data/heroesDetails";

interface Props {
  params: { hero: string };
}

const heroPage = ({ params }: Props) => {
  const { state, heroIntro, heroName, shortDescription, media, abilities } =
    heroesDetails[params.hero as keyof typeof heroesDetails];
  return (
    <>
      <div className="relative flex flex-col font-radiance lg:h-[50rem] lg:flex-row lg:overflow-hidden 2xl:h-[70rem]">
        <div className="row absolute left-20 top-[45rem] inline-flex origin-bottom-left rotate-[270deg] items-center">
          <Image
            src={stateImage[state as keyof typeof stateImage]}
            alt="hero state"
            width={22}
            height={22}
          />
          <span className="ml-3 font-reaver text-lg font-semibold uppercase tracking-widest">
            {heroName}
          </span>
          <div className="mb-1 ml-2 mr-2 h-[0.1rem] w-[45rem] bg-[#555]"></div>
        </div>
        <div className="ml-36 mt-40 flex w-full flex-col justify-start pr-60 lg:w-[40%] lg:pr-0">
          <div className="flex">
            <Image
              src={stateImage[state as keyof typeof stateImage]}
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
          <div>
            <p className="mt-8 text-lg font-bold uppercase tracking-widest text-[#959595]">
              Complexity
              {/* need to fix */}
            </p>
            <div className="ml-1 mt-2 flex h-20 w-20 justify-between">
              <div className="h-4 w-4 rotate-45 border border-solid border-[#fff]"></div>
              <div className="h-4 w-4 rotate-45 border border-solid border-[#fff]"></div>
              <div className="h-4 w-4 rotate-45 border border-solid border-[#fff]"></div>
            </div>
          </div>
        </div>
        <div className="relative -right-14 top-14 flex w-full flex-col items-center justify-center lg:w-[60%]">
          <MyVidoe media={media} />
          <div className="mt-[70%] flex -translate-x-9 flex-col flex-wrap items-center 2xl:mt-[20%]">
            <span className="mb-2 text-xl font-bold uppercase tracking-widest">
              Abilities
            </span>
            <div className="flex items-start gap-4">
              <Image
                src={talents}
                alt="talents tree"
                className="w-72px h-auto"
              />
              <Image src={innate} alt="innate icon" width={72} height={72} />
              <div className="flex w-[25rem] flex-wrap gap-4">
                {abilities.map((ability) => (
                  <Image
                    src={ability.abilityIcon}
                    alt={"ability icon"}
                    key={ability.name}
                    width={72}
                    height={72}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Ribbon />
      </div>
    </>
  );
};

export default heroPage;
