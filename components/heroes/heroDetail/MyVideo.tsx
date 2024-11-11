const MyVidoe = () => {
  return (
    <video
      poster="https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abaddon.png"
      autoPlay
      loop
      preload="auto"
      playsInline
      muted
      className="z-[-1] mr-40 min-h-full w-full min-w-[1000px] mask-gradient"
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
        alt="abbadon"
        src="https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abaddon.png"
      />
    </video>
  );
};

export default MyVidoe;
