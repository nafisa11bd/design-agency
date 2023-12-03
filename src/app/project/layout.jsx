export async function generateMetadata() {
  return {
    title: "project",
  };
}
const layout = ({ children }) => {
  return <div>{children}</div>;
};

export default layout;
