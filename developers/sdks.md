# 🧰 SDKs

Utilize our SDKs to seamlessly integrate your [Team](../teams/overview.md) into your website. These tools provide a streamlined way to connect and interact with our systems effectively.

## JavaScript SDK

### Installation

To get started with the JavaScript SDK, install it via npm:

```bash
npm install @peerme/sdk
```

### Deep Links

Deep Links are links that auto-populate all proposal fields to let users instantly propose. Perfect for admin panels where users enter configuration values within your app and then use the button to propose the actions to the team.

Easily construct deep links with the ProposalDeepLinkBuilder:

```js
import { ProposalDeepLinkBuilder } from '@peerme/sdk'

const newFee = 2

const deepLinkUrl = new ProposalDeepLinkBuilder('my-team')
  .authenticate(userNativeToken) // instantly log the user into PeerMe to create this proposal
  .setTitle('Update Platform Fee')
  .setDescription(`Update the platform fee to ${newFee}%`) // (optional)
  .addAction(contractAddress, 'setPlatformFee', 0n, [newFee])
  // add more actions (optional)
  .build()
```
