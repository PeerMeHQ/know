# 📜 Contract Management

## Introduction

PeerMe revolutionizes the way DAOs manage smart contracts. Our platform facilitates every step from initial staging to final deployment, ensuring a smooth and secure process. This guide highlights the key stages of smart contract management including staging, locking, verification, and proposals.

## Smart Contract Lifecycle on PeerMe

### 1. Staging the Smart Contract

The initial step in deploying a new smart contract or upgrading an existing one via your DAO is to place code into the contract stage. A DAO can have multiple contract stages in parallel for each contract (address) it manages.

Imagine the smart contract stage of a DAO as a table containing the smart contract address and the WASM byte-code of the code to be deployed.

`Contract Address` -> `Contract WASM code`

For newly deployed smart contracts, the stage contract address refers to the `Zero` address: `erd1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq6gq4hu` (System Smart Contract for Deployments), indicating a new smart contract is about to be deployed.

### 2. Stage Locking and Security

Once the contract is staged, it must be locked to create a deployment or upgrade proposal with the contract code. This prevents any further changes to the contract during the voting period of an upcoming proposal.

### 3. Proposing a Deployment or Upgrade

Any smart contract with **locked & staged** code is ready to be proposed via an [Action](./actions.md) attached to a proposal. The conditions for the proposal to pass are defined by the [Roles & Permissions configurations](./permissions.md) of the DAO. A successful proposal allows the deployment or upgrade transaction to be executed, actualizing the code changes on the blockchain.

## Automated Workflow with [Spawnable.io](https://spawnable.io)

> Spawnable is a first-class supported product owned by PeerMe.

Spawnable elevates the smart contract management process with its automated capabilities. Integrating seamlessly with your GitHub repository, Spawnable automatically builds merged Pull Requests for smart contracts and deploys them to Devnet and Testnet without user input. These automated builds then trigger proposal creations for your DAO on PeerMe.

In order to fully leverage Spawnable's automated deployment and upgrade proposals, certain prerequisites must be met:

1. **Assigning Spawnable Bot Developer Role**: For Spawnable to initiate proposals on behalf of your DAO, the Spawnable Bot must be assigned the 'developer' role. This enables the bot to stage, lock, and propose changes to smart contracts under the governance of your DAO.

2. **Depositing EGLD for Network Fees**: Smart contract transactions on the MultiversX blockchain incur network fees. To facilitate these transactions, sufficient EGLD must be deposited in your Spawnable account. This ensures that all automated processes run smoothly without interruption due to insufficient funds.

3. **Setting Up Automation in PeerMe**: These configurations can be easily managed on the PeerMe platform. Navigate to `Govern -> Propose -> Contracts -> Automations` in the PeerMe interface. Here, you can assign roles to the Spawnable Bot and manage your EGLD deposits, streamlining the automation process.

By fulfilling these requirements, you empower your DAO to benefit from Spawnable’s robust automation capabilities, making smart contract management more efficient, secure, and less labor-intensive.

---

Remember, PeerMe and Spawnable are here to simplify and secure your smart contract management process. For any queries or detailed guidance, our support team is always available to assist you.
