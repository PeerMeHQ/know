# 🛠️ Technical

If you are also interested in the technical details of our DAOs, then this page is for you!

## Privacy

Most of the DAO implementations today store all proposal details (title, description, and even [actions](./actions.md)) directly on the blockchain. This approach does not allow for any privacy since the entire blockchain state is publicly visible to anyone.

### Why is Privacy so important?

By storing content on the blockchain you risk:

- People following your conversations/proposals EVEN IF it is marked as **private** on the front.
- **Being front-run on proposed actions**:

Imagine this, a private Peering you are a member of seeks to buy an NFT from a marketplace. You are creating a proposal and attaching an action to call the 'buy' function of the marketplace smart contract with the correct arguments. Once you submit the proposal, it enters the voting period set to 1 day. Now, this is where things become risky. Anyone can now see the intent directly on the blockchain (even if the Peering is marked as private) and front-run your intent by purchasing this exact NFT before you get to execute the proposal after the voting period ends. This is just a simple scenario but applies to a wide range of use cases.

To solve this, PeerMe only stores cryptographic proofs on the blockchain that can be used to verify the originality of proposals any time. We even provided a Verifier tool on the proposal page to help you with that.

## Trusted Host

A trusted host is a cryptographic signer that signs proposal contents to verify their validity, ensure that context has been given (title + description stored with the trusted host) and prevent spam and other malicious behavior.

By default, the PeerMe platform is configured to be the trusted host of newly created DAOs, but you may assign another by [ejecting](./eject.md) from PeerMe.
