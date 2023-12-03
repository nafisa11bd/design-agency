import styles from "./service.module.css";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllService");
  if (!res.ok) {
    throw new Error("Fail");
  }
  return res.json();
}
const page = async () => {
  const data = await getData();
  return (
    <div>
      <h1 className={styles["name"]}>Our all services</h1>
      <h4>We provide best web design services</h4>
      <div className={styles["grid-container"]}>
        {data.map((item, i) => {
          return (
            <div key={i}>
              <span>{item["tag"]}</span>
              <div className={styles["grid-container-card"]}>
                <img className={styles["image"]} src={item["image1"]} />
                <img className={styles["image"]} src={item["image2"]} />
                <img className={styles["image"]} src={item["image3"]} />
                <img className={styles["image"]} src={item["image4"]} />
              </div>
              <span>{item["title"]}</span>
              <span>{item["des"]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
