import styles from "./testimonial.module.css";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TestimonialList");
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
              <span className={styles["name"]}>{item["name"]}</span>
              <br />
              <span>{item["designation"]}</span>
              <br />
              <p>{item["msg"]}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default page;
