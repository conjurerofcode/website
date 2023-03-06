import { useEffect, useState } from "react";

const preloadImageWithPromise = (src: string) => {
  return new Promise<void>((res, rej) => {
    const img = new Image();

    img.onload = () => {
      res();
    };
    img.src = src;
  });
};

function BlurImage({
  src,
  base64,
  isCard,
}: {
  src: string;
  base64: string;
  isCard?: boolean;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  const loadImage = async () => {
    await preloadImageWithPromise(src);
    setIsLoaded((prev) => true);
  };
  useEffect(() => {
    loadImage();
  }, []);
  const currentSrc = isLoaded ? src : base64;
  return isCard ? (
    <div className="rounded-lg h-full w-full bg-contain h-max-[30vh]">
      <img
        className="rounded-lg h-full w-full max-h-[30vh]"
        src={currentSrc}
        style={{
          filter: !isLoaded ? "blur(20px)" : "none",
          transition: "filter 0.3s ease-out",
        }}
      ></img>
    </div>
  ) : (
    <div className="rounded-lg h-full w-full bg-contain ">
      <img
        className="rounded-lg h-full w-full"
        src={currentSrc}
        style={{
          filter: !isLoaded ? "blur(20px)" : "none",
          transition: "filter 0.3s ease-out",
        }}
      ></img>
    </div>
  );
}

export default BlurImage;

// Source Leigh Halliday https://www.youtube.com/watch?v=CwpuYAQM0CY
