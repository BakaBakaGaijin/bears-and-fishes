import Image from "next/image";
import classNames from "classnames";

import { Animal } from "@/app/stores/types";

import styles from "./recursive-image.module.css";

const IMAGES = {
  bear: "/bear.webp",
  fish: "/fish.webp",
};

type RecursiveImageProps = {
  population: number;
  type: Animal;
  isFirst: boolean;
};

export const RecursiveImage = (props: RecursiveImageProps) => {
  const { population, type, isFirst } = props;

  console.log("population:", population);
  return (
    <div
      className={classNames(styles["image-container"], {
        [`${styles["image-container-first"]}`]: isFirst,
      })}
    >
      <Image
        key={`${type}-${population}`}
        className={classNames({
          [`${styles["added-animal"]}`]: population === 1,
        })}
        src={IMAGES[type]}
        width={100}
        height={100}
        alt={type}
      />
      {population - 1 > 0 && (
        <RecursiveImage
          {...props}
          population={population - 1}
          isFirst={false}
        />
      )}
    </div>
  );
};
