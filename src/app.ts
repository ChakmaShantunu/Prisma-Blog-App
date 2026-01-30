import express, { Application } from "express";

const app: Application = express();

app.get("/", (req, res) => {
    res.send("Hello boss! welcome to the server again");
});

export default app;