import styles from "./stat-list.module.css";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/StatList");
  if (!res.ok) {
    throw new Error("Fail");
  }
  return res.json();
}
const Stat = async () => {
  const data = await getData();
  return (
    <div className={styles["container"]}>
      <div className={styles["stat-list"]}>
        <div className={styles["frame44"]}>
          <div className={styles["frame41"]}>
            <div className={styles["frame40"]}>
              <img
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/5392b405-452b-4fa6-a1df-418503d9cca0/08788490-b1c9-4b16-a08e-bf15c0281bf1?org_if_sml=1710&amp;force_format=original"
                alt="Rectangle12461075"
                className={styles["rectangle1246"]}
              />
              <div className={styles["hicon-linear-group3"]}>
                <div className={styles["group3"]}>
                  <img
                    src="/vector1075-grkv.svg"
                    alt="Vector1075"
                    className={styles["vector"]}
                  />
                  <img
                    src="/vector1075-vgpw.svg"
                    alt="Vector1075"
                    className={styles["vector1"]}
                  />
                </div>
              </div>
              <span className={styles["text"]}>
                <span>{data["followers"]}</span>
              </span>
              <span className={styles["text02"]}>
                <span>Followers</span>
              </span>
            </div>
          </div>
          <div className={styles["frame42"]}>
            <div className={styles["frame401"]}>
              <img
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/5392b405-452b-4fa6-a1df-418503d9cca0/683c446c-601c-4653-a317-c59b7f561c23?org_if_sml=1710&amp;force_format=original"
                alt="Rectangle12461075"
                className={styles["rectangle12461"]}
              />
              <img
                src="/hiconlinearlike1076-9jga.svg"
                alt="HiconLinearLike1076"
                className={styles["hicon-linear-like"]}
              />
              <span className={styles["text04"]}>
                <span>{data["solved"]}</span>
              </span>
              <span className={styles["text06"]}>
                <span>Solved Problems</span>
              </span>
            </div>
          </div>
          <div className={styles["frame43"]}>
            <div className={styles["frame402"]}>
              <img
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/5392b405-452b-4fa6-a1df-418503d9cca0/c86e42f9-08f6-4054-aa16-2871e88a4dff?org_if_sml=1710&amp;force_format=original"
                alt="Rectangle12461076"
                className={styles["rectangle12462"]}
              />
              <div className={styles["hicon-linear-happy1"]}>
                <div className={styles["happy1"]}>
                  <img
                    src="/vector1076-bzzk.svg"
                    alt="Vector1076"
                    className={styles["vector2"]}
                  />
                  <img
                    src="/vector1076-9b9.svg"
                    alt="Vector1076"
                    className={styles["vector3"]}
                  />
                </div>
              </div>
              <span className={styles["text08"]}>
                <span>{data["customers"]}</span>
              </span>
              <span className={styles["text10"]}>
                <span>Happy Customers</span>
              </span>
            </div>
          </div>
          <div className={styles["frame441"]}>
            <div className={styles["frame403"]}>
              <img
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/5392b405-452b-4fa6-a1df-418503d9cca0/eb6107ca-90ca-4669-8519-7fa4f948283e?org_if_sml=1710&amp;force_format=original"
                alt="Rectangle12461076"
                className={styles["rectangle12463"]}
              />
              <img
                src="/hiconlinearscan31076-171.svg"
                alt="HiconLinearScan31076"
                className={styles["hicon-linear-scan3"]}
              />
              <span className={styles["text12"]}>
                <span>{data["projects"]}</span>
              </span>
              <span className={styles["text14"]}>
                <span>projects</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
