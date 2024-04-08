module.exports = {
  apps: [
    {
      name: "crmn.to",
      port: "3000",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
