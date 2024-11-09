import { useState } from "react";
import Image from "next/image";

interface FallbackImageProps {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
  fallbackSrc?: string;
}

export default function FallbackImage({
  src,
  alt,
  className,
  width,
  height,
  fallbackSrc = "/images/logos/default.webp",
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      onError={() => {
        console.error("图片加载失败");
        setImgSrc(fallbackSrc);
      }}
      className={className}
      width={width}
      height={height}
    />
  );
}
