import React, { useState } from "react";
import axios from "axios";

const PendingDeposits = () => {
  const [receiver, setReceiver] = useState("");
  const [pending, setPending] = useState([]);

  const handleFetchPending = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/pending-deposits/${receiver}`);
      setPending(response.data);
    } catch (error) {
      console.error("Error fetching pending deposits:", error);
    }
  };

  return (
    <div>
      <h2>Pending Deposits</h2>
      <input
        type="text"
        placeholder="Enter your Prysm (bech32) address"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
      />
      <button onClick={handleFetchPending}>Fetch Pending Deposits</button>
      <ul>
        {pending.map((deposit, idx) => (
          <li key={idx}>
            TxID: {deposit.txid}, Amount: {deposit.amount} sats, Confirmations: {deposit.confirmations}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PendingDeposits;
