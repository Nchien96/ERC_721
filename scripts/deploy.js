async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const NFT = await ethers.getContractFactory("Nft");
  const nft = await NFT.deploy("NFT", "nft");
  await nft.deployed();

  console.log("Token address:", nft.address);

  await nft.mint(
    "https://ipfs.io/ipfs/QmaFvg46G6YehSVEWNVJgqXeVe7PQzMMP68ytiopdoPUGN"
  );

  console.log("NFT sucessfully minted");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
