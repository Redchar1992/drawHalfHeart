# Uniswap Interface

 

[![68747470733a2f2f6261646765732e63726f7764696e2e6e65742f756e69737761702d696e746572666163652f6c6f63616c697a65642e737667.svg](blob:file:///0edf2527-581a-44ed-a36c-5f7f9f86640c)](https://crowdin.com/project/uniswap-interface)

An open source interface for Uniswap -- a protocol for decentralized exchange of Ethereum tokens.

- Website: [uniswap.org](https://uniswap.org/)

- Interface: [app.uniswap.org](https://app.uniswap.org/)

- Docs: [uniswap.org/docs/](https://docs.uniswap.org/)

- Twitter: [@Uniswap](https://twitter.com/Uniswap)

- Reddit: [/r/Uniswap](https://www.reddit.com/r/Uniswap/)

- Email: [contact@uniswap.org](mailto:contact@uniswap.org)

- Discord: [Uniswap](https://discord.gg/FCfyBSbCU5)

- Whitepapers:

- - [V1](https://hackmd.io/C-DvwDSfSxuh-Gd4WKE_ig)
  - [V2](https://uniswap.org/whitepaper.pdf)
  - [V3](https://uniswap.org/whitepaper-v3.pdf)

##  

## Accessing the Uniswap Interface

To access the Uniswap Interface, use an IPFS gateway link from the [latest release](https://github.com/Uniswap/uniswap-interface/releases/latest), or visit [app.uniswap.org](https://app.uniswap.org/).

##  

## Unsupported tokens

Check out useUnsupportedTokenList() in [src/state/lists/hooks.ts](https://github.com/Uniswap/interface/blob/main/src/state/lists/hooks.ts) for blocking tokens in your instance of the interface.

You can block an entire list of tokens by passing in a tokenlist like [here](https://github.com/Uniswap/interface/blob/main/src/constants/lists.ts) or you can block specific tokens by adding them to [unsupported.tokenlist.json](https://github.com/Uniswap/interface/blob/main/src/constants/tokenLists/unsupported.tokenlist.json).

##  

## Contributions

For steps on local deployment, development, and code contribution, please see [CONTRIBUTING](https://github.com/Uniswap/interface/blob/main/CONTRIBUTING.md).



## Accessing Uniswap V2

The Uniswap Interface supports swapping, adding liquidity, removing liquidity and migrating liquidity for Uniswap protocol V2.

- Swap on Uniswap V2: https://app.uniswap.org/#/swap?use=v2
- View V2 liquidity: https://app.uniswap.org/#/pool/v2
- Add V2 liquidity: https://app.uniswap.org/#/add/v2
- Migrate V2 liquidity to V3: https://app.uniswap.org/#/migrate/v2

##  

## Accessing Uniswap V1

The Uniswap V1 interface for mainnet and testnets is accessible via IPFS gateways linked from the [v1.0.0 release](https://github.com/Uniswap/uniswap-interface/releases/tag/v1.0.0).
