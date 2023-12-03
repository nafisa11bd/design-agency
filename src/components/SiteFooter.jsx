import styles from "./web-logo-container.module.css";
const SiteFooter = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.copyrightDesignAgency}>
        Copyright Design Agency 2022
      </div>
      <div className={styles.frame}>
        <div className={styles.webLogoWrapper}>
          <b className={styles.webLogo}>WEB LOGO</b>
        </div>
        <div className={styles.someFooterText}>
          Some footer text about the Agency. Just a little description to help
          people understand you better
        </div>
        <div className={styles.frameInner}>
          <div className={styles.groupParent}>
            <img className={styles.frameChild} alt="" src="/group-32.svg" />
            <img className={styles.frameChild} alt="" src="/group-33.svg" />
            <img className={styles.frameChild} alt="" src="/group-34.svg" />
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            </div>
          </div>
        </div>
        <div className={styles.quickLinks}>Quick Links</div>
        <div className={styles.address}>Address</div>
        <div className={styles.servicesParent}>
          <div className={styles.services}>Services</div>
          <div className={styles.services}>Portfolio</div>
          <div className={styles.services}>{`About Us `}</div>
          <div className={styles.services}>Contact Us</div>
        </div>
        <div className={styles.designAgencyHeadContainer}>
          <p className={styles.designAgencyHead}>Design Agency Head Office.</p>
          <p className={styles.designAgencyHead}>Airport Road</p>
          <p className={styles.designAgencyHead}>United Arab Emirate</p>
        </div>
      </div>
    </div>
  );
};

export default SiteFooter;
