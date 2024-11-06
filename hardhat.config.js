require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = '0dd0c7403d33916dec8604a7e00170695ee75dc107b5169f9b41fe6e9458ba9a'; 

module.exports = {
  solidity: "0.8.27",
  networks:{
    sepolia:{
      url:"https://sepolia.infura.io/v3/caa99be84e2b4bf9bd568ce7229eecac",
      accounts: ["593ef3c829d28e189908c3040caf2eaf77e4966de0c91ae06902413268c3bb45"]
    }
  },

};
//deployed address in sepolia: 0x9ef016f05bE218f8E57E42Aa3E17727651041Eb8
