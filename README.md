# J.A.R.V.I.S droid

Ask J.A.R.V.I.S for information about someone on Slack

## Install with Gynoid

You will need a new Slack bot token to start your bot. Then, use [Gynoid](https://github.com/auth0/gynoid) to start the bots framework.

To install with Gynoid:

```
register concierge using {slack-token}
```

This will start your bot in Slack. Now, extend its functionality by running this command:

```
extend concierge from cabralmartin/jarvis-droid
```

Done!

## Using Concierge

Invite your Concierge bot to a channel. Then you can mention the bot to execute commands.

### Asking things

```
@jarvis who is @cabralmartin?
```
