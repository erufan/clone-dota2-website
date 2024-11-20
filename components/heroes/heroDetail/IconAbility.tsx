import Image from "next/image";
import { ReactElement } from "react";

interface Props {
  children: ReactElement<typeof Image>;
  description: string;
  name?: string;
}

const IconAbility = ({ children, description, name }: Props) => {
  return (
    <div className="group relative">
      {children}
      <div className="absolute -left-[180%] bottom-[120%] hidden w-80 clip-bottom-arrow group-hover:block">
        <div>here is ability video</div>
        <div className="bg-toolTipHeroGradient px-4 pb-9 pt-3">
          {name && (
            <p className="font-reaver text-xl font-semibold uppercase tracking-widest">
              {name}
            </p>
          )}
          <p className="mt-1 text-base tracking-normal text-[#acb8c7]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IconAbility;
