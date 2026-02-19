import { Request, Response } from "express";
import { postService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
    try {

        console.log(req.user);

        const result = await postService.createPost(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(404).json({
            error: "Post creation failed",
            details: error
        });
    }
}

export const postController = {
    createPost
}