import styles from "../styles/Home.module.css";
export default function Home() {
  const submit = () => {
    console.log("hi");
  };
  return (
    <div>
      <Category />
      <Category />
      <Category />
      <Category />
    </div>
  );
}

const Category = () => {
  return (
    <div
      style={{
        textAlign: "center",
        width: "fit-content",
      }}
    >
      <img
        width={500}
        src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Tesla/Model-3/5251/1693556345148/front-left-side-47.jpg?imwidth=890&impolicy=resize"
      />
      <p
        style={{
          fontSize: 50,
          fontWeight: 700,
        }}
      >
        Model Y
      </p>
    </div>
  );
};
