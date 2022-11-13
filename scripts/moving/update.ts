import { ethers } from "hardhat";
import * as ARTIFACT from "../../artifacts/contracts/MovingWindowOracle.sol/MovingWindowOracle.json";

const TOKEN_A = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";
const TOKEN_B = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
const MOVING_WINDOW_ORACLE = "0x60134Ff441902bec629C620E3a38125309bA0BF0";
const ABI = ARTIFACT.abi;

async function main() {
  const signers = await ethers.getSigners();

  const oracle = new ethers.Contract(MOVING_WINDOW_ORACLE, ABI, signers[0]);

  // update the price for the pair TOKENA-TOKENB:
  const tx = await oracle.update(TOKEN_A, TOKEN_B);

  console.log(tx);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
