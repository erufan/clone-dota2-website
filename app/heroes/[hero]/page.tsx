import Image from "next/image";
import stateImage from "@/data/state-image";

interface Props {
  params: { hero: string };
}

const heroPage = ({ params }: Props) => {
  return (
    <>
      <section className="relative min-h-[780px] w-full overflow-hidden p-[40px_100px_0px_140px] font-radiance">
        <div className="absolute h-[41rem] w-[150%] translate-x-[-50vw] skew-y-[-45deg] overflow-hidden bg-[#00000060]"></div>
        <div className="absolute -right-[5%] -top-[3%] flex h-full w-[80%] items-start justify-center">
          <video
            poster="https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abaddon.png"
            autoPlay
            loop
            preload="auto"
            playsInline
            muted
            className="min-h-full w-full min-w-[1500px] mask-gradient"
          >
            <source
              type='video/mp4; codecs="hvc1"'
              src="https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abaddon.mov"
            />
            <source
              type="video/webm"
              src="https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abaddon.webm?undefined"
            />
            <img
              width={1440}
              height={1440}
              alt="abbadon"
              src="https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abaddon.png"
            />
          </video>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-full w-full">
          <div
            style={{
              background:
                "linear-gradient(rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.733) 100%, rgb(0, 0, 0) 100%)",
            }}
          />
        </div>
        <div className="relative z-20 ml-8 mt-24 flex h-[calc(90%-100px)] min-h-0 w-[30%] flex-col">
          <div className="flex items-center">
            <Image
              width={32}
              height={32}
              alt="attribute"
              src={stateImage["universal"]}
            />
            <p className="ml-1 text-2xl font-thin uppercase tracking-widest">
              Universal
            </p>
          </div>
          <h1 className="mt-3 font-reaver text-6xl font-bold uppercase 2xl:text-7xl">
            Abaddon
          </h1>
          <p className="te mt-1 text-[18px] font-bold uppercase text-[#a5e0f3]">
            Shields his allies or himself from attacks
          </p>
        </div>
      </section>
      <div className="h-screen"></div>
    </>
  );
};

export default heroPage;
