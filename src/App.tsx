import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import plansData from "./data/plans.json";

export type planPeriodTypes = "monthly" | "annually";

const App = () => {
  const [planPeriod, setPlanPeriod] = useState<planPeriodTypes>("monthly");

  return (
    <div className="container">
      <Header planPeriod={planPeriod} setPlanPeriod={setPlanPeriod} />
      <div className="cards">
        {plansData.map((item) => (
          <Card
            key={item.plan}
            plan={item.plan}
            price={
              planPeriod == "monthly" ? item.price.monthly : item.price.annually
            }
            features={item.features}
            isFeatured={item.isFeatured}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
