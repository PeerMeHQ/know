# 📝 Log

::: tip
This feature requires [boosting](/teams/boosting.md) of the Teams.
:::

The 📝Log provides a continuous stream of relevant events for your Teams DAO directly into the favorite channels of your community.

Currently supported platforms: **Discord, Telegram**

## Setup for Discord

**Requirements:**

- Bot is set up by user with leader role in DAO
- Leader has their PeerID connected to Telegram
- [Invite](./bot.md#setup) the PeerMe [Bot🤖](./bot.md) into your Discord server

**Subscribe to a channel of any boosted Teams DAO:**

1. Go to the channel you want to subscribe to a Teams Log📝
2. Run `/subscribe-log TEAM_ID` (ID: the unique ID of the Teams or smart contract address)
3. Done 🎉 You will now receive Log📝 events in the current channel

**Unsubscribe a channel from a Teams DAO:**

1. Go to the channel you want to unsubscribe from a Teams Log📝
2. Run `/unsubscribe-log TEAM_ID` (ID: the unique ID of the Teams or smart contract address)
3. Done ✅

## Setup for Telegram

**Requirements:**

- Bot is set up by user with leader role in DAO
- Leader has their PeerID connected to Telegram
- [Invite](./bot.md#setup) the PeerMe [Bot🤖](./bot.md) into your Telegram group

**Subscribe to a channel of any boosted Teams DAO:**

1. Go to the group you want to subscribe to a Teams Log📝
2. Run `/subscribe_log TEAM_ID` (ID: the unique ID of the Teams or smart contract address)
3. Done 🎉 You will now receive Log📝 events in the current group

**Unsubscribe a channel from a Teams DAO:**

1. Go to the group you want to unsubscribe from a Teams Log📝
2. Run `/unsubscribe_log TEAM_ID` (ID: the unique ID of the Teams or smart contract address)
3. Done ✅
