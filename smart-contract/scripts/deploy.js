const { ethers } = require("hardhat");

const main = async () => {
  const tinderFactory = await ethers.getContractFactory('TinderERC721');
  const TinderContract = await tinderFactory.deploy();

  console.log("Tinder Contract Address",TinderContract.address);
}
main()
.then(() => process.exit(0))
.catch(error => {
  console.log("Error in deploying contract >>",error);
  process.exit(1);
});
//0x35CC1336299073642CCEe265930D9A02ebbDA2b5