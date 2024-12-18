import getHeroDetails from "@/utils/getHeroDetails";

import Ribbon from "@/components/heroes/heroDetail/Ribbon";
import heroesDetails from "@/data/heroesDetails";
import VerticalLine from "@/components/heroes/heroDetail/VerticalLine";
import HeroProfile from "@/components/heroes/heroDetail/HeroProfile";
import HeroMedia from "@/components/heroes/heroDetail/HeroMedia";

interface Props {
  params: { hero: keyof typeof heroesDetails };
}

const heroPage = ({ params }: Props) => {
  const {
    state,
    heroIntro,
    heroName,
    shortDescription,
    history,
    media,
    abilities,
    complexity,
  } = getHeroDetails(params.hero);

  return (
    <>
      <section className="relative flex flex-col justify-between overflow-x-hidden font-radiance lg:h-[50rem] lg:flex-row lg:overflow-hidden 2xl:h-[70rem]">
        <VerticalLine heroName={heroName} state={state} />
        <div className="ml-36 mt-40 flex w-full flex-col justify-start pr-60 lg:w-[40%] lg:pr-0">
          <HeroProfile
            state={state}
            heroIntro={heroIntro}
            heroName={heroName}
            shortDescription={shortDescription}
            history={history}
            complexity={complexity}
          />
        </div>
        <HeroMedia abilities={abilities} media={media} />
        <Ribbon />
      </section>
    </>
  );
};

export default heroPage;
