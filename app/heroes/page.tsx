import { CiSearch } from "react-icons/ci";

import heroes from "@/data/heroes";
import HeroesGrid from "@/components/heroes/HeroesGrid";

const HeroesPage = () => {
  return (
    <section className="sm:px-20 md:px-28">
      <header className="flex flex-col items-center justify-center">
        <h1 className="font-reaver text-4xl font-bold">CHOOSE YOUR HERO</h1>
        <p>
          From magical tacticians to fierce brutes and cunning rogues, Dota 2's
          hero pool is massive and limitlessly diverse. Unleash incredible
          abilities and devastating ultimates on your way to victory.
        </p>
        <nav>
          <ul>
            <li>Filter Heroes</li>
            <li>
              <span>Attribute</span>
              <div></div>
              <div></div>
              <div></div>
            </li>
            <li>
              <span>Complexity</span>
              <div></div>
              <div></div>
              <div></div>
            </li>
            <li>
              <div>
                <div>
                  <CiSearch />
                </div>
                <form>
                  <input type="text" />
                </form>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <main className="grid grid-cols-3 gap-3 min-[640px]:grid-cols-4 md:grid-cols-5 min-[1650px]:grid-cols-9">
        <HeroesGrid heroes={heroes} />
      </main>
    </section>
  );
};

export default HeroesPage;
