"use client";
import styles from "./sitenavbar.module.css";
import Link from "next/link";

const SiteNavBar = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["main-menu-content"]}>
        <div className={styles["frame8"]}>
          <span className={styles["text"]}>
            <span className={styles["text01"]}>Design</span>
            <span>AGENCY</span>
          </span>
        </div>
        <div className={styles["frame7"]}>
          <div className={styles["frame30"]}>
            <Link href="/">
              <span className={styles["text03"]}>
                <span>Home</span>
              </span>
            </Link>
          </div>
          <div className={styles["frame301"]}>
            <Link href="/team">
              <span className={styles["text05"]}>
                <span>Team</span>
              </span>
            </Link>
          </div>
          <div className={styles["frame3"]}>
            <Link href="/service">
              <span className={styles["text07"]}>
                <span>Service</span>
              </span>
            </Link>
          </div>
          <div className={styles["frame4"]}>
            <Link href="/project">
              <span className={styles["text09"]}>
                <span>Projects</span>
              </span>
            </Link>
          </div>
          <div className={styles["frame32"]}>
            <Link href="/testimonial">
              <span className={styles["text11"]}>
                <span>Testimonials</span>
              </span>
            </Link>
          </div>
          <div className={styles["frame5"]}>
            <span className={styles["text13"]}>
              <span>Login</span>
            </span>
          </div>
          <div className={styles["frame6"]}>
            <span className={styles["text15"]}>
              <span>Register</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteNavBar;
