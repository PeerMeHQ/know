# 💸 Team Distributions

The Team Distributions module allows users to stake tokens or virtual points in a smart contract and earn payouts from each enrolled team. This feature is designed to incentivize and reward users who contribute to the team's ecosystem by leveraging their staked assets.

Users can stake any ESDT token or virtual points in the Earn module. The staking process can be managed by the users themselves through the PeerMe platform if the team has enabled the module. Alternatively, the team can define a `manager` address (which can be another smart contract) that is authorized to allocate virtual stake for each member.

The system is compatible with our [Custom Strategies](/teams/plugging.md) feature, which allows the use of staked amounts for voting power within the cryptocompany or DAO. The stake amounts can be used alone or combined with tokens held in users' wallets.

## Enabling the Module

To enable the Team Distributions module:

1. Navigate to the Govern tab of the team.
2. Create a new proposal.
3. Select 'Payments', then head to the 'Distributions' tab.
4. Complete the registration form.
5. Execute the action immediately (if you have permission) or propose the activation of the module to your team members.

Once activated, you and your team members will find an entry for the team in the [Earn Portal](https://peerme.io/earn) where users can manage their stake and claim distributed rewards.

## Distributing Tokens

To distribute payouts proportionally to members' stakes:

1. Navigate to the proposal page.
2. Select the Payment action.
3. Head to the 'Distributions' tab.
4. Execute the payout action.

Users can then claim their proportional share from the [Earn Portal](https://peerme.io/earn).

## Automatically Assigning Virtual Stake to Members

Defining virtual stake is straightforward. It requires the defined `manager` address from the registration step to call the following endpoint of the Earn Module smart contract for each member: `renewVirtualStake@TeamAddress@UserAddress@StakeAmount`, where:

- `TeamAddress` is the smart contract address of your Team.
- `UserAddress` is the wallet address of the user.
- `StakeAmount` is the `BigUint` representation of their virtual stake amount.

Users will be able to view their virtual stake in the Earn Portal.

# Platform Fees

Understanding the fee structure is essential for participating in the Team Distributions module. Below is how fees are applied:

- **Default Platform Fee**: A fee of 1% is charged on the distributed payout amount before distribution to users.

These fee structures are put in place to maintain a robust and sustainable ecosystem that rewards contribution and participation effectively.
