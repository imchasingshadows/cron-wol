export default () => ({
  enabled: process.env.WOL_CRON_ENABLED === "true",
  macAddress: process.env.MAC_ADDRESS || "",
});
