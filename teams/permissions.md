# 🔑 Roles & Permissions

Roles & permissions allow you to set up your Teams DAO how you want it to operate. They provide enough flexibility to adapt to many different kinds of real-world use cases you may need.

## Role

A role is a tag used to group users together. Role names can be freely chosen by your Teams apart from the pre-defined **leader** role which is automatically assigned to the Teams creator.

For the naming of roles, we suggest adhering to the widely used [camel case](https://en.wikipedia.org/wiki/Camel_case) convention in singular word format. Here are some examples, so you don't spend time researching it:

- **leader** (singular; all lowercase)
- beta**T**ester (two words; no space; first word lowercase, capitalize second word)
- frontend**W**eb**D**eveloper (first word lowercase; capitalize second & third word)

### Decision Making

There are two types of decisions that role members can form together: **Text-only** proposals, and proposals that have [Actions](./actions.md) attached. Since the latter can contain actions that could pose potential risks to a Teams's [Vault](./vault.md) or abuse through other special privileges the smart contract has, Actions require a **signature by the majority of role members** for proposals to pass – if not defined otherwise by a [Policy](#policy).

Text-only proposals are risk-free and therefore allow anyone owning the Teams's vote token to vote and make their voices heard.

### About the Leader Role

> Progressive Decentralization — a process in which founding teams relinquish control by degrees, over time.

By default, only Leaders are allowed to attach [Actions](./actions.md) to their proposals but they may release more and more control to other roles over time. A Teams with a single leader can add & execute Actions solely by themselves, but they may opt-in to assign further leaders to continue forming decisions together. A Teams with multiple leaders automatically enforces a Multisig-like signer quorum for proposals.

## Permission

A permission is an ability to perform a certain action on the blockchain or inside the PeerMe ecosystem using Tickets.

## Policy

A policy is the actual granting of a specific permission to a particular role. It defines a mapping between
the role and permission while also defining the parameters under which the role can invoke the
permission. The parameters include method: `token weight`, `one`, `all`, `majority` or `quorum` and other items like
the quorum count or vote duration (for token weight).

### Maintaining Governance Integrity

To ensure the integrity of the decision-making process within the DAO, strict adherence to role-specific policies is mandatory for all proposals. This compliance is critical for a proposal's acceptance and subsequent execution.

- **Proposal Validation**: Each proposal is scrutinized to verify its alignment with the policies related to the proposer's role. This validation is crucial to maintain the governance standards set by the DAO.
- **Integrity of Decisions**: Ensuring that proposals adhere to role-specific policies guarantees that decisions are made within the framework of established governance, preserving the DAO's operational integrity.
- **Rejection of Non-Compliant Proposals**: Proposals failing to meet the necessary policy criteria are rejected. This safeguard is in place to uphold the governance structure and prevent unauthorized or inappropriate actions.

This policy enforcement is a cornerstone of our governance model, ensuring that every decision reflects the collective vision and rules of the DAO.

#### Example

Imagine the DAO's developers have created a new smart contract for an online shop. They want to deploy it but need approval from the DAO. According to the DAO's policy, although developers can draft and propose smart contracts, the final approval and deployment require a consensus from the board members and leaders.

**Roles & Permission can be customly configured for your DAO based on your needs.**

![Policy UI Preview](/images/policy-ui.png)
