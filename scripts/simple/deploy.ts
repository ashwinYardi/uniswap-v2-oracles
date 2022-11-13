import { ethers } from "hardhat";

const UNI_FACTORY_V2 = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";
const TOKEN_A = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";
const TOKEN_B = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";


async function main() {
  const Oracle = await ethers.getContractFactory("SimpleFixedWindowOracle");
  const oracle = await Oracle.deploy(UNI_FACTORY_V2, TOKEN_A, TOKEN_B);

  await oracle.deployed();

  console.log("Oracle for ETH - UNI pair is deployed to:", oracle.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
