import styles from "../styles/Card.module.css";
import Button from "./Button";

interface CardProps {
  plan: string;
  price: number;
  features: string[];
  isFeatured?: boolean;
}

const Card = ({ plan, price, features, isFeatured }: CardProps) => {
  return (
    <article
      className={`${styles.card} grid-flow ${
        isFeatured ? styles.featured : ""
      }`}
      id="pricing-plans"
      data-spacing="large"
    >
      <h2 className={styles.cardTitle}>{plan}</h2>
      <p className={styles.cardPriceWrapper} aria-live="polite">
        $<span className={styles.cardPrice}>{price}</span>
      </p>
      <ul role="list" className={styles.cardFeatures}>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <Button />
    </article>
  );
};

export default Card;
