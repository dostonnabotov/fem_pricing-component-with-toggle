import Card from "./components/Card";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="cards">
        <Card plan="Basic" price={199.99} />
        <Card plan="Professional" price={249.99} isFeatured={true} />
        <Card plan="Master" price={399.99} />
      </div>
    </>
  );
};

export default App;
