import styles from "./featured-project.module.css";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/FeaturedProject");
  if (!res.ok) {
    throw new Error("Fail");
  }
  return res.json();
}
const FeaturedProjects = async () => {
  const data = await getData();
  return (
    <div className={styles["grid-container"]}>
      {data.map((item, i) => {
        return (
          <div key={i}>
            <div>
              <img className={styles["image"]} src={item["image"]} />
              <p>{item["title"]}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedProjects;
