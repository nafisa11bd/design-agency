import styles from "./work-list.module.css";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/WorkList");
  if (!res.ok) {
    throw new Error("Fail");
  }
  return res.json();
}
const HowWorks = async () => {
  const data = await getData();
  return (
    <div className={styles["container"]}>
      <div className={styles["work-list"]}>
        <div className={styles["frame22"]}>
          <div className={styles["frame20"]}>
            <span className={styles["text"]}>
              <span>Work List</span>
            </span>
            <span className={styles["text02"]}>
              <span>
                We provide the Perfect Solution to your business growth
              </span>
            </span>
          </div>
          <div className={styles["frame21"]}>
            {data.map((item, i) => {
              return (
                <div key={i}>
                  <div className={styles["whatwedocard"]}>
                    <div className={styles["frame19"]}>
                      <div className={styles["activity"]}>
                        <img
                          src="https://icons8.com/icon/fS6gSrGwsmbr/follower"
                          alt="ActivityI290"
                          className={styles["activity1"]}
                        />
                      </div>
                      <div className={styles["frame18"]}>
                        <span className={styles["text04"]}>
                          <span>{item["title"]}</span>
                        </span>
                        <span className={styles["text06"]}>
                          <span>{item["des"]}</span>
                        </span>
                      </div>
                    </div>
                    <div className={styles["learn-morebtn"]}>
                      <span className={styles["text08"]}>
                        <span>Learn More</span>
                      </span>
                      <img
                        src="https://icons8.com/icon/11759/arrow"
                        alt="VectorI290"
                        className={styles["vector"]}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
