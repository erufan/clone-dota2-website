import heroes from "@/data/heroes";
import HeroesGrid from "@/components/heroes/HeroesGrid";
import statusFilters from "@/utils/statusFilters";
import complexityFilters from "@/utils/complexityFilters";
import FilterIcons from "@/components/heroes/FilterIcons";
import useFilteredHeroes from "@/hooks/useFilteredHeroes";
import HeroSearchQuery from "@/interface/heroes/HeroSearchQuery";
import SearchHero from "@/components/heroes/SearchHero";

interface Props {
  searchParams: HeroSearchQuery;
}

const HeroesPage = ({ searchParams }: Props) => {
  const filteredHeros = useFilteredHeroes(heroes, searchParams);

  return (
    <section className="overflow-x-hidden sm:px-20 md:px-28">
      <header className="flex flex-col items-center justify-center p-5">
        <h1 className="mb-1 mt-16 font-reaver text-[2.75rem] font-bold">
          CHOOSE YOUR HERO
        </h1>
        <p className="mx-14 mb-10 text-center font-radiance text-[1.45rem] leading-8 text-[#ddd]">
          From magical tacticians to fierce brutes and cunning rogues, Dota 2's
          hero pool is massive and limitlessly diverse. Unleash incredible
          abilities and devastating ultimates on your way to victory.
        </p>
        <nav className="w-full min-w-[1050px] rounded-md border-[1px] border-[#11111190] bg-heroFilterGradient p-3 font-radiance">
          <ul className="flex flex-col flex-wrap items-center justify-between gap-5 text-[1.1rem] lg:flex-row lg:gap-0 2xl:text-[2rem]">
            <li>FILTER HEROES</li>
            <li className="flex items-center">
              <FilterIcons
                filters={statusFilters}
                caption="ATTRIBUTE"
                searchParams={searchParams}
              />
            </li>
            <li className="flex items-center">
              <FilterIcons
                filters={complexityFilters}
                caption="COMPLEXITY"
                searchParams={searchParams}
              />
            </li>
            <li className="flex items-center gap-2 bg-[#25282A] p-[0.35rem_0.35rem_0.35rem_0.15rem]">
              <SearchHero />
            </li>
          </ul>
        </nav>
      </header>
      <main className="mb-28 grid gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 min-[2300px]:grid-cols-9">
        <HeroesGrid heroes={filteredHeros} />
      </main>
    </section>
  );
};

export default HeroesPage;
