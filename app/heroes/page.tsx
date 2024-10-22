import { FaSearch } from "react-icons/fa";
import Image from "next/image";

import heroes from "@/data/heroes";
import HeroesGrid from "@/components/heroes/HeroesGrid";
import statusFilters from "@/utils/statusFilters";
import diamond from "@/public/filter/filter-diamond.png";

const HeroesPage = () => {
  const complexityFilter = [1, 2, 3];

  return (
    <section className="sm:px-20 md:px-28">
      <header className="flex flex-col items-center justify-center p-5">
        <h1 className="mb-1 mt-16 font-reaver text-[2.75rem] font-bold">
          CHOOSE YOUR HERO
        </h1>
        <p className="mx-14 mb-10 text-center font-radiance text-[1.45rem] leading-8 text-[#ddd]">
          From magical tacticians to fierce brutes and cunning rogues, Dota 2's
          hero pool is massive and limitlessly diverse. Unleash incredible
          abilities and devastating ultimates on your way to victory.
        </p>
        <nav className="bg-heroFilterGradient w-full min-w-[1050px] rounded-md border-[1px] border-[#11111190] p-3 font-radiance">
          <ul className="flex flex-wrap items-center justify-between">
            <li className="text-[1.1rem]">FILTER HEROES</li>
            <li className="flex items-center">
              <span className="mr-2 text-[1.1rem] opacity-45">ATTRIBUTE</span>
              {statusFilters.map((filter) => (
                <Image
                  className="-mr-1 brightness-50 saturate-0"
                  src={filter.dataImage}
                  alt={filter.key}
                  key={filter.key}
                  width={40}
                  height={28}
                />
              ))}
            </li>
            <li className="ml-1 flex items-center">
              <span className="mr-2 text-[1.1rem] opacity-45">COMPLEXITY</span>
              {complexityFilter.map((count) => (
                <Image
                  className="-mr-1 brightness-50 saturate-0"
                  src={diamond}
                  alt={"diamond"}
                  key={count}
                  width={40}
                  height={28}
                />
              ))}
            </li>
            <li className="flex items-center gap-2 bg-[#25282A] p-[0.35rem_0.35rem_0.35rem_0.15rem]">
              <FaSearch className="ml-1" color="#4D4D4D" size={24} />
              <form>
                <input
                  className="bg-[#25282A] p-1 outline-0 focus:border-[none] focus:bg-[#505050]"
                  type="text"
                />
              </form>
            </li>
          </ul>
        </nav>
      </header>
      <main className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 min-[2300px]:grid-cols-9">
        <HeroesGrid heroes={heroes} />
      </main>
    </section>
  );
};

export default HeroesPage;
