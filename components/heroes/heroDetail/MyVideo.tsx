import Image from "next/image";

interface Props {
  media: { mov: string; webm: string; poster: string };
}

const MyVidoe = ({ media }: Props) => {
  return (
    <video
      poster={media.poster}
      autoPlay
      loop
      preload="auto"
      playsInline
      muted
      className="absolute -left-[12%] z-[-1] min-h-full w-full min-w-[600px] mask-gradient lg:-left-[40%] lg:min-w-[950px]"
    >
      <source type='video/mp4; codecs="hvc1"' src={media.mov} />
      <source type="video/webm" src={media.webm} />
      <Image alt="abbadon" src={media.poster} width={1440} height={1440} />
    </video>
  );
};

export default MyVidoe;
