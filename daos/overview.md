# ℹ️ Overview

> Peering DAOs are next-level communities that share a common goal

[DAOs](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization) in Web3 are self-sufficient groups of people managed by a smart contract. They operate on the blockchain which ensures maximum trust, transparency & verifiability.

PeerMe does all the heavy lifting of creating and running a DAO for you, so you and the DAO members can focus on what really matters to the company, project, or community.

::: tip Note
Since your Peering DAO is based on **its own smart contract**, PeerMe does not have any more access or control over voting processes than you do.
:::

## Roles

- **Leader** (optional): representative(s) of the organization/community; can add more leaders
- **Custom**: roles created by leaders or other roles
- **Member**: everyone who owns the defined vote token or has a role assigned

## Basic Functionality

DAOs are smart contracts that enable users to propose and vote on changes to the organization and community using a pre-defined token – called the governance or vote token. The weight of a member's vote is determined by the number of tokens they own.

DAO smart contracts are able to perform almost all tasks that a regular blockchain account is able to perform, just in a decentralized manner. The fundamental smart contract is designed to be as generic as possible.

Such generality is achieved with a generic concept called [Actions](./actions.md) which can be attached to a [proposal](#propose). If a proposal passes the [voting process](#vote) successfully, its actions can be executed on the blockchain. Actions can interact with the DAO smart contract itself (let's call them **internal actions**) or with external addresses which can be other smart contracts (**external actions**).

Using **external actions**, DAOs can not only transfer assets to other wallets but also unrestrictedly call other smart contracts with the desired arguments – just like a standard blockchain account can do.

**Internal actions** are used to manage the DAO itself:

- Manage [roles & permissions](./permissions.md)
- Configure [governance settings](./settings.md)
- Create [tickets](./actions.md#tickets)
- Locally mint & burn ESDT tokens

## Modes

A DAO can be run in either one of 2 modes:

- **Default**: only leaders (or configured roles) can create proposals **with actions attached**
- **Leaderless**: everyone can create proposals with actions attached

In both cases, all members can create low-risk & text-only (without [actions](./actions.md)) proposals.

By default, the creator account is assigned the **Leader** role during the creation process of the DAO and thus runs in default mode.

To set a DAO into the **Leaderless** mode, a proposal with an action to remove the leader role needs to be created & executed.

## Process

The following steps describe the general decision-making flow of a Peering.

### 1. Propose

A member creates a public proposal, given they either have [permission](./permissions.md#permission) or the [minimum token amount to propose](./settings.md#minimum-to-propose).

The voting period in the length of [(Settings) Default Voting Period](./settings.md#voting-period) starts immediately.

Our platform will then notify key members via their connected social channels automatically and post an announcement to the Fellowships [Log📝](../features/log.md) (if configured).

### 2. Vote / Sign

Members can then vote on and sign proposals to express their sentiments towards it. They can do so using the Fellowships vote token or by providing a signature if required by the [permission](./permissions.md) system.

ESDTs used for voting will be deposited in the smart contract to ensure they can only be used once per proposal; they can be withdrawn after the voting period ended. NFT votes are recorded by the smart contract and immediately returned.

A Peering operating in [Default mode](#modes) only allows leaders and configured roles to sign proposals that include [actions](./actions.md).

### 3. Execute

After the voting period ended and only if the proposal passes, [actions](./actions.md) that are part of the proposal may be triggered to execute on the blockchain by anyone and only once (successfully) per proposal.

A failed execution allowed to re-execute after adjusting e.g. the action's gas limit.

### 4. Withdraw

Voters may now withdraw ESDT tokens they deposited as part of their votes.
