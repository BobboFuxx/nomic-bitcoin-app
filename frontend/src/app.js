import React from "react";
import Deposit from "./components/Deposit";
import PendingDeposits from "./components/PendingDeposits";
import Withdraw from "./components/Withdraw";

function App() {
  return (
    <div>
      <h1>Prysm Bitcoin Bridge</h1>
      <Deposit />
      <PendingDeposits />
      <Withdraw />
    </div>
  );
}

export default App;
