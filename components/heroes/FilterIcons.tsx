import Image, { StaticImageData } from "next/image";

interface Filters {
  key: string;
  dataImage: StaticImageData;
}

interface Props {
  filters: Filters[];
  caption: string;
}

const FilterIcons = ({ filters, caption }: Props) => {
  return (
    <>
      <li className="flex items-center">
        <span className="mr-2 opacity-45">{caption}</span>
        {filters.map((filter) => (
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
    </>
  );
};

export default FilterIcons;
