"use client";

import classNames from "classnames";

import { Animal } from "@/app/stores/types";
import { RecursiveImage } from "@/app/shared/RecursiveImage";

import styles from "./card.module.css";

type CardProps = {
  type: Animal;
  population: number;
  increasePopulation: () => void;
  genocide: () => void;
};

export const Card = ({
  type,
  population,
  increasePopulation,
  genocide,
}: CardProps) => {
  return (
    <div className={classNames(styles.card, styles[type])}>
      <div className={styles.buttons}>
        <button
          onClick={increasePopulation}
          className={classNames(
            styles.button,
            styles["square-button"],
            styles[`${type}-button`]
          )}
        >
          +1
        </button>
        <button
          onClick={genocide}
          className={classNames(styles.button, styles[`${type}-button`])}
        >
          Геноцид
        </button>
      </div>
      {!!population && (
        <div className={styles.images}>
          <RecursiveImage population={population} type={type} isFirst />
        </div>
      )}
    </div>
  );
};
