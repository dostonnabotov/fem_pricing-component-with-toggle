import { Dispatch, SetStateAction } from "react";
import styles from "../styles/Toggle.module.css";
import { planPeriodTypes } from "../App";

interface ToggleProps {
  planPeriod: string;
  setPlanPeriod: Dispatch<SetStateAction<planPeriodTypes>>;
}

const Toggle = ({ planPeriod, setPlanPeriod }: ToggleProps) => {
  return (
    <div className={styles.toggle}>
      <input
        type="checkbox"
        id="planPeriodToggle"
        aria-describedby="pricing-plans"
        checked={planPeriod === "monthly"}
        onChange={(e) => {
          setPlanPeriod(e.target.checked ? "monthly" : "annually");
        }}
      />
      <label htmlFor="planPeriodToggle">
        <span className="sr-only">Toggle Switch</span>
      </label>
    </div>
  );
};

export default Toggle;
