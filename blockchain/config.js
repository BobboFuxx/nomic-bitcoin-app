// Blockchain configuration for Prysm
module.exports = {
  chainId: "prysm-devnet-1",
  bech32Prefix: "prysm",
  relayers: ["https://my-bitcoin-relayer.example.com:1234"], //Nomic relayer
  ibcChannel: "channel-0", // Update with the correct IBC channel for prysm<>nomic, channel-0 is prysm<>osmosis relay channel
  bitcoinNetwork: "testnet",
};
