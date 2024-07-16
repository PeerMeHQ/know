# ⚙️ Settings

## Governance

Using the governance settings, you can adapt voting processes to optimally fit your circumstances.

### Vote Token

The default token used for voting on [proposals](./overview.md#propose). It can be a MultiversX [ESDT](https://docs.multiversx.com/tokens/esdt-tokens), [NFT](https://docs.multiversx.com/tokens/nft-tokens/#nft-and-sft), or even [SFT](https://docs.multiversx.com/tokens/nft-tokens/#nft-and-sft) collection. Everyone who owns at least one of the tokens automatically becomes a member of the Teams.

### Voting Period

The default voting period (in days) for [proposals](./overview.md#propose) created within the Teams.

### Minimum to Propose

The minimum amount of tokens required to create a [proposal](./overview.md#propose).

### Minimum to Vote

The minimum amount of tokens required to vote on [proposals](./overview.md#propose).

### Minimum Attendance

The minimum of total FOR votes a [proposal](./overview.md#propose) requires to succeed. Also known as Quorum. This is a hard limit in addition to achieving >50% of votes.

## Restrict Vote Token Nonces

By default, all token nonces of a NFT, SFT, and MetaESDT collection are allowed to vote.

If you want to scope your DAO to specific vote token nonces, execute a transaction of type `setRestrictedVoteNonces` via Propose > Contract Call > (Your DAO) Smart Contract > Set Restricted Vote Nonces.

Enter each token nonce into a separate field, and leave it empty to unset the setting.

## Vote Token Lock

The Vote Token Lock determines if vote tokens are locked during the voting period. It is typically configured automatically by the platform, so users don’t need to adjust it.

This configuration ensures proper handling of tokens during voting. For Fungible or Semi-Fungible Tokens (SFTs), it should be set to true. For Non-Fungible Tokens (NFTs), it should be set to false.

**Important**: Not locking vote tokens for fungible tokens allows users to vote multiple times with the same tokens, which is detrimental to decision making.
