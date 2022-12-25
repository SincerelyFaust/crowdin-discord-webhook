# crowdin-discord-webhook

Cloudflare worker for forwarding Crowdin events to Discord.

To use this project, you do not need to host it, you can simply follow the simple instructions [here](#usage).
But if you wish to run your own, I have also included the instructions for that, too, and they can be found [here](#self-hosting).

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
