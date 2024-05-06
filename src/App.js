import "./App.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Statistics from "./components/Statistics";
import AverageUser from "./components/AverageUser";
import Trade from "./components/Trade";
import StaockTrading from "./components/StaockTrading";
import Backtotop from "./components/Backtotop";

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 2500 });
  }, []);

  const [first, setfirst] = useState(true);
  useEffect(() => {
    setfirst(true);
    setTimeout(() => {
      setfirst(false);
    }, 3000);
  }, []);

  return (
    <>
      <Trade />
      <Statistics />
      <AverageUser />
      <StaockTrading />
      <Backtotop />
    </>
  );
}

export default App;
