import express from "express";
import cors from "cors";
import router from "./routes/router";

const app = express();
app.use(cors());
app.use(router);

const port = 3000;
app.listen(port, () => console.log(`Server running at port ${port}`));
