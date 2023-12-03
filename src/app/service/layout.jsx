export async function generateMetadata() {
  return {
    title: "service",
  };
}
const layout = ({ children }) => {
  return <div>{children}</div>;
};

export default layout;
