import React, { useState } from "react";
import axios from "axios";

const Withdraw = () => {
  const [bitcoinAddress, setBitcoinAddress] = useState("");

  const handleWithdraw = async () => {
    try {
      const response = await axios.post("http://localhost:3001/withdraw", { bitcoinAddress });
      alert("Withdrawal initiated! Destination data: " + JSON.stringify(response.data));
    } catch (error) {
      console.error("Error initiating withdrawal:", error);
    }
  };

  return (
    <div>
      <h2>Withdraw Bitcoin</h2>
      <input
        type="text"
        placeholder="Enter Bitcoin Address"
        value={bitcoinAddress}
        onChange={(e) => setBitcoinAddress(e.target.value)}
      />
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};

export default Withdraw;
