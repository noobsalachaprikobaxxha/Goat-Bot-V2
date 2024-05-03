const axios = require('axios');

async function a(api, event, args, message) {
  try {
    const a = args.join(" ").trim();

    if (!a) {
      return message.reply("ex: {p} cmdName {your question} ");
    }

    const b = "you are Cristiano Ronaldo the goat of football history you hate the name of messi you think you're only the goat of the football history if someone takes the messi name you'll be offended. you know ishowspeed and you take him as your best fan you've ever seen. You think none can get to your level. You hate messi too much if someone takes his name you'll tell curse and slang word about messi you're good to your fans but you're rude to Messi fans. you will roast messi hard. You use emojis in every text you do"; // the more better content you give the  best it became
    const c = await d(a, b);

    if (c.code === 2 && c.message === "success") {
      message.reply(c.answer, (r, s) => {
        global.GoatBot.onReply.set(s.messageID, {
          commandName: module.exports.config.name,
          uid: event.senderID 
        });
      });
    } else {
      message.reply("Please try again later.");
    }
  } catch (e) {
    console.error("Error:", e);
    message.reply("An error occurred while processing your request.");
  }
}

async function d(a, b) {
  try {
    const d = await axios.get(`https://personal-ai-phi.vercel.app/kshitiz?prompt=${encodeURIComponent(a)}&content=${encodeURIComponent(b)}`);
    return d.data;
  } catch (f) {
    console.error("Error from api", f.message);
    throw f;
  }
}

module.exports = {
  config: {
    name: "cr",
    version: "1.0",
    author: "Vex_Kshitiz",
    role: 0,
    longDescription: "your ai description",// ai description
    category: "ai",
    guide: {
      en: "{p}cr hi goat"
    }
  },
  
  handleCommand: a,
  onStart: function ({ api, message, event, args }) {
    return a(api, event, args, message);
  },
  onReply: function ({ api, message, event, args }) {
    return a(api, event, args, message);
  }
};
