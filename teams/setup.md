# 🌱️ Create & Setup

No one likes to read long & non-practical documentation, so here are simple actionable steps to get your DAO set up in minutes.

## Create a DAO

Creating a Teams DAO is a matter of a few minutes. All you need is an existing MultiversX wallet and a little bit of [$SUPER](https://peerme.io/tokens).

To quickly get started:

1. Connect on [peerme.io](https://peerme.io)
2. Visit the Teams Setup page: [peerme.io/teams/new](https://peerme.io/teams/new)
3. Choose a name & a short description for your project or community
4. Submit the form and sign the prompted blockchain transaction

This process will create a new smart contract on the blockchain which serves as the foundation of your DAO.

### Voting Method

As a next step, you will be asked to select a method used for creating & voting on proposals.

The available methods are

- ESDT [new] - Use an entirely new [ESDT](https://docs.multiversx.com/developers/esdt-tokens/) for voting
- ESDT [existing] - Use an existing [ESDT](https://docs.multiversx.com/developers/esdt-tokens/) for voting
- NFT [existing] - Use an existing [NFT](https://docs.multiversx.com/developers/nft-tokens/) collection for voting
- Multisig - Continue without a token and vote based on [roles & permissions](./permissions.md)
- Custom via [🔌 Plug](./plugging.md): Use a custom smart contract to feed the DAO with vote information

To ensure your DAO operates at the [highest level of security standards](./security.md#transferring-token-management-rights), we require publicly visible DAOs to transfer token management rights to their Teams smart contracts.

## Add Social Links

Social links help users quickly find the official social platforms of your Teams. You can add & update them using a proposal [Ticket](./actions.md#tickets) of the type 'Teams Socials Update':

![set social links demo](/images/set-social-links-demo.png)

<!-- ## Register a Username (Herotag)

Reserving a username (aka. Herotag) for the Teams smart contract is fairly easy using a proposal [Contract Call](./actions.md#call-contract) action:

1. Create a new proposal and add a [Contract Call](./actions.md#call-contract) action
2. Select your Teams smart contract in the dropdown field
3. Select the 'Register Dns' function
4. Enter the Teams smart contracts address
5. Choose a username (herotag) of your choice (**important!** make sure to add the **.elrond** suffix: myusername.elrond)
6. Propose and execute the proposal -->

## Register Smart Contracts

Teamss can register their own Smart Contracts to allow users to easily interact with them. The registration can be done by creating a [Ticket](./tickets.md#contract-register) of type **Contract Register** via a Proposal:

![register contract demo](/images/register-contract-demo.png)

Once verified, users can then add the Smart Contract to their Favorites on the Settings page and find them in the selection field of the Contract Call proposal action.

## Get Verified

PeerMe verifies Teamss to further ensure safety for our users when interacting with Teams DAOs in the ecosystem. They are more likely to appear on Explore pages.

> Verified Teamss are displayed with a blue badge next to their name.

Requirements for Teams DAO verification:

- Must have a Logo or Avatar set
- Must have an official website set
- Must be public at the time of verification
- Must have an active community voting on their proposals
- Must have been active over the last 30 days
- Must have leaders with fully set up PEERIDs
- Must not have previous violations of PeerMe Rules

We reserve the right to change requirements and verification statuses any time without notice.

## Declare a Division

With Teams Divisions you can easily connect child-DAOs to your already existing Teams.

While the parent Teams will show all of its children on the Info tab, the child Teams will make it its relationship to the parent instantly visible on its page.

These are the simple steps to declare a Division:

1. Create the child Teams or use an existing one
2. Create a proposal **in the parent** Teams
3. Attach a [Ticket](./tickets.md#teams-child-associate) of Type **Teams Child Associate**
4. Find the Teams you want to add as a child
5. Propose & execute the proposal

Once you have executed the proposal, the link has been established.
