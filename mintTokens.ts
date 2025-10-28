import { ASSOCIATED_TOKEN_PROGRAM_ID, getOrCreateAssociatedTokenAccount, mintTo, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import "dotenv/config";

if (!process.env.WALLET) {
  throw new Error("WALLET environment variable is not defined");
}
const secretKeyArray = JSON.parse(process.env.WALLET);
const secretKeyUint8Array = new Uint8Array(secretKeyArray);
const keypair = Keypair.fromSecretKey(secretKeyUint8Array);

const token_decimals = 1_000_000;

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const mint = new PublicKey("4e1rEB1HqPSWXm7prkU6Ufb8dV89UEofXYKFMSutaktS");

(async () => {
    try {
        const ata = await getOrCreateAssociatedTokenAccount(
          connection,
          keypair,
          mint,
          keypair.publicKey,
          false,
          "confirmed"
        );
        console.log(`Your ata is ${ata.address}`);

        const mintTokens = await mintTo(
            connection,
            keypair,
            mint,
            ata.address,
            keypair.publicKey,
            9999999
        );
        console.log(`Your mint txid: ${mintTokens}`);
    } catch (error) {
        console.log(`Oops, something went wrong: ${error}`);
    }
})();

// token address 4e1rEB1HqPSWXm7prkU6Ufb8dV89UEofXYKFMSutaktS
// sol address EwU9CG19f5nKbf5ykk9sQZs87fdaJB5T54CKQ2K67xhA
// ata address 1b4q3FN1ZH9mr7yqZKdQvf6n6y7bVRCZPLdUMky9h1d
// mint hash 4tbJfi88eFTK4eW8nak8fRYj5zztAwyZp3LoRW5shW9n7V1tdesYc4jvwTL9rC7TRs24ENawu5wbiPC4HNss5Gaj