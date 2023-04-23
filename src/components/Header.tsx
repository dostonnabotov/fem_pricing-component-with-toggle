import Toggle from "./Toggle";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={`${styles.header} grid-flow`} data-spacing="large">
      <h1 className="site-title">Our pricing</h1>
      <div className={`${styles.headerPanel} flex-group`}>
        <span>Annually</span>
        <Toggle />
        <span>Monthly</span>
      </div>
    </header>
  );
};

export default Header;
