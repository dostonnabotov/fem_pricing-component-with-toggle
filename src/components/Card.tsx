import styles from "../styles/Card.module.css";
import Button from "./Button";

const Card = () => {
  return (
    <div className={`${styles.card} grid-flow`}>
      <h2>Basic</h2>
      <p>$199.99</p>
      <ul role="list">
        <li>500 GB Storage</li>
        <li>2 Users Allowed</li>
        <li>Send up to 3 GB</li>
      </ul>
      <Button />
    </div>
  );
};

export default Card;
