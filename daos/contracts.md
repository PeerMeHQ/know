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

Spawnable elevates the smart contract management process with its automated capabilities. Integrating seamlessly with your GitHub repository, Spawnable automatically builds merged Pull Requests for smart contracts and deploys them to Devnet and Testnet without user input. These automated builds then trigger proposal creations in PeerMe.

### Seamless Process

Spawnable's integration streamlines the workflow from code update to proposal creation. By automating this process, it significantly reduces manual effort and expedites the entire contract management cycle.

---

PeerMe, in conjunction with Spawnable, offers a comprehensive and efficient system for managing smart contracts in a DAO environment. From staging to deployment, each phase is designed to ensure security, transparency, and member involvement. For more details or assistance, feel free to reach out to our support team.
