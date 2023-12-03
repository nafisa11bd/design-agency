import React from "react";
import styles from "./subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["subscribesection"]}>
        <div className={styles["frame39"]}>
          <div className={styles["frame17"]}>
            <div className={styles["frame16"]}>
              <span className={styles["text"]}>
                <span>SUBSCRIBE</span>
              </span>
              <span className={styles["text02"]}>
                <span>Subscribe to get the latest news about us</span>
              </span>
            </div>
            <span className={styles["text04"]}>
              <span>
                Please drop your email below to get daily update about what we
                do
              </span>
            </span>
          </div>
          <div className={styles["frame38"]}>
            <div className={styles["frame37"]}>
              <span className={styles["text06"]}>
                <span>Enter Your Email Adress</span>
              </span>
              <div className={styles["header-cta"]}>
                <span className={styles["text08"]}>
                  <span>Subscribe</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
