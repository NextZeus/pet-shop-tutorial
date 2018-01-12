module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};

// Running migration: 2_deploy_contracts.js
//   Deploying Adoption...  ... 0x8c8068c01df2e269465d0b03c38ee076902adad1d16104e1d8d895c2eda437a6
//   Adoption: 0x345ca3e014aaf5dca488057592ee47305d9b3e10Saving successful migration to network...
//   ... 0xf36163615f41ef7ed8f4a8f192149a0bf633fe1a2398ce001bf44c43dc7bdda0Saving artifacts...