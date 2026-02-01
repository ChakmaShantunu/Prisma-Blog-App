import express, { Router } from "express"

const router = express.Router();

router.post("/", (req, res) => {
    res.send("Post created successfully");
});

export const postRouter: Router = router;