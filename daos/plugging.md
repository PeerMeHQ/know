# 🔌 Plugging

For specific use cases, even our wide set of available voting methods (ESDT, NFT/SFT, Multisig, etc.) may not be sufficient enough for projects to handle their governance processes.

> Plugging allows you to extend your DAO with a custom smart contract that feeds the DAO with users' vote information.

This feature proves extremely useful when users' vote information is not stored in tokenized form within their wallets, but rather in a separate smart contract, such as one used for staking.

::: tip Note
Custom Plug Smart Contracts are compatible with all shards, however, transactions will finalize fastest if hosted on **Shard 1**.
:::

## Integration

Plugging your custom smart contract is designed to be a fast & straightforward process. These are the steps:

### 1. Create your DAO or use an existing one

Either way, make sure to **NOT** set any vote token ("Continue without Token").

### 2. Implement standardized View Functions

Prepare your smart contract to be pluggable by implementing 2 simple View functions:

- `getDaoVoteWeight`: returning the users' vote weight as a `BigUint`
- `getDaoMembers`: returning all addresses that should be displayed as members

We have an example of this implementation available on our [GitHub](https://github.com/PeerMeHQ) page: [dao-plug-template-sc](https://github.com/PeerMeHQ/dao-plug-template-sc/blob/main/src/lib.rs).

### 3. Propose & Execute a 'setPlug' Contract Call Action

1. Start a new proposal for your DAO
2. Attach a [Contract Call](./actions.md#call-contract) Action of type: **setPlug**
3. Fill in the settings to your preference:
   - Address: The address of your custom smart contract that implements the mentioned view functions.
   - [Quorum](./settings.md#minimum-attendance): Minimum of total FOR votes a proposal requires to succeed.
   - [Min Propose Weight](./settings.md#minimum-to-propose): Minimum amount of tokens required to create a proposal.
4. Create and execute the proposal

That's it. You are all set to run your DAO with your custom implementation.
