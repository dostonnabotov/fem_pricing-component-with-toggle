import styles from "../styles/Card.module.css";
import Button from "./Button";

interface CardProps {
  plan: string;
  price: number;
  isFeatured?: boolean;
}

const Card = ({ plan, price, isFeatured }: CardProps) => {
  return (
    <div
      className={`${styles.card} grid-flow ${
        isFeatured ? styles.featured : ""
      }`}
      data-spacing="large"
    >
      <h2 className={styles.cardTitle}>{plan}</h2>
      <p className={styles.cardPriceWrapper}>
        $<span className={styles.cardPrice}>{price}</span>
      </p>
      <ul role="list" className={styles.cardFeatures}>
        <li>500 GB Storage</li>
        <li>2 Users Allowed</li>
        <li>Send up to 3 GB</li>
      </ul>
      <Button />
    </div>
  );
};

export default Card;
