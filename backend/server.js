const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {
  generateDepositAddressIbc,
  getPendingDeposits,
  buildDestination,
} = require("nomic-bitcoin");
const config = require("../blockchain/config");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Endpoint to generate a deposit address for Prysm blockchain
app.post("/generate-deposit", async (req, res) => {
  const { receiver } = req.body;
  try {
    const depositInfo = await generateDepositAddressIbc({
      relayers: config.relayers,
      channel: config.ibcChannel,
      bitcoinNetwork: config.bitcoinNetwork,
      receiver,
    });
    if (depositInfo.code === 2) {
      return res.status(400).json({ error: "Bridge capacity limit reached" });
    }
    res.json(depositInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to query pending deposits for a user
app.get("/pending-deposits/:receiver", async (req, res) => {
  const { receiver } = req.params;
  try {
    const pendingDeposits = await getPendingDeposits(config.relayers, receiver);
    res.json(pendingDeposits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to process withdrawals to a Bitcoin address
app.post("/withdraw", async (req, res) => {
  const { bitcoinAddress } = req.body;
  try {
    const destination = buildDestination({ bitcoinAddress });
    res.json(destination);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
