import { Request, Response } from "express";

const createPost = async (req: Request, res: Response) => {
    console.log(req.body);
}

export const postController = {
    createPost
}