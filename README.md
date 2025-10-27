***

# Token Mint But Nothing Pumps

A simple, no-nonsense TypeScript project to create SPL tokens on the Solana devnet. Perfect for launching your next "totally serious" blockchain token with zero promises and all the sarcasm.

## Features

- Creates a new SPL token mint on Solana devnet with 6 decimals
- Uses TypeScript for type safety and clarity
- Loads wallet from environment variables for security
- Logs transaction results and errors clearly

## Prerequisites

- Node.js (v16+)
- npm or yarn
- A Solana wallet private key (Devnet recommended)

## Installation

```bash
git clone https://github.com/codingwithdhruv/token-mint-but-nothing-pumps.git
cd token-mint-but-nothing-pumps
npm install
```

## Configuration

Create a `.env` file in the project root and add your wallet private key array:

```env
WALLET=[123,45,67,89,...]
```

**Never commit this file or share your key. Use test wallets only.**

## Usage

Transpile and run the mint script:

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
- Loads wallet from `.env`
- Mints a brand-new SPL token mint with 6 decimals
- Prints the mint address after success

## Project Structure

```
token-mint-but-nothing-pumps/
├── init.ts          # Main TypeScript mint script
├── init.js          # Transpiled JavaScript output
├── tsconfig.json    # TS compiler config
├── .env             # Wallet private key (ignored by git)
└── README.md        # This file
```


## Disclaimer

Only for learning and testing. This will not make your token moon. Use at your own risk.

***