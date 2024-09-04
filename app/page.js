import styles from "./page.module.css";
import { Montserrat } from "@next/font/google";
import Image from "next/image";
import logoPic from "./assets/top-casino-logo.svg";
import iconPresent from "./assets/present.png";

export const metadata = {
  title: "Top EU Casinos 2024!",
  description:
    "Welcome to EUcasinolist.com. Here we offer you carefully vetted and tested casinos that, with Trustly and Instank Bank, provide the best casino experience in Europe. You can rest and be assured of only high-quality casinos in our list.",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <>
      <header className={`${styles.header} ${montserrat.className}`}>
        <div className={styles.container}>
          <div className={`${styles["header-inner"]}`}>
            <div className={styles.logo}>
              <a className={`${styles["logo-link"]}`} href="#">
                <Image
                  className={`${styles["logo-img"]}`}
                  src={logoPic}
                  alt="Top Casinos EU"
                  width={133}
                  height={48}
                />
              </a>
            </div>
            <div className={styles.present}>
              <div className={`${styles["present-icon"]}`}>
                <a className={`${styles["present-link"]}`}>
                  <Image
                    className="header__present_icon-img"
                    src={iconPresent}
                    alt="Top Casinos Present"
                    width={35}
                    height={35}
                  />
                </a>
                <span className={`${styles["present-count"]}`}>2</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className={`${styles.casinos} ${montserrat.className}`}>
        <section className={`${styles["casinos-details"]}`}>
          <div className={styles.container}>
            <h1 className={`${styles["casinos-title"]}`}>
              Top EU Casinos 2024
            </h1>
            <p className={`${styles["casinos-description"]}`}>
              Welcome to TOPcasinoseu.com. We present a selection of
              meticulously vetted and tested casinos that utilize Trustly and
              Instant Bank, ensuring the best casino experience in Europe. You
              can relax, knowing that our list includes only high-quality,
              reliable casinos.
            </p>
          </div>
        </section>
        <section className={`${styles["casinos-offers"]}`}>
          <div className={styles.container}>
            <div className={`${styles["casinos-inner"]}`}>
              <div className={styles.offer}>Title of Casino</div>
              <div className={`${styles["play-details"]}`}>Play details</div>
              <div className={`${styles["payment-methods"]}`}>
                Payment methods
              </div>
              <div className={styles.description}>Description</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
