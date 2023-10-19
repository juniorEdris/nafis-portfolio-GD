import Image from "next/image";
import { cn } from "@/lib/utils";

interface ICustomImage {
  image: string;
  alt: string;
  className?: string;
  parentClassName?: string;
}

const ImageWithCustomSize = ({
  image = "",
  alt = "",
  className = "",
  parentClassName = "",
}: ICustomImage) => {
  return (
    <div
      className={cn("relative h-56 w-full overflow-hidden", parentClassName)}
    >
      <Image
        src={image}
        className={cn("w-full object-contain", className)}
        fill={true}
        priority={false}
        alt={alt}
      />
    </div>
  );
};

export default ImageWithCustomSize;
