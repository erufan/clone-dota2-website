import Link from "next/link";
import Image from "next/image";

import Heroes from "@/interface/Heroes";
import stateImage from "@/data/state-image";

interface Props {
  heroes: Heroes[];
}

const HeroesGrid = ({ heroes }: Props) => {
  return (
    <>
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
            <figcaption className="flex gap-1 absolute bottom-1 group-hover:flex">
              <Image
                src={stateImage[hero.state]}
                alt={hero.state}
                width={26}
                height={26}
              />
              <span className="text-2xl">{hero.name}</span>
            </figcaption>
          </figure>
        </Link>
      ))}
    </>
  );
};

export default HeroesGrid;
