# 🌱️ Create & Setup

No one likes to read long & non-practical documentation, so here are simple actionable steps to get your DAO set up in minutes.

## Create a DAO

Creating a Collectives DAO is a matter of a few minutes. All you need is an existing MultiversX wallet and a little bit of [$SUPER](https://peerme.io/tokens).

To quickly get started:

1. Connect on [peerme.io](https://peerme.io)
2. Visit the Collectives Setup page: [peerme.io/collectives/new](https://peerme.io/collectives/new)
3. Choose a name & a short description for your project or community
4. Submit the form and sign the prompted blockchain transaction

This process will create a new smart contract on the blockchain which serves as the foundation of your DAO.

### Voting Method

As a next step, you will be asked to select a method used for creating & voting on proposals.

The available methods are

- ESDT [new] - Use an entirely new [ESDT](https://docs.elrond.com/developers/esdt-tokens/) for voting
- ESDT [existing] - Use an existing [ESDT](https://docs.elrond.com/developers/esdt-tokens/) for voting
- NFT [existing] - Use an existing [NFT](https://docs.elrond.com/developers/nft-tokens/) collection for voting
- Multisig - Continue without a token and vote based on [roles & permissions](./permissions.md)
- Custom via [🔌 Plug](./plugging.md): Use a custom smart contract to feed the DAO with vote information

To ensure your DAO operates at the [highest level of security standards](./security.md#transferring-token-management-rights), we require publicly visible DAOs to transfer token management rights to their Collectives smart contracts.

## Set an Logo/Avatar

![Collectives logo avatar demo](/images/entity-logo-avatar.png)

### [Logo] Upload any Image

To upload a Logo, create a proposal with a Ticket of Type 'Collectives Logo Update' attached. After you proposed the Ticket and executed the Ticket, the Logo will be shown.

### [Avatar] Use an existing NFT

Similar to PEERIDs, Collectivess can have an NFT Avatar too. In fact, they even use the same smart contract. In order to set or update a Collectives's Avatar, create a proposal with a [Contract Call](./actions.md#call-contract) action and select the **PEERID** smart contract from the dropdown list:

![set avatar demo](/images/set-avatar-demo.png)

At the time of writing, the transaction to set an Avatar requires a payment of 50 [$SUPER](https://peerme.io/get-super). If your Collectives is not a proud owner of [$SUPER](https://peerme.io/get-super) yet, you can easily [deposit](./vault.md#deposit) some into your Collectives's [Vault](./vault.md).

## Add Social Links

Social links help users quickly find the official social platforms of your Collectives. You can add & update them using a proposal [Ticket](./actions.md#tickets) of the type 'Collectives Socials Update':

![set social links demo](/images/set-social-links-demo.png)

<!-- ## Register a Username (Herotag)

Reserving a username (aka. Herotag) for the Collectives smart contract is fairly easy using a proposal [Contract Call](./actions.md#call-contract) action:

1. Create a new proposal and add a [Contract Call](./actions.md#call-contract) action
2. Select your Collectives smart contract in the dropdown field
3. Select the 'Register Dns' function
4. Enter the Collectives smart contracts address
5. Choose a username (herotag) of your choice (**important!** make sure to add the **.elrond** suffix: myusername.elrond)
6. Propose and execute the proposal -->

## Register Smart Contracts

Collectivess can register their own Smart Contracts to allow users to easily interact with them. The registration can be done by creating a [Ticket](./tickets.md#contract-register) of type **Contract Register** via a Proposal:

![register contract demo](/images/register-contract-demo.png)

Once verified, users can then add the Smart Contract to their Favorites on the Settings page and find them in the selection field of the Contract Call proposal action.

## Get Verified

PeerMe verifies Collectivess to further ensure safety for our users when interacting with Collectives DAOs in the ecosystem. They are more likely to appear on Explore pages.

> Verified Collectivess are displayed with a blue badge next to their name.

Requirements for Collectives DAO verification:

- Must have a Logo or Avatar set
- Must have an official website set
- Must be public at the time of verification
- Must have an active community voting on their proposals
- Must have been active over the last 30 days
- Must have leaders with fully set up PEERIDs
- Must not have previous violations of PeerMe Rules

We reserve the right to change requirements and verification statuses any time without notice.

## Declare a Division

With Collectives Divisions you can easily connect child-DAOs to your already existing Collectives.

While the parent Collectives will show all of its children on the Info tab, the child Collectives will make it its relationship to the parent instantly visible on its page.

These are the simple steps to declare a Division:

1. Create the child Collectives or use an existing one
2. Create a proposal **in the parent** Collectives
3. Attach a [Ticket](./tickets.md#collective-child-associate) of Type **Collectives Child Associate**
4. Find the Collectives you want to add as a child
5. Propose & execute the proposal

Once you have executed the proposal, the link has been established.
