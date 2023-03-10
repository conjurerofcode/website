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
  style,
}: {
  src: string;
  base64: string;
  isCard: boolean;
  style?: string;
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
    <div className={`${style} rounded-lg h-full w-full overflow-hidden`}>
      <img
        className="rounded-lg h-full w-full max-h-[30vh]"
        loading="lazy"
        src={currentSrc}
        style={{
          objectFit: "cover",
          transition: "filter 0.3s ease-out",
          filter: !isLoaded ? "blur(20px)" : "none",
        }}
      ></img>
    </div>
  ) : (
    <div className={` h-full w-full overflow-hidden rounded-lg  ${style}`}>
      <img
        className="h-full w-full   self-center rounded-lg "
        loading="lazy"
        alt={`${currentSrc.slice(5)}`}
        src={currentSrc}
        style={{
          objectFit: "contain",
          transition: "filter 0.3s ease-out",
          filter: !isLoaded ? "blur(20px)" : "none",
        }}
      ></img>
    </div>
  );
}
BlurImage.defaultProps = { isCard: false };
export default BlurImage;

// Source Leigh Halliday https://www.youtube.com/watch?v=CwpuYAQM0CY
