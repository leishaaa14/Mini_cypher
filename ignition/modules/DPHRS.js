console.log("DPHRS.js module is being loaded");
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
module.exports = buildModule("DphrsModule", (m) => {
  // No constructor parameters for DPHRS
  console.log("building dphrsmodule");

  const dphrs = m.contract("DPHRS",[]);

  return { dphrs };
});
