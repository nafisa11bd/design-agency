import styles from "./hero-list.module.css";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/HeroList");
  if (!res.ok) {
    throw new Error("Fail");
  }
  return res.json();
}
async function getData2() {
  const res2 = await fetch(process.env.BASE_URL + "api/BrandList");
  if (!res2.ok) {
    throw new Error("Fail");
  }
  return res2.json();
}
const Hero = async () => {
  const data = await getData();
  const data2 = await getData2();
  return (
    <div className={styles["container"]}>
      <div className={styles["hero-list"]}>
        <div className={styles["our-partners"]}>
          <div className={styles["group1"]}>
            {data2.map((item, i) => {
              return (
                <div key={i} className={styles["brand"]}>
                  <img src={item["image"]} />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles["frame12"]}>
          <div className={styles["headertext-content"]}>
            <span className={styles["text"]}>
              <span>Increase Your Customers Loyalty and Satisfaction</span>
            </span>
            <span className={styles["text2"]}>
              <span>
                We help businesses like yours earn more customers, standout from
                competitors, make more money
              </span>
            </span>
          </div>
          <div className={styles["header-cta"]}>
            <span className={styles["text4"]}>
              <span>Get Started</span>
            </span>
          </div>
        </div>
        <div className={styles["frame39"]}>
          <img
            alt="Rectangle12411075"
            src={data["image1"]}
            className={styles["rectangle1241"]}
          />
          <img
            alt="Rectangle12431075"
            src={data["image2"]}
            className={styles["rectangle1243"]}
          />
          <img
            alt="Rectangle12441075"
            src={data["image3"]}
            className={styles["rectangle1244"]}
          />
          <img
            alt="Rectangle12421075"
            src={data["image4"]}
            className={styles["rectangle1242"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
