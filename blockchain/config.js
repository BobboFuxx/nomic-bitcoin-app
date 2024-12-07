// Blockchain configuration for Prysm
module.exports = {
  chainId: "prysm-devnet-1",
  bech32Prefix: "prysm",
  relayers: ["https://my-bitcoin-relayer.example.com:1234"],
  ibcChannel: "channel-0", // Update with the correct IBC channel for your chain
  bitcoinNetwork: "testnet",
};
