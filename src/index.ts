import { Crowdin } from "../types/crowdin";
import { Embeds } from "../types/embed";

addEventListener("fetch", (event: FetchEvent) => {
  return event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request) {
  const crowdin: Crowdin = await request.json();
  const path: string = new URL(request.url).pathname;
  if ((request.method === "POST" && request.body !== undefined) || null) {
    switch (crowdin.events[0].event) {
      case "file.translated":
        await sendWebhook(path, [
          {
            title: "File fully translated",
            description: `**${crowdin.events[0].file.name}** is now fully translated to :flag_${crowdin.events[0].targetLanguage.twoLettersCode}: **${crowdin.events[0].targetLanguage.name}** (${crowdin.events[0].targetLanguage.locale}) language.`,
            url: `https://crowdin.com/translate/${crowdin.events[0].file.project.identifier}/${crowdin.events[0].file.id}/en-${crowdin.events[0].targetLanguage.id}`,
            author: {
              name: crowdin.events[0].file.project.name,
              url: crowdin.events[0].file.project.url,
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
            color: 65304,
            timestamp: new Date().toISOString(),
            footer: {
              text: "Crowdin • ⚡ marinhedes.com/cdw",
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
          },
        ]);
        break;
      case "file.approved":
        await sendWebhook(path, [
          {
            title: "File fully reviewed",
            description: `The **${crowdin.events[0].file.name}** translation for :flag_${crowdin.events[0].targetLanguage.twoLettersCode}: **${crowdin.events[0].targetLanguage.name}** (${crowdin.events[0].targetLanguage.locale}) is now fully approved.`,
            url: `https://crowdin.com/translate/${crowdin.events[0].file.project.identifier}/${crowdin.events[0].file.id}/en-${crowdin.events[0].targetLanguage.id}`,
            author: {
              name: crowdin.events[0].file.project.name,
              url: crowdin.events[0].file.project.url,
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
            color: 65304,
            timestamp: new Date().toISOString(),
            footer: {
              text: "Crowdin • ⚡ marinhedes.com/cdw",
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
          },
        ]);
        break;
      case "file.added":
        await sendWebhook(path, [
          {
            title: "File added",
            description: `The **${crowdin.events[0].file.name}** file has been added to **${crowdin.events[0].file.project.name}** project.`,
            author: {
              name: crowdin.events[0].file.project.name,
              url: crowdin.events[0].file.project.url,
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
            color: 65304,
            timestamp: new Date().toISOString(),
            footer: {
              text: "Crowdin • ⚡ marinhedes.com/cdw",
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
          },
        ]);
        break;
      case "file.updated":
        await sendWebhook(path, [
          {
            title: "File updated",
            description: `The **${crowdin.events[0].file.name}** file in **${crowdin.events[0].file.project.name}** project has been updated.`,
            author: {
              name: crowdin.events[0].file.project.name,
              url: crowdin.events[0].file.project.url,
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
            color: 16748032,
            timestamp: new Date().toISOString(),
            footer: {
              text: "Crowdin • ⚡ marinhedes.com/cdw",
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
          },
        ]);
        break;
      case "file.reverted":
        await sendWebhook(path, [
          {
            title: "File reverted",
            description: `The **${crowdin.events[0].file.name}** file in **${crowdin.events[0].file.project.name}** project has been reverted.`,
            author: {
              name: crowdin.events[0].file.project.name,
              url: crowdin.events[0].file.project.url,
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
            color: 15924992,
            timestamp: new Date().toISOString(),
            footer: {
              text: "Crowdin • ⚡ marinhedes.com/cdw",
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
          },
        ]);
        break;
      case "file.deleted":
        await sendWebhook(path, [
          {
            title: "File deleted",
            description: `The **${crowdin.events[0].file.name}** file in **${crowdin.events[0].file.project.name}** project has been deleted.`,
            author: {
              name: crowdin.events[0].file.project.name,
              url: crowdin.events[0].file.project.url,
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
            color: 16711680,
            timestamp: new Date().toISOString(),
            footer: {
              text: "Crowdin • ⚡ marinhedes.com/cdw",
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
          },
        ]);
        break;
      case "project.translated":
        await sendWebhook(path, [
          {
            title: "Project fully translated",
            description: `All strings have been translated for **${crowdin.events[0].project.name}** project.`,
            author: {
              name: crowdin.events[0].project.name,
              url: crowdin.events[0].project.url,
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
            color: 65304,
            timestamp: new Date().toISOString(),
            footer: {
              text: "Crowdin • ⚡ marinhedes.com/cdw",
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
          },
        ]);
        break;
      case "project.approved":
        await sendWebhook(path, [
          {
            title: "Project fully reviewed",
            description: `All strings have been approved for **${crowdin.events[0].project.name}** project.`,
            author: {
              name: crowdin.events[0].project.name,
              url: crowdin.events[0].project.url,
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
            color: 65304,
            timestamp: new Date().toISOString(),
            footer: {
              text: "Crowdin • ⚡ marinhedes.com/cdw",
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
          },
        ]);
        break;
      case "project.built":
        await sendWebhook(path, [
          {
            title: "Project successfully built",
            description: `The **${crowdin.events[0].build.project.name}** project has been successfully built and the output can be downloaded [here](${crowdin.events[0].build.downloadUrl}).`,
            author: {
              name: crowdin.events[0].build.project.name,
              url: crowdin.events[0].build.downloadUrl,
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
            color: 65304,
            timestamp: new Date().toISOString(),
            footer: {
              text: "Crowdin • ⚡ marinhedes.com/cdw",
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
          },
        ]);
        break;
      case "translation.updated":
        await sendWebhook(path, [
          {
            title: "Exported translation updated",
            description: `The translation string **${crowdin.events[0].newTranslation.string.identifier}** for :flag_${crowdin.events[0].newTranslation.targetLanguage.twoLettersCode}: **${crowdin.events[0].newTranslation.targetLanguage.name}** (${crowdin.events[0].newTranslation.targetLanguage.locale}) language in **${crowdin.events[0].newTranslation.string.project.name}** project has been updated by **${crowdin.events[0].newTranslation.user.username}**.`,
            author: {
              name: crowdin.events[0].newTranslation.string.project.name,
              url: crowdin.events[0].newTranslation.string.url,
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
            color: 16748032,
            timestamp: new Date().toISOString(),
            fields: [
              {
                name: "New translation",
                value: crowdin.events[0].newTranslation.string.text,
              },
            ],
            footer: {
              text: "Crowdin • ⚡ marinhedes.com/cdw",
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
          },
        ]);
        break;
      case "string.added":
        await sendWebhook(path, [
          {
            title: "Source string added",
            description: `**${crowdin.events[0].user.username}** has added a new string in the **${crowdin.events[0].string.file.name}** file to the **${crowdin.events[0].string.project.name}** project.`,
            author: {
              name: crowdin.events[0].string.project.name,
              url: crowdin.events[0].string.url,
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
            color: 65304,
            timestamp: new Date().toISOString(),
            fields: [
              {
                name: "New string",
                value: crowdin.events[0].string.text,
              },
            ],
            footer: {
              text: "Crowdin • ⚡ marinhedes.com/cdw",
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
          },
        ]);
        break;
      case "string.updated":
        await sendWebhook(path, [
          {
            title: "Source string updated",
            description: `**${crowdin.events[0].user.username}** has updated the **${crowdin.events[0].string.identifier}** string in the **${crowdin.events[0].string.file.name}** file in the **${crowdin.events[0].string.project.name}** project.`,
            author: {
              name: crowdin.events[0].string.project.name,
              url: crowdin.events[0].string.url,
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
            color: 16748032,
            timestamp: new Date().toISOString(),
            fields: [
              {
                name: "Updated string",
                value: crowdin.events[0].string.text,
              },
            ],
            footer: {
              text: "Crowdin • ⚡ marinhedes.com/cdw",
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
          },
        ]);
        break;
      case "string.deleted":
        await sendWebhook(path, [
          {
            title: "Source string deleted",
            description: `**${crowdin.events[0].user.username}** has deleted the **${crowdin.events[0].string.identifier}** string in the **${crowdin.events[0].string.file.name}** file in the **${crowdin.events[0].string.project.name}** project.`,
            author: {
              name: crowdin.events[0].string.project.name,
              url: crowdin.events[0].string.url,
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
            color: 16711680,
            timestamp: new Date().toISOString(),
            fields: [
              {
                name: "Deleted string",
                value: crowdin.events[0].string.text,
              },
            ],
            footer: {
              text: "Crowdin • ⚡ marinhedes.com/cdw",
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
          },
        ]);
        break;
      case "suggestion.added":
        await sendWebhook(path, [
          {
            title: "Suggested translation added",
            description: `**${crowdin.events[0].translation.user.username}** has added a new suggestion for the **${crowdin.events[0].translation.string.project.name}** string in the **${crowdin.events[0].translation.string.identifier}** file in the **${crowdin.events[0].translation.string.project.name}** project.`,
            author: {
              name: crowdin.events[0].translation.string.project.name,
              url: crowdin.events[0].translation.string.url,
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
            color: 65304,
            timestamp: new Date().toISOString(),
            fields: [
              {
                name: "Language",
                value: `:flag_${crowdin.events[0].translation.targetLanguage.locale
                  .substring(3)
                  .toLowerCase()}: **${
                  crowdin.events[0].translation.targetLanguage.name
                }** (${crowdin.events[0].translation.targetLanguage.locale})`,
              },
              {
                name: "Suggested translation",
                value: crowdin.events[0].translation.string.text,
              },
            ],
            footer: {
              text: "Crowdin • ⚡ marinhedes.com/cdw",
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
          },
        ]);
        break;
      case "suggestion.updated":
        await sendWebhook(path, [
          {
            title: "Suggested translation updated",
            description: `**${crowdin.events[0].translation.user.username}** has updated a suggestion for the **${crowdin.events[0].translation.string.project.name}** string in the **${crowdin.events[0].translation.string.identifier}** file in the **${crowdin.events[0].translation.string.project.name}** project.`,
            author: {
              name: crowdin.events[0].translation.string.project.name,
              url: crowdin.events[0].translation.string.url,
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
            color: 16748032,
            timestamp: new Date().toISOString(),
            fields: [
              {
                name: "Language",
                value: `:flag_${crowdin.events[0].translation.targetLanguage.locale
                  .substring(3)
                  .toLowerCase()}: **${
                  crowdin.events[0].translation.targetLanguage.name
                }** (${crowdin.events[0].translation.targetLanguage.locale})`,
              },
              {
                name: "Updated suggested translation",
                value: crowdin.events[0].translation.string.text,
              },
            ],
            footer: {
              text: "Crowdin • ⚡ marinhedes.com/cdw",
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
          },
        ]);
        break;
      case "suggestion.deleted":
        await sendWebhook(path, [
          {
            title: "Suggested translation deleted",
            description: `**${crowdin.events[0].translation.user.username}** has deleted a suggestion for the **${crowdin.events[0].translation.string.project.name}** string in the **${crowdin.events[0].translation.string.identifier}** file in the **${crowdin.events[0].translation.string.project.name}** project.`,
            author: {
              name: crowdin.events[0].translation.string.project.name,
              url: crowdin.events[0].translation.string.url,
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
            color: 16711680,
            timestamp: new Date().toISOString(),
            fields: [
              {
                name: "Language",
                value: `:flag_${crowdin.events[0].translation.targetLanguage.locale
                  .substring(3)
                  .toLowerCase()}: **${
                  crowdin.events[0].translation.targetLanguage.name
                }** (${crowdin.events[0].translation.targetLanguage.locale})`,
              },
              {
                name: "Deleted suggested translation",
                value: crowdin.events[0].translation.string.text,
              },
            ],
            footer: {
              text: "Crowdin • ⚡ marinhedes.com/cdw",
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
          },
        ]);
        break;
      case "suggestion.approved":
        await sendWebhook(path, [
          {
            title: "Suggested translation approved",
            description: `**${crowdin.events[0].translation.user.username}** has approved a suggestion for the **${crowdin.events[0].translation.string.identifier}** string in the **${crowdin.events[0].translation.string.file.name}** file in the **${crowdin.events[0].translation.string.project.name}** project.`,
            author: {
              name: crowdin.events[0].translation.string.project.name,
              url: crowdin.events[0].translation.string.url,
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
            color: 65304,
            timestamp: new Date().toISOString(),
            fields: [
              {
                name: "Language",
                value: `:flag_${crowdin.events[0].translation.targetLanguage.locale
                  .substring(3)
                  .toLowerCase()}: **${
                  crowdin.events[0].translation.targetLanguage.name
                }** (${crowdin.events[0].translation.targetLanguage.locale})`,
              },
              {
                name: "Approved suggested translation",
                value: crowdin.events[0].translation.string.text,
              },
            ],
            footer: {
              text: "Crowdin • ⚡ marinhedes.com/cdw",
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
          },
        ]);
        break;
      case "suggestion.disapproved":
        await sendWebhook(path, [
          {
            title: "Suggested translation disapproved",
            description: `**${crowdin.events[0].translation.user.username}** has disapproved a suggestion for the **${crowdin.events[0].translation.string.identifier}** string in the **${crowdin.events[0].translation.string.file.name}** file in the **${crowdin.events[0].translation.string.project.name}** project.`,
            author: {
              name: crowdin.events[0].translation.string.project.name,
              url: crowdin.events[0].translation.string.url,
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
            color: 16711680,
            timestamp: new Date().toISOString(),
            fields: [
              {
                name: "Language",
                value: `:flag_${crowdin.events[0].translation.targetLanguage.locale
                  .substring(3)
                  .toLowerCase()}: **${
                  crowdin.events[0].translation.targetLanguage.name
                }** (${crowdin.events[0].translation.targetLanguage.locale})`,
              },
              {
                name: "Disapproved suggested translation",
                value: crowdin.events[0].translation.string.text,
              },
            ],
            footer: {
              text: "Crowdin • ⚡ marinhedes.com/cdw",
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
          },
        ]);
        break;
      case "stringComment.created":
        await sendWebhook(path, [
          {
            title: "String comment/issue created",
            description: `**${crowdin.events[0].comment.user.username}** has created a comment/issue in the **${crowdin.events[0].comment.string.file.name}** file in the **${crowdin.events[0].comment.string.project.name}** project.`,
            author: {
              name: crowdin.events[0].comment.string.project.name,
              url: crowdin.events[0].comment.string.url,
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
            color: 65304,
            timestamp: new Date().toISOString(),
            fields: [
              {
                name: "Language",
                value: `:flag_${crowdin.events[0].comment.targetLanguage.twoLettersCode}: **${crowdin.events[0].comment.targetLanguage.name}** (${crowdin.events[0].comment.targetLanguage.locale})`,
              },
              {
                name: "Comment",
                value: crowdin.events[0].comment.text,
              },
            ],
            footer: {
              text: "Crowdin • ⚡ marinhedes.com/cdw",
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
          },
        ]);
        break;
      case "stringComment.updated":
        await sendWebhook(path, [
          {
            title: "String comment/issue updated",
            description: `**${crowdin.events[0].comment.user.username}** has updated a comment/issue in the **${crowdin.events[0].comment.string.file.name}** file in the **${crowdin.events[0].comment.string.project.name}** project.`,
            author: {
              name: crowdin.events[0].comment.string.project.name,
              url: crowdin.events[0].comment.string.url,
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
            color: 16748032,
            timestamp: new Date().toISOString(),
            fields: [
              {
                name: "Language",
                value: `:flag_${crowdin.events[0].comment.targetLanguage.twoLettersCode}: **${crowdin.events[0].comment.targetLanguage.name}** (${crowdin.events[0].comment.targetLanguage.locale})`,
              },
              {
                name: "Comment",
                value: crowdin.events[0].comment.text,
              },
            ],
            footer: {
              text: "Crowdin • ⚡ marinhedes.com/cdw",
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
          },
        ]);
        break;
      case "stringComment.restored":
        await sendWebhook(path, [
          {
            title: "String comment/issue restored",
            description: `**${crowdin.events[0].comment.user.username}** has restored a comment/issue in the **${crowdin.events[0].comment.string.file.name}** file in the **${crowdin.events[0].comment.string.project.name}** project.`,
            author: {
              name: crowdin.events[0].comment.string.project.name,
              url: crowdin.events[0].comment.string.url,
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
            color: 65304,
            timestamp: new Date().toISOString(),
            fields: [
              {
                name: "Language",
                value: `:flag_${crowdin.events[0].comment.targetLanguage.twoLettersCode}: **${crowdin.events[0].comment.targetLanguage.name}** (${crowdin.events[0].comment.targetLanguage.locale})`,
              },
              {
                name: "Comment",
                value: crowdin.events[0].comment.text,
              },
            ],
            footer: {
              text: "Crowdin • ⚡ marinhedes.com/cdw",
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
          },
        ]);
        break;
      case "stringComment.deleted":
        await sendWebhook(path, [
          {
            title: "String comment/issue deleted",
            description: `**${crowdin.events[0].comment.user.username}** has deleted a comment/issue in the **${crowdin.events[0].comment.string.file.name}** file in the **${crowdin.events[0].comment.string.project.name}** project.`,
            author: {
              name: crowdin.events[0].comment.string.project.name,
              url: crowdin.events[0].comment.string.url,
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
            color: 16711680,
            timestamp: new Date().toISOString(),
            fields: [
              {
                name: "Language",
                value: `:flag_${crowdin.events[0].comment.targetLanguage.twoLettersCode}: **${crowdin.events[0].comment.targetLanguage.name}** (${crowdin.events[0].comment.targetLanguage.locale})`,
              },
              {
                name: "Deleted comment/isuse",
                value: crowdin.events[0].comment.text,
              },
            ],
            footer: {
              text: "Crowdin • ⚡ marinhedes.com/cdw",
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
          },
        ]);
        break;
      case "task.added":
        await sendWebhook(path, [
          {
            title: "Task added",
            description: `**${crowdin.events[0].task.taskCreator.username}** has created a task in the **${crowdin.events[0].task.project.name}** project.`,
            author: {
              name: crowdin.events[0].task.project.name,
              url: crowdin.events[0].task.translationUrl,
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
            color: 65304,
            timestamp: new Date().toISOString(),
            fields: [
              {
                name: "Task creator",
                value: crowdin.events[0].task.taskCreator.username,
              },
              {
                name: "Assignee",
                value: crowdin.events[0].task.assignees[0].username,
              },
              {
                name: "Task title",
                value: crowdin.events[0].task.title,
                inline: true,
              },
              {
                name: "Task description",
                value: crowdin.events[0].task.description,
                inline: true,
              },
              {
                name: "Task status",
                value: crowdin.events[0].task.status,
                inline: true,
              },
            ],
            footer: {
              text: "Crowdin • ⚡ marinhedes.com/cdw",
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
          },
        ]);
        break;
      case "task.statusChanged":
        await sendWebhook(path, [
          {
            title: "Task status changed",
            description: `The status for a task in the **${crowdin.events[0].task.project.name}** project has changed.`,
            author: {
              name: crowdin.events[0].task.project.name,
              url: crowdin.events[0].task.translationUrl,
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
            color: 16748032,
            timestamp: new Date().toISOString(),
            fields: [
              {
                name: "Task creator",
                value: crowdin.events[0].task.taskCreator.username,
              },
              {
                name: "Assignee",
                value: crowdin.events[0].task.assignees[0].username,
              },
              {
                name: "Task title",
                value: crowdin.events[0].task.title,
                inline: true,
              },
              {
                name: "Task description",
                value: crowdin.events[0].task.description,
                inline: true,
              },
              {
                name: "Task old status",
                value: crowdin.events[0].task.oldStatus,
                inline: true,
              },
              {
                name: "Task new status",
                value: crowdin.events[0].task.newStatus,
                inline: true,
              },
            ],
            footer: {
              text: "Crowdin • ⚡ marinhedes.com/cdw",
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
          },
        ]);
        break;
      case "task.deleted":
        await sendWebhook(path, [
          {
            title: "Task deleted",
            description: `A task in the **${crowdin.events[0].task.project.name}** project has been deleted.`,
            author: {
              name: crowdin.events[0].task.project.name,
              url: crowdin.events[0].task.translationUrl,
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
            color: 16711680,
            timestamp: new Date().toISOString(),
            fields: [
              {
                name: "Task creator",
                value: crowdin.events[0].task.taskCreator.username,
              },
              {
                name: "Assignee",
                value: crowdin.events[0].task.assignees[0].username,
              },
              {
                name: "Task title",
                value: crowdin.events[0].task.title,
                inline: true,
              },
              {
                name: "Task description",
                value: crowdin.events[0].task.description,
                inline: true,
              },
              {
                name: "Task status",
                value: crowdin.events[0].task.status,
                inline: true,
              },
            ],
            footer: {
              text: "Crowdin • ⚡ marinhedes.com/cdw",
              icon_url:
                "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
            },
          },
        ]);
        break;
    }
    return new Response("Success", { status: 200 });
  }
  await sendWebhook(path, [
    {
      title: "There was an error sending the webhook.",
      description:
        "Unfortunately, there was an error sending the webhook, please check the [GitHub repository](https://github.com/SincerelyFaust/crowdin-discord-webhook/issues) for previously submitted issues and if one exists for your issue, please comment on it otherwise open a new issue.",
      url: "https://github.com/SincerelyFaust/crowdin-discord-webhook/issues",
      author: {
        name: "Developer",
        url: "https://github.com/sincerelyfaust",
        icon_url: "https://avatars.githubusercontent.com/u/44751736?v=4",
      },
      color: 65304,
      timestamp: new Date().toISOString(),
      footer: {
        text: "Crowdin • ⚡ marinhedes.com/cdw",
        icon_url:
          "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
      },
    },
  ]);
  return new Response("Error", { status: 500 });
}

async function sendWebhook(path: string, embeds: Embeds) {
  return fetch(`https://discordapp.com/api/webhooks${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "Crowdin",
      avatar_url:
        "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
      embeds,
    }),
  });
}
