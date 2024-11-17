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
  const { state, heroIntro, heroName, shortDescription, media, abilities } =
    getHeroDetails(params.hero);

  return (
    <>
      <section className="relative flex flex-col font-radiance lg:h-[50rem] lg:flex-row lg:overflow-hidden 2xl:h-[70rem]">
        <VerticalLine heroName={heroName} state={state} />
        <HeroProfile
          state={state}
          heroIntro={heroIntro}
          heroName={heroName}
          shortDescription={shortDescription}
        />
        <HeroMedia abilities={abilities} media={media} />
        <Ribbon />
      </section>
    </>
  );
};

export default heroPage;
