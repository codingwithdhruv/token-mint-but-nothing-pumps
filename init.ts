import {
    Connection,
    Keypair
} from "@solana/web3.js";
import {
    createMint
} from "@solana/spl-token";
import "dotenv/config";



const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const latestBlockhash = await connection.getLatestBlockhash();

if (!process.env.WALLET) {
  throw new Error("WALLET environment variable is not defined");
}
const secretKeyArray = JSON.parse(process.env.WALLET);
const secretKeyUint8Array = new Uint8Array(secretKeyArray);
const keypair = Keypair.fromSecretKey(secretKeyUint8Array);

(async () => {
    try {
        const mint = await createMint(
            connection,
            keypair,
            keypair.publicKey,
            null,
            6
        );
        console.log(`Successfully created a mint ${mint}`)
    } catch (e) {
        console.log(`Something went wrong ${e}`)
    }
}) ();