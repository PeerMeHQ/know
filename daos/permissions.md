# 🔑 Roles & Permissions

Roles & permissions allow you to set up your Peering DAO how you want it to operate. They provide enough flexibility to adapt to many different kinds of real-world use cases you may need.

## Role

A role is a tag used to group users together. Role names can be freely chosen by your Peering apart from the pre-defined **leader** role which is automatically assigned to the Peering creator.

For the naming of roles, we suggest adhering to the widely used [camel case](https://en.wikipedia.org/wiki/Camel_case) convention in singular word format. Here are some examples, so you don't spend time researching it:

- **leader** (singular; all lowercase)
- beta**T**ester (two words; no space; first word lowercase, capitalize second word)
- frontend**W**eb**D**eveloper (first word lowercase; capitalize second & third word)

### Decision Making

There are two types of decisions that role members can form together: **Text-only** proposals, and proposals that have [Actions](./actions.md) attached. Since the latter can contain actions that could pose potential risks to a Peering's [Vault](./vault.md) or abuse through other special privileges the smart contract has, Actions require a **signature by the majority of role members** for proposals to pass – if not defined otherwise by a [Policy](#policy).

Text-only proposals are risk-free and therefore allow anyone owning the Peering's vote token to vote and make their voices heard.

### About the Leader Role

> Progressive Decentralization — a process in which founding teams relinquish control by degrees, over time.

By default, only Leaders are allowed to attach [Actions](./actions.md) to their proposals but they may release more and more control to other roles over time. A Peering with a single leader can add & execute Actions soley by themselves, but they may opt-in to assign further leaders to continue forming decisions together. A Peering with multiple leaders automatically enforces a Multisig-like signer quorum for proposals.

## Permission

A permission is an ability to perform a certain action on the blockchain or inside the PeerMe ecosystem using Tickets.

## Policy

A policy is the actual granting of a specific permission to a particular role. It defines a mapping between
the role and permission while also defining the parameters under which the role can invoke the
permission. The parameters include method: ‘token weight’, ‘one’, ‘all’, or ‘quorum’ and other items like
the quorum count or vote duration (for token weight).
