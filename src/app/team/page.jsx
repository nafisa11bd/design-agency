import styles from "./team.module.css";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TeamList");
  if (!res.ok) {
    throw new Error("Fail");
  }
  return res.json();
}
const page = async () => {
  const data = await getData();
  return (
    <div className={styles["grid-container"]}>
      {data.map((item, i) => {
        return (
          <div key={i}>
            <div>
              <img className={styles["image"]} src={item["image"]} />
              <p>{item["name"]}</p>
              <p>{item["bio"]}</p>
              <button className={styles["button"]}>
                <a href={item["facebook"]}>Facebook</a>
              </button>

              <button className={styles["button"]}>
                <a href={item["twitter"]}>Twitter</a>
              </button>
              <button className={styles["button"]}>
                <a href={item["instagram"]}>Instagram</a>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default page;
