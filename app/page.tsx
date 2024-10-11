import { CiSearch } from "react-icons/ci";

import heroes from "@/data/heroes";
import stateImage from "@/data/state-image";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="px-5">
      <header className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-reaver font-bold">CHOOSE YOUR HERO</h1>
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
      <main className="grid grid-cols-5 px-32 gap-3">
        {heroes.map((hero) => (
          <Link href={`/${hero.slug}`} key={hero.name} className="group">
            <figure className="relative">
              <Image
                src={hero.icon}
                alt={hero.name}
                width={256}
                height={144}
                className="shadow-[1px_1px_#000]"
              />
              <figcaption className="hidden absolute bottom-1 group-hover:inline">
                <span>
                  <Image
                    src={stateImage[hero.state]}
                    alt={hero.state}
                    width={46}
                    height={46}
                  />
                  {hero.name}
                </span>
              </figcaption>
            </figure>
          </Link>
        ))}
      </main>
    </section>
  );
}
