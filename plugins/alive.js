const os = require("os");
const fs = require("fs");
const Config = require("../config");
let {
  fancytext,
  tlang,
  tiny,
  runtime,
  formatp,
  prefix,
  smd,
  commands,
} = require("../lib");
const long = String.fromCharCode(8206);
const readmore = long.repeat(4001);
const astro_patch = require("../lib/plugins");
const { exec } = require("child_process");
const translatte = require("translatte");

commands.addCommand(
  {
    pattern: "alive", // Command trigger
    react: "👸", // Reaction to show when command is run
    desc: "Shows if the bot is alive and displays an image", // Command description
    category: "misc", // Command category
    filename: __filename, // Filename reference
  },
  async (message) => {
    const imageUrl = "https://imgur.com/a/JHoeGsG"; // Provide the image URL here

    // Start by replying to the message to indicate the bot is checking status
    const { key } = await message.reply("*Checking if Queen Nikka is alive...*");

    // Create the final message with text and image
    const finalMessage = `👸 *Queen Nikka is alive!*\n\n*LONG LIVE THE QUEEN 👸*\n![Image](${imageUrl})`;

    // Send the final message, editing the previous reply
    await message.send(finalMessage, { edit: key });
  }
);
