# Token Mint But Nothing Pumps

A simple, no-nonsense TypeScript project to mint and distribute SPL tokens on Solana devnet. Perfect for launching your next “totally serious” or highly sarcastic token with all the on-chain bravado and none of the expectations.

## Features

- Initializes or finds your Associated Token Account (ATA)
- Mints tokens straight into your own wallet’s token account
- Fully written in TypeScript for type safety and clean code
- Loads wallet from `.env` for secure, flexible configuration
- Prints all important addresses and transaction IDs for your meme gallery

## Prerequisites

- Node.js (v16+)
- npm or yarn
- Solana wallet private key (Devnet ONLY—don’t blame this script for mainnet losses)

## Installation

```bash
git clone https://github.com/codingwithdhruv/token-mint-but-nothing-pumps.git
cd token-mint-but-nothing-pumps
npm install
```

## Configuration

Create a `.env` file in your project root with your wallet’s private key (as an array):

```env
WALLET=[123,45,67,89,...]
```

**Important:** never commit `.env` or use a mainnet wallet. This project is for devnet, memes, and chaos.

## Usage

Transpile TypeScript and run:

```bash
npx tsc
node init.js
```

Or run directly with ts-node:

```bash
npx ts-node init.ts
```

## What It Does

- Connects to Solana devnet
- Loads your wallet from environment variables
- Finds or creates your SPL token account (ATA)
- Mints 9,999,999 shiny new tokens right into your account
- Prints all key addresses and the mint transaction hash

## Mint Details (Demo)

- **Token Mint Address:** `4e1rEB1HqPSWXm7prkU6Ufb8dV89UEofXYKFMSutaktS`
- **Owner Solana Address:** `EwU9CG19f5nKbf5ykk9sQZs87fdaJB5T54CKQ2K67xhA`
- **Associated Token Account:** `1b4q3FN1ZH9mr7yqZKdQvf6n6y7bVRCZPLdUMky9h1d`
- **Mint Transaction Hash:**  
  `4tbJfi88eFTK4eW8nak8fRYj5zztAwyZp3LoRW5shW9n7V1tdesYc4jvwTL9rC7TRs24ENawu5wbiPC4HNss5Gaj`

## Example Output

```
Your ata is 1b4q3FN1ZH9mr7yqZKdQvf6n6y7bVRCZPLdUMky9h1d
Your mint txid: 4tbJfi88eFTK4eW8nak8fRYj5zztAwyZp3LoRW5shW9n7V1tdesYc4jvwTL9rC7TRs24ENawu5wbiPC4HNss5Gaj
```

## Screenshot

![Minting Script Output](./Screenshot%20of%20hash%20mint.png)

## Project Structure

```
token-mint-but-nothing-pumps/
├── init.ts          # Mint & token distribution script
├── init.js          # JS output (from tsc)
├── tsconfig.json    # TypeScript config
├── .env             # Your private key (git ignored)
├── README.md        # This file
└── Screenshot-2025-10-27-at-12.47.46-PM.jpg # Output screenshot
```

## Disclaimer

Only for learning, devnet fun, and pure blockchain comedy. No promises, no moon, no rug pulls—just bytes and sarcasm.

***
