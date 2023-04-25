import Toggle from "./Toggle";
import styles from "../styles/Header.module.css";
import { Dispatch, SetStateAction } from "react";
import { planPeriodTypes } from "../App";

interface HeaderProps {
  planPeriod: string;
  setPlanPeriod: Dispatch<SetStateAction<planPeriodTypes>>;
}

const Header = ({ planPeriod, setPlanPeriod }: HeaderProps) => {
  return (
    <header className={`${styles.header} grid-flow`} data-spacing="large">
      <h1 className="site-title">Our pricing</h1>
      <div className={`${styles.headerPanel} flex-group`}>
        <span>Annually</span>
        <Toggle planPeriod={planPeriod} setPlanPeriod={setPlanPeriod} />
        <span>Monthly</span>
      </div>
    </header>
  );
};

export default Header;
