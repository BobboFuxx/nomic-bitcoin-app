import React, { useState } from "react";
import axios from "axios";
import QRCode from "react-qr-code";

const Deposit = () => {
  const [receiver, setReceiver] = useState("");
  const [depositInfo, setDepositInfo] = useState(null);

  const handleGenerateDeposit = async () => {
    try {
      const response = await axios.post("http://localhost:3001/generate-deposit", { receiver });
      setDepositInfo(response.data);
    } catch (error) {
      console.error("Error generating deposit address:", error);
    }
  };

  return (
    <div>
      <h2>Deposit Bitcoin</h2>
      <input
        type="text"
        placeholder="Enter your Prysm (bech32) address"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
      />
      <button onClick={handleGenerateDeposit}>Generate Address</button>
      {depositInfo && (
        <div>
          <p>Bitcoin Address: {depositInfo.bitcoinAddress}</p>
          <p>Expires At: {new Date(depositInfo.expirationTimeMs).toLocaleString()}</p>
          <QRCode value={depositInfo.bitcoinAddress} />
        </div>
      )}
    </div>
  );
};

export default Deposit;
