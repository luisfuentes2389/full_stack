import app from "./app.js";
import { PORT } from "./config.js";
import { connectDB } from "./db.js";

async function main() {
  try {
    await connectDB();
    app.listen(3000);
    console.log("http://localhost:3000");
    console.log();
  } catch (error) {
    console.error(error);
  }
}

main();
