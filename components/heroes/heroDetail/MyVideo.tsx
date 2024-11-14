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
      className="absolute -left-[40%] z-[-1] min-h-full w-full min-w-[950px] mask-gradient"
    >
      <source type="video/webm" src={media.webm} />
      <source type='video/mp4; codecs="hvc1"' src={media.mov} />
      <img alt="abbadon" src={media.poster} />
    </video>
  );
};

export default MyVidoe;
