import { css } from "../../../styles/style.js";
export default function Currency() {
  const title = [
    {
      label: "Currency",
    },
    {
      label: "We Buy",
    },
    {
      label: "Exchange Rate",
    },
    {
      label: "We Sell",
    },
  ];
  return (
    <div className={styles.container()}>
      {title.map((item) => {
        return <div>{item.label}</div>;
      })}
    </div>
  );
}

const styles = {
  container: css({
    justifyContent: "space-between",
    display: "flex",
    marginTop: "10%",
    marginRight: "30%",
    marginLeft: "30%",
  }),
};
