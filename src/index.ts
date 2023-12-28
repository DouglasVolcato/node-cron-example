import express from "express";
import cors from "cors";
import router from "./routes/router";
import cron from "node-cron";
import { FileWritter } from "./utils/file-writter";

const app = express();
app.use(cors());
app.use(router);

/**
 * Cron expression:
 * 1. Minute (0 - 59)
 * 2. Hour (0 - 23)
 * 3. Day of the month (1 - 31)
 * 4. Month (1 - 12)
 * 5. Day of the week (0 - 6) (Sunday to Saturday, or use names)
 * 6. Year (optional)
 */
cron.schedule("*/5 * * * * *", () => {
  const fileWrtitter = new FileWritter();
  fileWrtitter.writeInFile(
    "src/files/example.txt",
    "\n" + new Date().toString()
  );
});

const port = 3000;
app.listen(port, () => console.log(`Server running at port ${port}`));
