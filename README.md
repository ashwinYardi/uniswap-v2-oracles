# Uniswap V2 oracles contracts

This repository has the code for two types of oracles built on top ov Uniswap V2 pairs.

1. Simple fixed window oracle
2. Moving window oracle

The repository also has deployment scripts for both the oracles and an interaction script for moving window oracle.

This is the blog post which explaines the oracles conceptually.

## ENV Setup

1. Install the dependencies.

    ``` npm install```

2. Create `.env` file and copy the fields from `.env.example`. Make sure to add correct values in env.

3. To compile:

    ``` npm run compile ```

4. To deploy simple fixed window oracle: 

    ``` npm run deploy-simple-oracle ```

5. To deploy moving  window oracle: 

    ``` npm run deploy-moving-oracle ```

6. Update the observations in moving window oracle for ETH-UNI pair:

    ``` npm run update-moving-oracle ```
