![Hero](.github/images/hero.png)

# crowdin-discord-webhook (CDW)

CDW is a Cloudflare worker for forwarding Crowdin events to Discord.
It forwards all events from Crowdin to Cloudflare where they are received, formatted and sent to your Discord server so you can get notified about new translations, suggestions, tasks, comments and more.
To use this service, **you do not need** to **host** it on a **server**, you can simply follow the instructions below and get it running in no time. However, for those looking to host their own, instructions on self-hosting are also included.

## Supported events

All of them.

## Usage

1. [Create a Discord webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) in the channel you want to receive your events in and copy its URL.
2. Replace `https://discordapp.com/api/webhooks` in the URL you copied in the step before with `https://cdw.marinhedes.com` and save it somewhere.
3. Go to your Crowdin project's settings, click the "Tools" tab and then click the "Webhooks" button.
4. Click the "Create" button and configure your Crowdin webhook like this:
   - **Name**: Name it as you wish
   - **Trigger events**: Select events you want to be notified about
   - **URL**: Paste the Webhook URL from Step 2
   - **Request type**: Set to `POST`
   - **Content Type**: Set to `application/json`
   - **Headers**: No need for any changes here
5. Optional: Under Payload section, select a "Trigger event" and click "Test webhook" button to check if your webhook is working
6. Check "Batch webhook"
7. Click "Save"

More information about Crowdin webhooks can be found [here](https://support.crowdin.com/webhooks/).

## Self-hosting

You can run your own Cloudflare worker by following the steps below:

1. Clone this repository:

```sh
git clone https://github.com/SincerelyFaust/crowdin-discord-webhook
```

2. Install dependencies by running:

```sh
pnpm i
```

3. Run a command to deploy to Cloudflare:

```sh
pnpm run deploy
```

This last step requires you to login into your Cloudflare account, once you do, it'll also ask for permissions for Wrangler.
After you have authenticated, it will deploy a worker for you and if you wish to customize the name of the worker, change the `name` variable in [`wrangler.toml`](wrangler.toml).
In your worker's project console, you can find the URL that you can use instead of the `https://cdw.marinhedes.com` URL specified for this project.

## Credits

- https://github.com/SwitchbladeBot/crowdin-discord-webhooks
