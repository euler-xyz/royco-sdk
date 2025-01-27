import { defineMarket } from "@/sdk/constants";

export default defineMarket({
  id: `1_0_0x6262ac035c2284f5b5249a690a6fd81c35f1ecef501da089f25741a4492cf5f3`,
  name: `Infrared x Kodiak WBTC-HONEY LP`,
  description: `Deposit WBTC-USDC Uniswap V2 LP token(s) on Ethereum Mainnet and bridge the assets to Berachain. On Berachain, mint HONEY with all of the USDC, then provide liquidity in the WBTC-HONEY Kodiak Island, an automated liquidity management vault that tokenizes a &quot;wide&quot; range Uniswap V3 style liquidity position. Finally, stake the Island receipt token in the respective Infrared iBGT-compatible Vault. 

Earn DEX LP fees, as well as rewards from Berachain, Infrared and Kodiak. 

This is part of the Berachain&#x27;s Boyco pre-deposit campaign. This market qualifies for the HIGHEST multiplier rewards from Berachain. 

3% of the Kodiak token supply is allocated to Boyco, proportional to TVL * multiplier.  This specific market has a ~12x multiplier for Bodiak points. More info on Kodiak's Boyco rewards: https://docs.kodiak.finance/kodiak-boyco`,
  is_verified: true,
  category: `boyco`,

  incentive_ids: ["1-0x31dd27d7479b09f1c96aa94681845c0eb0026ef8"],

  external_incentives: [
    {
      token_id: "1-0x77d17183055303a15208c809b716dc02261129b7",
      label: "Infrared Points",

      value: async ({ roycoClient, chainClient }) => {
        const value = "6x";
        return value;
      },
    },
    {
      token_id: "1-0x31dd27d7479b09f1c96aa94681845c0eb0026ef8",
      label: "DEX Fees",

      value: async ({ roycoClient, chainClient }) => {
        const value = "Estimated 15-30% APY";
        return value;
      },
    },
  ],
});
