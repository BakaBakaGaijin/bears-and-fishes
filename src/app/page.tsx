import { BearsCards } from "./widgets/BearsCards";
import { FishesCards } from "./widgets/FishesCards";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <main>
        <div className={styles.cards}>
          <BearsCards />
          <FishesCards />
        </div>
        <div className={styles.colors}>
          <div className={styles.color}></div>
          <div className={styles.color}></div>
          <div className={styles.color}></div>
          <div className={styles.color}></div>
          <div className={styles.color}></div>
          <div className={styles.color}></div>
          <div className={styles.color}></div>
        </div>
      </main>
    </div>
  );
}
