const Bot = require("./Bot");

const Mirror = require("./plugins/Mirror");
const TagEveryone = require("./plugins/TagEveryone");
const Roles = require("./plugins/Roles");
const Counter = require("./plugins/counter");

const { botConfig, pluginsConfig } = require("./config");

const plugins = [
  new Mirror(pluginsConfig.mirror),
  new TagEveryone(pluginsConfig.tagEveryone),
  new Roles(pluginsConfig.roles),
  new Counter(pluginsConfig.counter),
];

const bot = new Bot(plugins, botConfig);

(async () => {
  await bot.connect();
  await bot.run();
})();
