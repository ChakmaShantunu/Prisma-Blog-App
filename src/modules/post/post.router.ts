import express, { NextFunction, Request, Response, Router } from "express"
import { postController } from "./post.controller";

const router = express.Router();

const auth = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
        console.log("middlware!!!!!");
        next()
    }
}

router.post("/", auth(), postController.createPost);

export const postRouter: Router = router;