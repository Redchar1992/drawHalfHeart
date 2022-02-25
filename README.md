Uniswap Interface
 
￼
An open source interface for Uniswap -- a protocol for decentralized exchange of Ethereum tokens.
* Website: uniswap.org
* Interface: app.uniswap.org
* Docs: uniswap.org/docs/
* Twitter: @Uniswap
* Reddit: /r/Uniswap
* Email: contact@uniswap.org
* Discord: Uniswap
* Whitepapers:
    * V1
    * V2
    * V3

Accessing the Uniswap Interface
To access the Uniswap Interface, use an IPFS gateway link from the latest release, or visit app.uniswap.org.

Unsupported tokens
Check out useUnsupportedTokenList() in src/state/lists/hooks.ts for blocking tokens in your instance of the interface.
You can block an entire list of tokens by passing in a tokenlist like here or you can block specific tokens by adding them to unsupported.tokenlist.json.

Contributions
For steps on local deployment, development, and code contribution, please see CONTRIBUTING.

Accessing Uniswap V2
The Uniswap Interface supports swapping, adding liquidity, removing liquidity and migrating liquidity for Uniswap protocol V2.
* Swap on Uniswap V2: https://app.uniswap.org/#/swap?use=v2
* View V2 liquidity: https://app.uniswap.org/#/pool/v2
* Add V2 liquidity: https://app.uniswap.org/#/add/v2
* Migrate V2 liquidity to V3: https://app.uniswap.org/#/migrate/v2

Accessing Uniswap V1
The Uniswap V1 interface for mainnet and testnets is accessible via IPFS gateways linked from the v1.0.0 release.
